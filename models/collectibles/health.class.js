class Health extends CollectibleObject {
    
    IMAGE = 'img/4. Marcadores/green/100_  copia 3.png';

    collect_sound = new Audio('audio/collect_health.mp3');

    constructor(x,y) {
        super().loadImage(this.IMAGE);
        this.x = x;
        this.y = y;
    }
}