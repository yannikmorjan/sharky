class BarrierObject extends DrawableObject {
    rectColider;

    drawFrame(ctx, color) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = color;
        for(let i = 0; i < this.rectColider.length; i++) {
            ctx.rect(this.rectColider[i].x, this.rectColider[i].y, this.rectColider[i].width, this.rectColider[i].height);
        }
        ctx.stroke();
    }

}