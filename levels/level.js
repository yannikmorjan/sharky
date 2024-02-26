/**
 * Returns a new level object depending on the lvl string.
 * @param {string} lvl 
 * @returns - level object
 */
function initLevel(lvl) {
    if (lvl == 'lvl1') {
        return new Level(
            createLevel1Area(),
            createLevel1Enemies(),
            createLevel1Coins(),
            createLevel1Poison(),
            createLevel1Health(),
            createLevel1Barriers(),
            [createLevel1BgL5(),
             createLevel1BgL4(),
             createLevel1BgL3(),
             createLevel1BgL2(),
             createLevel1BgL1()]
        );
    }
}
    /**
     * @returns - the start and end point on x-axis for level 1 in an array
     */
    function createLevel1Area() {
        return [-720, 2400]
    }   
    
    /**
     * @returns - the enemies for level 1 in an array
     */
    function createLevel1Enemies() {
        return [new LilaJellyFish(-550, 300, 0, 100),
            new LilaJellyFish(-500, 300, 0, 100),
            new LilaJellyFish(-450, 300, 0, 100),
            new GreenPufferFish(-200, 150, 100, 0),
            new YellowJellyFish(200, 300, 0, 150),
            new YellowJellyFish(300, 250, 0, 150),
            new YellowJellyFish(300, 400, 0, 100),
            new OrangePufferFish(700, 300, 200, 200),
            new GreenPufferFish(700, 350, 300, 0),
            new GreenPufferFish(800, 150, 100, 100),
            new LilaJellyFish(950, 200, 0, 150),
            new YellowJellyFish(1000, 200, 0, 150),
            new LilaJellyFish(1050, 200, 0, 150),
            new YellowJellyFish(1100, 200, 0, 150),
            new HeavyRedPufferFish(1350, 300, 200, 0),
            new HeavyPinkJellyFish(1450, 200, 0, 150),
            new HeavyGreenJellyFish(1500, 200, 0, 150),
            new HeavyPinkJellyFish(1550, 200, 0, 150),
            new HeavyGreenJellyFish(1600, 200, 0, 150),
            new HeavyRedPufferFish(1900, 300, 200, 200),
            new Endboss(2500, 200, 250, 250, 2250)
        ];
    }

    /**
     * @returns - the coins for level 1 in an array
     */
    function createLevel1Coins() {
        return [new Coin(-800,150),
            new Coin(-625,150),
            new Coin(400,50),
            new Coin(1250,100),
            new Coin(1750,400)
        ];
    }

    /**
     * @returns - the poison for level 1 in an array
     */
    function createLevel1Poison() {
        return [new Poison(-800,330),
            new Poison(500,400),
            new Poison(1300,400),
            new Poison(2500,400)
        ];
    }

    /**
     * @returns - the health items for level 1 in an array 
     */
    function createLevel1Health() {
        return [new Health(-250,100),
            new Health(2050,400)
        ];
    }

    /**
     * @returns - the barriers for level 1 in an array
     */
    function createLevel1Barriers() {
        return [new RockVertical(-1000,480),
            new Tunnel(-1000),
            new Tunnel(-450),
            new RockHorizontal(800),
            new RockHorizontal(1350),
            new RockVertical(2000,360),
            new RockVertical(2750,480)
        ];
    }

    /**
     * @returns - the layer 5 backgrounds for level 1 in an array
     */
    function createLevel1BgL5() {
        return [new BackgroundObject('img/3. Background/Layers/5. Water/D.png', -1440,-4),
            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', -1,-4),
            new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 1438,-4)
        ];
    }

    /**
     * @returns - the layer 4 backgrounds for level 1 in an array
     */
    function createLevel1BgL4() {
        return [new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', -1440,-3),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', -1,-3),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 1438,-3)
        ];
    }

    /**
     * @returns - the layer 3 backgrounds for level 1 in an array
     */
    function createLevel1BgL3() {
        return [new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -2880,-2),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -1439,-2),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -2,-2),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 1437,-2),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 2876,-2)
        ];
    }

    /**
     * @returns - the layer 2 backgrounds for level 1 in an array
     */
    function createLevel1BgL2() {
        return [new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', -2880,-1),
            new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', -1439,-1),
            new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', -2,-1),
            new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', 1437,-1)
        ];
    }

    /**
     * @returns - the layer 1 backgrounds for level 1 in an array
     */
    function createLevel1BgL1() {
        return [new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -2880,0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -1439,0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -2,0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 1437,0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 2876,0)
        ];
    }