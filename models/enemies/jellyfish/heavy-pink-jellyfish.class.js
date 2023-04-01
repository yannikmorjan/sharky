class HeavyPinkJellyFish extends JellyFish {

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ];

    damage = 30;

    /**
     * Creates a new heavy pink jellyfish, and it sets up the enemy's movement and
     * animation.
     * @param x - the x position of the enemy
     * @param y - The y position of the enemy
     * @param rangeX - The range of the x-axis that the enemy can move in.
     * @param rangeY - The range of the y-axis that the enemy can move in.
     */
    constructor(x, y, rangeX, rangeY) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadAllImages();
        this.x = x;
        this.y = y;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.startX = x;
        this.startY = y;
        this.speed = 0.4 + Math.random() * 0.4;
        const self = this;
        setPausableInterval(() => setPausableFn(self, self.movement), 1000/60);
        setPausableInterval(() => setPausableFn(self, self.animate), 150);
    }
}