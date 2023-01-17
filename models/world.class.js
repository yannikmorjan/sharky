class World {
    character = new Character();
    level = initLevel('lvl1');
    canvas;
    ctx;
    keyboard;
    camera_x = 180;
    coin = new Coin(100,100);
    poison = new Poison(500,400);
    health = new Health(0,100);
    healthBar = new StatusBar('health');
    poisonBar = new StatusBar('poison');
    coinBar = new StatusBar('coin');
    throwableObjects = [];

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
        this.addObjectsToMap(this.level.backgrounds);
        this.addToMap(this.coin);
        this.addToMap(this.poison);
        this.addToMap(this.health);
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects ----------
        this.addToMap(this.healthBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.throwableObjects);
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
        if(mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo instanceof Character || mo instanceof ThrowableObject) {
            mo.drawFrame(this.ctx, 'green');
        }
        if(mo instanceof PufferFish || mo instanceof JellyFish || mo instanceof Endboss) {
            mo.drawFrame(this.ctx, 'red');
        }
        if(mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    checkCollisions() {
        this.level.enemies.forEach( (enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.healthBar.setPercentage(this.character.energy);
            }
        });
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkTrowObjects();

        }, 200);
    }

    checkTrowObjects() {
        if(this.keyboard.SPACE) {
            let bubble = new ThrowableObject((this.character.x + this.character.offsetX + this.character.width - this.character.offsetWidth), (this.character.y + this.character.height / 2));
            bubble.checkOtherDirection(this.character.otherDirection, (this.character.width - this.character.offsetWidth));
            this.throwableObjects.push(bubble);
        }
    }

}   