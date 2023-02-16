let canvas;
let world;
let keyboard = new Keyboard();
let sound = false;
let fullscreen = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
    console.log(world)
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

function openSettings() {
    document.getElementById('top-pannel').innerHTML = ``;
    document.getElementById('mid-pannel').innerHTML = `
        <div class="settingPannel">
            <img src="" class="">
            <span onclick="closeSettings()">Settings</span>
            <a>
                <img>
                <span>Toggle Sound</span>
            </a>
            <a id="fullscreen-button">
                <img>
                <span>Toggle Fullscreen</span>
            </a>
            <a>
                <img>
                <span>Instruction</span>
            </a>
            <a>
                <img>
                <span>Show Hitboxes</span>
            </a>
        </div>`;
    document.getElementById('bottom-pannel').innerHTML = `
        <a href="#">Data Privacy</a>
        <a href="#">Imprint</a>`;
    if(fullscreen) {
        document.getElementById('fullscreen-button').onclick = function() {closeFullscreen();}
    } else {
        document.getElementById('fullscreen-button').onclick = function() {openFullscreen();}
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