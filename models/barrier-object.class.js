class BarrierObject extends MovableObject {

    width = 360;
    height = 240;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }

}