class Level {
    character;
    enemies;
    backgrounds;
    barriers;
    coins;
    poisons;
    hearts;
    level_end_x = 1440*5;
    level_start_x = 1440*(-3);
    collectibleCoins;
    ambience_sound = new Audio('audio/ambience_1.mp3');
    game_sound = new Audio('audio/gamesound.mp3');
    boss_sound = new Audio('audio/endboss_2.mp3');
    win_sound = new Audio('audio/gamewin.mp3');
    lose_sound = new Audio('audio/gameover.mp3');

    constructor(enemies, coins, poisons, hearts, barriers, bgL5, bgL4, bgL3, bgL2, bgL1) {
        this.enemies = enemies;
        this.coins = coins;
        this.collectibleCoins = coins.length;
        this.poisons = poisons;
        this.hearts = hearts;
        this.barriers = barriers;
        this.backgrounds = [bgL5, bgL4, bgL3, bgL2, bgL1];
        
        this.game_sound.loop = true;
        this.ambience_sound.loop = true;
        this.boss_sound.loop = true;
    }
}