class Endboss extends EnemyObject {

    IMAGES_INTRO = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ]

    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ]

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ]

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    currentImage = 0;
    width = 250;
    height = 250;
    offsetX = 20;
    offsetY = 100;
    offsetWidth = 40;
    offsetHeight = 150;
    triggerPoint;
    firstContact = false;
    intro = true;
    attacking = false;
    damage = 50;
    
    
    /**
     * Creates a new endboss, and it sets up the enemy's movement and
     * animation.
     * @param x - the x position of the enemy
     * @param startY - The y position after the introduction.
     * @param rangeX - The range of the enemy's movement on the x-axis.
     * @param rangeY - The range of the enemy's movement on the y-axis.
     * @param triggerPoint - The point at which the character triggers the enemy movement.
     */
    constructor(x, startY, rangeX, rangeY, triggerPoint) {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadAllImages();
        this.x = x;
        this.y = 0;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.startX = x;
        this.startY = startY;
        this.triggerPoint = triggerPoint;
        this.speed = 0.5 + Math.random() * 0.4;
        const self = this;
        setPausableInterval(() => setPausableFn(self, self.movement), 1000/60);
        setPausableInterval(() => setPausableFn(self, self.animate), 150);
    }

    /**
     * This function loads all the images for the animations.
     */
    loadAllImages() {
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
    }

    /**
     * Controller for the various animations of the endboss. 
     * @param self - the object that is being animated
     */
    animate(self) {
        if(self.firstContact) {
            if(self.intro){
                self.introAnimation(self)
            } else if(self.isDead()) {
                self.deathAnimation(self);
            } else if(self.isHurt()) {
                self.playAnimation(self.IMAGES_HURT);
            } else if(self.attacking) {
                self.attackAnimation(self);
            } else {
                self.playAnimation(self.IMAGES_SWIM);
            }
        }
    }

    /**
     * Plays the intro animation of the endboss once. 
     * @param self - the object that is being animated
     */
    introAnimation(self) {
        self.playAnimationOnce(self.IMAGES_INTRO);
        if(self.currentImage == 9) {
            self.intro = false;
        }
    }

    /**
     * Plays the death animation of the endboss once. 
     * @param self - the object that is being animated
     */
    deathAnimation(self) {
        self.dead = true;
        self.playAnimationOnce(self.IMAGES_DEAD);
    }

    /**
     * Plays the attacking animation of the endboss once. 
     * @param self - the object that is being animated
     */
    attackAnimation(self) {
        self.playAnimationOnce(self.IMAGES_ATTACK);
        if(self.currentImage % self.IMAGES_ATTACK.length == self.IMAGES_ATTACK.length-1)
            self.attacking = false;
    }

    /**
     * Controller for the various movements of the Endboss. 
     * @param self - the object itself
     */
    movement(self) {
        if(!self.isDead() && !self.intro) {
            if(!self.turnX && self.rangeX > 0)
                self.leftMovement(self);
            if(self.turnX && self.rangeX > 0)
                self.rightMovement(self);
            if(!self.turnY && self.rangeY > 0)
                self.routingUp();
            if(self.turnY && self.rangeY > 0) 
                self.routingDown();
        } else if (self.isDead())
            self.damage = 0;
    }

    /**
     * Set the condition for an image flip to false and called routingLeft Function.
     * @param self - The object that is being moved.
     */
    leftMovement(self) {
        self.otherDirection = false;
        self.routingLeft();
    }

    /**
     * Set the condition for an image flip to true and called routingRight Function.
     * @param self - The object that is being moved.
     */
    rightMovement(self) {
        self.otherDirection = true;
        self.routingRight();
    }

    /**
     * Triggers the Winning Screen. If the sound is on, managed the specific sounds.
     */
    triggerEndscreen() {
        if(world.sound) world.level.win_sound.play();
        world.level.boss_sound.pause();
        gameWinner = true;
        changePannels(returnHeader,returnWinScreen,returnFooter);
    }

}