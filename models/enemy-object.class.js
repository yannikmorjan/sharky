class EnemyObject extends MovableObject {
    
    startX;
    startY;
    rangeX = 0;
    rangeY = 0;
    turnX = false;
    turnY = false;
    intro = false;
    dead = false;

    movement() {
        setInterval( () => {
            if(!this.dead) {
                if(!this.intro && !this.turnX && this.rangeX > 0) {
                    if(this instanceof PufferFish || this instanceof Endboss) {
                        this.otherDirection = false;
                    }
                    this.moveLeft();
                    if(this.x <= (this.startX - this.rangeX)){
                        this.turnX = true;
                    }
                }
                if(!this.intro && this.turnX && this.rangeX > 0) {
                    if(this instanceof PufferFish || this instanceof Endboss) {
                        this.otherDirection = true;
                    }
                    this.moveRight();
                    if(this.x == this.startX){
                        this.turnX = false;
                    }
                }
                if(!this.intro && !this.turnY && this.rangeY > 0) {
                    if(this instanceof JellyFish) {
                        this.otherDirectionY = false;
                    }
                    this.moveUp();
                    if(this.y <= (this.startY - this.rangeY)){
                        this.turnY = true;
                    }
                }
                if(!this.intro && this.turnY && this.rangeY > 0) {
                    if(this instanceof JellyFish) {
                        this.otherDirectionY = true;
                    }
                    this.moveDown();
                    if(this.y == this.startY){
                        this.turnY = false;
                    }
                }
            } else if (this.dead) {
                this.damage = 0;
                if(this instanceof JellyFish) {
                    this.speed = 1;
                    this.moveUp();
                }
                if(this instanceof PufferFish) {
                    this.speed = 0.5;
                    if(this.y <= 400) {
                        this.moveDown();
                    }
                }
                
            }
        }, 1000 / 60);
    }

}