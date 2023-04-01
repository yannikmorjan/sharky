class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    otherDirectionY = false;
    energy = 100;
    lastHit = 0;

    /**
     * Returned true if obj object is colliding with this object.
     */
    isColliding(obj) {
        return  (this.x + this.offsetX + this.width - this.offsetWidth) > (obj.x + obj.offsetX) &&
            (this.x + this.offsetX) < (obj.x + obj.offsetX + obj.width - obj.offsetWidth) && 
            (this.y + this.offsetY + this.height - this.offsetHeight) > obj.y + obj.offsetY &&
            (this.y + this.offsetY) < (obj.y + obj.offsetY + obj.height - obj.offsetHeight);
    }

    /**
     * Returned true if obj object is 90 on X or 45 on Y axis of this object away.
     */
    isNear(obj) {
        return  (this.x + this.offsetX + this.width - this.offsetWidth) > (obj.x + obj.offsetX - 90) &&
            (this.x + this.offsetX) < (obj.x + obj.offsetX + obj.width - obj.offsetWidth + 90) && 
            (this.y + this.offsetY + this.height - this.offsetHeight) > (obj.y + obj.offsetY - 45) &&
            (this.y + this.offsetY) < (obj.y + obj.offsetY + obj.height - obj.offsetHeight + 45);
    }

    /**
     * Returned true if obj object is colliding with this object.
     */
    isBlocked(obj) {
        return (this.x + this.offsetX + this.width - this.offsetWidth) > obj.x &&
            (this.x + this.offsetX) < (obj.x + obj.width) &&
            (this.y + this.offsetY + this.height - this.offsetHeight) > obj.y &&
            (this.y + this.offsetY) < (obj.y + obj.height);
    }

    
    /**
     * It checks if the character is colliding with an object, and if so, it returns the side of the
     * character that is colliding with the object.
     * @param obj - The object that is being checked for collision
     * @returns the blocking side of the character .
     */
    calcBlocking(obj) {
        let charY = this.y + this.offsetY;
        let charX = this.x + this.offsetX;
        let charWidth = this.width - this.offsetWidth;
        let charHeight = this.height - this.offsetHeight;
        let res = this.blockingCalculation(charY,charX,charWidth,charHeight)
        if(this.isPointInsideRect(res.p1Top,res.p2Top,res.p3Top,obj))
            return 'top';
        if(this.isPointInsideRect(res.p1Bottom,res.p2Bottom,res.p3Bottom,obj))
            return 'bottom';
        if(this.isPointInsideRect(res.p1Left,res.p2Left,res.p3Left,obj))
            return 'left';
        if(this.isPointInsideRect(res.p1Right,res.p2Right,res.p3Right,obj))
            return 'right';
    }

    /**
     * Calculated some points that help to define witch side of the character is blocked after a collision.
     * @param charY - The y position of the character
     * @param charX - The x position of the character
     * @param charWidth - The width of the character.
     * @param charHeight - The height of the character.
     * @returns An object with 3 properties for all 4 sides.
     */
    blockingCalculation(charY,charX,charWidth,charHeight) {
        return {
            p1Top: {x:charX + (1/3 * charWidth), y:charY},
            p2Top: {x:charX + (1/2 * charWidth), y:charY},
            p3Top: {x:charX + (2/3 * charWidth), y:charY},
            p1Bottom: {x:charX + (1/3 * charWidth), y:charY + charHeight},
            p2Bottom: {x:charX + (1/2 * charWidth), y:charY + charHeight},
            p3Bottom: {x:charX + (2/3 * charWidth), y:charY + charHeight},
            p1Left: {x:charX, y:charY + (1/3 * charHeight)},
            p2Left: {x:charX, y:charY + (1/2 * charHeight)},
            p3Left: {x:charX, y:charY + (2/3 * charHeight)},
            p1Right: {x:charX + charWidth, y:charY + (1/3 * charHeight)},
            p2Right: {x:charX + charWidth, y:charY + (1/2 * charHeight)},
            p3Right: {x:charX + charWidth, y:charY + (2/3 * charHeight)}
        }
    }

    /**
     * Checks if any of the three points of the character side is inside the rectangle colider.
     * @param point1 - The first point of the triangle
     * @param point2 - The point that is the center of the circle
     * @param point3 - The point that is the top left corner of the triangle.
     * @param rect - The rectangle to check against.
     * @returns A boolean value.
     */
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
          
    /**
     * The function moveLeft() subtracts the value of the speed property from the value of the x
     * property.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * The function moveRight() adds the value of the speed property to the value of the x property.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * The function moveUp() subtracts the speed from the y value of the object.
     */
    moveUp() {
        this.y -= this.speed;
    }

    /**
     * The moveDown() function moves the player down by adding the speed to the y value.
     */
    moveDown() {
        this.y += this.speed;
    }

    /**
     * The function hit() takes a parameter called damage and subtracts it from the energy property of
     * the object. If the energy property is less than 0, it sets the energy property to 0. Otherwise,
     * it sets the lastHit property to the current time.
     * @param damage - The amount of damage to be dealt to the player.
     */
    hit(damage) {
        this.energy -= damage;
        if(this.energy < 0) {
            this.energy = 0; 
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * The function isDead() returns true if the energy of the object is less than or equal to 0.
     * @returns The energy of the critter.
     */
    isDead() {
        return this.energy <= 0;
    }

    /**
     * If the difference between the current time and the last time the player was hit is less than 1
     * second, return true. So the character can be hit again after at least 1s.
     * @returns The time passed in seconds.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }
}