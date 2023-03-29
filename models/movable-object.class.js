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
        return (this.x + this.offsetX + this.width - this.offsetWidth) > obj.x &&
            (this.x + this.offsetX) < (obj.x + obj.width) &&
            (this.y + this.offsetY + this.height - this.offsetHeight) > obj.y &&
            (this.y + this.offsetY) < (obj.y + obj.height);
    }

    calcBlocking(obj) {
        let charY = this.y + this.offsetY;
        let charX = this.x + this.offsetX;
        let charWidth = this.width - this.offsetWidth;
        let charHeight = this.height - this.offsetHeight;
        let p1Top = {x:charX + (1/3 * charWidth), y:charY};
        let p2Top = {x:charX + (1/2 * charWidth), y:charY};
        let p3Top = {x:charX + (2/3 * charWidth), y:charY};
        let p1Bottom = {x:charX + (1/3 * charWidth), y:charY + charHeight};
        let p2Bottom = {x:charX + (1/2 * charWidth), y:charY + charHeight};
        let p3Bottom = {x:charX + (2/3 * charWidth), y:charY + charHeight};
        let p1Left = {x:charX, y:charY + (1/3 * charHeight)};
        let p2Left = {x:charX, y:charY + (1/2 * charHeight)};
        let p3Left = {x:charX, y:charY + (2/3 * charHeight)};
        let p1Right = {x:charX + charWidth, y:charY + (1/3 * charHeight)};
        let p2Right = {x:charX + charWidth, y:charY + (1/2 * charHeight)};
        let p3Right = {x:charX + charWidth, y:charY + (2/3 * charHeight)};

        if(this.isPointInsideRect(p1Top,p2Top,p3Top,obj)) {
            return 'top';
        } if(this.isPointInsideRect(p1Bottom,p2Bottom,p3Bottom,obj)) {
            return 'bottom';
        } if(this.isPointInsideRect(p1Left,p2Left,p3Left,obj)) {
            return 'left';
        } if(this.isPointInsideRect(p1Right,p2Right,p3Right,obj)) {
            return 'right';
        }
    }

    isPointInsideRect(point1, point2, point3, rect) {
        if (point1.x > rect.x && point1.x < (rect.x + rect.width) &&
            point1.y > rect.y && point1.y < (rect.y + rect.height) ||
            point2.x > rect.x && point2.x < (rect.x + rect.width) &&
            point2.y > rect.y && point2.y < (rect.y + rect.height) ||
            point3.x > rect.x && point3.x < (rect.x + rect.width) &&
            point3.y > rect.y && point3.y < (rect.y + rect.height)) {
            return true;
        } else {
            return false;
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