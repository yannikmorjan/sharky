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
        new RockVertical(-800,480),
        new Tunnel(-800),
        new RockHorizontal(2*680),
    ],
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', -1440,-4),
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 0,-4),
        new BackgroundObject('img/3. Background/Layers/5. Water/D.png', 1440,-4)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', -1440,-4),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 0,-4),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 1440,-4)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', -1440,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 0,-2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 1440,-2)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', -1440,-0.5),
        new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', 0,-0.5),
        new BackgroundObject('img/3. Background/Layers/1. Light/COMPLETO.png', 1440,-0,5)
    ],
    [
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', -1440,0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 0,0),   
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 1440,0)
    ]
);