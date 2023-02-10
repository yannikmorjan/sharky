class RockVertical extends BarrierObject {

    IMAGE = 'img/3. Background/Barrier/3.png';

    width = 180;
    height = 480;

    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.y = y - this.height;
        this.x = x;
    }

    drawFrame(ctx, color) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = color;
        ctx.moveTo(this.x + this.width - 25, this.y + 1);
        ctx.lineTo(this.x + this.width - 25, this.y + 50);
        ctx.moveTo(this.x + this.width - 25, this.y + 50);
        ctx.lineTo(this.x + this.width - 50, this.y + 100);
        ctx.moveTo(this.x + this.width - 50, this.y + 100);
        ctx.lineTo(this.x + this.width - 20, this.y + 160);
        ctx.moveTo(this.x + this.width - 20, this.y + 160);
        ctx.lineTo(this.x + this.width - 35, this.y + 300);
        ctx.moveTo(this.x + this.width - 20, this.y + 160);
        ctx.lineTo(this.x + this.width - 35, this.y + 300);
        ctx.lineTo(this.x + this.width - 35, this.y + 300);
        ctx.moveTo(this.x + this.width - 35, this.y + 300);
        ctx.lineTo(this.x + this.width - 5, this.y + 380);
        ctx.moveTo(this.x + this.width - 5, this.y + 380);
        ctx.lineTo(this.x + this.width - 20, this.y + 450);
        ctx.moveTo(this.x + this.width - 20, this.y + 450);
        ctx.lineTo(this.x + this.width - 50, this.y + 480);
        ctx.moveTo(this.x + this.width - 50, this.y + 480);
        ctx.lineTo(this.x + this.width - 130, this.y + 450);
        ctx.moveTo(this.x + this.width - 130, this.y + 450);
        ctx.lineTo(this.x + this.width - 140, this.y + 320);
        ctx.moveTo(this.x + this.width - 140, this.y + 320);
        ctx.lineTo(this.x + this.width - 170, this.y + 230);
        ctx.moveTo(this.x + this.width - 170, this.y + 230);
        ctx.lineTo(this.x + this.width - 150, this.y + 140);
        ctx.moveTo(this.x + this.width - 150, this.y + 140);
        ctx.lineTo(this.x + this.width - 140, this.y + 40);
        ctx.moveTo(this.x + this.width - 140, this.y + 40);
        ctx.lineTo(this.x + this.width - 80, this.y + 1);
        ctx.moveTo(this.x + this.width - 80, this.y + 1);
        ctx.lineTo(this.x + this.width - 25, this.y + 1);
        ctx.stroke();
    }
}