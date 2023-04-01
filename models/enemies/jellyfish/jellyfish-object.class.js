class JellyFish extends EnemyObject {

    width = 50;
    height = 50;
    offsetX = 5;
    offsetY = 5;
    offsetWidth = 10;
    offsetHeight = 15;
    currentImage = 0;
    
    /**
     * Controller for the various animations of a jellyfish. 
     * @param self - the object that is being animated
     */
    animate(self) {
        if(!self.isDead()) {
            self.playAnimation(self.IMAGES_SWIM);
        } else {
            self.playAnimation(self.IMAGES_DEAD);
        }
    }
    
    /**
     * Controller for the various movements of a jellyfish. 
     * @param self - the object that is being animated
     */
    movement(self) {
        if(!self.isDead()) {
            if(!self.turnX && self.rangeX > 0)
                self.routingLeft();
            if(self.turnX && self.rangeX > 0)
                self.routingRight();
            if(!self.turnY && self.rangeY > 0)
                self.upMovement(self);
            if(self.turnY && self.rangeY > 0)
                self.downMovement(self);
        } else if (self.isDead())
            self.deathMovement(self);
    }

    /**
     * Set the condition for an image flip to false and called routingUp Function.
     * @param self - The object that is being moved.
     */
    upMovement(self) {
        self.otherDirectionY = false;
        self.routingUp();
    }

    /**
     * Set the condition for an image flip to true and called routingDown Function.
     * @param self - The object that is being moved.
     */
    downMovement(self) {
        self.otherDirectionY = true;
        self.routingDown();
    }

    /**
     * Set the damage of the enemy to zero and let them rise up.
     * @param self - The object that the function is being called on.
     */
    deathMovement(self) {
        self.damage = 0;
        self.speed = 1;
        self.moveUp();
    }

    /**
     * This function loads all the images for the animations.
     */
    loadAllImages() {
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
    }
}