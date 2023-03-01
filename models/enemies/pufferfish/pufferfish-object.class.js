class PufferFish extends EnemyObject {

    width = 50;
    height = 50;
    offsetX = 0;
    offsetY = 0;
    offsetWidth = 0;
    offsetHeight = 10;

    transition = false;
    blownUp = false;

    animate(self) {
        if(self.isDead()) {
            self.playAnimationOnce(self.IMAGES_DEAD);
        } else if(self.blownUp) {
            self.playAnimation(self.IMAGES_BUBBLE_SWIM);
        } else if(self.transition) {
            self.playTransitionAnimation(self.IMAGES_TRANSITION);
        } else {
            self.playAnimation(self.IMAGES_SWIM);
        }
    }

    playTransitionAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if(i != (images.length-1)) {
            this.currentImage++;
        } else {
            this.blownUp = true;
            this.transition = false;
        }
    }

    movement(self) {
        if(!self.isDead()) {
            if(!self.turnX && self.rangeX > 0) {
                self.otherDirection = false;
                self.routingLeft();
            }
            if(self.turnX && self.rangeX > 0) {
                self.otherDirection = true;
                self.routingRight();
            }
            if(!self.turnY && self.rangeY > 0) {
                self.routingUp();
            }
            if(self.turnY && self.rangeY > 0) {
                self.routingDown();
            }
        } else if (self.isDead()) {
            self.damage = 0;
            self.speed = 1;
            if(self.y <= 400) {
                self.moveDown();
            }    
        }
    }

}