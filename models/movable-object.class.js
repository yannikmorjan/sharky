class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    otherDirectionY = false;
    energy = 100;
    lastHit = 0;

    isColliding(obj) {
        return  (this.x + this.offsetX + this.width - this.offsetWidth) > (obj.x + obj.offsetX) &&
            (this.x + this.offsetX) < (obj.x + obj.offsetX + obj.width - obj.offsetWidth) && 
            (this.y + this.offsetY + this.height - this.offsetHeight) > obj.y + obj.offsetY &&
            (this.y + this.offsetY) < (obj.y + obj.offsetY + obj.height - obj.offsetHeight);
    }

    isNear(obj) {
        return  (this.x + this.offsetX + this.width - this.offsetWidth) > (obj.x + obj.offsetX - 90) &&
            (this.x + this.offsetX) < (obj.x + obj.offsetX + obj.width - obj.offsetWidth + 90) && 
            (this.y + this.offsetY + this.height - this.offsetHeight) > (obj.y + obj.offsetY - 45) &&
            (this.y + this.offsetY) < (obj.y + obj.offsetY + obj.height - obj.offsetHeight + 45);
    }

    isBlocked(obj) {
        for (let i = 0; i < obj.rectColider.lenght; i++) {
            if(obj.rectColider.x < (this.x + this.offsetX + this.width - this.offsetWidth) &&
              (obj.rectColider.x + obj.rectColider.width) > this.x + this.offsetX &&
               obj.rectColider.y < (this.y + this.offsetY + this.height - this.offsetHeight) &&
              (obj.rectColider.y + obj.rectColider.height) > this.y + this.offsetY) {
                return true;
              }
        }
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

    hit(damage) {
        this.energy -= damage;
        if(this.energy < 0) {
            this.energy = 0; 
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy <= 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }
}