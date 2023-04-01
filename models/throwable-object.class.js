class ThrowableObject extends MovableObject {

    IMAGE_NORMAL_BUBBLE = 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
    IMAGE_POISON_BUBBLE = 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    
    catch_sound = new Audio('audio/bubble_catch.mp3');
    hit_sound = new Audio('audio/bubble_hit.mp3');
    pop_sound = new Audio('audio/bubble_pop.mp3');

    poisoned;
    uplift = 0;
    speed = 2;
    acceloration = 0.1;
    characterWidth;

    /**
     * Create a new thorwable object. If the boolean is true it creates a poisoned bubble, else a normal one. 
     * @param x - The x coordinate of the bubble
     * @param y - The y coordinate of the bubble
     * @param poisoned - boolean
     */
    constructor(x, y, poisoned) {
        super().poisoned = poisoned;
        if(this.poisoned)
            this.loadImage(this.IMAGE_POISON_BUBBLE);
        else
            this.loadImage(this.IMAGE_NORMAL_BUBBLE);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.throw();
    }

    /**
     * It's supposed to make the object move in a parabolic motion.
     */
    throw() {
        let startX = this.x;
        setInterval(() => {
            if(this.otherDirection){
                this.x -= this.speed;
                if(this.x <= (startX - this.characterWidth - this.width - 25)) {
                    this.y -= this.uplift;
                    this.uplift += this.acceloration;
                } 
            } else {
                this.x += this.speed;
                if(this.x >= (startX + 25)) {
                    this.y -= this.uplift;
                    this.uplift += this.acceloration;
                }
            }
        }, 1000 / 60)
    }

    /**
     * Corrects the x position for the bubble, if the character is facing the other direction.
     * @param otherDirection - Boolean
     * @param changePosition - The amount of pixels the character should move.
     */
    checkOtherDirection(otherDirection, changePosition) {
        this.characterWidth = changePosition;
        if(otherDirection) {
            this.otherDirection = true;
            this.x -= changePosition + this.width;
        } else {
            this.otherDirection = false;
        }
    }

}