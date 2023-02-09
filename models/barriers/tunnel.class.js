class Tunnel extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/1.png';

    width = 720;
    height = 480;

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.y = 480 - this.height;
        this.x = x;
    }

    drawFrame(ctx, color) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = color;
        ctx.rect(this.x + 5, this.y, this.width - 10, 100);
        ctx.moveTo(this.x + this.width - 5, 100);
        ctx.lineTo(this.x + this.width - 180, 180);
        ctx.moveTo(this.x + this.width - 180, 180);
        ctx.lineTo(this.x + this.width - 300, 100);
        ctx.moveTo(this.x + this.width - 330, 100);
        ctx.lineTo(this.x + this.width - 425, 130);
        ctx.moveTo(this.x + this.width - 425, 130);
        ctx.lineTo(this.x + this.width - 475, 100);
        ctx.moveTo(this.x + this.width - 500, 100);
        ctx.lineTo(this.x + this.width - 650, 140);
        ctx.moveTo(this.x + this.width - 650, 140);
        ctx.lineTo(this.x + 5, 100);
        ctx.moveTo(this.x + 100, this.y + this.height -90);
        ctx.lineTo(this.x + 400, this.y + this.height -125);
        ctx.moveTo(this.x + 400, this.y + this.height -125);
        ctx.lineTo(this.x + this.width - 70, this.y + this.height -100);
        ctx.moveTo(this.x + this.width - 70, this.y + this.height -100);
        ctx.lineTo(this.x+ this.width - 30, this.y + this.height -70);
        ctx.moveTo(this.x + this.width - 30, this.y + this.height -70);
        ctx.lineTo(this.x + this.width -20, this.y + this.height);
        ctx.moveTo(this.x + this.width - 20, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.moveTo(this.x, this.y + this.height);
        ctx.lineTo(this.x + 20, this.y + this.height -50);
        ctx.moveTo(this.x + 20, this.y + this.height -50);
        ctx.lineTo(this.x + 100, this.y + this.height -90);
        ctx.stroke();
    }
}