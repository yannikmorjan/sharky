class RockHorizontal extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/2.png';

    width = 360;
    height = 240;

    
    /**
     * Creates a horizontal rock barrier and sets the x coordinate of the object.
     * @param x - x position of the image
     */
    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
        this.rectColider = [
            {x: (this.x + 10), y: (480 - 120), width: (this.width - 290), height: (120)},
            {x: (this.x + 80), y: (480 - 190), width: (this.width - 290), height: (190)},
            {x: (this.x + 150), y: (480 - 220), width: (this.width - 260), height: (220)},
            {x: (this.x + 250), y: (480 - 230), width: (this.width - 320), height: (230)},
            {x: (this.x + 290), y: (480 - 150), width: (this.width - 300), height: (150)}
        ];
    }

}