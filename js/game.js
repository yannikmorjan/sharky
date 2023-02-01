let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
    console.log(world)
}

window.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
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
    }
    if(e.keyCode == 74) {
        keyboard.J = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
});

function openSettings() {
    document.getElementById('game-overlay').classList.add('d-none');
    document.getElementById('settings-overlay').classList.remove('d-none');
}