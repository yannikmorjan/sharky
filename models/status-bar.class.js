class StatusBar extends DrawableObject {

    IMAGES_POISON_GREEN = [
        'img/4. Marcadores/green/Poison/0.png',
        'img/4. Marcadores/green/Poison/20.png',
        'img/4. Marcadores/green/Poison/40.png',
        'img/4. Marcadores/green/Poison/60.png',
        'img/4. Marcadores/green/Poison/80.png',
        'img/4. Marcadores/green/Poison/100.png'
    ];
    IMAGES_LIFE_GREEN = [
        'img/4. Marcadores/green/Life/0.png',
        'img/4. Marcadores/green/Life/20.png',
        'img/4. Marcadores/green/Life/40.png',
        'img/4. Marcadores/green/Life/60.png',
        'img/4. Marcadores/green/Life/80.png',
        'img/4. Marcadores/green/Life/100.png'
    ];
    IMAGES_COIN_GREEN = [
        'img/4. Marcadores/green/Coin/0.png',
        'img/4. Marcadores/green/Coin/20.png',
        'img/4. Marcadores/green/Coin/40.png',
        'img/4. Marcadores/green/Coin/60.png',
        'img/4. Marcadores/green/Coin/80.png',
        'img/4. Marcadores/green/Coin/100.png'
    ]

    IMAGES;
    percentage;

    constructor(statusBar) {
        super();
        this.distinguishStatusbarImages(statusBar);
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.width = 200;
        this.height = 50;
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } else if(this.percentage > 80) {
            return 4;
        } else if(this.percentage > 60) {
            return 3;
        } else if(this.percentage > 40) {
            return 2;
        } else if(this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

    distinguishStatusbarImages(statusBar) {
        if(statusBar == 'coin') {
            this.IMAGES = this.IMAGES_COIN_GREEN;
            this.y = 80;
            this.percentage = 0;

        } else if(statusBar == 'poison') {
            this.IMAGES = this.IMAGES_POISON_GREEN;
            this.y = 40;
            this.percentage = 0;
        } else {
            this.IMAGES = this.IMAGES_LIFE_GREEN;
            this.y = 0;
            this.percentage = 100;
        }
    }

}