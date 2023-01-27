class Level {
    character;
    enemies;
    backgrounds;
    barriers;
    level_end_x = 720*5;
    game_sound = new Audio('audio/ambience_2.mp3');

    constructor(enemies, barriers, backgrounds) {
        this.enemies = enemies;
        this.barriers = barriers;
        this.backgrounds = backgrounds;
    }
}