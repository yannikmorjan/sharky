class Health extends CollectableObject {
    
    IMAGE = 'img/4. Marcadores/green/100_  copia 3.png';

    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.x = x;
        this.y = y;
    }
}