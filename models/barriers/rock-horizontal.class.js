class RockHorizontal extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/2.png';

    width = 360;
    height = 240;

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
    }

    drawFrame(ctx, color) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = color;
        ctx.rect(this.x + 10, this.y + this.height, this.width - 290, -this.height + 130);
        ctx.rect(this.x + 80, this.y + this.height, this.width - 290, -this.height + 50);
        ctx.rect(this.x + 150, this.y + this.height, this.width - 260, -this.height + 20);
        ctx.rect(this.x + 250, this.y + this.height, this.width - 320, -this.height + 5);
        ctx.rect(this.x + 290, this.y + this.height, this.width - 300, -this.height + 90);
        ctx.stroke();
    }
}