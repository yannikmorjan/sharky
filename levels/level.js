function initLevel(lvl) {
    if (lvl == 'lvl1') {
        return level1
    }
}

const level1 = new Level(
    [
        new LilaJellyFish(-550, 300, 0, 100),
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
    ],
    [
        new Coin(-800,150),
        new Coin(-625,150),
        new Coin(400,50),
        new Coin(1250,100),
        new Coin(1750,400)
        
    ],
    [
        new Poison(500,400),
        new Poison(1300,400)
    ],
    [
        new Health(-250,100),
        new Health(2050,400)
    ],
    [
        new RockVertical(-1000,480),
        new Tunnel(-1000),
        new Tunnel(-450),
        new RockHorizontal(800),
        new RockHorizontal(1350),
        new RockVertical(2000,360),
        new RockVertical(2750,480)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', -1440,-4),
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 0,-4),
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 1440,-4)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', -1440,-3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 0,-3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 1440,-3)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -2880,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -1440,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 0,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 1440,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 2880,-2)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', -2880,-1),
        new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', -1440,-1),
        new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', 0,-1),
        new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', 1440,-1)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -2880,0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -1440,0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 0,0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 1440,0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 2880,0)
    ]
);