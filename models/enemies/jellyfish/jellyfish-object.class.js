class JellyFish extends EnemyObject {

    width = 50;
    height = 50;
    offsetX = 0;
    offsetY = 0;
    offsetWidth = 0;
    offsetHeight = 10;
    currentImage = 0;
    
    animate() {
        setInterval( () => {
            if(!this.dead) {
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        },150);
    }
    

}