class RockVertical extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/3.png';

    width = 180;
    height = 480;

    /**
     * Creates a vertical rock barrier and sets the x and y coordinates of the object.
     * @param x - x position of the image
     * @param y - y position of the image
     */
    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.y = y - this.height;
        this.x = x;
        this.rectColider = [
            {x: (this.x + 35), y: (this.y + this.height / 3 * 2), width: (this.width - 40), height: (this.height / 3)},
            {x: (this.x + 10), y: (this.y + this.height / 3), width: (this.width - 30), height: (this.height / 3)},
            {x: (this.x + 25), y: (this.y), width: (this.width - 50), height: (this.height / 3)}
        ];
    }

}