class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    speed = 0;
    maxSpeed;
    acceloration = 0.1;

    constructor(imagePath, x, maxSpeed) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
        this.maxSpeed = maxSpeed;
    }

    applySwimResistance() {
        if(this.speed > this.maxSpeed) {
            this.speed -= this.acceloration;
        }
    }
}