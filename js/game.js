let canvas;
let world;
const keyboard = new Keyboard();
let fullscreen = false;
let intervalIds = [];
const instructionImgUrl = ['img/6.Botones/Instructions 0.png','img/6.Botones/Instructions 1.png', 'img/6.Botones/Instructions 2.png'];
let instructionImgId = 0;
let sliderAutomation;
let gameIsPaused = true;
let gameHasStarted = false;
let gameWinner = false;
let gameOver = false;

function init() {
    gameIsPaused = true;
    gameHasStarted = false;
    calcPannelStructur();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    checkMobile();
}

function startGame() {
    changePannels(returnHeader,returnNothing,returnController);
    document.getElementById('pannel-container').classList.remove('startscreen');
    gameHasStarted = true;
    gameIsPaused = false;
    bindBtnPressEvents();
}

function restartGame() {
    // location.reload();
    intervalIds.forEach(clearInterval);
    intervalIds = [];
    gameIsPaused = false;
    gameHasStarted = true;
    gameWinner = false;
    gameOver = false;
    world = new World(canvas, keyboard);
    changePannels(returnHeader,returnNothing,returnNothing);
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
    changePannels(returnNothing,returnSettings,returnFooter);
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

function calcPannelStructur() {
    if(!gameHasStarted && !gameOver && !gameWinner) {
        changePannels(returnHeader,returnStartBtn,returnFooter);
    } else if(gameHasStarted && !gameOver && !gameWinner) {
        gameIsPaused = false;
        changePannels(returnHeader,returnNothing,returnController);
    } else if (gameHasStarted && !gameOver && gameWinner) {
        changePannels(returnHeader,returnWinScreen,returnFooter);
    } else if (gameHasStarted && gameOver && !gameWinner) {
        changePannels(returnHeader,returnGameOverScreen,returnFooter);
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
    } else {}
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
    changePannels(returnNothing,returnInstructions,returnFooter);
    initSliderAutomation();
}

function instructionSlider(offset) {
    const image = document.getElementById('instruction-img');
    instructionImgId = instructionImgId + offset;
    if(instructionImgId < 0) instructionImgId = instructionImgUrl.length - 1;
    if(instructionImgId >= instructionImgUrl.length) instructionImgId = 0;
    image.src = instructionImgUrl[instructionImgId];
    initSliderAutomation();
}

function initSliderAutomation() {
    sliderAutomation = setTimeout(() => {
        instructionSlider(1);
    },5000);
}

function stopSliderAutomation() {
    clearTimeout(sliderAutomation);
}

function detectMob() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

function checkMobile() {
    if(detectMob()) {
        checkScreenOrientation();
    }
}

function checkScreenOrientation() {
    window.addEventListener('resize', () => {
        if (window.innerWidth < window.innerHeight)
            renderNonLandscape();
        else
            renderLandscape();
    });
}

function renderNonLandscape() {
    document.getElementById('mobile-rotation-screen').classList.remove('d-none');
    document.getElementById('title').classList.add('d-none');
    if (!document.getElementById('canvas-container').className.includes('d-none'))
        document.getElementById('canvas-container').classList.add('d-none');
}

function renderLandscape() {
    document.getElementById('title').classList.remove('d-none');
    document.getElementById('canvas-container').classList.remove('d-none');
    if (!document.getElementById('mobile-rotation-screen').className.includes('d-none'))
        document.getElementById('mobile-rotation-screen').classList.add('d-none');
}
