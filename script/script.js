const burgericon = document.getElementById('burgericon');
const navmobilecontainer = document.getElementById('navmobilecontainer');
const navmobile = document.getElementById('navmobile');

burgericon.addEventListener('click', () => {
    navmobilecontainer.classList.toggle('hidden');
});


navmobilecontainer.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!navmobile.contains(event.target)) {
        navmobilecontainer.classList.add('hidden');
    }
  });

const duelStartButton = document.getElementById('duelStartButton');
const magicDuelMechanism = document.getElementById('magicDuelMechanism');
duelStartButton.addEventListener('click', () => { 
    magicDuelMechanism.classList.remove('hidden');
    duelStartButton.classList.add('hidden');
});


let magicMeter = document.getElementById('magicMeter');
let magicDuelLevel = document.getElementById('magicDuelLevel');
let abraKadabraButton = document.getElementById('abraKadabraButton');
let magicToken = 10;
let opponentMagicToken = 100-magicToken;

magicDuelLevel.textContent = 1;

let magicMeterLeft = document.getElementById('magicMeterLeft');
let magicMeterRight = document.getElementById('magicMeterRight');

magicMeterLeft.style.width = magicToken + '%';
magicMeterRight.style.width = opponentMagicToken + '%';

setInterval(() => {
    magicToken--;
    opponentMagicToken++;
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';

    if(magicToken<=0){
        magicDuelOutcomeContainer.classList.remove('hidden');
        magicDuelOutcome.classList.remove('hidden');
        magicDuelResult.textContent = 'You lose!';
        magicDuelMessage.textContent = 'Better luck next time!';
        magicDuelOutcomeLoseButton.classList.remove('hidden');
    }

}, 5000/magicDuelLevel.textContent);

abraKadabraButton.addEventListener('click', () => {
    magicToken += 5;
    opponentMagicToken -= 5;
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
    if(magicToken>=100){
        magicDuelOutcomeContainer.classList.remove('hidden');
        magicDuelOutcome.classList.remove('hidden');
        magicDuelResult.textContent = 'You win!';
        magicDuelMessage.textContent = 'Congratulations!';
        magicDuelOutcomeWinButton.classList.remove('hidden');

    }
    
});

const magicDuelOutcomeContainer = document.getElementById('magicDuelOutcomeContainer');
const magicDuelOutcome = document.getElementById('magicDuelOutcome');
const magicDuelResult = document.getElementById('magicDuelResult');
const magicDuelMessage = document.getElementById('magicDuelMessage');
const magicDuelOutcomeWinButton = document.getElementById('magicDuelOutcomeWinButton');
const magicDuelOutcomeLoseButton = document.getElementById('magicDuelOutcomeLoseButton');

// switch(true) {
//     case (magicToken <= 0):
//         magicDuelOutcomeContainer.classList.remove('hidden');
//         magicDuelOutcome.classList.remove('hidden');
//         magicDuelResult.textContent = 'You lose!';
//         magicDuelMessage.textContent = 'Better luck next time!';
//         magicDuelOutcomeLoseButton.textContent = 'Try Again';
//         break;
//     case (magicToken >= 100):
//         magicDuelOutcomeContainer.classList.remove('hidden');
//         magicDuelOutcome.classList.remove('hidden');
//         magicDuelResult.textContent = 'You win!';
//         magicDuelMessage.textContent = 'Congratulations!';
//         magicDuelOutcomeWinButton.textContent = 'Go to the Next Level';
//         break;
// }
// console.log(`magicToken: ${magicToken}`);
// if(magicToken>=100){
//         magicDuelOutcomeContainer.classList.remove('hidden');
//         magicDuelOutcome.classList.remove('hidden');
//         magicDuelResult.textContent = 'You win!';
//         magicDuelMessage.textContent = 'Congratulations!';
//         magicDuelOutcomeWinButton.textContent = 'Go to the Next Level';
// }else if(magicToken<=0){
//         magicDuelOutcomeContainer.classList.remove('hidden');
//         magicDuelOutcome.classList.remove('hidden');
//         magicDuelResult.textContent = 'You lose!';
//         magicDuelMessage.textContent = 'Better luck next time!';
//         magicDuelOutcomeLoseButton.textContent = 'Try Again';
// }
