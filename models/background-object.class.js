class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    world;

    constructor(imagePath, x, speed) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
        this.speed = speed;
    }
}