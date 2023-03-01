class JellyFish extends EnemyObject {

    width = 50;
    height = 50;
    offsetX = 0;
    offsetY = 0;
    offsetWidth = 0;
    offsetHeight = 10;
    currentImage = 0;
    
    animate(self) {
        if(!self.dead) {
            self.playAnimation(self.IMAGES_SWIM);
        } else {
            self.playAnimation(self.IMAGES_DEAD);
        }
    }
    

}