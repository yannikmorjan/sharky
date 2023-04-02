class World {
    character = new Character();
    level;
    canvas;
    ctx;
    keyboard;
    camera_x = 180;
    statusBars = [
        new StatusBar('health'),
        new StatusBar('poison'),
        new StatusBar('coin')
    ];
    hitboxes = false;
    sound = false;
    bubbles = [];
    poisonedBubbles = [];

    /**
     * Creates a new world object.
     * @param {html} canvas 
     * @param {object} keyboard 
     * @param {string} lvl 
     */
    constructor(canvas, keyboard, lvl) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = initLevel(lvl);
        this.draw();
        this.setWorld();
    }

    /**
     * Set the world and run the game with a pausable function.
     */
    setWorld() {
        const self = this;
        this.character.world = self;
        setPausableInterval(() => setPausableFn(self, self.run), 100);
    }

    /**
     * Draw all Objects to the Canvas and requestAnimationFrames.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addAllLevelObjectsToMap();
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects ----------
        this.addObjectsToMap(this.statusBars);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonedBubbles);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        // draw() wird immer wieder aufgerufen
        self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * Collect all Level Objects to add them to the map.
     */
    addAllLevelObjectsToMap() {
        this.level.backgrounds.forEach( bg => this.addObjectsToMap(bg));
        this.addObjectsToMap(this.level.barriers);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.level.hearts);
        this.addObjectsToMap(this.level.enemies);
    }

    /**
     * For each object call addToMap().
     * @param {object} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    /**
     * If otherDirection is true Flip the image, draw object to map and add a hitbox if hitboxes is true.
     * @param {object} mo 
     */
    addToMap(mo) {
        if(mo.otherDirection || mo.otherDirectionY) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if(this.hitboxes) {
            if (mo instanceof Character || mo instanceof ThrowableObject || mo instanceof CollectibleObject || mo instanceof BarrierObject) {
                mo.drawFrame(this.ctx, 'green');
            }
            if(mo instanceof PufferFish || mo instanceof JellyFish || mo instanceof Endboss) {
                mo.drawFrame(this.ctx, 'red');
            }
        }
        if(mo.otherDirection || mo.otherDirectionY) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flip the image and readjust the position.
     * @param {object} mo 
     */
    flipImage(mo) {
        this.ctx.save();
        if(mo.otherDirection) {
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        if(mo.otherDirectionY) {
            this.ctx.translate(0, mo.height);
            this.ctx.scale(1, -1);
            mo.y = mo.y * -1;
        }
    }

    /**
     * Flip the image back and readjust the position.
     * @param {object} mo 
     */
    flipImageBack(mo) {
        if(mo.otherDirection) {
            mo.x = mo.x * -1;
        }
        if(mo.otherDirectionY){
            mo.y = mo.y * -1;
        }
        this.ctx.restore();
    }

    /**
     * Checks if the character is colliding with an enemy.
     */
    checkEnemyCollisions() {
        this.level.enemies.forEach( (enemy) => {
            if(!enemy.isDead() && !this.character.isDead() && this.character.isColliding(enemy) && !this.character.isHurt()) {
                if(enemy instanceof PufferFish && !this.character.invincible) {
                    this.enemyCollision(enemy, true);
                } else if(enemy instanceof JellyFish) {
                    this.enemyCollision(enemy, false);
                } else if(enemy instanceof Endboss) {
                    enemy.attacking = true;
                    this.enemyCollision(enemy, true);
                }
            }
            if(this.character.finSlaped && enemy instanceof PufferFish && this.character.isColliding(enemy)) {
                enemy.hit(100);
            }
        });
    }

    /**
     * Set the character injury depending on the enemy, call hit() depending on the enemy damage and reset the percentage 
     * of the healthBar.
     * @param {object} enemy 
     */
    enemyCollision(enemy, normalInjury) {
        this.character.lastInjuryNormal = normalInjury;
        this.character.hit(enemy.damage);
        this.statusBars[0].setPercentage(this.character.energy);
    }

    /**
     * Checks if a collectible object like coin, poison or health is colliding with the character, then calls the
     * specific function.
     */
    checkCollectibleCollision() {
        this.level.coins.forEach( (coin) => {
            if(this.character.isColliding(coin))
                this.coinCollision(coin);          
        });
        this.level.poisons.forEach( (poison) => {
            if(this.character.isColliding(poison) && this.statusBars[1].percentage != 100)
                this.poisonCollision(poison);
        });
        this.level.hearts.forEach( (heart) => {
            if(this.character.isColliding(heart) && this.statusBars[0].percentage != 100){
               this.healthCollision(heart);
            }
        });
    }

    /**
     * Calls a specific coin function, recalculate the coin statusbar,
     * delete the coin from map and plays a collection sound.
     * @param {object} coin 
     */
    coinCollision(coin) {
        this.character.collectedCoin();
        this.statusBars[2].setPercentage(this.character.coins*(100/this.level.collectibleCoins));
        this.level.coins.splice(this.level.coins.indexOf(coin),1);
        this.playSound(coin.collect_sound);  
    }

    /**
     * Calls a specific poison function, recalculate the poison statusbar,
     * delete the poison from map and plays a collecting sound.
     * @param {object} poison 
     */
    poisonCollision(poison) {
        this.character.collectedPoison();
        this.statusBars[1].setPercentage(this.character.poison*20);
        this.level.poisons.splice(this.level.poisons.indexOf(poison),1);
        this.playSound(poison.collect_sound);
    }

    /**
     * Calls a specific health function, recalculate the health statusbar,
     * delete the heart from map and plays a collection sound.
     * @param {object} heart 
     */
    healthCollision(heart) {
        this.character.collectedHeart();
        this.statusBars[0].setPercentage(this.character.energy);
        this.level.hearts.splice(this.level.hearts.indexOf(heart),1);
        this.playSound(heart.collect_sound);
    }

    /**
     * If bubble rises out of display or collidets with an enemy it gets deleted.
     * If the enemy is a jellyfish the enemy loose all energy an a specific sound is playing.
     */
    checkBubbleCollisions() {
        this.bubbles.forEach( (bubble) => {
            if(bubble.y <= 0)
                this.bubbles.splice(this.bubbles.indexOf(bubble),1);
            this.level.enemies.forEach( (enemy) => {
                if(bubble.isColliding(enemy)) {
                    this.bubbles.splice(this.bubbles.indexOf(bubble),1);
                    if(enemy instanceof JellyFish) {
                        enemy.hit(100);
                        this.playSound(bubble.catch_sound);
                    } else {
                        this.playSound(bubble.pop_sound);
                    }
                }
            })
        })
    }

    /**
     * If poisoned bubble rises out of display or collidets with an enemy it gets deleted.
     * If the enemy is the endboss the enemy loose 20 energy points an a specific sound is playing.
     */
    checkPoisenedBubbleCollisons() {
        this.poisonedBubbles.forEach( (pBubble) => {
            if(pBubble.y <= 0)
                this.poisonedBubbles.splice(this.poisonedBubbles.indexOf(pBubble),1);
            this.level.enemies.forEach( (enemy) => {
                if(pBubble.isColliding(enemy)) {
                    this.poisonedBubbles.splice(this.poisonedBubbles.indexOf(pBubble),1);
                    if(enemy instanceof Endboss) {
                        enemy.hit(20);
                        this.statusBars[3].setPercentage(enemy.energy);
                        this.playSound(pBubble.hit_sound);
                    } else {
                        this.playSound(pBubble.pop_sound);
                    }
                }
            })
        })    
    }

    /**
     * Checks on all enemys if there is a transition needed.
     */
    checkEnemyTransitions() {
        this.level.enemies.forEach( (enemy) => {
            if(enemy instanceof JellyFish) {
                this.jellyfishTransition(enemy);
            }
            if(enemy instanceof PufferFish) {
                this.pufferfishTransition(enemy);
            }
        })
    }

    /**
     * Deletes the jellyfish if he is dead and out of display.
     * @param {object} enemy 
     */
    jellyfishTransition(enemy) {
        if(enemy.isDead() && enemy.y <= -100) {
            this.level.enemies.splice(this.level.enemies.indexOf(enemy),1);
        }
    }

    /**
     * If the character is near the pufferfish, it changes animation and hitbox to an blownup pufferfish.
     * If the the pufferfish is dead and sunken on the ground or to an blocking object, it gets deletet and
     * replaced by an poison object.
     * @param {object} enemy 
     */
    pufferfishTransition(enemy) {
        if(this.character.isNear(enemy) && !enemy.isDead()) {
            enemy.transition = true;
            enemy.offsetHeight = 0;   
        }
        if(enemy.isDead){
            for(let i = 0; i < this.level.barrierColider.length; i++) {
                if(enemy.isBlocked(this.level.barrierColider[i]))
                    enemy.blocked = true;
            };
            if(enemy.blocked || enemy.y >= 400) {
                this.level.poisons.push(new Poison(enemy.x, enemy.y));
                this.level.enemies.splice(this.level.enemies.indexOf(enemy),1);
            } 
        }
    }

    /**
     * Checks if the barriercolider are collidoing with the character, if so calls a calculation function to get
     * the right side to block the character swim direction.
     */
    checkBarrierCollision() {
        for(let i = 0; i < this.level.barrierColider.length; i++) {
            this.resetBlockingCycle(i);
            if(this.character.isBlocked(this.level.barrierColider[i])){
                let result = this.character.calcBlocking(this.level.barrierColider[i])
                this.blockingSideSwitch(result);
            } else {
                continue;
            } 
        }
    }

    /**
     * Blocks a swiming direction of the character depending on the string result.
     * @param {string} result 
     */
    blockingSideSwitch(result) {
        switch(result) {
            case 'bottom':
                this.character.bottomBlocked = true;
                break;
            case 'right':
                this.character.rightBlocked = true;
                break;
            case 'left':
                this.character.leftBlocked = true;
                break;
            case 'top':
                this.character.topBlocked = true;
                break;
        }
    }

    /**
     * If the index number is back to zero it unset all character direction blockings.
     * @param {number} i 
     */
    resetBlockingCycle(i) {
        if(i == 0) {
            this.character.bottomBlocked = false;
            this.character.rightBlocked = false;
            this.character.leftBlocked = false;
            this.character.topBlocked = false;
        }
    }

    /**
     * If the character reach the triggerpoint of the endboss, the endboss animation and movement gets unlocked,
     * a specific statusbar gets created and the game sound is switching to the endboss sound.
     */
    triggerEndboss() {
        let id = this.level.enemies.length - 1;
        if(this.character.x >= this.level.enemies[id].triggerPoint && this.level.enemies[id].firstContact != true) {
            this.statusBars.push(new StatusBar('endboss'));
            this.level.enemies[id].firstContact = true;
            if(this.sound) {
                this.level.game_sound.pause();
                this.level.boss_sound.play();
            }
        }
    }

    /**
     * runs through various functions that must be queried again and again in the game.
     * @param {object} self 
     */
    run(self) {
        self.checkEnemyCollisions();
        self.checkCollectibleCollision();
        self.checkBubbleCollisions();
        self.checkPoisenedBubbleCollisons();
        self.checkEnemyTransitions();
        self.triggerEndboss();
        self.getMobileControler();  
        self.checkBarrierCollision();
    }

    /**
     * Plays a specific sound object.
     * @param {object} element 
     */
    playSound(element) {
        if(this.sound) {
            element.play();
        }
    }

    /**
     * Unlocks the Touchcontroller, if the game runs in mobile mode.
     */
    getMobileControler() {
        let mobileController = document.getElementById('mobile-controller');
        if(mobileMode && mobileController && mobileController.className.includes('d-none')) {
            document.getElementById('mobile-controller').classList.remove('d-none');
        }
    }
}