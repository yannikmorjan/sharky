class RockHorizontal extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/2.png';

    width = 360;
    height = 240;

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
    }

    drawBarrierFrame(ctx, color) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = color;
        ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.offsetWidth, this.height - this.offsetHeight);
        ctx.stroke();
    }
}