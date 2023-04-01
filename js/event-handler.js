// Keyboard
/**
 * Eventlistener for onkeydown events
 */
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
    if(e.keyCode == 74 && world.statusBars[1].percentage >= 10) {
        keyboard.J = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});

/**
 * Eventlistener for onkeyup events
 */
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
});

// Fullscreen
document.addEventListener('fullscreenchange', exitFullscreenEventHandler);
document.addEventListener('webkitfullscreenchange', exitFullscreenEventHandler);
document.addEventListener('mozfullscreenchange', exitFullscreenEventHandler);
document.addEventListener('MSFullscreenChange', exitFullscreenEventHandler);

// Mobile Controller
/**
 * Eventlistener for touchstart and touchend events
 */
function bindBtnPressEvents() {
    document.getElementById('btn-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('btn-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('btn-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('btn-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('btn-up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('btn-up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
    document.getElementById('btn-down').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });
    document.getElementById('btn-down').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });
    document.getElementById('btn-bubble').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.H = true;
    });
    document.getElementById('btn-slap').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById('btn-poison').addEventListener('touchstart', (e) => {
        e.preventDefault();
        if(world.statusBars[1].percentage >= 10)
            keyboard.J = true;
    });
}