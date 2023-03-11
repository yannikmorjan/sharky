let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;
let intervalIds = [];
let instructionImgUrl = ['img/6.Botones/Instructions 0-placeholder.png','img/6.Botones/Instructions 1.png', 'img/6.Botones/Instructions 2.png'];
let instructionImgId = 0;
let gameIsPaused = true;
let gameHasStarted = false;

function init() {
    gameIsPaused = true;
    gameHasStarted = false;
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function startGame() {
    changePannels(returnHeader,returnNothing,returnNothing);
    document.getElementById('pannel-container').classList.remove('startscreen');
    gameHasStarted = true;
    gameIsPaused = false;
}

function setPausableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function setPausableFn(self, fn) {
    if(!gameIsPaused) fn(self);
}

function openSettings() {
    if(gameHasStarted) gameIsPaused = true;
    changePannels(returnHeader,returnSettings,returnFooter);
    settingsUpdate();
}

function settingsUpdate() {
    if(fullscreen) {
        document.getElementById('fullscreen-button').onclick = function() {closeFullscreen();}
    } else if(!fullscreen) {
        document.getElementById('fullscreen-button').onclick = function() {openFullscreen();}
    }
    if(world.sound) {
        document.getElementById('sound-button').childNodes[1].src = 'img/sound-32.png';
    } else if(!world.sound) {
        document.getElementById('sound-button').childNodes[1].src = 'img/mute-32.png';
    }
}

function closeSettings() {
    if(gameHasStarted) {
        gameIsPaused = false;
        changePannels(returnHeader,returnNothing,returnNothing);
    } else {
        changePannels(returnHeader,returnStartBtn,returnFooter);
    }
}

function openFullscreen() {
    elem = document.getElementById('canvas-container');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    fullscreen = true;
    enterFullscreenHandler();
}

function enterFullscreenHandler() {
    document.getElementById('canvas-frame').classList.add('d-none');
    document.getElementById('canvas').style.width = '100vw';
    document.getElementById('canvas').style.height = '100vh';
    document.getElementById('top-pannel').classList.add('topBotPannelFullScreen');
    document.getElementById('mid-pannel').classList.add('midPannelFullScreen');
    document.getElementById('bottom-pannel').classList.add('topBotPannelFullScreen');
    settingsUpdate();
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    fullscreen = false;
    exitFullscreenHandler();
}

function exitFullscreenHandler() {
    document.getElementById('canvas-frame').classList.remove('d-none');
    document.getElementById('canvas').style.width = '720px';
    document.getElementById('canvas').style.height = '480px';
    document.getElementById('top-pannel').classList.remove('topBotPannelFullScreen');
    document.getElementById('mid-pannel').classList.remove('midPannelFullScreen');
    document.getElementById('bottom-pannel').classList.remove('topBotPannelFullScreen');
    settingsUpdate();
}

function exitFullscreenEventHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        closeFullscreen();
    }
}

function toggleSound(element) {
    world.sound = !world.sound;
    if(world.sound) {
        world.level.ambience_sound.play();
        chooseGameSound();
        element.childNodes[1].src = 'img/sound-32.png';
    } else {
        element.childNodes[1].src = 'img/mute-32.png';
        world.level.ambience_sound.pause();
        world.level.game_sound.pause();
        world.level.boss_sound.pause();
    }
}

function chooseGameSound() {
    let id = world.level.enemies.length -1
    if(world.level.enemies[id].firstContact) {
        world.level.boss_sound.play();
    } else {
        world.level.game_sound.play();
    }
}

function toggleHitboxes() {
    world.hitboxes = !world.hitboxes
}

function openInstructions() {
    changePannels(returnHeader,returnInstructions,returnFooter);
}

function instructionSlider(offset) {
    const image = document.getElementById('instruction-img');
    instructionImgId = instructionImgId + offset;
    if(instructionImgId < 0) instructionImgId = instructionImgUrl.length - 1;
    if(instructionImgId >= instructionImgUrl.length) instructionImgId = 0;
    image.src = instructionImgUrl[instructionImgId];
}