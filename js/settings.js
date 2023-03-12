function returnSettings() {
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

function returnHeader() {
    return `<img onclick="openSettings()" src="img/6.Botones/Settings/settings.png">`;
}

function returnStartBtn() {
    return `<img class="startBtn" onclick="startGame()" src="img/6.Botones/Start/2.png">`
}

function returnGameOverScreen() {
    return `
        <div class="endScreen">
            <img class="endTitle" src="img/6.Botones/Tittles/Game Over/Recurso 10.png">
            <img class="tryAgainBtn" onclick="restartGame()" src="img/6.Botones/Try again/Recurso 17.png">
        </div>`;
}

function returnWinScreen() {
    return `
        <div class="endScreen">    
            <img class="endTitle" src="img/6.Botones/Tittles/You win/Recurso 22.png">
            <div style="display:flex; align-items:center; gap:10px">
                <img src="img/4. Marcadores/1. Coins/2.png" style="width:45px; height:45px;">
                <span style="font-size:32px">${world.character.coins} / ${world.level.collectibleCoins}</span>
            </div>
            <img class="tryAgainBtn" onclick="console.log('You Won -> Play Again')" src="img/6.Botones/Start/2.png">
        </div>`;
}

function returnInstructions() {
    return `
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

function returnNothing() {
    return ``;
}

function changePannels(top,mid,bottom) {
    document.getElementById('top-pannel').innerHTML = top();
    document.getElementById('mid-pannel').innerHTML = mid(); 
    document.getElementById('bottom-pannel').innerHTML = bottom();
}