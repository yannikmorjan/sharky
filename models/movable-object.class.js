class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    isColliding(obj) {
        return  (this.x + this.offsetX + this.width - this.offsetWidth) > obj.x + obj.offsetX &&
            (this.x + this.offsetX) < (obj.x + obj.offsetX + obj.width - obj.offsetWidth) && 
            (this.y + this.offsetY + this.height - this.offsetHeight) > obj.y + obj.offsetY &&
            (this.y + this.offsetY) < (obj.y + obj.offsetY + obj.height - obj.offsetHeight);
            // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
            // && obj.onCollisionCourse; 
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0; 
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }
}