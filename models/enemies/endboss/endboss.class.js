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
    offsetX = 10;
    offsetY = 80;
    offsetWidth = 25;
    offsetHeight = 120;
    triggerPoint;
    firstContact = false;
    intro = true;
    attacking = false;
    damage = 50;
    

    constructor(x, startY, rangeX, rangeY, triggerPoint) {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
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

    animate(self) {
        if(self.firstContact) {
            if(self.intro){
                self.playAnimationOnce(self.IMAGES_INTRO);
                if(self.currentImage == 9) {
                    self.intro = false;
                }
            } else if(self.isDead()) {
                self.dead = true;
                self.playAnimationOnce(self.IMAGES_DEAD);
            } else if(self.isHurt()) {
                self.playAnimation(self.IMAGES_HURT);
            } else if(self.attacking) {
                self.playAnimation(self.IMAGES_ATTACK);
                self.attacking = false;
            } else {
                self.playAnimation(self.IMAGES_SWIM);
            }
        }
    }

    movement(self) {
        if(!self.isDead() && !self.intro) {
            if(!self.turnX && self.rangeX > 0) {
                self.otherDirection = false;
                self.routingLeft();
            }
            if(self.turnX && self.rangeX > 0) {
                self.otherDirection = true;
                self.routingRight();
            }
            if(!self.turnY && self.rangeY > 0) {
                self.routingUp();
            }
            if(self.turnY && self.rangeY > 0) {
                self.routingDown();
            }
        } else if (self.isDead()) {
            self.damage = 0;
        }
    }

}