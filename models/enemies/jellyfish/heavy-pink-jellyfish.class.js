class HeavyPinkJellyFish extends JellyFish {

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/pink/P4.png'
    ];

    damage = 30;

    constructor(x, y, rangeX, rangeY) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.startX = x;
        this.startY = y;
        this.speed = 0.1 + Math.random() * 0.5;
        this.movement();
        this.animate();
    }
}