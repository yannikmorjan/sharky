class World {
    character = new Character();
    level = initLevel('lvl1');
    canvas;
    ctx;
    keyboard;
    camera_x = 180;
    healthBar = new StatusBar('health');
    poisonBar = new StatusBar('poison');
    coinBar = new StatusBar('coin');
    hitboxes = false;
    sound = false;
    bubbles = [];
    poisonedBubbles = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        const self = this;
        setPausableInterval(() => setPausableFn(self, self.run), 100);
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        for(let i = 0; i < this.level.backgrounds.length; i++) {
            this.addObjectsToMap(this.level.backgrounds[i]);
        }
        this.addObjectsToMap(this.level.barriers);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.level.hearts);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects ----------
        this.addToMap(this.healthBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.coinBar);
        
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

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

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

    flipImageBack(mo) {
        if(mo.otherDirection) {
            mo.x = mo.x * -1;
        }
        if(mo.otherDirectionY){
            mo.y = mo.y * -1;
        }
        this.ctx.restore();
    }

    checkEnemyCollisions() {
        this.level.enemies.forEach( (enemy) => {
            if(!enemy.isDead() && !this.character.isDead() && this.character.isColliding(enemy) && !this.character.isHurt()) {
                if(enemy instanceof PufferFish && !this.character.invincible) {
                    this.character.lastInjuryNormal = true;
                    this.character.hit(enemy.damage);
                    this.healthBar.setPercentage(this.character.energy);
                } else if(enemy instanceof JellyFish) {
                    this.character.lastInjuryNormal = false;
                    this.character.hit(enemy.damage);
                    this.healthBar.setPercentage(this.character.energy);
                } else if(enemy instanceof Endboss) {
                    enemy.attacking = true;
                    this.character.lastInjuryNormal = true;
                    this.character.hit(enemy.damage);
                    this.healthBar.setPercentage(this.character.energy);
                }
            }
            if(this.character.finSlaped && enemy instanceof PufferFish && this.character.isColliding(enemy)) {
                enemy.hit(100);
            }
        });
    }

    checkCollectibleCollision() {
        this.level.coins.forEach( (coin) => {
            if(this.character.isColliding(coin)){
                this.character.collectedCoin();
                this.coinBar.setPercentage(this.character.coins*20);
                this.level.coins.splice(this.level.coins.indexOf(coin),1);
                this.playSound(coin.collect_sound);            
            }
        });
        this.level.poisons.forEach( (poison) => {
            if(this.character.isColliding(poison) && this.poisonBar.percentage != 100){
                this.character.collectedPoison();
                this.poisonBar.setPercentage(this.character.poison*20);
                this.level.poisons.splice(this.level.poisons.indexOf(poison),1);
                this.playSound(poison.collect_sound);
            }
        });
        this.level.hearts.forEach( (heart) => {
            if(this.character.isColliding(heart) && this.healthBar.percentage != 100){
                this.character.collectedHeart();
                this.healthBar.setPercentage(this.character.energy);
                this.level.hearts.splice(this.level.hearts.indexOf(heart),1);
                this.playSound(heart.collect_sound);
            }
        });
    }

    checkBubbleCollisions() {
        this.bubbles.forEach( (bubble) => {
            if(bubble.y <= 0) {
                this.bubbles.splice(this.bubbles.indexOf(bubble),1);
            }
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

    checkPoisenedBubbleCollisons() {
        this.poisonedBubbles.forEach( (pBubble) => {
            if(pBubble.y <= 0) {
                this.poisonedBubbles.splice(this.poisonedBubbles.indexOf(pBubble),1);
            }
            this.level.enemies.forEach( (enemy) => {
                if(pBubble.isColliding(enemy)) {
                    this.poisonedBubbles.splice(this.poisonedBubbles.indexOf(pBubble),1);
                    if(enemy instanceof Endboss) {
                        enemy.hit(10);
                        this.playSound(pBubble.hit_sound);
                    } else {
                        this.playSound(pBubble.pop_sound);
                    }
                }
            })
        })    
    }

    checkEnemyTransitions() {
        this.level.enemies.forEach( (enemy) => {
            if(enemy instanceof JellyFish) {
                if(enemy.isDead() && enemy.y <= -100) {
                    this.level.enemies.splice(this.level.enemies.indexOf(enemy),1);
                }
            }
            if(enemy instanceof PufferFish) {
                if(this.character.isNear(enemy) && !enemy.isDead()) {
                    enemy.transition = true;
                    enemy.offsetHeight = 0;   
                }
                if(enemy.isDead && enemy.y >= 400) {
                    this.level.poisons.push(new Poison(enemy.x, enemy.y));
                    this.level.enemies.splice(this.level.enemies.indexOf(enemy),1);
                }
            }
        })
    }

    checkBarrierCollision() {
        this.level.barriers.forEach( (barrier) => {
            for (let i = 0; i < barrier.rectColider.length; i++) {
                let result = this.character.isBlocked(barrier.rectColider[i])
                if(result == null){ 
                    continue;
                } else {
                    this.character.bottomBlocked = result.bottom;
                    this.character.rightBlocked = result.right;
                    this.character.leftBlocked = result.left;
                    this.character.topBlocked = result.top;
                }
            }
        })
    }

    triggerEndboss() {
        let id = this.level.enemies.length - 1;
        if(this.character.x >= this.level.enemies[id].triggerPoint && this.level.enemies[id].firstContact != true) {
            this.level.enemies[id].firstContact = true;
            if(this.sound) {
                this.level.game_sound.pause();
                this.level.boss_sound.play();
            }
        }
    }


    run(self) {
        self.checkEnemyCollisions();
        self.checkCollectibleCollision();
        self.checkBubbleCollisions();
        self.checkPoisenedBubbleCollisons();
        self.checkEnemyTransitions();
        self.triggerEndboss();
        // Not yet working well    
        self.checkBarrierCollision();
    }

    playSound(element) {
        if(this.sound) {
            element.play();
        }
    }

}