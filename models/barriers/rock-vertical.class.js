class RockVertical extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/3.png';

    width = 180;
    height = 480;

    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.y = y - this.height;
        this.x = x;
    }

}