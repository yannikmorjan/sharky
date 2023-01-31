class JellyFish extends EnemyObject {

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    
    width = 50;
    height = 50;
    offsetX = 0;
    offsetY = 0;
    offsetWidth = 0;
    offsetHeight = 10;
    currentImage = 0;
    

    constructor(x, y, rangeX, rangeY) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = x;
        this.y = y;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.startX = x;
        this.startY = y;
        this.speed = 0.1 + Math.random() * 0.5;
        this.animate(this.IMAGES_SWIM);
    }

}