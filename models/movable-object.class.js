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
        if(obj.x < (this.x + this.offsetX + this.width - this.offsetWidth) &&
        (obj.x + obj.width) > this.x + this.offsetX &&
        obj.y < (this.y + this.offsetY + this.height - this.offsetHeight) &&
        (obj.y + obj.height) > this.y + this.offsetY) {
            
            const top_diff = obj.y + obj.height - this.y + this.offsetY;
            const bottom_diff = this.y + this.offsetY + this.height - this.offsetHeight - obj.y;
            const left_diff = obj.x + obj.width - this.x + this.offsetX;
            const right_diff = this.x + this.offsetX + this.width - this.offsetWidth - obj.x;
                  
            const min = Math.min(bottom_diff, top_diff, left_diff, right_diff);
            
            return {
                bottom: bottom_diff == min,
                right: right_diff == min,
                left: left_diff == min,
                top: top_diff == min
            }
        }
        return null;
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