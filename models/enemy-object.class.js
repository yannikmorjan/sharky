class EnemyObject extends MovableObject {
    
    startX;
    startY;
    rangeX = 0;
    rangeY = 0;
    turnX = false;
    turnY = false;

    animate(IMAGE) {
        setInterval( () => {
            if(!this.turnX && this.rangeX > 0) {
                this.moveLeft();
                this.otherDirection = false;
                if(this.x <= (this.startX - this.rangeX)){
                    this.turnX = true;
                }
            }
            if(this.turnX && this.rangeX > 0) {
                this.moveRight();
                this.otherDirection = true;
                if(this.x == this.startX){
                    this.turnX = false;
                }
            }
            if(!this.turnY && this.rangeY > 0) {
                this.moveUp();
                if(this.y <= (this.startY - this.rangeY)){
                    this.turnY = true;
                }
            }
            if(this.turnY && this.rangeY > 0) {
                this.moveDown();
                if(this.y == this.startY){
                    this.turnY = false;
                }
            }
        }, 1000 / 60);

        setInterval( () => {
            this.playAnimation(IMAGE);
        },150);
    }

}