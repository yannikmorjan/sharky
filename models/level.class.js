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

    /**
     * It takes in all the level parameters and sets them to the level's properties.
     * @param lvlArea - [x, y]
     * @param enemies - array of enemy objects
     * @param coins - array of coin objects
     * @param poisons - array of poison objects
     * @param hearts - array of health objects
     * @param barriers - array of barrier objects
     * @param bgL5 - array of background layer 5 objects
     * @param bgL4 - array of background layer 4 objects
     * @param bgL3 - array of background layer 3 objects
     * @param bgL2 - array of background layer 2 objects
     * @param bgL1 - array of background layer 1 objects
     */
    constructor(lvlArea, enemies, coins, poisons, hearts, barriers, backgrounds) {
        this.level_start_x = lvlArea[0];
        this.level_end_x = lvlArea[1];
        this.enemies = enemies;
        this.coins = coins;
        this.collectibleCoins = coins.length;
        this.poisons = poisons;
        this.hearts = hearts;
        this.barriers = barriers;
        this.collectBarrierColider();
        this.backgrounds = backgrounds;
        this.loopSounds();
    }

    /** 
     * Loops all game sounds 
     */
    loopSounds() {
        this.game_sound.loop = true;
        this.ambience_sound.loop = true;
        this.boss_sound.loop = true;
    }

    /**
     * Collects all barrier Colider in one Array
     */
    collectBarrierColider() {
        this.barriers.forEach(barrier => {
            barrier.rectColider.forEach(colider => {
                this.barrierColider.push(colider)
            })
        });
    }
}