class Coin extends CollectibleObject {

    IMAGES = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];

    collect_sound = new Audio('audio/collect_coin.mp3');
    
    currentImage = 0;

    constructor(x,y) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate(this.IMAGES);
    }
}