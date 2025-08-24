const startAdventureButton = document.getElementById("startAdventureButton");
const welcomeDescription = document.getElementById("welcomeDescription");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeContainer = document.getElementById("welcomeContainer");
const gameInstruction = document.getElementById("gameInstruction");
const fireAttackButton = document.getElementById("fireAttackButton");
const waterAttackButton = document.getElementById("waterAttackButton");
const grassAttackButton = document.getElementById("grassAttackButton");
const physicalAttackButton = document.getElementById("physicalAttackButton");
const yourHPContainer = document.getElementById("yourHPContainer");
const yourHP = document.getElementById("yourHP");
const enemyHPContainer = document.getElementById("enemyHPContainer");
const enemyHP = document.getElementById("enemyHP");
const duelResultContainer = document.getElementById("duelResultContainer");
const duelResultText = document.getElementById("duelResultText");
const duelResultSuperEffective = document.getElementById("duelResultSuperEffective");
const duelResultNotEffective = document.getElementById("duelResultNotEffective");
const duelResultNormallyEffective = document.getElementById("duelResultNormallyEffective");
const fireAttackCount = document.getElementById("fireAttackCount");
const waterAttackCount = document.getElementById("waterAttackCount");
const grassAttackCount = document.getElementById("grassAttackCount");
const physicalAttackCount = document.getElementById("physicalAttackCount");
const totalRoundCount = document.getElementById("totalRoundCount");
const enemyPokemonContainer = document.getElementById("enemyPokemonContainer");
const yourPokemonContainer = document.getElementById("yourPokemonContainer");
const elementEnemy = document.getElementById("elementEnemy");
const elementYou = document.getElementById("elementYou");
const enemyPokemon = document.getElementById("enemyPokemon");
const yourPokemon = document.getElementById("yourPokemon");
const superEffectiveSound = document.getElementById("superEffectiveSound");
const NotEffectiveSound = document.getElementById("NotEffectiveSound");
const playAgainButton = document.getElementById("playAgainButton");
const battleSong = document.getElementById("battleSong");
const victorySong = document.getElementById("victorySong");
const defeatedSong = document.getElementById('defeatedSong');
const tieSong = document.getElementById('tieSong');
const opening = document.getElementById('opening');
const characterSelectionContainer = document.getElementById('characterSelectionContainer');
const chooseCharacterButton = document.getElementById('chooseCharacterButton');
const characterDisplayContainer = document.getElementById('characterDisplayContainer');
const yourName = document.getElementById('yourName');
const enemyName = document.getElementById('enemyName');
const gameStory = document.getElementById('gameStory');
const chooseCharacterText = document.getElementById('chooseCharacterText');

var roundCounter = 0;

var fireAttackCounter = 0;
var waterAttackCounter = 0;
var grassAttackCounter = 0;
var physicalAttackCounter = 0;

var superEffectiveContainer =0;
var normallyEffectiveContainer = 0;
var notEffectiveContainer = 0;

let chosenEnemy;

// window.onclick = () => {
//     opening.play();
// };
const enemyArray = ['aang' , 'kakashi', 'brewmaster' ];
chooseCharacterButton.addEventListener('click', () => {
    characterSelectionContainer.classList.remove('hidden');
    opening.play();
    chooseCharacterText.classList.add('slowlyAppear');
    characterDisplayContainer.classList.add('slowlyAppear');
    gameStory.classList.remove('hidden');
    gameStory.classList.add('starWarsText');


});

const characterArray = ['charmander', 'bulbasaur','squirtle'];

characterArray.forEach((item) => {
    // let newDiv = document.createElement('div');
    // newDiv.textContent = `${item.charAt(0).toUpperCase() + item.slice(1)}`;
    let newImg = document.createElement('img');
    newImg.src = `./asset/${item}.png`;
    newImg.alt = item;
    newImg.id = `${item}Character`;
    newImg.classList = `character cursor-pointer active:scale-90 active:shadow-lg hover:scale-110 transition-transform duration-300 mx-auto ml-6 mr-6`;
    newImg.classList.add('w-34');
    // characterDisplayContainer.appendChild(newDiv);
    characterDisplayContainer.appendChild(newImg);


})

  const items = document.querySelectorAll(".character");

  items.forEach(item => {
    item.addEventListener("click", () => {
      // Remove selection from all
      items.forEach(i => i.classList.remove("selected"));
      // Add selection to clicked
      item.classList.add("selected");
    });
  });

