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
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function startGame() {
    document.getElementById('mid-pannel').innerHTML = '';
    document.getElementById('bottom-pannel').innerHTML = '';
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
    document.getElementById('top-pannel').innerHTML = ``;
    document.getElementById('mid-pannel').innerHTML = returnSettingsMidPannel(); 
    document.getElementById('bottom-pannel').innerHTML = returnFooter();
    settingsUpdate();
}

function returnSettingsMidPannel() {
    return `<div id="setting-pannel" class="settingPannel">
        <div class="settingHeader">
            <span>Settings</span>
            <img src="img/x-mark-32.png" class="closeMark" onclick="closeSettings()">
        </div>
        <a id="sound-button" onclick="toggleSound(this)">
            <img>
            <span>Toggle Sound</span>
        </a>
        <a id="fullscreen-button">
            <img src="img/fullscreen-32.png">
            <span>Toggle Fullscreen</span>
        </a>
        <a onclick="openInstructions()">
            <img src="img/help-32.png">
            <span>Instruction</span>
        </a>
        <a id="hitboxes-button" onclick="toggleHitboxes()">
            <img src="img/square-32.png">
            <span>Show Hitboxes</span>
        </a>
    </div>`;
}

function returnFooter() {
    return `<a href="#">Data Privacy</a>
        <a href="#">Imprint</a>`;
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
        document.getElementById('mid-pannel').innerHTML = ``;
        document.getElementById('bottom-pannel').innerHTML = ``;
    } else {
        document.getElementById('mid-pannel').innerHTML = returnStartBtn();
        document.getElementById('bottom-pannel').innerHTML = returnFooter();
    }
    document.getElementById('top-pannel').innerHTML = returnHeader();
}

function returnHeader() {
    return `<img onclick="openSettings()" src="img/6.Botones/Settings/settings.png">`;
}

function returnStartBtn() {
    return `<img class="startBtn" onclick="startGame()" src="img/6.Botones/Start/2.png">`
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
    document.getElementById('mid-pannel').innerHTML = `
        <div id="setting-pannel" class="settingPannel">
            <div class="settingHeader">
                <button class="backBtn" onclick="openSettings()">&#171;</button>
                <span>Instructions</span>
                <img src="img/x-mark-32.png" class="closeMark" onclick="closeSettings()">
            </div>
            <div class="slider">
                <button class="sliderBtn prevImg" onclick="instructionSlider(-1)">&#8249;</button>
                <button class="sliderBtn nextImg" onclick="instructionSlider(1)">&#8250;</button>
                <img id="instruction-img" src="${instructionImgUrl[instructionImgId]}" alt="Instruction Image">        
            </div>
        </div>`;
}

function instructionSlider(offset) {
    const image = document.getElementById('instruction-img');
    instructionImgId = instructionImgId + offset;
    if(instructionImgId < 0) instructionImgId = instructionImgUrl.length - 1;
    if(instructionImgId >= instructionImgUrl.length) instructionImgId = 0;
    image.src = instructionImgUrl[instructionImgId];
}