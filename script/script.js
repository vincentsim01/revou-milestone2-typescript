document.addEventListener("dblclick", function (event) {
  event.preventDefault();
});

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
const spellSpeed = document.getElementById('spellSpeed');



let magicMeter = document.getElementById('magicMeter');
let magicDuelLevel = document.getElementById('magicDuelLevel');
let abraKadabraButton = document.getElementById('abraKadabraButton');


let magicMeterLeft = document.getElementById('magicMeterLeft');
let magicMeterRight = document.getElementById('magicMeterRight');

const magicDuelOutcomeContainer = document.getElementById('magicDuelOutcomeContainer');
const magicDuelOutcome = document.getElementById('magicDuelOutcome');
const magicDuelResult = document.getElementById('magicDuelResult');
const magicDuelMessage = document.getElementById('magicDuelMessage');
const magicDuelOutcomeWinButton = document.getElementById('magicDuelOutcomeWinButton');
const magicDuelOutcomeLoseButton = document.getElementById('magicDuelOutcomeLoseButton');
const magicDuelOutcomeExitButton = document.getElementById('magicDuelOutcomeExitButton');


duelStartButton.addEventListener('click', () => { 
    magicDuelMechanism.classList.remove('hidden');
    duelStartButton.classList.add('hidden');

    let magicToken = 10;
    let opponentMagicToken = 100-magicToken;

    magicDuelLevel.textContent = 1;

    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';

    spellSpeed.textContent = magicDuelLevel.textContent;

    let intervalId = setInterval(() => {
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
        }else if(magicToken>=100){
                magicToken=1000000000;
        }

        }, 
        5000/magicDuelLevel.textContent);

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
                magicToken=1000000000;
            }    
    }); 




    magicDuelOutcomeLoseButton.addEventListener('click', () => {
        magicDuelOutcomeContainer.classList.add('hidden');
        magicDuelOutcome.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelOutcomeWinButton.classList.add('hidden');
        magicDuelOutcomeLoseButton.classList.add('hidden');
        magicToken = 10;
        opponentMagicToken = 100 - magicToken;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
    });

    magicDuelOutcomeWinButton.addEventListener('click', () => {
        magicDuelOutcomeContainer.classList.add('hidden');
        magicDuelOutcome.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelOutcomeWinButton.classList.add('hidden');
        magicDuelOutcomeLoseButton.classList.add('hidden');
        magicToken = 10;
        opponentMagicToken = 100 - magicToken;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
        magicDuelLevel.textContent++;
        spellSpeed.textContent = magicDuelLevel.textContent;
        clearInterval(intervalId);

            var intervalId2 = setInterval(() => {
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
        
    });

    magicDuelOutcomeExitButton.addEventListener('click', () => {
        magicDuelOutcomeContainer.classList.add('hidden');
        magicDuelOutcome.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelOutcomeWinButton.classList.add('hidden');
        magicDuelOutcomeLoseButton.classList.add('hidden');
        magicToken = 10;
        opponentMagicToken = 100 - magicToken;
        magicDuelMechanism.classList.add('hidden');
        duelStartButton.classList.remove('hidden');
        magicDuelLevel.textContent = 1;
        clearInterval(intervalId2);
    });

});