const squirtleCharacter = document.getElementById("squirtleCharacter");
const charmanderCharacter = document.getElementById('charmanderCharacter');
const bulbasaurCharacter = document.getElementById('bulbasaurCharacter');

    squirtleCharacter.addEventListener('click', () => {
        yourPokemon.src = "./asset/squirtle.png";
        yourName.textContent = "Squirtle";
        startAdventureButton.classList.remove('hidden');
    });

    charmanderCharacter.addEventListener('click', () => {
        yourPokemon.src = "./asset/charmander.png";
        yourName.textContent = "Charmander";
        startAdventureButton.classList.remove('hidden');
    });

    bulbasaurCharacter.addEventListener('click', () => {
        yourPokemon.src = "./asset/bulbasaur.png";
        yourName.textContent = "Bulbasaur";
        startAdventureButton.classList.remove('hidden');
    });



startAdventureButton.addEventListener("click", () => {
    chosenEnemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    enemyPokemon.src = `./asset/${chosenEnemy}.png`;
    enemyPokemon.classList.add('w-[18%]');
    enemyPokemon.classList.add('h-[18%]');
    gameStory.classList.add('hidden');
    gameStory.classList.remove('starWarsText');
    enemyName.textContent = chosenEnemy;
    characterSelectionContainer.classList.add('hidden');
    const duelContainer = document.getElementById("duelContainer");
    duelContainer.classList.remove("hidden");
    welcomeDescription.classList.add("hidden");
    startAdventureButton.classList.add("hidden");
    welcomeTitle.classList.add("hidden");
    welcomeContainer.classList.add("hidden");
    yourPokemon.classList.add('youMoveRight');
    enemyPokemon.classList.add('enemyMoveLeft');
    setTimeout(()=>{
        yourPokemon.classList.remove('youMoveRight');
        enemyPokemon.classList.remove('enemyMoveLeft');
    }, 1000);
    opening.pause();
    battleSong.play();
});

const iconArray = ['fire.png', 'water.png', 'grass.png', 'physical.png'];

const enemyAttackArray = ["Fire", "Water", "Grass", "Physical"];

let playerDamageThisTurn;

let enemyDamageThisTurn;

let enemyAttackThisTurn;

var yourHPValue = 100;

var enemyHPValue = 100;



// function resetGame(){
//     duelResultContainer.classList.add("hidden");
//     gameInstruction.textContent = "";
//     duelResultText.textContent = "";
//     fireAttackCount.textContent = "";
//     waterAttackCount.textContent = "";
//     grassAttackCount.textContent = "";
//     physicalAttackCount.textContent = "";
//     duelResultSuperEffective.textContent = "";
//     duelResultNormallyEffective.textContent = "";
//     duelResultNotEffective.textContent = "";
//     totalRoundCount.textContent = "";
//     yourHPValue = 100;
//     enemyHPValue = 100;
//     gameInstruction.textContent = `Let's continue the duel`;
//     roundCounter = 0;
//     fireAttackCounter = 0;
//     waterAttackCounter = 0;
//     grassAttackCounter = 0;
//     physicalAttackCounter = 0;
//     superEffectiveContainer =0;
//     normallyEffectiveContainer = 0;
//     notEffectiveContainer = 0;
//     yourHP.style.width = `${yourHPValue}%`;
//     enemyHP.style.width = `${enemyHPValue}%`;
// };

// playAgainButton.addEventListener("click", resetGame);

// fireAttackButton.addEventListener("click", () => alert("Fire attack clicked"));
// waterAttackButton.addEventListener("click", () => console.log("Water attack clicked"));
// grassAttackButton.addEventListener("click", () => console.log("Grass attack clicked"));
// physicalAttackButton.addEventListener("click", () => console.log("Physical attack clicked"));

function resultCheck(){
    setTimeout(()=>{
            if(yourHPValue <= 0 && enemyHPValue > 0){
                battleSong.pause();
                battleSong.currentTime = 0;
                defeatedSong.play();
                gameInstruction.textContent = "You have been defeated!";
                duelResultContainer.classList.remove("hidden");
                duelResultText.textContent = "You lost the duel!";
                fireAttackCount.textContent = fireAttackCounter;
                waterAttackCount.textContent = waterAttackCounter;
                grassAttackCount.textContent = grassAttackCounter;
                physicalAttackCount.textContent = physicalAttackCounter;
                duelResultSuperEffective.textContent = superEffectiveContainer;
                duelResultNormallyEffective.textContent = normallyEffectiveContainer;
                duelResultNotEffective.textContent = notEffectiveContainer;
                totalRoundCount.textContent = roundCounter;
                return;
            }else if(yourHPValue > 0 && enemyHPValue <= 0){
                battleSong.pause();
                battleSong.currentTime = 0;
                victorySong.play();
                gameInstruction.textContent = "You won the duel!";
                duelResultContainer.classList.remove("hidden");
                duelResultText.textContent = "You won the duel!";
                fireAttackCount.textContent = fireAttackCounter;
                waterAttackCount.textContent = waterAttackCounter;
                grassAttackCount.textContent = grassAttackCounter;
                physicalAttackCount.textContent = physicalAttackCounter;
                duelResultSuperEffective.textContent = superEffectiveContainer;
                duelResultNormallyEffective.textContent = normallyEffectiveContainer;
                duelResultNotEffective.textContent = notEffectiveContainer;
                totalRoundCount.textContent = roundCounter;
                return;
            }else if(yourHPValue <= 0 && enemyHPValue <= 0){
                battleSong.pause();
                battleSong.currentTime = 0;
                tieSong.play();
                gameInstruction.textContent = "Both you and the enemy have been defeated!";
                duelResultContainer.classList.remove("hidden");
                duelResultText.textContent = "It's a draw!";
                fireAttackCount.textContent = fireAttackCounter;
                waterAttackCount.textContent = waterAttackCounter;
                grassAttackCount.textContent = grassAttackCounter;
                physicalAttackCount.textContent = physicalAttackCounter;
                duelResultSuperEffective.textContent = superEffectiveContainer;
                duelResultNormallyEffective.textContent = normallyEffectiveContainer;
                duelResultNotEffective.textContent = notEffectiveContainer;
                totalRoundCount.textContent = roundCounter;
                return;
            }
    },1000);



}

