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
    ];
    IMAGES_LIFE_ENDBOSS = [
        'img/4. Marcadores/Purple/endboss/0_.png',
        'img/4. Marcadores/Purple/endboss/20_.png',
        'img/4. Marcadores/Purple/endboss/40_.png',
        'img/4. Marcadores/Purple/endboss/60_.png',
        'img/4. Marcadores/Purple/endboss/80_.png',
        'img/4. Marcadores/Purple/endboss/100_.png'
    ]

    IMAGES;
    percentage;

    /**
     * The constructor function takes in a status bar and distinguishes the images, loads the images,
     * sets the width and height, and sets the percentage.
     * @param statusBar - The status bar that is being drawn.
     */
    constructor(statusBar) {
        super();
        this.distinguishStatusbarImages(statusBar);
        this.loadImages(this.IMAGES);
        this.width = 200;
        this.height = 50;
        this.setPercentage(this.percentage);
    }

    /**
     * This function sets the percentage of the progress bar and then sets the image to the correct
     * image based on the percentage.
     * @param percentage - The percentage of the progress bar.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns the right image index depending on the percentage.
     * @returns The index of the image to be displayed.
     */
    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } else if(this.percentage >= 80) {
            return 4;
        } else if(this.percentage >= 60) {
            return 3;
        } else if(this.percentage >= 40) {
            return 2;
        } else if(this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Depending on the expression distinguish the different Statusbar.
     * @param statusBar - the name of the status bar you want to display
     */
    distinguishStatusbarImages(statusBar) {
        switch (statusBar) {
            case 'coin':
                this.coinBar();
                break;
            case 'poison':
                this.poisonBar();
                break;
            case 'health':
                this.healthBar();
                break;
            case 'endboss':
                this.endbossBar();
                break;
            default:
                break;
        }
    }

    /**
     * This function sets the coinBar's image to the green coin image, sets the x and y position
     * and sets the percentage to 0.
     */
    coinBar() {
        this.IMAGES = this.IMAGES_COIN_GREEN;
        this.y = 80;
        this.x = 10;
        this.percentage = 0;
    }

    /**
     * This function sets the poisonBar's image to the green poison image, sets the x and y position
     * and sets the percentage to 0.
     */
    poisonBar() {
        this.IMAGES = this.IMAGES_POISON_GREEN;
        this.y = 40;
        this.x = 10;
        this.percentage = 0;
    }

    /**
     * This function sets the healthBar's image to the green life image, sets the x and y position
     * and sets the percentage to 100.
     */
    healthBar() {
        this.IMAGES = this.IMAGES_LIFE_GREEN;
        this.y = 0;
        this.x = 10;
        this.percentage = 100;
    }

    /**
     * This function sets the endbossBar's image to the endboss life image, sets the x and y position
     * and sets the percentage to 100.
     */
    endbossBar() {
        this.IMAGES = this.IMAGES_LIFE_ENDBOSS;
        this.y = 0;
        this.x = 260;
        this.percentage = 100;
    }

}