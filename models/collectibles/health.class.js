class Health extends CollectibleObject {
    
    IMAGE = 'img/4. Marcadores/green/100_  copia 3.png';

    collect_sound = new Audio('audio/collect_health.mp3');

    /**
     * Creates a new health colectible item and sets the x and y coordinates.
     * @param x - The x coordinate of the image.
     * @param y - The y coordinate of the image.
     */
    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.x = x;
        this.y = y;
    }
}