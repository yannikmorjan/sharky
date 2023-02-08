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
    showHitboxes = true;
    bubbles = [];
    poisonedBubbles = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        //this.level.game_sound.play();
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
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects ----------
        this.addToMap(this.healthBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.coinBar);
        
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonedBubbles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
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
        if(this.showHitboxes) {
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

    checkCharacterCollisions() {
        this.level.enemies.forEach( (enemy) => {
            if(!enemy.dead && !this.character.isDead() && this.character.isColliding(enemy) && !this.character.isHurt()) {
                if(enemy instanceof PufferFish && !this.character.invincible) {
                    this.character.lastInjuryNormal = true;
                    this.character.hit(enemy.damage);
                    this.healthBar.setPercentage(this.character.energy);
                } else if(enemy instanceof JellyFish) {
                    this.character.lastInjuryNormal = false;
                    this.character.hit(enemy.damage);
                    this.healthBar.setPercentage(this.character.energy);
                } else if(enemy instanceof Endboss) {
                    this.character.lastInjuryNormal = true;
                    this.character.hit(enemy.damage);
                    this.healthBar.setPercentage(this.character.energy);
                }
            }
            if(this.character.finSlaped && enemy instanceof PufferFish && this.character.isColliding(enemy)) {
                enemy.dead = true;
            }
        });
        this.level.coins.forEach( (coin) => {
            if(this.character.isColliding(coin)){
                this.character.collectedCoin();
                this.coinBar.setPercentage(this.character.coins*20);
                this.level.coins.splice(this.level.coins.indexOf(coin),1);
            }
        });
        this.level.poisons.forEach( (poison) => {
            if(this.character.isColliding(poison) && this.poisonBar.percentage != 100){
                this.character.collectedPoison();
                this.poisonBar.setPercentage(this.character.poison*20);
                this.level.poisons.splice(this.level.poisons.indexOf(poison),1);
            }
        });
        this.level.hearts.forEach( (heart) => {
            if(this.character.isColliding(heart) && this.healthBar.percentage != 100){
                this.character.collectedHeart();
                this.healthBar.setPercentage(this.character.energy);
                this.level.hearts.splice(this.level.hearts.indexOf(heart),1);
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
                        enemy.dead = true;
                    }
                }
            })
        })
        this.poisonedBubbles.forEach( (pBubble) => {
            if(pBubble.y <= 0) {
                this.poisonedBubbles.splice(this.poisonedBubbles.indexOf(pBubble),1);
            }
            this.level.enemies.forEach( (enemy) => {
                if(pBubble.isColliding(enemy)) {
                    this.poisonedBubbles.splice(this.poisonedBubbles.indexOf(pBubble),1);
                    if(enemy instanceof Endboss) {
                        console.log('hit');
                    }
                }
            })
        })    
    }

    checkEnemyTransitions() {
        this.level.enemies.forEach( (enemy) => {
            if(enemy instanceof JellyFish) {
                if(enemy.dead && enemy.y <= -100) {
                    this.level.enemies.splice(this.level.enemies.indexOf(enemy),1);
                }
            }
            if(enemy instanceof PufferFish) {
                if(this.character.isNear(enemy) && !enemy.dead) {
                    enemy.transition = true;
                    enemy.offsetHeight = 0;   
                }
                if(enemy.dead && enemy.y >= 400) {
                    this.level.poisons.push(new Poison(enemy.x, enemy.y));
                    this.level.enemies.splice(this.level.enemies.indexOf(enemy),1);
                }
            }
        })
    }

    run() {
        setInterval(() => {
            this.checkCharacterCollisions();
            this.checkBubbleCollisions();
            this.checkEnemyTransitions();
        }, 200);
    }

}