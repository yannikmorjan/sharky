class ThrowableObject extends MovableObject {

    IMAGE_NORMAL_BUBBLE = 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
    IMAGE_POISON_BUBBLE = 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'

    constructor(x,y) {
        super().loadImage(this.IMAGE_NORMAL_BUBBLE);
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.trow();
    }

    trow() {
        this.speed = 2;
        setInterval(() => {
            if(this.otherDirection){
                this.x -= this.speed; 
            } else {
                this.x += this.speed;
            }
            
        }, 1000 / 60)
    }

    checkOtherDirection(otherDirection, changePosition) {
        if(otherDirection) {
            this.otherDirection = true;
            this.x -= changePosition + this.width;
        } else {
            this.otherDirection = false;
        }
    }

}