class EnemyObject extends MovableObject {
    
    startX;
    startY;
    rangeX = 0;
    rangeY = 0;
    turnX = false;
    turnY = false;
    intro = false;
    dead = false;

    /**
     * Calls the moveLeft function until the end of the moving range is reached. 
     */
    routingLeft() {
        this.moveLeft();
        if(this.x <= (this.startX - this.rangeX)){
            this.turnX = true;
        }
    }
    
    /**
     * Calls the moveRight function until the origin starting position is reached. 
     */
    routingRight() {
        this.moveRight();
        if(this.x >= this.startX){
            this.turnX = false;
        }
    }

    /**
     * Calls the moveUp function until the end of the moving range is reached. 
     */
    routingUp() {
        this.moveUp();
        if(this.y <= (this.startY - this.rangeY)){
            this.turnY = true;
        }
    }

    /**
     * Calls the moveDown function until the origin starting position is reached. 
     */
    routingDown() {
        this.moveDown();
        if(this.y >= this.startY){
            this.turnY = false;
        }
    }

}