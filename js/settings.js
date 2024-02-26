function returnSettings() {
    return `<div id="setting-pannel" class="settingPannel">
        <div class="settingHeader">
            <span class="settingTitle">Settings</span>
            <img src="img/x-mark-32.png" class="closeMark" onclick="calcPannelStructur()">
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
        <a id="hitboxes-button" onclick="toggleHitboxes(this)">
            <img src="img/square-32.png">
            <span>Show Hitboxes</span>
        </a>
    </div>`;
}

function returnFooter() {
    return `<a href="legal.html">Data Privacy</a>
        <a href="imprint.html">Imprint</a>`;
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
            <img class="tryAgainBtn" onclick="restartGame()" src="img/6.Botones/Try again/Recurso 17.png" style="margin-top: 40px;">
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
            <img class="tryAgainBtn" onclick="restartGame()" src="img/6.Botones/Start/2.png" style="margin-top: 10px;">
        </div>`;
}

function returnInstructions() {
    return `
        <div id="setting-pannel" class="settingPannel">
            <div class="instrucionHeader">
                <button class="backBtn" onclick="openSettings(), stopSliderAutomation()">&#171;</button>
                <span class="settingTitle">Instructions</span>
                <img src="img/x-mark-32.png" class="closeMark" onclick="calcPannelStructur(), stopSliderAutomation()">
            </div>
            <div class="slider">
                <button class="sliderBtn prevImg" onclick="stopSliderAutomation(), instructionSlider(-1)">&#8249;</button>
                <img id="instruction-img" src="${instructionImgUrl[instructionImgId]}" alt="Instruction Image"> 
                <button class="sliderBtn nextImg" onclick="stopSliderAutomation(), instructionSlider(1)">&#8250;</button>       
            </div>
        </div>`;
}

function returnController() {
    return `
        <div class="mobileController d-none" id="mobile-controller">
            <div class="mobileControllerSection">
                <img id="btn-left" class="mobileControllerBtn" src="img/6.Botones/Key/arrow-left.png">
                <img id="btn-right" class="mobileControllerBtn" src="img/6.Botones/Key/arrow-right.png">
            </div>
            <div class="mobileControllerSection">
                <img id="btn-bubble" class="mobileControllerBtn" src="img/6.Botones/Key/bubble.png">
                <img id="btn-slap" class="mobileControllerBtn" src="img/6.Botones/Key/finslap.png">
                <img id="btn-poison" class="mobileControllerBtn" src="img/6.Botones/Key/poison.png">
            </div>
            <div class="mobileControllerSection">
                <img id="btn-up" class="mobileControllerBtn" src="img/6.Botones/Key/arrow-up.png">
                <img id="btn-down" class="mobileControllerBtn" src="img/6.Botones/Key/arrow-down.png">
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