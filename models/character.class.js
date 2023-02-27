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
    IMAGES_FALLING_A_SLEEP = [
        'img/1.Sharkie/2.Long_IDLE/1.png',
        'img/1.Sharkie/2.Long_IDLE/2.png',
        'img/1.Sharkie/2.Long_IDLE/3.png',
        'img/1.Sharkie/2.Long_IDLE/4.png',
        'img/1.Sharkie/2.Long_IDLE/5.png',
        'img/1.Sharkie/2.Long_IDLE/6.png',
        'img/1.Sharkie/2.Long_IDLE/7.png',
        'img/1.Sharkie/2.Long_IDLE/8.png',
        'img/1.Sharkie/2.Long_IDLE/9.png',
        'img/1.Sharkie/2.Long_IDLE/10.png'
    ];
    IMAGES_SLEEPING = [
        'img/1.Sharkie/2.Long_IDLE/11.png',
        'img/1.Sharkie/2.Long_IDLE/12.png',
        'img/1.Sharkie/2.Long_IDLE/13.png',
        'img/1.Sharkie/2.Long_IDLE/14.png'
    ]
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
    IMAGES_NORMAL_BUBBLE = [
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
    IMAGES_DEAD_ELECTRO = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];
    IMAGES_HURT_POISON = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];
    IMAGES_HURT_ELECTRO = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    poisoned_sound = new Audio('audio/poisoned.mp3');
    electroshock_sound = new Audio('audio/electricity.mp3');
    punsh_sound = new Audio('audio/punsh.mp3');
    bubble_sound = new Audio('audio/bubble_creat.mp3');

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
    world;

    coins = 0;
    poison = 0;
    isBubbleAttacking = false;
    isFinSlaping = false;
    finSlaped = false;
    invincible = false;
    lastInjuryNormal = true;
    sleepCountdown = 0;
    fallingASleep = false;
    sleeping = false;

    rightBlocked = false;
    leftBlocked = false;
    topBlocked = false;
    bottomBlocked = false;
    

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadAllImages();
        this.movement();
        this.animate();
    }

    loadAllImages() {
        this.loadImages(this.IMAGES_IDL);
        this.loadImages(this.IMAGES_FALLING_A_SLEEP);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_NORMAL_BUBBLE);
        this.loadImages(this.IMAGES_POISON_BUBBLE);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_DEAD_NORMAL);
        this.loadImages(this.IMAGES_DEAD_ELECTRO);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.loadImages(this.IMAGES_HURT_ELECTRO);
    }

    movement() {
        setInterval( () => {
            if(!this.isDead()) {
                if(!this.rightBlocked && this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.world.level.backgrounds.forEach(l => { 
                        l.forEach(b => {
                            b.moveLeft();
                            b.applySwimResistance();
                        })
                    });
                    this.applySwimResistance();
                }
                if(!this.leftBlocked && this.world.keyboard.LEFT && this.x > this.world.level.level_start_x) {
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
                if(!this.topBlocked && this.world.keyboard.UP && this.y > -60) {
                    this.moveUp()
                    this.applySwimResistance();
                }
                if(!this.bottomBlocked && this.world.keyboard.DOWN && this.y < 300) {
                    this.moveDown();
                    this.applySwimResistance();
                }
                if(!this.bottomBlocked && this.fallingASleep && this.y < 300) {
                    this.speed = 1;
                    this.moveDown();
                }
                this.world.camera_x = -this.x + 240;
            }
        },1000 / 60);
    }

    animate() {
        setInterval( () => {
            if(this.isDead()) {
                this.deathAnimation();
            } else if(this.isHurt()) {
                this.hurtAnimation();
            } else if(this.world.keyboard.H) {
                this.bubbleAttack(this.IMAGES_NORMAL_BUBBLE, false);
            } else if(this.world.keyboard.SPACE) {
                this.finAttack(this.IMAGES_FIN_SLAP); 
            } else if(this.world.keyboard.J && this.world.poisonBar.percentage >= 10) {
                this.bubbleAttack(this.IMAGES_POISON_BUBBLE, true);
            } else if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIM);
                this.resetSleepCountdown();
            } else if(this.fallingASleep) {
                this.sleepAnimation();
            } else {
                this.playAnimation(this.IMAGES_IDL);
                this.runSleepCountdown();
                this.speed = 0;
                this.world.level.backgrounds.forEach(l => { 
                    l.forEach(b => {
                        b.speed = 0;
                    });
                });
            }
        },200);
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

    usePoison() {
        this.poison -= 0.5;
        if(this.poison < 0) {
            this.poison = 0; 
        }
    }

    collectedHeart() {
        this.energy = 100;
    }

    bubbleAttack(IMAGE, poisoned) {
        if(!this.isBubbleAttacking) {
            this.currentImage = 0;
            this.isBubbleAttacking = true;
        }
        this.playAnimation(IMAGE);
        if(this.isBubbleAttacking && this.currentImage == 8) {
            if(!poisoned) {
                this.createBubble();
            }
            if(poisoned) {
                this.createPoisonBubble()
            }
            this.isBubbleAttacking = false;
        }
    }

    finAttack(IMAGE) {
        if(!this.isFinSlaping) {
            this.currentImage = 0;
            this.invincible = false;
            this.finSlaped = false;
            this.isFinSlaping = true;
        }
        this.playAnimation(IMAGE);
        if(this.isFinSlaping && this.currentImage >= 1) {
            this.invincible = true
            if(this.currentImage >= 5 && this.currentImage <= 7) {
                this.finSlaped = true;
                this.world.playSound(this.punsh_sound);
            }
            if(this.currentImage == 8) {
                this.isFinSlaping = false;
            } 
        }
    }

    createBubble() {
        let bubble = new ThrowableObject((this.x + this.offsetX + this.width - this.offsetWidth), (this.y + this.height / 2), false);
        bubble.checkOtherDirection(this.otherDirection, (this.width - this.offsetWidth));
        this.world.bubbles.push(bubble);
        this.world.playSound(this.bubble_sound);
    }

    createPoisonBubble() {
        let bubble = new ThrowableObject((this.x + this.offsetX + this.width - this.offsetWidth), (this.y + this.height / 2), true);
        bubble.checkOtherDirection(this.otherDirection, (this.width - this.offsetWidth));
        this.world.poisonedBubbles.push(bubble);
        this.world.playSound(this.bubble_sound);
        this.usePoison();
        this.world.poisonBar.setercentage(this.poison*20);
    }

    deathAnimation() {
            if(!this.lastInjuryNormal) {
                this.playAnimationOnce(this.IMAGES_DEAD_ELECTRO);
            } else {
                this.playAnimationOnce(this.IMAGES_DEAD_NORMAL);
            }
    }

    hurtAnimation() {
        if(!this.lastInjuryNormal) {
            this.playAnimation(this.IMAGES_HURT_ELECTRO);
            this.world.playSound(this.electroshock_sound);
        } else {
            this.playAnimation(this.IMAGES_HURT_POISON);
            this.world.playSound(this.poisoned_sound);
        }
    }

    runSleepCountdown() {
        this.sleepCountdown++;
        if(this.sleepCountdown >= 20) {
            this.fallingASleep = true;
        }
    }

    resetSleepCountdown() {
        if(this.sleepCountdown != 0) {
            this.sleepCountdown = 0;
            this.fallingASleep = false;
            this.sleeping = false;
        } 
    }

    sleepAnimation() {
        if(!this.sleeping) {
            this.playAnimationOnce(this.IMAGES_FALLING_A_SLEEP)
            if(this.bottomBlocked || this.y >= 300) {
                this.sleeping = true;
            }
        } else {
            this.playAnimation(this.IMAGES_SLEEPING)
        }
    }
}
