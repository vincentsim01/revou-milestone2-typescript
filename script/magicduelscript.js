// const duelStartButton = document.getElementById('duelStartButton');
// const magicDuelMechanism = document.getElementById('magicDuelMechanism');
// const spellSpeed = document.getElementById('spellSpeed');

// let magicMeter = document.getElementById('magicMeter');
// const magicDuelLevel = document.getElementById('magicDuelLevel');
// let abraKadabraButton = document.getElementById('abraKadabraButton');


// const avadakedavra = document.getElementById('avadakedavra');
// const crucio = document.getElementById('crucio');

// let magicMeterLeft = document.getElementById('magicMeterLeft');
// let magicMeterRight = document.getElementById('magicMeterRight');

// const magicDuelOutcomeContainer = document.getElementById('magicDuelOutcomeContainer');
// const magicDuelOutcome = document.getElementById('magicDuelOutcome');
// const magicDuelResult = document.getElementById('magicDuelResult');
// const magicDuelMessage = document.getElementById('magicDuelMessage');
// const magicDuelClickCount = document.getElementById('magicDuelClickCount');
// const magicDuelOutcomeWinButton = document.getElementById('magicDuelOutcomeWinButton');
// const magicDuelOutcomeLoseButton = document.getElementById('magicDuelOutcomeLoseButton');
// const magicDuelOutcomeExitButton = document.getElementById('magicDuelOutcomeExitButton');
// const harrisspell = document.getElementById('harrisspell');
// const koklemotspellpower = document.getElementById('koklemotspellpower');

// const hedwigTheme = document.getElementById('hedwigTheme');
// const avadakedavrasound = document.getElementById('avadakedavrasound');

// var duelLevelCounter = 1;
// let clickCounter = 0;
// let magicToken = 10;
// let opponentMagicToken = 100-magicToken;

// let intervalId = null;


//         function startInterval() {
//             // Clear existing interval before starting new
//             if (intervalId) {
//                 clearInterval(intervalId);
//             }
//             intervalId = setInterval(() => {
//                 magicToken--;
//                 opponentMagicToken++;
//                 magicMeterLeft.style.width = magicToken + '%';
//                 magicMeterRight.style.width = opponentMagicToken + '%';
//                 if(magicToken<=0){
//                         // crucio.classList.remove('hidden');
//                         // setTimeout(() => {
//                         //     crucio.classList.add('hidden');
//                         // }, 2000);
//                         // clearInterval(intervalId);
//                         magicDuelOutcomeContainer.classList.remove('hidden');
//                         magicDuelOutcome.classList.remove('hidden');
//                         magicDuelResult.textContent = 'You lose!';
//                         magicDuelMessage.textContent = 'Better luck next time!';
//                         magicDuelClickCount.textContent = `You clicked ${clickCounter} times!`;
//                         magicDuelOutcomeLoseButton.classList.remove('hidden');

//                 }
//             }, 1000/duelLevelCounter);
//     }



// duelStartButton.addEventListener('click', () => { 
//     hedwigTheme.play();
//     // let clickCounter = 0;
//     magicDuelMechanism.classList.remove('hidden');
//     duelStartButton.classList.add('hidden');
//     harrisspell.classList.remove('hidden');
//     koklemotspellpower.classList.remove('hidden');

//     magicToken = 10;
//     opponentMagicToken = 100-magicToken;
//     magicDuelLevel.textContent = duelLevelCounter;
//     magicMeterLeft.style.width = magicToken + '%';
//     magicMeterRight.style.width = opponentMagicToken + '%';
//     let spellspeed = 1 / duelLevelCounter;

//     spellSpeed.textContent = `1 Spell every ${spellspeed.toFixed(2)} Seconds`;

//     startInterval();

//     let magicDuelLevelInt = Number(magicDuelLevel.textContent);

// });


// abraKadabraButton.addEventListener('click', () => {
//         magicToken += 5;
//         opponentMagicToken -= 5;
//         magicMeterLeft.style.width = magicToken + '%';
//         magicMeterRight.style.width = opponentMagicToken + '%';
//         clickCounter++;

