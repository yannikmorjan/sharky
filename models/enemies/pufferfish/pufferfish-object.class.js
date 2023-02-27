class PufferFish extends EnemyObject {

    width = 50;
    height = 50;
    offsetX = 0;
    offsetY = 0;
    offsetWidth = 0;
    offsetHeight = 10;

    transition = false;
    blownUp = false;

    animate() {
        setInterval( () => {
            if(this.dead) {
                this.playAnimationOnce(this.IMAGES_DEAD);
            } else if(this.blownUp) {
                this.playAnimation(this.IMAGES_BUBBLE_SWIM);
            } else if(this.transition) {
                this.playTransitionAnimation(this.IMAGES_TRANSITION);
            } else {
                this.playAnimation(this.IMAGES_SWIM);
            }
        },150);
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

}