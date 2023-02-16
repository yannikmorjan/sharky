let canvas;
let world;
let keyboard = new Keyboard();

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
        <div onclick="closeSettings()" class="settingPannel">
            <img src="" class="">
            <span>Settings</span>
            <a>
                <img>
                <span>Toggle Sound</span>
            </a>
            <a>
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
}

function closeSettings() {
    document.getElementById('top-pannel').innerHTML = `
    <img onclick="openSettings()" src="img/6.Botones/Settings/settings.png">`;
    document.getElementById('mid-pannel').innerHTML = ``;
    document.getElementById('bottom-pannel').innerHTML = ``;
}