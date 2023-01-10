class Level {
    character;
    enemies;
    backgrounds;
    level_end_x = 720*5;
    game_sound = new Audio('audio/ambience_2.mp3');

    constructor(enemies, backgrounds) {
        this.enemies = enemies;
        this.backgrounds = backgrounds;
    }

    

}