class Character extends MovableObject {

    IMAGES_IDL = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_IDL_LONG = [
        'img/1.Sharkie/2.Long_IDLE/1.png',
        'img/1.Sharkie/2.Long_IDLE/2.png',
        'img/1.Sharkie/2.Long_IDLE/3.png',
        'img/1.Sharkie/2.Long_IDLE/4.png',
        'img/1.Sharkie/2.Long_IDLE/5.png',
        'img/1.Sharkie/2.Long_IDLE/6.png',
        'img/1.Sharkie/2.Long_IDLE/7.png',
        'img/1.Sharkie/2.Long_IDLE/8.png',
        'img/1.Sharkie/2.Long_IDLE/9.png',
        'img/1.Sharkie/2.Long_IDLE/10.png',
        'img/1.Sharkie/2.Long_IDLE/11.png',
        'img/1.Sharkie/2.Long_IDLE/12.png',
        'img/1.Sharkie/2.Long_IDLE/13.png',
        'img/1.Sharkie/2.Long_IDLE/14.png'
    ];
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];
    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];
    IMAGES_BUBBLE_TRAP = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];
    IMAGES_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ]
    IMAGES_DEAD_NORMAL = [
        'img/1.Sharkie/6.dead/1.Standard/1.png',
        'img/1.Sharkie/6.dead/1.Standard/2.png',
        'img/1.Sharkie/6.dead/1.Standard/3.png',
        'img/1.Sharkie/6.dead/1.Standard/4.png',
        'img/1.Sharkie/6.dead/1.Standard/5.png',
        'img/1.Sharkie/6.dead/1.Standard/6.png',
        'img/1.Sharkie/6.dead/1.Standard/7.png',
        'img/1.Sharkie/6.dead/1.Standard/8.png',
        'img/1.Sharkie/6.dead/1.Standard/9.png',
        'img/1.Sharkie/6.dead/1.Standard/10.png',
        'img/1.Sharkie/6.dead/1.Standard/11.png',
        'img/1.Sharkie/6.dead/1.Standard/12.png'
    ];
    IMAGES_HURT_POISON = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ]
    width = 200;
    height = 200;
    x = 0;
    y = 100;
    offsetX = 40;
    offsetY = 95;
    offsetWidth = 80;
    offsetHeight = 140;
    speed = 0;
    maxSpeed = 5;
    acceloration = 0.1;
    coins = 0;
    poison = 0;
    world;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDL);
        this.loadImages(this.IMAGES_IDL_LONG);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_BUBBLE_TRAP);
        this.loadImages(this.IMAGES_POISON_BUBBLE);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_DEAD_NORMAL);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.animate();
    }

    animate() {
        setInterval( () => {
            if(!this.isDead()) {
                if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.world.level.backgrounds.forEach(l => {
                        // console.log('characterX', this.x); 
                        l[0].moveLeft();
                        l[0].applySwimResistance();
                        // console.log('bg1', l[0].x);
                        // l[0].update(this.Character, l[1].x);
                        l[1].moveLeft();
                        l[1].applySwimResistance();
                        // console.log('bg2', l[1].x);
                        // l[1].update(this.Character, l[0].x);
                    });
                    this.applySwimResistance();
                }
                if(this.world.keyboard.LEFT && this.x > this.world.level.level_start_x) {
                    this.moveLeft();
                    this.otherDirection = true;
                    this.world.level.backgrounds.forEach(l => {
                        l.forEach(b => { 
                            b.moveRight();
                            b.applySwimResistance();
                        }); 
                    });
                    this.applySwimResistance();
                }
                if(this.world.keyboard.UP && this.y > -60) {
                    this.moveUp()
                    this.applySwimResistance();
                }
                if(this.world.keyboard.DOWN && this.y < 300) {
                    this.moveDown();
                    this.applySwimResistance();
                }
                this.world.camera_x = -this.x + 240;
            }
        },1000 / 60);

        setInterval( () => {
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD_NORMAL);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_POISON);
            } else if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIM);
            } else if(this.world.keyboard.H) {
                this.playAnimation(this.IMAGES_BUBBLE_TRAP);
            } else if(this.world.keyboard.SPACE) {
                this.playAnimation(this.IMAGES_FIN_SLAP); 
            } else if(this.world.keyboard.J) {
                this.playAnimation(this.IMAGES_POISON_BUBBLE); 
            } else {
                this.playAnimation(this.IMAGES_IDL);
                this.speed = 0;
                this.world.level.backgrounds.forEach(l => { 
                    l.forEach(b => {
                        b.speed = 0;
                    });
                });
            }
        },250);
    }

    applySwimResistance() {
        if(this.speed < this.maxSpeed) {
            this.speed += this.acceloration;
        }
    }

    collectedCoin() {
        this.coins += 1;
        if(this.coins > 5) {
            this.coins = 5; 
        }
    }

    collectedPoison() {
        this.poison += 1;
        if(this.poison > 5) {
            this.poison = 5; 
        }
    }

    collectedHeart() {
        this.energy = 100;
    }
}
