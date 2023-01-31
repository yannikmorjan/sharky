class EnemyObject extends MovableObject {
    
    startX;
    startY;
    rangeX = 0;
    rangeY = 0;
    turnX = false;
    turnY = false;
    intro = false;

    movement() {
        setInterval( () => {
            if(!this.intro && !this.turnX && this.rangeX > 0) {
                this.moveLeft();
                this.otherDirection = false;
                if(this.x <= (this.startX - this.rangeX)){
                    this.turnX = true;
                }
            }
            if(!this.intro && this.turnX && this.rangeX > 0) {
                this.moveRight();
                this.otherDirection = true;
                if(this.x == this.startX){
                    this.turnX = false;
                }
            }
            if(!this.intro && !this.turnY && this.rangeY > 0) {
                this.moveUp();
                if(this.y <= (this.startY - this.rangeY)){
                    this.turnY = true;
                }
            }
            if(!this.intro && this.turnY && this.rangeY > 0) {
                this.moveDown();
                if(this.y == this.startY){
                    this.turnY = false;
                }
            }
        }, 1000 / 60);
    }

}