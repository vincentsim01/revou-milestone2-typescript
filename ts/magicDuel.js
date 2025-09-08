// import {initNavMenu} from './script.js';
// document.addEventListener('DOMContentLoaded', () =>{
//     initNavMenu();
// });
var duelStartButton = document.getElementById('duelStartButton');
var magicDuelMechanism = document.getElementById('magicDuelMechanism');
var spellSpeed = document.getElementById('spellSpeed');
var magicMeter = document.getElementById('magicMeter');
var magicDuelLevel = document.getElementById('magicDuelLevel');
var abraKadabraButton = document.getElementById('abraKadabraButton');
var avadakedavra = document.getElementById('avadakedavra');
var hedwigTheme = document.getElementById('hedwigTheme');
var avadakedavrasound = document.getElementById('avadakedavrasound');
var magicMeterLeft = document.getElementById('magicMeterLeft');
var magicMeterRight = document.getElementById('magicMeterRight');
var magicDuelOutcomeContainer = document.getElementById('magicDuelOutcomeContainer');
var magicDuelOutcome = document.getElementById('magicDuelOutcome');
var magicDuelResult = document.getElementById('magicDuelResult');
var magicDuelMessage = document.getElementById('magicDuelMessage');
var magicDuelClickCount = document.getElementById('magicDuelClickCount');
var magicDuelOutcomeWinButton = document.getElementById('magicDuelOutcomeWinButton');
var magicDuelOutcomeLoseButton = document.getElementById('magicDuelOutcomeLoseButton');
var magicDuelOutcomeExitButton = document.getElementById('magicDuelOutcomeExitButton');
var harrisspell = document.getElementById('harrisspell');
var koklemotspellpower = document.getElementById('koklemotspellpower');
var duelLevelCounter = 1;
var clickCounter = 0;
var magicToken = 10;
var opponentMagicToken = 100 - magicToken;
var intervalId = null;
function startInterval() {
    // Clear existing interval before starting new
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(function () {
        magicToken--;
        opponentMagicToken++;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
        if (magicToken <= 0) {
            magicDuelOutcomeContainer.classList.remove('hidden');
            magicDuelOutcome.classList.remove('hidden');
            magicDuelResult.textContent = 'You lose!';
            magicDuelMessage.textContent = 'Better luck next time!';
            magicDuelClickCount.textContent = "You clicked ".concat(clickCounter, " times!");
            magicDuelOutcomeLoseButton.classList.remove('hidden');
        }
    }, 1000 / duelLevelCounter);
}
duelStartButton.addEventListener('click', function () {
    hedwigTheme.play();
    magicDuelMechanism.classList.remove('hidden');
    duelStartButton.classList.add('hidden');
    harrisspell.classList.remove('hidden');
    koklemotspellpower.classList.remove('hidden');
    //assign value for the magicmeter for Harris and Koklemot
    magicToken = 10;
    opponentMagicToken = 100 - magicToken;
    magicDuelLevel.textContent = duelLevelCounter;
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
    var spellspeed = 1 / duelLevelCounter;
    spellSpeed.textContent = "1 Spell every ".concat(spellspeed.toFixed(2), " Seconds");
    //Start Koklemot's spell
    startInterval();
});
abraKadabraButton.addEventListener('click', function () {
    magicToken += 5;
    opponentMagicToken -= 5;
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
    clickCounter++;
    if (magicToken >= 100) {
        clearInterval(intervalId);
        avadakedavra.classList.remove('hidden');
        avadakedavrasound.play();
        setTimeout(function () {
            avadakedavra.classList.add('hidden');
        }, 2000);
        magicDuelOutcomeContainer.classList.remove('hidden');
        magicDuelOutcome.classList.remove('hidden');
        magicDuelResult.textContent = 'You win!';
        magicDuelMessage.textContent = 'Congratulations!';
        magicDuelClickCount.textContent = "You clicked ".concat(clickCounter, " times!");
        magicDuelOutcomeWinButton.classList.remove('hidden');
        // magicToken=1000000000;
    }
});
magicDuelOutcomeLoseButton.addEventListener('click', function () {
    magicDuelOutcomeContainer.classList.add('hidden');
    magicDuelOutcome.classList.add('hidden');
    magicDuelResult.textContent = '';
    magicDuelMessage.textContent = '';
    magicDuelClickCount.textContent = '';
    magicDuelOutcomeWinButton.classList.add('hidden');
    magicDuelOutcomeLoseButton.classList.add('hidden');
    magicToken = 10;
    opponentMagicToken = 100 - magicToken;
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
    startInterval();
});
magicDuelOutcomeWinButton.addEventListener('click', function () {
    magicDuelOutcomeContainer.classList.add('hidden');
    magicDuelOutcome.classList.add('hidden');
    magicDuelResult.textContent = '';
    magicDuelMessage.textContent = '';
    magicDuelClickCount.textContent = '';
    magicDuelOutcomeWinButton.classList.add('hidden');
    magicDuelOutcomeLoseButton.classList.add('hidden');
    magicToken = 10;
    opponentMagicToken = 100 - magicToken;
    // const levelNow = parseInt(magicDuelLevel.textContent, 10) || 0;
    duelLevelCounter = duelLevelCounter + 1;
    // console.log(`duelLevelCounter win button: ${duelLevelCounter}`);
    magicDuelLevel.textContent = duelLevelCounter;
    var spellspeed = 1 / duelLevelCounter;
    spellSpeed.textContent = "1 Spell every ".concat(spellspeed.toFixed(2), " seconds");
    startInterval();
});
magicDuelOutcomeExitButton.addEventListener('click', function () {
    magicDuelOutcomeContainer.classList.add('hidden');
    magicDuelOutcome.classList.add('hidden');
    magicDuelResult.textContent = '';
    magicDuelMessage.textContent = '';
    magicDuelClickCount.textContent = '';
    harrisspell.classList.add('hidden');
    koklemotspellpower.classList.add('hidden');
    magicDuelOutcomeWinButton.classList.add('hidden');
    magicDuelOutcomeLoseButton.classList.add('hidden');
    console.log("magictoken exit buttonn ".concat(magicToken, " opponentMagicToken: ").concat(opponentMagicToken));
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
    magicDuelMechanism.classList.add('hidden');
    duelStartButton.classList.remove('hidden');
    duelLevelCounter = 1; // reset level dengan jelas
    magicDuelLevel.textContent = duelLevelCounter;
    console.log("duelLevelCounter exit button: ".concat(duelLevelCounter));
    spellSpeed.textContent = duelLevelCounter;
    clearInterval(intervalId);
    clickCounter = 0;
});
