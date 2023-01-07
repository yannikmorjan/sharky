class Light extends MovableObject{
    
    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');
        this.width = 600;
        this.height = 300;
        this.x = (-100) + Math.random() * 200;
        this.y = 0;

        // this.animate();
    }

    animate() {
         this.moveLeft();
    }
}