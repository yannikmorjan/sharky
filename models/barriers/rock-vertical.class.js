class RockVertical extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/3.png';

    width = 360;
    height = 240;

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
    }

}