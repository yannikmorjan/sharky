function initLevel(lvl) {
    if (lvl == 'lvl1') {
        return level1
    }
}

const level1 = new Level(
    [
        new PufferFish(),
        new JellyFish(),
        new PufferFish(),
        new Endboss()
    ],
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new Tunnel(0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720),
        new RockVertical(720),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720*2),
        new RockHorizontal(2*720),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720*3),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720*4),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720*4),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720*4),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720*4),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720*4),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720*5),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720*5),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720*5),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720*5),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720*5)
    ]
);