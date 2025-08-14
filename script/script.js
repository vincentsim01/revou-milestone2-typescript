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
}, 5000/magicDuelLevel.textContent);

abraKadabraButton.addEventListener('click', () => {
    magicToken += 5;
    opponentMagicToken -= 5;
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
});
