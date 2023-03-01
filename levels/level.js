function initLevel(lvl) {
    if (lvl == 'lvl1') {
        return level1
    }
}

const level1 = new Level(
    [
        new GreenPufferFish(200, 300, 100, 0),
        new OrangePufferFish(300, 200, 100, 100),
        new HeavyRedPufferFish(0, 100, 100, 0),

        new LilaJellyFish(200, 300, 0, 100),
        new YellowJellyFish(300, 400, 0, 100),
        new HeavyGreenJellyFish(300, 200, 0, 100),
        new HeavyPinkJellyFish(400, 200, 0, 100),
        
        new Endboss(500, 100, 100, 200, 250)
    ],
    [
        new Coin(100,100),
        new Coin(200,100)
    ],
    [
        new Poison(500,400),
        new Poison(400,400),
        new Poison(300,400),
        new Poison(200,400),
        new Poison(100,400)
    ],
    [
        new Health(-200,100)
    ],
    [
        new RockVertical(-1000,480),
        new Tunnel(-1000),
        new RockHorizontal(800),
    ],
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', -1440,-4),
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 0,-4)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', -1440,-3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 0,-3)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -2880,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -1440,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 0,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 1440,-2),
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
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 1440,0)
    ]
);