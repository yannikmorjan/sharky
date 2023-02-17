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
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function openSettings() {
    document.getElementById('top-pannel').innerHTML = ``;
    document.getElementById('mid-pannel').innerHTML = `
        <div class="settingPannel">
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
            <a id="hitboxes-button" onclick="toggleHitboxes(this)">
                <img src="img/square-32.png">
                <span>Show Hitboxes</span>
            </a>
        </div>`;
    document.getElementById('bottom-pannel').innerHTML = `
        <a href="#">Data Privacy</a>
        <a href="#">Imprint</a>`;
    loadSettings();
}

function loadSettings() {
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
    document.getElementById('canvas-frame').classList.add('d-none');
    elem = document.getElementById('canvas-container');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    document.getElementById('canvas').style.width = '100vw';
    document.getElementById('canvas').style.height = '100vh';
    fullscreen = true;
    closeSettings();
}

function closeFullscreen() {
        document.getElementById('canvas-frame').classList.remove('d-none');
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        document.getElementById('canvas').style.width = '720px';
        document.getElementById('canvas').style.height = '480px';
        fullscreen = false;
        closeSettings();
}

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        closeFullscreen();
    }
}

function toggleSound(element) {
    world.sound ? muteSound(element) : enableSound(element);
}

function enableSound(element) {
    world.sound = true;
    element.childNodes[1].src = 'img/sound-32.png';
}

function muteSound(element) {
    world.sound = false;
    element.childNodes[1].src = 'img/mute-32.png';
}

function toggleHitboxes(element) {
    world.hitboxes = !world.hitboxes
}