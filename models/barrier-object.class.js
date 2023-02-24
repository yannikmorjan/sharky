class BarrierObject extends DrawableObject {
    rectColider;
    world;

    drawFrame(ctx, color) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = color;
        for(let i = 0; i < this.rectColider.length; i++) {
            ctx.rect(this.rectColider[i].x, this.rectColider[i].y, this.rectColider[i].width, this.rectColider[i].height);
        }
        ctx.stroke();
    }

    // isBlocked(obj) {
    //     if(obj.x < (this.x + this.offsetX + this.width - this.offsetWidth) &&
    //     (obj.x + obj.width) > this.x + this.offsetX &&
    //     obj.y < (this.y + this.offsetY + this.height - this.offsetHeight) &&
    //     (obj.y + obj.height) > this.y + this.offsetY) {
            
    //         const top_diff = obj.y + obj.height - this.y + this.offsetY;
    //         const bottom_diff = this.y + this.offsetY + this.height - this.offsetHeight - obj.y;
    //         const left_diff = obj.x + obj.width - this.x + this.offsetX;
    //         const right_diff = this.x + this.offsetX + this.width - this.offsetWidth - obj.x;
                  
    //         const min = Math.min(bottom_diff, top_diff, left_diff, right_diff);
            
    //         return {
    //             bottom: bottom_diff == min,
    //             right: right_diff == min,
    //             left: left_diff == min,
    //             top: top_diff == min
    //         }
    //     }
    //     return null;
    // }

    // checkCharacterCollision() {
    //     for (let i = 0; i < this.rectColider.length; i++) {
    //         let result = this.isBlocked(this.world.character)
    //         switch (result) {
    //             case result.bottom:
    //                 this.world.character.bottomBlocked = result.bottom;
    //                 break;
    //             case result.right:
    //                 this.world.character.rightBlocked = result.right;
    //                 break;
    //             case result.left:
    //                 this.world.character.leftBlocked = result.left;
    //                 break;
    //             case result.top:
    //                 this.world.character.topBlocked = result.top;
    //                 break;
    //             default:
    //                 continue;
    //         }
    //     }
    // }

    // run() {
    //     setInterval(() => {
    //         this.checkCharacterCollision();
    //     }, 100);
    // }

}