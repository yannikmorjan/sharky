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
let mobileMode = false;

/**
 * Initialise the Game
 */
function init() {
    gameIsPaused = true;
    gameHasStarted = false;
    calcPannelStructur();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, 'lvl1');
    checkMobile();
}

/**
 * Started the Game
 */
function startGame() {
    changePannels(returnHeader,returnNothing,returnController);
    document.getElementById('pannel-container').classList.remove('startscreen');
    gameHasStarted = true;
    gameIsPaused = false;
    bindBtnPressEvents();
}

/**
 * Reset the Game
 */
function restartGame() {
    intervalIds.forEach(clearInterval);
    gameIsPaused = false;
    gameHasStarted = true;
    gameWinner = false;
    gameOver = false;
    intervalIds = [];
    world = new World(canvas, keyboard, 'lvl1');
    checkMobile();
    changePannels(returnHeader,returnNothing,returnController);
    bindBtnPressEvents();
}

/**
 * Creates a Intervall and collects the ID in an Array called intervallIDs
 */
function setPausableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

/**
 * Creates a function that would only executed if the game isnt paused.
 */
function setPausableFn(self, fn) {
    if(!gameIsPaused) fn(self);
}

/**
 * Changes the Pannels to Settings 
 */
function openSettings() {
    if(gameHasStarted) gameIsPaused = true;
    changePannels(returnNothing,returnSettings,returnFooter);
    settingsUpdate();
}

/**
 * Updates the displayed texts and images based on the settings
 */
function settingsUpdate() {
    if(fullscreen) 
        document.getElementById('fullscreen-button').onclick = function() {closeFullscreen();}
    else if(!fullscreen)
        document.getElementById('fullscreen-button').onclick = function() {openFullscreen();}
    if(world.sound)
        document.getElementById('sound-button').childNodes[1].src = 'img/sound-32.png';
    else if(!world.sound)
        document.getElementById('sound-button').childNodes[1].src = 'img/mute-32.png';
    if(world.hitboxes)
        document.getElementById('hitboxes-button').childNodes[3].innerHTML = 'Hide Hitboxes';
    else if(!world.hitboxes)
        document.getElementById('hitboxes-button').childNodes[3].innerHTML = 'Show Hitboxes';
}

/**
 * Managed wich pannels should be displayed based on stages in the game.
 */
function calcPannelStructur() {
    if(!gameHasStarted && !gameOver && !gameWinner) {
        changePannels(returnHeader,returnStartBtn,returnFooter);
    } else if(gameHasStarted && !gameOver && !gameWinner) {
        gameIsPaused = false;
        changePannels(returnHeader,returnNothing,returnController);
        bindBtnPressEvents();
    } else if (gameHasStarted && !gameOver && gameWinner) {
        changePannels(returnHeader,returnWinScreen,returnFooter);
    } else if (gameHasStarted && gameOver && !gameWinner) {
        changePannels(returnHeader,returnGameOverScreen,returnFooter);
    }
}

/**
 * Open the canvas in fullscreen mode.
 */
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

/**
 * Provides some styling for fullscreenmode.
 */
function enterFullscreenHandler() {
    document.getElementById('canvas-frame').classList.add('d-none');
    document.getElementById('canvas').style.width = '100vw';
    document.getElementById('canvas').style.height = '100vh';
    document.getElementById('pannel-container').classList.add('startscreenFullScreen');
    document.getElementById('top-pannel').classList.add('topBotPannelFullScreen');
    document.getElementById('mid-pannel').classList.add('midPannelFullScreen');
    document.getElementById('bottom-pannel').classList.add('topBotPannelFullScreen');
    settingsUpdate();
}

/**
 * Closed fullscreen mode.
 */
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

/**
 * Reset fullscreen mode styling.
 */
function exitFullscreenHandler() {
    document.getElementById('canvas-frame').classList.remove('d-none');
    document.getElementById('canvas').style.width = '720px';
    document.getElementById('canvas').style.height = '480px';
    document.getElementById('pannel-container').classList.remove('startscreenFullScreen');
    document.getElementById('top-pannel').classList.remove('topBotPannelFullScreen');
    document.getElementById('mid-pannel').classList.remove('midPannelFullScreen');
    document.getElementById('bottom-pannel').classList.remove('topBotPannelFullScreen');
    settingsUpdate();
}

/**
 * Closed fullscreen mode on browser events.
 */
function exitFullscreenEventHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        closeFullscreen();
    }
}

/**
 * Toggled Sound and switch between setting images.
 * @param {html} element 
 */
function toggleSound(element) {
    world.sound = !world.sound;
    if (world.sound) {
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

  /**
   * Choose between normal gamesound and sound for the final endboss
   */
function chooseGameSound() {
    let id = world.level.enemies.length - 1;
    if (world.level.enemies[id].firstContact) {
        world.level.boss_sound.play();
    } else {
        world.level.game_sound.play();
    }
}

/**
 * Toggled the object hitboxes and the settings text.
 * @param {html} element 
 */
function toggleHitboxes(element) {
    world.hitboxes = !world.hitboxes
    if(world.hitboxes) {
        element.childNodes[3].innerHTML = 'Hide Hitboxes';
    } else {
        element.childNodes[3].innerHTML = 'Show Hitboxes';
    }
}

/**
 * Change the Pannel structure to instructions and start the slider automation.
 */
function openInstructions() {
    changePannels(returnNothing,returnInstructions,returnFooter);
    initSliderAutomation();
}

/**
 * Let you go for- or backwards through the instruction images.
 * @param {number} offset 
 */
function instructionSlider(offset) {
    const image = document.getElementById('instruction-img');
    instructionImgId = instructionImgId + offset;
    if(instructionImgId < 0) instructionImgId = instructionImgUrl.length - 1;
    if(instructionImgId >= instructionImgUrl.length) instructionImgId = 0;
    image.src = instructionImgUrl[instructionImgId];
    initSliderAutomation();
}

/**
 * After 10s the instruction images automation moves to the next image.
 */
function initSliderAutomation() {
    sliderAutomation = setTimeout(() => {
        instructionSlider(1);
    },10000);
}

/**
 * Stops the slider automation timeout
 */
function stopSliderAutomation() {
    clearTimeout(sliderAutomation);
}

/**
 * Returns true if the devive is an mobile device or your in developer tools
 * @returns boolean
 */
function detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

/**
 * If a mobile device is detected its set to true, after checkScreenOrientation() is called.
 */
function checkMobile() {
    if(detectMobile()) {
        mobileMode = true;
    } else {
        mobileMode = false;
    }
    checkScreenOrientation();
}

/**
 * Listen to a window resize and if the inner width is smaller than the inner height it calls renderNonLandscape().
 */
function checkScreenOrientation() {
    window.addEventListener('resize', () => {
        if (window.innerWidth < window.innerHeight)
            renderNonLandscape();
        else
            renderLandscape();
    });
}

/**
 * Stops the game and request a displaymovement to landscapemode.
 */
function renderNonLandscape() {
    document.getElementById('mobile-rotation-screen').classList.remove('d-none');
    document.getElementById('title').classList.add('d-none');
    if (!document.getElementById('canvas-container').className.includes('d-none'))
        document.getElementById('canvas-container').classList.add('d-none');
}

/**
 * Undo the renderNonLandscape() function.
 */
function renderLandscape() {
    document.getElementById('title').classList.remove('d-none');
    document.getElementById('canvas-container').classList.remove('d-none');
    if (!document.getElementById('mobile-rotation-screen').className.includes('d-none'))
        document.getElementById('mobile-rotation-screen').classList.add('d-none');
}
