class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 150;
    offsetX = 0;
    offsetY = 0;
    offsetWidth = 0;
    offsetHeight = 0;

    /**
     * It creates a new image object, sets the source of the image to the path that was passed in, and
     * then sets the img property of the object to the new image object.
     * @param path - The path to the image file.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * It takes an array of image paths, creates a new image object for each path, sets the source of
     * the image to the path, and then adds the image to the imageCache object.
     * @param arr - An array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * It draws the image to the canvas
     * @param ctx - The context of the canvas.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draw a rectangle Frame as colision detection.
     * @param ctx - The canvas context
     * @param color - The color of the frame.
     */
    drawFrame(ctx, color) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = color;
        ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.offsetWidth, this.height - this.offsetHeight);
        ctx.stroke();
    }

    /**
     * Playes the images from the imageCache as anmimation.
     * @param images - An array of image paths.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Playes the images from the imageCache as anmimation but stops at the last one.
     * @param images - An array of image paths.
     */
    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if(i != (images.length-1)) {
            this.currentImage++;
        } else {
            if((this instanceof Character || this instanceof Endboss) && this.isDead()) {
                gameIsPaused = true;
                this.triggerEndscreen();
            }
        }
    }
}