function duelStart(e){

    roundCounter++;
    enemyAttackThisTurn = enemyAttackArray[Math.floor(Math.random() * enemyAttackArray.length)];
    yourHP.style.width = `${yourHPValue}%`;
    enemyHP.style.width = `${enemyHPValue}%`;
    fireAttackButton.classList.add('cursor-not-allowed');
    waterAttackButton.classList.add('cursor-not-allowed');
    grassAttackButton.classList.add('cursor-not-allowed');
    physicalAttackButton.classList.add('cursor-not-allowed');

    fireAttackButton.classList.add('text-gray-100');
    waterAttackButton.classList.add('text-gray-100');
    grassAttackButton.classList.add('text-gray-100');
    physicalAttackButton.classList.add('text-gray-100');
    if(e.target.id === "fireAttackButton"){
        fireAttackCounter++;
        if(enemyAttackThisTurn === "Fire"){
            gameInstruction.textContent = "Enemy used Fire attack! It's a tie!";
            playerDamageThisTurn = 10;
            enemyDamageThisTurn = 10;
            setTimeout(() => {
                gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                normallyEffectiveContainer++;
                elementYou.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementYou.classList.add('yourelementTie');
                elementEnemy.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementEnemy.classList.add('enemyelementTie');
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                resultCheck()

            }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');
                
                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementTie');
                elementEnemy.classList.remove('enemyelementTie');


 
                return;
            }, 2500);

        }else if(enemyAttackThisTurn === "Water"){
            gameInstruction.textContent = "Enemy used Water attack! Your attack loses!";
            playerDamageThisTurn = 5;
            enemyDamageThisTurn = 20;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's not effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                notEffectiveContainer++;
                elementYou.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementYou.classList.add('yourelementLose');
                elementEnemy.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                elementEnemy.classList.add('enemyelementWin');
                setTimeout(() => {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                resultCheck()
            }, 1000);
                        setTimeout(() => {
                    elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                elementYou.classList.remove('yourelementLose');
                elementEnemy.classList.remove('enemyelementWin');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }else if(enemyAttackThisTurn === "Grass"){
            gameInstruction.textContent = "Enemy used Grass attack! Your attack wins!";
            playerDamageThisTurn = 20;
            enemyDamageThisTurn = 5;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                superEffectiveContainer++;
                elementYou.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementYou.classList.add('yourelementWin');
                elementEnemy.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                elementEnemy.classList.add('enemyelementLose');
                setTimeout(() => {
                    enemyPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                resultCheck()
            }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementWin');
                elementEnemy.classList.remove('enemyelementLose');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }

    }
    else if(e.target.id === "waterAttackButton"){
        waterAttackCounter++;
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! your attack wins!";
                playerDamageThisTurn = 20;
                enemyDamageThisTurn = 5;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    superEffectiveContainer++;
                    elementYou.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                    elementEnemy.classList.add('enemyelementLose');
                    setTimeout(() => {
                        enemyPokemon.classList.add('getHit');
                        superEffectiveSound.play();

                    }, 600);
                    resultCheck()
                }, 1000);
                setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementWin');
                elementEnemy.classList.remove('enemyelementLose');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Water"){
                gameInstruction.textContent = "Enemy used Water attack! It's a tie!";
                playerDamageThisTurn = 10;
                enemyDamageThisTurn = 10;
                setTimeout(() => {
                    gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    elementYou.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementEnemy.classList.add('enemyelementTie');
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementTie');
                elementEnemy.classList.remove('enemyelementTie');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Grass"){
                gameInstruction.textContent = "Enemy used Grass attack! Your attack loses!";
                playerDamageThisTurn = 5;
                enemyDamageThisTurn = 20;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's not effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    elementYou.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementEnemy.classList.add('enemyelementWin');
                setTimeout(() => {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                    notEffectiveContainer++;
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');


                elementYou.classList.remove('yourelementLose');
                elementEnemy.classList.remove('enemyelementWin');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }

        }
    else if(e.target.id === "grassAttackButton"){
        grassAttackCounter++;
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! Your attack loses!";
                playerDamageThisTurn = 5;
                enemyDamageThisTurn = 20;
                setTimeout(() => {                
                    elementYou.innerHTML = "";
                    elementEnemy.innerHTML = "";
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's not effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    notEffectiveContainer++;

                    elementYou.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                    elementEnemy.classList.add('enemyelementWin');
                setTimeout(() => {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');


                elementYou.classList.remove('yourelementLose');
                elementEnemy.classList.remove('enemyelementWin');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Water"){
                gameInstruction.textContent = "Enemy used Water attack! Your attack wins!";
                playerDamageThisTurn = 20;
                enemyDamageThisTurn = 5;
                setTimeout(() => {

                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    superEffectiveContainer++;
                    elementYou.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementEnemy.classList.add('enemyelementLose');
                    setTimeout(() => {
                        enemyPokemon.classList.add('getHit');
                        superEffectiveSound.play();

                    }, 600);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementWin');
                elementEnemy.classList.remove('enemyelementLose');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Grass"){
                gameInstruction.textContent = "Enemy used Grass attack! It's a tie!";
                playerDamageThisTurn = 10;
                enemyDamageThisTurn = 10;
                setTimeout(() => {
                    gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    elementYou.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementEnemy.classList.add('enemyelementTie');
        
                    setTimeout(()=>{
                        NotEffectiveSound.play();
                    },500);
                    resultCheck()
                }, 1000);
                setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                    gameInstruction.textContent = `Let's continue the duel`;
                    fireAttackButton.classList.remove('cursor-not-allowed');
                    waterAttackButton.classList.remove('cursor-not-allowed');
                    grassAttackButton.classList.remove('cursor-not-allowed');
                    physicalAttackButton.classList.remove('cursor-not-allowed');

                    fireAttackButton.classList.remove('text-gray-100');
                    waterAttackButton.classList.remove('text-gray-100');
                    grassAttackButton.classList.remove('text-gray-100');
                    physicalAttackButton.classList.remove('text-gray-100');

                    elementYou.classList.remove('yourelementTie');
                    elementEnemy.classList.remove('enemyelementTie');
                    return;
                }, 2500);
            }

         }
     else if(e.target.id === "physicalAttackButton"){
            physicalAttackCounter++;
              gameInstruction.innerHTML = `Enemy used  ${enemyAttackThisTurn} attack! However it doesn't matter since you use physical!`;
                playerDamageThisTurn = 3;
                enemyDamageThisTurn = 3;
                setTimeout(() => {
                    gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's okay effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    yourPokemon.classList.add('yourelementTie');

                    enemyPokemon.classList.add('enemyelementTie');
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                yourPokemon.classList.remove('yourelementTie');
                enemyPokemon.classList.remove('enemyelementTie');
                return;
            }, 2500);

        }





}



        playAgainButton.addEventListener("click", ()=>{
                duelResultContainer.classList.add("hidden");
                tieSong.pause();
                victorySong.pause();
                defeatedSong.pause();
                battleSong.pause();
                battleSong.currentTime = 0;
                // gameInstruction.textContent = "";
                // duelResultText.textContent = "";
                // fireAttackCount.textContent = "";
                // waterAttackCount.textContent = "";
                // grassAttackCount.textContent = "";
                // physicalAttackCount.textContent = "";
                // duelResultSuperEffective.textContent = "";
                // duelResultNormallyEffective.textContent = "";
                // duelResultNotEffective.textContent = "";
                // totalRoundCount.textContent = "";
                yourHPValue = 100;
                enemyHPValue = 100;
                // gameInstruction.textContent = `Let's continue the duel`;
                // roundCounter = 0;
                // fireAttackCounter = 0;
                // waterAttackCounter = 0;
                // grassAttackCounter = 0;
                // physicalAttackCounter = 0;
                // superEffectiveContainer =0;
                // normallyEffectiveContainer = 0;
                // notEffectiveContainer = 0;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHP.style.width = `${enemyHPValue}%`;
                duelContainer.classList.add("hidden");
                // welcomeDescription.classList.remove("hidden");
                startAdventureButton.classList.remove("hidden");
                // welcomeTitle.classList.remove("hidden");
                welcomeContainer.classList.remove("hidden");
                characterSelectionContainer.classList.remove('hidden');
                chooseCharacterButton.classList.add('hidden');
                // alert('this button works')
        });


