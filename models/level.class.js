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
    ambience_sound = new Audio('audio/ambience_1.mp3');
    game_sound = new Audio('audio/gamesound.mp3');

    constructor(enemies, coins, poisons, hearts, barriers, bgL5, bgL4, bgL3, bgL2, bgL1) {
        this.enemies = enemies;
        this.coins = coins;
        this.poisons = poisons;
        this.hearts = hearts;
        this.barriers = barriers;
        this.backgrounds = [bgL5, bgL4, bgL3, bgL2, bgL1];
    }
}