class RockHorizontal extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/2.png';

    width = 360;
    height = 240;

    

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
        this.rectColider = [
            {x: (this.x + 10), y: (this.y + this.height), width: (this.width - 290), height: (-this.height + 130)},
            {x: (this.x + 80), y: (this.y + this.height), width: (this.width - 290), height: (-this.height + 50)},
            {x: (this.x + 150), y: (this.y + this.height), width: (this.width - 260), height: (-this.height + 20)},
            {x: (this.x + 250), y: (this.y + this.height), width: (this.width - 320), height: (-this.height + 5)},
            {x: (this.x + 290), y: (this.y + this.height), width: (this.width - 300), height: (-this.height + 90)}
        ];
    }

}