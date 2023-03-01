class EnemyObject extends MovableObject {
    
    startX;
    startY;
    rangeX = 0;
    rangeY = 0;
    turnX = false;
    turnY = false;
    intro = false;
    dead = false;

    routingLeft() {
        this.moveLeft();
        if(this.x <= (this.startX - this.rangeX)){
            this.turnX = true;
        }
    }
    
    routingRight() {
        this.moveRight();
        if(this.x >= this.startX){
            this.turnX = false;
        }
    }

    routingUp() {
        this.moveUp();
        if(this.y <= (this.startY - this.rangeY)){
            this.turnY = true;
        }
    }

    routingDown() {
        this.moveDown();
        if(this.y >= this.startY){
            this.turnY = false;
        }
    }

}