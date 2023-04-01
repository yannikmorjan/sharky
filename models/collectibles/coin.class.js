class Coin extends CollectibleObject {

    IMAGES = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];

    collect_sound = new Audio('audio/collect_coin.mp3');
    
    currentImage = 0;

    /**
     * /**
     * Creates a coin and sets the x and y coordinates of the object. Also sets an pausable interval for animation.
     * @param x - x position of the coin
     * @param y - The y position of the coin
     */
    constructor(x,y) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        const self = this;
        setPausableInterval(() => setPausableFn(self, self.animate), 200);
    }

    /**
     * The function calls the playAnimation function on the object self, passing in the
     * object's IMAGES property.
     * @param self - The object that is calling the function.
     */
    animate(self) {
        self.playAnimation(self.IMAGES);
    }

}