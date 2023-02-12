class Tunnel extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/1.png';

    width = 720;
    height = 480;

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
        this.rectColider = [
            // BottomFrame
            {x: (this.x), y: (this.y + this.height), width: (this.width - 10), height: (-50)},
            {x: (this.x + 20), y: (this.y + this.height -50), width: (this.width - 50), height: (-30)},
            {x: (this.x + 100), y: (this.y + this.height -80), width: (this.width - 150), height: (-20)},
            {x: (this.x + 200), y: (this.y + this.height -100), width: (this.width - 300), height: (-20)},
            // TopFrame
            {x: (this.x + 10), y: (this.y), width: (this.width - 20), height: (this.height - 380)},
            {x: (this.x + 40), y: (this.y + this.height - 380), width: (this.width - 620), height: (this.height - 450)},
            {x: (this.x + this.width - 450), y: (this.y + this.height - 380), width: (this.width - 670), height: (this.height - 450)},
            {x: (this.x + this.width - 280), y: (this.y + this.height - 380), width: (this.width - 470), height: (this.height - 440)},
            {x: (this.x + this.width - 220), y: (this.y + this.height - 340), width: (this.width - 650), height: (this.height - 440)},
        ];
    }

    
    
}