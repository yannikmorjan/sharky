class EnemyObject extends MovableObject {
    
    startX;
    startY;
    rangeX = 0;
    rangeY = 0;
    turnX = false;
    turnY = false;
    intro = false;
    dead = false;

    movement(self) {
        if(!self.dead) {
            if(!self.intro && !self.turnX && self.rangeX > 0) {
                if(self instanceof PufferFish || self instanceof Endboss) {
                    self.otherDirection = false;
                }
                self.moveLeft();
                if(self.x <= (self.startX - self.rangeX)){
                    self.turnX = true;
                }
            }
            if(!self.intro && self.turnX && self.rangeX > 0) {
                if(self instanceof PufferFish || self instanceof Endboss) {
                    self.otherDirection = true;
                }
                self.moveRight();
                if(self.x == self.startX){
                    self.turnX = false;
                }
            }
            if(!self.intro && !self.turnY && self.rangeY > 0) {
                if(self instanceof JellyFish) {
                    self.otherDirectionY = false;
                }
                self.moveUp();
                if(self.y <= (self.startY - self.rangeY)){
                    self.turnY = true;
                }
            }
            if(!self.intro && self.turnY && self.rangeY > 0) {
                if(self instanceof JellyFish) {
                    self.otherDirectionY = true;
                }
                self.moveDown();
                if(self.y == self.startY){
                    self.turnY = false;
                }
            }
        } else if (self.dead) {
            self.damage = 0;
            if(self instanceof JellyFish) {
                self.speed = 1;
                self.moveUp();
            }
            if(self instanceof PufferFish) {
                self.speed = 1;
                if(self.y <= 400) {
                    self.moveDown();
                }
            }    
        }
    }

}