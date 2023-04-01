class PufferFish extends EnemyObject {

    width = 50;
    height = 50;
    offsetX = 2.5;
    offsetY = 0;
    offsetWidth = 10;
    offsetHeight = 15;
    blocked = false;

    transition = false;
    blownUp = false;

    /**
     * Controller for the various animations of a pufferfish. 
     * @param self - the object that is being animated
     */
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

    
    /**
     * Plays the Animation where a pufferfish blown up.
     * @param images - image paths for the animation.
     */
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

    /**
     * Controller for the various movements of a pufferfish.
     * @param self - the object that is being moved
     */
    movement(self) {
        if(!self.isDead()) {
            if(!self.turnX && self.rangeX > 0)
                self.leftMovement(self);
            if(self.turnX && self.rangeX > 0)
                self.rightMovement(self);
            if(!self.turnY && self.rangeY > 0)
                self.routingUp();
            if(self.turnY && self.rangeY > 0)
                self.routingDown();
        } else if (self.isDead()) {
               self.deathCondition(self);
        }
    }

    /**
     * Set the condition for an image flip to false and called routingLeft Function.
     * @param self - The object that is being moved.
     */
    leftMovement(self) {
        self.otherDirection = false;
        self.routingLeft();
    }

    /**
     * Set the condition for an image flip to true and called routingRight Function.
     * @param self - The object that is being moved.
     */
    rightMovement(self) {
        self.otherDirection = true;
        self.routingRight();
    }

    /**
     * Set the damage of the enemy to zero and let them sink to the ground or a blocking object.
     * @param self - The object that the function is being called on.
     */
    deathCondition(self) {
        self.damage = 0;
        self.speed = 1;
        if(self.y <= 400 || self.blocked) {
            self.moveDown();
        } 
    }

    /**
     * This function loads all the images for the animations.
     */
    loadAllImages() {
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLE_SWIM);
        this.loadImages(this.IMAGES_DEAD);
    }

}