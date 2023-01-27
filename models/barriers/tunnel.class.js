class Tunnel extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/1.png';

    width = 720;
    height = 480;

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
    }

}