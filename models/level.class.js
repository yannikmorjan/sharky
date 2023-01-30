class Level {
    character;
    enemies;
    backgrounds;
    barriers;
    level_end_x = 720*5;
    game_sound = new Audio('audio/ambience_2.mp3');

    constructor(enemies, barriers, bgL5, bgL4, bgL3, bgL2, bgL1) {
        this.enemies = enemies;
        this.barriers = barriers;
        this.backgrounds = [bgL5, bgL4, bgL3, bgL2, bgL1];
    }
}