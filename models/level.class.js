class Level {
    character;
    enemies;
    backgrounds;
    barriers;
    barrierColider = [];
    coins;
    poisons;
    hearts;
    level_start_x;
    level_end_x;
    collectibleCoins;
    ambience_sound = new Audio('audio/ambience_1.mp3');
    game_sound = new Audio('audio/gamesound.mp3');
    boss_sound = new Audio('audio/endboss_2.mp3');
    win_sound = new Audio('audio/gamewin.mp3');
    lose_sound = new Audio('audio/gameover.mp3');

    constructor(lvlArea, enemies, coins, poisons, hearts, barriers, bgL5, bgL4, bgL3, bgL2, bgL1) {
        this.level_start_x = lvlArea[0];
        this.level_end_x = lvlArea[1];
        this.enemies = enemies;
        this.coins = coins;
        this.collectibleCoins = coins.length;
        this.poisons = poisons;
        this.hearts = hearts;
        this.barriers = barriers;
        barriers.forEach(barrier => {
            barrier.rectColider.forEach(colider => {
                this.barrierColider.push(colider)
            })
        });
        this.backgrounds = [bgL5, bgL4, bgL3, bgL2, bgL1];
        this.game_sound.loop = true;
        this.ambience_sound.loop = true;
        this.boss_sound.loop = true;
    }
}