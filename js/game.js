let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = true;
    }
    if(e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if(e.keyCode == 72) {
        keyboard.H = true;
    }
    if(e.keyCode == 74) {
        keyboard.J = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});

window.addEventListener('keyup', (e) => {
    if(e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = false;
    }
    if(e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if(e.keyCode == 72) {
        keyboard.H = false;
        world.character.isBubbleAttacking = false;
    }
    if(e.keyCode == 74) {
        keyboard.J = false;
        world.character.isBubbleAttacking = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
        world.character.isFinSlaping = false;
        world.character.invincible = false;
        world.character.finSlaped = false;
    }
});
document.addEventListener('fullscreenchange', exitFullscreenEventHandler);
document.addEventListener('webkitfullscreenchange', exitFullscreenEventHandler);
document.addEventListener('mozfullscreenchange', exitFullscreenEventHandler);
document.addEventListener('MSFullscreenChange', exitFullscreenEventHandler);

function openSettings() {
    document.getElementById('top-pannel').innerHTML = ``;
    document.getElementById('mid-pannel').innerHTML = `
        <div id="setting-pannel" class="settingPannel">
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
            <a>
                <img src="img/help-32.png">
                <span>Instruction</span>
            </a>
            <a id="hitboxes-button" onclick="toggleHitboxes()">
                <img src="img/square-32.png">
                <span>Show Hitboxes</span>
            </a>
        </div>`;
    document.getElementById('bottom-pannel').innerHTML = `
        <a href="#">Data Privacy</a>
        <a href="#">Imprint</a>`;
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
    document.getElementById('top-pannel').innerHTML = `
    <img onclick="openSettings()" src="img/6.Botones/Settings/settings.png">`;
    document.getElementById('mid-pannel').innerHTML = ``;
    document.getElementById('bottom-pannel').innerHTML = ``;
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
        element.childNodes[1].src = 'img/sound-32.png';
    } else {
        element.childNodes[1].src = 'img/mute-32.png';
    }
}

function toggleHitboxes() {
    world.hitboxes = !world.hitboxes
}