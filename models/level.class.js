class Level {
    character;
    enemies;
    lights;
    backgrounds;
    level_end_x = 720*5;
    game_sound = new Audio('audio/gamesound.mp3');

    constructor(enemies, lights, backgrounds) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgrounds = backgrounds;
    }

    

}