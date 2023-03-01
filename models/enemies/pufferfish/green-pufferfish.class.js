class GreenPufferFish extends PufferFish {

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/1.swim5.png'
    ];
    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish/2.transition/1.transition5.png'
    ];
    IMAGES_BUBBLE_SWIM = [
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/1.bubbleswim5.png'
    ]
    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish/4.DIE/1.Dead 1.png',
        'img/2.Enemy/1.Puffer fish/4.DIE/1.Dead 2.png',
        'img/2.Enemy/1.Puffer fish/4.DIE/1.Dead 3.png'
    ]
    
    damage = 20;

    constructor(x, y, rangeX, rangeY) {
        super().loadImage('img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLE_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.startX = x;
        this.startY = y;
        this.speed = 0.1 + Math.random() * 0.5;
        const self = this;
        setPausableInterval(() => setPausableFn(self, self.movement), 1000/60);
        setPausableInterval(() => setPausableFn(self, self.animate), 150);
    }
}