//         if(magicToken>=100){
//                 // clearInterval(intervalId);
//                 avadakedavra.classList.remove('hidden');
//                 avadakedavrasound.play();
//                 setTimeout(() => {
//                     avadakedavra.classList.add('hidden');
//                 }, 2000);
//                 magicDuelOutcomeContainer.classList.remove('hidden');
//                 magicDuelOutcome.classList.remove('hidden');
//                 magicDuelResult.textContent = 'You win!';
//                 magicDuelMessage.textContent = 'Congratulations!';
//                 magicDuelClickCount.textContent = `You clicked ${clickCounter} times!`;
//                 magicDuelOutcomeWinButton.classList.remove('hidden');
//                 magicToken=1000000000;
//             }   
//         else if(magicToken>=98){

//         }
//     }); 


    




//     magicDuelOutcomeLoseButton.addEventListener('click', () => {
//         magicDuelOutcomeContainer.classList.add('hidden');
//         magicDuelOutcome.classList.add('hidden');
//         magicDuelResult.textContent = '';
//         magicDuelMessage.textContent = '';
//         magicDuelClickCount.textContent = '';
//         magicDuelOutcomeWinButton.classList.add('hidden');
//         magicDuelOutcomeLoseButton.classList.add('hidden');
//         magicToken = 10;
//         opponentMagicToken = 100 - magicToken;
//         magicMeterLeft.style.width = magicToken + '%';
//         magicMeterRight.style.width = opponentMagicToken + '%';
//     });

//     magicDuelOutcomeWinButton.addEventListener('click', () => {
//         magicDuelOutcomeContainer.classList.add('hidden');
//         magicDuelOutcome.classList.add('hidden');
//         magicDuelResult.textContent = '';
//         magicDuelMessage.textContent = '';
//         magicDuelClickCount.textContent = '';
//         magicDuelOutcomeWinButton.classList.add('hidden');
//         magicDuelOutcomeLoseButton.classList.add('hidden');
//         console.log(`magictoken win button ${magicToken} opponentMagicToken: ${opponentMagicToken}`);
//         magicToken = 10;
//         opponentMagicToken = 100 - magicToken;

//           const levelNow = parseInt(magicDuelLevel.textContent, 10) || 0;
//         duelLevelCounter = duelLevelCounter + 1;
//         // console.log(`duelLevelCounter win button: ${duelLevelCounter}`);
//         magicDuelLevel.textContent = duelLevelCounter;
//         let spellspeed = 1 / duelLevelCounter;
//         spellSpeed.textContent = `1 Spell every ${spellspeed.toFixed(2)} seconds`;
//         startInterval();
    
//     });


//             magicDuelOutcomeExitButton.addEventListener('click', () => {
//         magicDuelOutcomeContainer.classList.add('hidden');
//         magicDuelOutcome.classList.add('hidden');
//         magicDuelResult.textContent = '';
//         magicDuelMessage.textContent = '';
//         magicDuelClickCount.textContent = '';
//         harrisspell.classList.add('hidden');
//         koklemotspellpower.classList.add('hidden');
//         magicDuelOutcomeWinButton.classList.add('hidden');
//         magicDuelOutcomeLoseButton.classList.add('hidden');
//         console.log(`magictoken exit buttonn ${magicToken} opponentMagicToken: ${opponentMagicToken}`);
//         magicMeterLeft.style.width = magicToken + '%';
//         magicMeterRight.style.width = opponentMagicToken + '%';
//         magicDuelMechanism.classList.add('hidden');
//         duelStartButton.classList.remove('hidden');
//         duelLevelCounter = 1;  // reset level dengan jelas
//         magicDuelLevel.textContent = duelLevelCounter;
//         console.log(`duelLevelCounter exit button: ${duelLevelCounter}`);
//         spellSpeed.textContent = duelLevelCounter;
//         clearInterval(intervalId);
//         clickCounter=0;

//     });

