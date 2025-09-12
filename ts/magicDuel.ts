// import {initNavMenu} from './script.js';

// document.addEventListener('DOMContentLoaded', () =>{
//     initNavMenu();
// });

const duelStartButton = document.getElementById('duelStartButton') as HTMLElement | null;
const magicDuelMechanism = document.getElementById('magicDuelMechanism') as HTMLElement | null;
const spellSpeed:any = document.getElementById('spellSpeed');

let magicMeter = document.getElementById('magicMeter') as HTMLElement | null;
const magicDuelLevel:any = document.getElementById('magicDuelLevel');
let abraKadabraButton = document.getElementById('abraKadabraButton') as HTMLElement | null;


const avadakedavra = document.getElementById('avadakedavra') as HTMLElement | null;

const hedwigTheme = document.getElementById('hedwigTheme') as HTMLAudioElement | null;
const avadakedavrasound = document.getElementById('avadakedavrasound') as HTMLAudioElement | null;

let magicMeterLeft = document.getElementById('magicMeterLeft') as HTMLElement | null;
let magicMeterRight = document.getElementById('magicMeterRight') as HTMLElement | null;


const magicDuelOutcomeContainer = document.getElementById('magicDuelOutcomeContainer') as HTMLElement | null;
const magicDuelOutcome = document.getElementById('magicDuelOutcome') as HTMLElement | null;
const magicDuelResult = document.getElementById('magicDuelResult') as HTMLElement | null;
const magicDuelMessage = document.getElementById('magicDuelMessage') as HTMLElement | null;
const magicDuelClickCount = document.getElementById('magicDuelClickCount') as HTMLElement | null;

const magicDuelOutcomeWinButton = document.getElementById('magicDuelOutcomeWinButton') as HTMLElement | null;
const magicDuelOutcomeLoseButton = document.getElementById('magicDuelOutcomeLoseButton') as HTMLElement | null;
const magicDuelOutcomeExitButton = document.getElementById('magicDuelOutcomeExitButton') as HTMLElement | null;

const harrisspell = document.getElementById('harrisspell') as HTMLElement | null;
const koklemotspellpower = document.getElementById('koklemotspellpower') as HTMLElement | null;

var duelLevelCounter:number = 1;
let clickCounter:number = 0;
let magicToken:number = 10;
let opponentMagicToken:number = 100-magicToken;

let intervalId:any = null;

function startInterval():void {
    // Clear existing interval before starting new
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
        magicToken--;
        opponentMagicToken++;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
        if(magicToken<=0){
                magicDuelOutcomeContainer.classList.remove('hidden');
                magicDuelOutcome.classList.remove('hidden');
                magicDuelResult.textContent = 'You lose!';
                magicDuelMessage.textContent = 'Better luck next time!';
                magicDuelClickCount.textContent = `You clicked ${clickCounter} times!`;
                magicDuelOutcomeLoseButton.classList.remove('hidden');

        }
    }, 1000/duelLevelCounter);
}

duelStartButton.addEventListener('click', () => { 
    hedwigTheme.play();
    magicDuelMechanism.classList.remove('hidden');
    duelStartButton.classList.add('hidden');
    harrisspell.classList.remove('hidden');
    koklemotspellpower.classList.remove('hidden');

    //assign value for the magicmeter for Harris and Koklemot
    magicToken = 10;
    opponentMagicToken = 100-magicToken;

    magicDuelLevel.textContent = duelLevelCounter;

    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
    let spellspeed = 1 / duelLevelCounter;

    spellSpeed.textContent = `1 Spell every ${spellspeed.toFixed(2)} Seconds`;

    //Start Koklemot's spell
    startInterval();

});

abraKadabraButton?.addEventListener('click', () => {
        magicToken += 5;
        opponentMagicToken -= 5;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
        clickCounter++;

        if(magicToken>=100){
                clearInterval(intervalId);
                avadakedavra?.classList.remove('hidden');
                avadakedavrasound?.play();
                setTimeout(() => {
                    avadakedavra.classList.add('hidden');
                }, 2000);
                magicDuelOutcomeContainer?.classList.remove('hidden');
                magicDuelOutcome?.classList.remove('hidden');
                magicDuelResult.textContent = 'You win!';
                magicDuelMessage.textContent = 'Congratulations!';
                magicDuelClickCount.textContent = `You clicked ${clickCounter} times!`;
                magicDuelOutcomeWinButton?.classList.remove('hidden');
                // magicToken=1000000000;
            }   
    }); 

    magicDuelOutcomeLoseButton.addEventListener('click', () => {
        magicDuelOutcomeContainer?.classList.add('hidden');
        magicDuelOutcome?.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelClickCount.textContent = '';
        magicDuelOutcomeWinButton?.classList.add('hidden');
        magicDuelOutcomeLoseButton?.classList.add('hidden');
        magicToken = 10;
        opponentMagicToken = 100 - magicToken;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
        startInterval();
    });

    magicDuelOutcomeWinButton.addEventListener('click', () => {
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
        let spellspeed = 1 / duelLevelCounter;
        spellSpeed.textContent = `1 Spell every ${spellspeed.toFixed(2)} seconds`;
        startInterval();
    
    });


        magicDuelOutcomeExitButton.addEventListener('click', () => {
        magicDuelOutcomeContainer.classList.add('hidden');
        magicDuelOutcome.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelClickCount.textContent = '';
        harrisspell.classList.add('hidden');
        koklemotspellpower.classList.add('hidden');
        magicDuelOutcomeWinButton.classList.add('hidden');
        magicDuelOutcomeLoseButton.classList.add('hidden');
        console.log(`magictoken exit buttonn ${magicToken} opponentMagicToken: ${opponentMagicToken}`);
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
        magicDuelMechanism.classList.add('hidden');
        duelStartButton.classList.remove('hidden');
        duelLevelCounter = 1;  // reset level dengan jelas
        magicDuelLevel.textContent = duelLevelCounter;
        console.log(`duelLevelCounter exit button: ${duelLevelCounter}`);
        spellSpeed.textContent = duelLevelCounter;
        clearInterval(intervalId);
        clickCounter=0;

    });
