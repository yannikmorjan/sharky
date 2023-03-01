class OrangePufferFish extends PufferFish {

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish/1.Swim/2.swim5.png'
    ];
    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish/2.transition/2.transition1.png',
        'img/2.Enemy/1.Puffer fish/2.transition/2.transition2.png',
        'img/2.Enemy/1.Puffer fish/2.transition/2.transition3.png',
        'img/2.Enemy/1.Puffer fish/2.transition/2.transition4.png',
        'img/2.Enemy/1.Puffer fish/2.transition/2.transition5.png'
    ];
    IMAGES_BUBBLE_SWIM = [
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/2.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/2.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/2.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/2.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish/3.Bubbleeswim/2.bubbleswim5.png'
    ]
    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish/4.DIE/2.png',
        'img/2.Enemy/1.Puffer fish/4.DIE/2.3.png',
        'img/2.Enemy/1.Puffer fish/4.DIE/2.2.png'
    ]
    
    damage = 20;

    constructor(x, y, rangeX, rangeY) {
        super().loadImage('img/2.Enemy/1.Puffer fish/1.Swim/2.swim1.png');
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
        this.speed = 0.2 + Math.random() * 0.4;
        const self = this;
        setPausableInterval(() => setPausableFn(self, self.movement), 1000/60);
        setPausableInterval(() => setPausableFn(self, self.animate), 150);
    }
}