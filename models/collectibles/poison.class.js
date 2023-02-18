class Poison extends CollectibleObject {

    IMAGE_DARK_LEFT = 'img/4. Marcadores/Posión/Dark - Left.png';
    IMAGE_DARK_RIGHT = 'img/4. Marcadores/Posión/Dark - Right.png';
    IMAGE_ANIMATET = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png'
    ];

    collect_sound = new Audio('audio/collect_poison.mp3');

    constructor(x,y) {
        super().loadImage(this.IMAGE_DARK_LEFT);
        this.x = x;
        this.y = y;
    }
}