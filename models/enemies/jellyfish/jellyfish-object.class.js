class JellyFish extends EnemyObject {

    width = 50;
    height = 50;
    offsetX = 5;
    offsetY = 5;
    offsetWidth = 10;
    offsetHeight = 15;
    currentImage = 0;
    
    animate(self) {
        if(!self.isDead()) {
            self.playAnimation(self.IMAGES_SWIM);
        } else {
            self.playAnimation(self.IMAGES_DEAD);
        }
    }
    
    movement(self) {
        if(!self.isDead()) {
            if(!self.turnX && self.rangeX > 0) {
                self.routingLeft();
            }
            if(self.turnX && self.rangeX > 0) {
                self.routingRight();
            }
            if(!self.turnY && self.rangeY > 0) {
                self.otherDirectionY = false;
                self.routingUp();
            }
            if(self.turnY && self.rangeY > 0) {
                self.otherDirectionY = true;
                self.routingDown();
            }
        } else if (self.isDead()) {
            self.damage = 0;
            self.speed = 1;
            self.moveUp();
        }
    }

}