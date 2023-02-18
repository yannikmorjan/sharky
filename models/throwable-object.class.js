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

    constructor(x, y, poisoned) {
        super().poisoned = poisoned;
        if(this.poisoned){
            this.loadImage(this.IMAGE_POISON_BUBBLE);
        } else {
            this.loadImage(this.IMAGE_NORMAL_BUBBLE);
        }
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.throw();
    }

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