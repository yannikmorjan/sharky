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
    offsetX = 50;
    offsetY = 100;
    offsetWidth = 100;
    offsetHeight = 150;
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
    
    /**
     * Creats a new character object and sets pausable animation and movement function.
     */
    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadAllImages();
        const self = this;
        setPausableInterval(() => setPausableFn(self, self.movement), 1000/60);
        setPausableInterval(() => setPausableFn(self, self.animate), 200);
    }

    /**
     * Collects and loads all image arrays that are needed for the character animation.
     */
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

    /**
     * Managed the character and camera movement.
     * @param {object} self 
     */
    movement(self) {
        if(!self.isDead()) {
            if(!self.rightBlocked && self.world.keyboard.RIGHT && self.x < (self.world.level.level_end_x + 240))
                self.rightMovementHandler(self);
            if(!self.leftBlocked && self.world.keyboard.LEFT && self.x > (self.world.level.level_start_x - 240))
                self.leftMovementHandler(self);
            if(!self.topBlocked && self.world.keyboard.UP && self.y > -60)
                self.upMovementHandler(self);
            if(!self.bottomBlocked && self.world.keyboard.DOWN && self.y < 300)
                self.downMovementHandler(self);
            if(!self.bottomBlocked && self.fallingASleep && self.y < 300)
                self.sleepMovementHandler(self);
            if(self.x > self.world.level.level_start_x && self.x < self.world.level.level_end_x)
                self.world.camera_x = -self.x + 240;
        }
    }

    /**
     * Calls a function that moves the character and all backgrounds to the right, applys the swiming speed.
     * @param {object} self 
     */
    rightMovementHandler(self) {
        self.moveRight();
        self.otherDirection = false;
        if(self.x < self.world.level.level_end_x && self.x > self.world.level.level_start_x) {
            self.world.level.backgrounds.forEach(l => { 
                l.forEach(b => {
                    b.moveLeft();
                    b.applySwimResistance();
                })
            });
        };
        self.applySwimResistance();
    }

    /**
     * Calls a function that moves the character and all backgrounds to the left, applys the swiming speed.
     * @param {object} self 
     */
    leftMovementHandler(self) {
        self.moveLeft();
        self.otherDirection = true;
        if(self.x > self.world.level.level_start_x && self.x < self.world.level.level_end_x) {
            self.world.level.backgrounds.forEach(l => {
                l.forEach(b => { 
                    b.moveRight();
                    b.applySwimResistance();
                }); 
            });
        };
        self.applySwimResistance();
    }

    /**
     * Calls a function that moves the character up, applys the swiming speed.
     * @param {object} self 
     */
    upMovementHandler(self) {
        self.moveUp()
        self.applySwimResistance();
    }

    /**
     * Calls a function that moves the character down, applys the swiming speed.
     * @param {object} self 
     */
    downMovementHandler(self) {
        self.moveDown();
        self.applySwimResistance();
    }

    /**
     * Calls a function that moves the character down with a speed of 1.
     * @param {object} self 
     */
    sleepMovementHandler(self) {
        self.speed = 1;
        self.moveDown();
    }

    /**
     * Managed all character animations.
     * @param {object} self 
     */
    animate(self) {
        if(self.isDead()) {
            self.deathAnimation();
            self.resetAttackAnimation();
        } else if(self.isHurt()) {
            self.hurtAnimation();
            self.resetAttackAnimation()
        } else if(self.world.keyboard.H) {
            self.bubbleAttack(self.IMAGES_NORMAL_BUBBLE, false);
        } else if(self.world.keyboard.SPACE) {
            self.finAttack(self.IMAGES_FIN_SLAP); 
        } else if(self.world.keyboard.J) {
            self.bubbleAttack(self.IMAGES_POISON_BUBBLE, true);
        } else if(self.world.keyboard.RIGHT || self.world.keyboard.LEFT || self.world.keyboard.UP || self.world.keyboard.DOWN) {
            self.sleepAnimationHandler(self);
        } else if(self.fallingASleep) {
            self.sleepAnimation();
        } else {
            self.idlAnimationHandler(self);
        }
    }

    /**
     * calls the character swim animation function and resets the sleep countdown
     * @param {object} self 
     */
    sleepAnimationHandler(self) {
        self.playAnimation(self.IMAGES_SWIM);
        self.resetSleepCountdown();
    }

    /**
     * calls the character idl animation function and starts the sleep countdown. Resets character and cackground speed.
     * @param {object} self 
     */
    idlAnimationHandler(self) {
        self.playAnimation(self.IMAGES_IDL);
        self.runSleepCountdown();
        self.speed = 0;
        self.world.level.backgrounds.forEach(l => { 
            l.forEach(b => {
                b.speed = 0;
            });
        });
    }

    /**
     * Sets the character speed up till the max speed is reached, depending on how often the function is called.
     */
    applySwimResistance() {
        if(this.speed < this.maxSpeed) {
            this.speed += this.acceloration;
        }
    }

    /**
     * Add one coin if max number of coins isnt reached.
     */
    collectedCoin() {
        this.coins += 1;
        if(this.coins > this.world.level.coins.lenght) {
            this.coins = this.world.level.coins.lenght; 
        }
    }

    /**
     * Add one poison if max number of poisons isnt reached.
     */
    collectedPoison() {
        this.poison += 1;
        if(this.poison > this.world.level.poisons.lenght) {
            this.poison = this.world.level.poisons.lenght; 
        }
    }

    /**
     * Reduse poison by 0.5 if poison isnt 0.
     */
    usePoison() {
        this.poison -= 0.5;
        if(this.poison < 0) {
            this.poison = 0; 
        }
    }

    /**
     * Fills up all the character energy.
     */
    collectedHeart() {
        this.energy = 100;
    }

    /**
     * Plays the bubble spiting aninmation of normal or poisond bubble and if the boolean is true,
     * it calls the function to create a poisoned bubble else it calls the function to create a
     * normal bubble.
     * @param {Array} IMAGE 
     * @param {boolean} poisoned 
     */
    bubbleAttack(IMAGE, poisoned) {
        if(!this.isBubbleAttacking) {
            this.currentImage = 0;
            this.isBubbleAttacking = true;
        }
        this.playAnimation(IMAGE);
        if(this.isBubbleAttacking && this.currentImage == 8) {
            if(!poisoned)
                this.createBubble();
            if(poisoned)
                this.createPoisonBubble()
            this.resetAttackAnimation();
        }
    }

    /**
     * Starts the finslaping animation, if a specific image is reacht it plays a sound. During this time 
     * the character is invincible against puffefish. This get reset at the end of the animation cycle.
     * @param {Array} IMAGE 
     */
    finAttack(IMAGE) {
        if(!this.isFinSlaping) {
            this.currentImage = 0;
            this.isFinSlaping = true;
        }
        this.playAnimation(IMAGE);
        if(this.isFinSlaping && this.currentImage >= 1) {
            this.invincible = true
            if(this.currentImage >= 5 && this.currentImage <= 7) {
                this.finSlaped = true;
                this.world.playSound(this.punsh_sound);
            } else if(this.currentImage == 8) {
                this.resetAttackAnimation();
            } 
        }
    }

    /**
     * Resets all values for an attack animation
     */
    resetAttackAnimation() {
        this.isBubbleAttacking = this.isFinSlaping = this.invincible = this.finSlaped = false;
        this.world.keyboard.H = this.world.keyboard.J = this.world.keyboard.SPACE = false;
    }

    /**
     * Creats a new bubble object, positions and collect it and plays a specific sound
     */
    createBubble() {
        let bubble = new ThrowableObject((this.x + this.offsetX + this.width - this.offsetWidth), (this.y + this.height / 2), false);
        bubble.checkOtherDirection(this.otherDirection, (this.width - this.offsetWidth));
        this.world.bubbles.push(bubble);
        this.world.playSound(this.bubble_sound);
    }

    /**
     * Creats a new poisoned bubble object, positions and collect it, plays a specific sound and calls a function, that reduce
     * the charachters poison storage.
     */
    createPoisonBubble() {
        let bubble = new ThrowableObject((this.x + this.offsetX + this.width - this.offsetWidth), (this.y + this.height / 2), true);
        bubble.checkOtherDirection(this.otherDirection, (this.width - this.offsetWidth));
        this.world.poisonedBubbles.push(bubble);
        this.world.playSound(this.bubble_sound);
        this.usePoison();
        this.world.statusBars[1].setPercentage(this.poison*20);
    }

    /**
     * Plays the death animation depending on what the last injury was.
     */
    deathAnimation() {
            if(!this.lastInjuryNormal) {
                this.playAnimationOnce(this.IMAGES_DEAD_ELECTRO);
            } else {
                this.playAnimationOnce(this.IMAGES_DEAD_NORMAL);
            }
    }

    /**
     * Plays the hurt animation depending on what the last injury was.
     */
    hurtAnimation() {
        if(!this.lastInjuryNormal) {
            this.playAnimation(this.IMAGES_HURT_ELECTRO);
            this.world.playSound(this.electroshock_sound);
        } else {
            this.playAnimation(this.IMAGES_HURT_POISON);
            this.world.playSound(this.poisoned_sound);
        }
    }

    /**
     * If the sleepcountdown reachs 25, the character is falling a sleep
     */
    runSleepCountdown() {
        this.sleepCountdown++;
        if(this.sleepCountdown >= 25) {
            this.fallingASleep = true;
        }
    }

    /**
     * Resets the sleepingcountdown.
     */
    resetSleepCountdown() {
        if(this.sleepCountdown != 0) {
            this.sleepCountdown = 0;
            this.fallingASleep = false;
            this.sleeping = false;
        } 
    }

    /**
     * Plays the falling animation till the character reachs the ground or a blocking object,
     * than plays the sleeping animation.
     */
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

    /**
     * Triggers the Loosing Screen. If the sound is on, managed the specific sounds.
     */
    triggerEndscreen() {
        if(world.sound) world.level.lose_sound.play();
        world.level.game_sound.pause();
        world.level.boss_sound.pause();
        gameOver = true;
        changePannels(returnHeader,returnGameOverScreen,returnFooter);
    }
}
