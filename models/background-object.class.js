class BackgroundObject extends MovableObject {
    width = 1440;
    height = 480;
    speed = 0;
    maxSpeed;
    acceloration = 0.1;

    /**
     * Creates a new background object.
     * @param imagePath - The path to the image you want to load.
     * @param x - The x position of the image
     * @param maxSpeed - The maximum movement speed of the image (shouldnt be faster than character).
     */
    constructor(imagePath, x, maxSpeed) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
        this.maxSpeed = maxSpeed;
    }

    /**
     * Managed the movement speed of the background depending on the maxSpeed.
     */
    applySwimResistance() {
        if(this.speed > this.maxSpeed) {
            this.speed -= this.acceloration;
        }
    }

}