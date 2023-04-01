class YellowJellyFish extends JellyFish {

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ];

    damage = 20;

    /**
     * Creates a new yellow jellyfish, and it sets up the enemy's movement and
     * animation.
     * @param x - the x position of the enemy
     * @param y - The y position of the enemy
     * @param rangeX - The range of the x-axis that the enemy can move in.
     * @param rangeY - The range of the y-axis that the enemy can move in.
     */
    constructor(x, y, rangeX, rangeY) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadAllImages();
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