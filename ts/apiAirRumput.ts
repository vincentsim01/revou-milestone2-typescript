const startAdventureButton = document.getElementById("startAdventureButton") as HTMLElement;
const welcomeDescription:any = document.getElementById("welcomeDescription");
const welcomeTitle:any = document.getElementById("welcomeTitle");
const welcomeContainer:any = document.getElementById("welcomeContainer");
const gameInstruction:any = document.getElementById("gameInstruction");
const fireAttackButton= document.getElementById("fireAttackButton") as HTMLElement | null;
const waterAttackButton = document.getElementById("waterAttackButton") as HTMLElement | null;
const grassAttackButton = document.getElementById("grassAttackButton") as HTMLElement | null;
const physicalAttackButton = document.getElementById("physicalAttackButton") as HTMLElement | null;
const yourHPContainer:any = document.getElementById("yourHPContainer");
const yourHP:any = document.getElementById("yourHP");
const enemyHPContainer:any = document.getElementById("enemyHPContainer");
const enemyHP:any = document.getElementById("enemyHP");
const duelResultContainer:any = document.getElementById("duelResultContainer");
const duelResultText:any = document.getElementById("duelResultText");
const duelResultSuperEffective:any = document.getElementById("duelResultSuperEffective");
const duelResultNotEffective:any = document.getElementById("duelResultNotEffective");
const duelResultNormallyEffective:any = document.getElementById("duelResultNormallyEffective");
const fireAttackCount:any = document.getElementById("fireAttackCount");
const waterAttackCount:any = document.getElementById("waterAttackCount");
const grassAttackCount:any = document.getElementById("grassAttackCount");
const physicalAttackCount:any = document.getElementById("physicalAttackCount");
const totalRoundCount:any = document.getElementById("totalRoundCount");
const enemyPokemonContainer:any = document.getElementById("enemyPokemonContainer");
const yourPokemonContainer:any = document.getElementById("yourPokemonContainer");
const elementEnemy:any = document.getElementById("elementEnemy");
const elementYou:any = document.getElementById("elementYou");
const enemyPokemon:any = document.getElementById("enemyPokemon");
const yourPokemon:any = document.getElementById("yourPokemon");
const superEffectiveSound:any = document.getElementById("superEffectiveSound");
const NotEffectiveSound:any = document.getElementById("NotEffectiveSound");
const playAgainButton:any = document.getElementById("playAgainButton");
const battleSong:any = document.getElementById("battleSong");
const victorySong:any = document.getElementById("victorySong");
const defeatedSong:any = document.getElementById('defeatedSong');
const tieSong:any = document.getElementById('tieSong');
const opening:any = document.getElementById('opening');
const characterSelectionContainer:any = document.getElementById('characterSelectionContainer');
const chooseCharacterButton:any = document.getElementById('chooseCharacterButton');
const characterDisplayContainer:any = document.getElementById('characterDisplayContainer');
const yourName:any = document.getElementById('yourName');
const enemyName:any = document.getElementById('enemyName');
const gameStory:any = document.getElementById('gameStory');
const chooseCharacterText:any = document.getElementById('chooseCharacterText');
const generationList:any = document.getElementById('generationList');
const charactersClass:any = document.getElementsByClassName('character');
const yourHealthBar:any = document.getElementById('yourHealthBar');
const duelContainer:any = document.getElementById("duelContainer");

var roundCounter:number = 0;

var fireAttackCounter:number = 0;
var waterAttackCounter:number = 0;
var grassAttackCounter:number = 0;
var physicalAttackCounter:number = 0;

var superEffectiveContainer:number = 0;
var normallyEffectiveContainer:number = 0;
var notEffectiveContainer:number = 0;

let chosenEnemy:any=null;

const pokemonGenerationArray:any = 
[
    {
        'RedBlue':{
            fire:'charmander',
            water:'squirtle',
            grass:'bulbasaur'
        }
    },
    {
        'GoldSilver':{
            fire:'cyndaquil',
            water:'totodile',
            grass:'chikorita'
        }
    },
    {
        'RubySapphire':{
            fire:'torchic',
            water:'mudkip',
            grass:'treecko'
        }
    },
    {
        'DiamondPearl':{
            fire:'chimchar',
            water:'piplup',
            grass:'turtwig'
        }
    },
    {
        'BlackWhite':{
            fire:'tepig',
            water:'oshawott',
            grass:'snivy'
        }
    },
    {
        'XY':{
            fire:'fennekin',
            water:'froakie',
            grass:'chespin'
        }
    },
    {
        'SunMoon':{
            fire:'litten',
            water:'popplio',
            grass:'rowlet'
        }
    },
    {
        'SwordShield':{
            fire:'scorbunny',
            water:'sobble',
            grass:'grookey'
        }
    }
    ,
    {
        'ScarletViolet':{
            fire:'fuecoco',
            water:'quaxly',
            grass:'sprigatito'
        }
    }
]


let randomGenObj:any = pokemonGenerationArray[Math.floor(Math.random() * pokemonGenerationArray.length)];
let pokemons:any = Object.values(Object.values(randomGenObj)[0]);
let gameVersion:any = pokemonGenerationArray.map(genObj => Object.keys(genObj)[0]);

let characterArray:any = [...pokemons];


pokemonGenerationArray.forEach((item) => {
    let newDiv = document.createElement('button');
    newDiv.textContent = Object.keys(item)[0];
    newDiv.classList = `text-white ml-3 mr-3 md:text-lg text-sm cursor-pointer hover:scale-110 active:scale-90 `;
    newDiv.id = `generation-${Object.keys(item)[0]}`;
    let newImg = document.createElement('img');
    newImg.src=`../asset/apiAirRumput/${Object.keys(item)[0]}.png`;
    newImg.classList='md:w-[80px] w-[60px] mx-auto';
    newDiv.appendChild(newImg);
    generationList.appendChild(newDiv);
});

gameVersion.forEach((item)=>{
    let versionSelected = document.getElementById(`generation-${item}`);
    versionSelected.addEventListener('click', ()=>{
        const findVersion = Object.values(Object.values(pokemonGenerationArray.find(gen => gen[item]))[0]);
        characterArray = [...findVersion];
        DisplayCharacter(characterArray);

    });
});

const enemyArray:string[] = ['aang' , 'kakashi', 'brewmaster' ];
chooseCharacterButton.addEventListener('click', () => {
    characterSelectionContainer.classList.remove('hidden');
    DisplayCharacter(characterArray);
    opening.play();
    chooseCharacterText.classList.add('slowlyAppear');
    characterDisplayContainer.classList.add('slowlyAppear');
    generationList.classList.add('slowlyAppear');
    gameStory.classList.remove('hidden');
    gameStory.classList.add('starWarsText');


});


function DisplayCharacter(characterArray:any):void{
       characterDisplayContainer.innerHTML = '';
       characterArray.forEach((item:any) => {
        let newDiv:any = document.createElement('div');
        let newImg:any = document.createElement('img');
        newImg.src = `../asset/apiAirRumput/${item}.png`;
        newImg.alt = item;
        newImg.id = `${item}Character`;
        newImg.classList = `character cursor-pointer active:scale-90 active:border active:border-red-300 active:shadow-lg hover:scale-110 transition-transform duration-300 mx-auto ml-6 mr-6`;
        newImg.classList.add('md:w-34');
        newImg.classList.add('w-16');
        let newbr = document.createElement('br');
        let newName = document.createElement('div');
        newName.textContent = item.charAt(0).toUpperCase() + item.slice(1);
        newName.classList = 'text-center text-white font-lexend mt-2 mb-4';
        newDiv.appendChild(newImg);
        newDiv.appendChild(newbr);
        newDiv.appendChild(newName);
        characterDisplayContainer.appendChild(newDiv);
        pokemons=[...characterArray];
})
       clickPokemon();
       
}

  function clickPokemon():void{
        pokemons.forEach(pokemon => {
            let itemsCharacter = document.querySelectorAll(".character");

            itemsCharacter.forEach(item => {
                item.addEventListener("click", () => {
                // Remove selection from all
                itemsCharacter.forEach(i => i.classList.remove('selected'));
                // Add selection to clicked
                item.classList.add("selected");
                });
            });
            const pokemonCharacter = document.getElementById(`${pokemon}Character`);
            
            //update your pokemon avatar at the battle arena to the one that you selected
            pokemonCharacter.addEventListener('click', () => {
                yourPokemon.src = `../asset/apiAirRumput/${pokemon}.png`;
                yourName.textContent = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
                startAdventureButton.classList.remove('hidden');
            }); 
        });
  }


startAdventureButton.addEventListener("click", () => {
    //choose one random character from the enemy array
    chosenEnemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    enemyPokemon.src = `../asset/apiAirRumput/${chosenEnemy}.png`;
    enemyPokemon.classList.add('w-[18%]');
    enemyPokemon.classList.add('h-[18%]');

    //hide the introduction 
    gameStory.classList.add('hidden');
    gameStory.classList.remove('starWarsText');
    enemyName.textContent = chosenEnemy;
    characterSelectionContainer.classList.add('hidden');
    // const duelContainer:any = document.getElementById("duelContainer");
    duelContainer.classList.remove("hidden");
    welcomeDescription.classList.add("hidden");
    startAdventureButton.classList.add("hidden");
    welcomeTitle.classList.add("hidden");
    welcomeContainer.classList.add("hidden");

    //give animation to your character and enemy character when the battle just start
    yourPokemon.classList.add('youMoveRight');
    enemyPokemon.classList.add('enemyMoveLeft');

    //remove moving keyframe for both you and enemy after 1 second
    setTimeout(()=>{
        yourPokemon.classList.remove('youMoveRight');
        enemyPokemon.classList.remove('enemyMoveLeft');
    }, 1000);
    opening.pause();
    battleSong.play();
});

fireAttackButton?.addEventListener("click", duelStart );
waterAttackButton?.addEventListener("click", duelStart );
grassAttackButton?.addEventListener("click", duelStart );
physicalAttackButton?.addEventListener("click", duelStart );

// function duelStart():void{
//     alert("Click the attack button to start the duel!");
// }


const iconArray:any = ['fire.png', 'water.png', 'grass.png', 'physical.png'];

const enemyAttackArray:any = ["Fire", "Water", "Grass"];

let playerDamageThisTurn:any;

let enemyDamageThisTurn:any;

let enemyAttackThisTurn:any;

var yourHPValue:any = 100;

var enemyHPValue:any = 100;

yourHealthBar.textContent = `${yourHPValue}/100`;

//duel outcome
function resultCheck():any{
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





function duelStart(e:MouseEvent):void{
    const btn = e.currentTarget as HTMLButtonElement;
    roundCounter++;

    //choose which element for enemy either fire, water or grass
    enemyAttackThisTurn = enemyAttackArray[Math.floor(Math.random() * enemyAttackArray.length)];


    //assign health bar
    yourHP.style.width = `${yourHPValue}%`;
    enemyHP.style.width = `${enemyHPValue}%`;
    yourHealthBar.textContent = `${yourHPValue}/100`;



    //once one of the element button is selected all of the element buttons will be hidden for 3.5s
    fireAttackButton.classList.add('hidden');
    waterAttackButton.classList.add('hidden');
    grassAttackButton.classList.add('hidden');
    physicalAttackButton.classList.add('hidden');

    //remove pointer
    fireAttackButton.classList.remove('cursor-pointer');
    waterAttackButton.classList.remove('cursor-pointer');
    grassAttackButton.classList.remove('cursor-pointer');
    physicalAttackButton.classList.remove('cursor-pointer');

    fireAttackButton.classList.add('text-gray-100');
    waterAttackButton.classList.add('text-gray-100');
    grassAttackButton.classList.add('text-gray-100');
    physicalAttackButton.classList.add('text-gray-100');



    //if player choose fire button
    if(btn.id == "fireAttackButton"){
        fireAttackCounter++;
        if(enemyAttackThisTurn === "Fire"){
            gameInstruction.textContent = "Enemy used Fire attack! It's a tie!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 0;
            setTimeout(() => {
                gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                yourHealthBar.textContent = `${yourHPValue}/100`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                normallyEffectiveContainer++;
                elementYou.innerHTML = `<img src="../asset/apiAirRumput/fire.png" alt="Fire Icon">`;
   
                elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/fire.png" alt="Fire Icon">`;
       
                if(window.innerWidth<=768){
                    elementYou.classList.add('yourelementTieMobile');
                    elementEnemy.classList.add('enemyelementTieMobile');
                }else if(window.innerWidth>768){
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.classList.add('enemyelementTie');
                }
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                resultCheck()

            }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');
                
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
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 20;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                yourHealthBar.textContent = `${yourHPValue}/100`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                notEffectiveContainer++;
                elementYou.innerHTML = `<img src="../asset/apiAirRumput/fire.png" alt="Fire Icon">`;
     
                elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/water.png" alt="Water Icon">`;


                if(window.innerWidth<=768){
                    elementYou.classList.add('yourelementLoseMobile');
                    elementEnemy.classList.add('enemyelementWinMobile');
                }else if(window.innerWidth>768){
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.classList.add('enemyelementWin');
                }
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

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

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
            enemyDamageThisTurn = 0;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                yourHealthBar.textContent = `${yourHPValue}/100`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                superEffectiveContainer++;
                elementYou.innerHTML = `<img src="../asset/apiAirRumput/fire.png" alt="Fire Icon">`;

                elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/grass.png" alt="Grass Icon">`;

                if(window.innerWidth<=768){
                    elementYou.classList.add('yourelementWinMobile');
                    elementEnemy.classList.add('enemyelementLoseMobile');
                }else if(window.innerWidth>768){
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.classList.add('enemyelementLose');
                }
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

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

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
    //if player choose water button
    else if(btn.id === "waterAttackButton"){
        waterAttackCounter++;
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! your attack wins!";
                playerDamageThisTurn = 20;
                enemyDamageThisTurn = 0;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    yourHealthBar.textContent = `${yourHPValue}/100`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    superEffectiveContainer++;
                    elementYou.innerHTML = `<img src="../asset/apiAirRumput/water.png" alt="Water Icon">`;

                    elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/fire.png" alt="Fire Icon">`;
      

                    if(window.innerWidth<=768){
                        elementYou.classList.add('yourelementWinMobile');
                        elementEnemy.classList.add('enemyelementLoseMobile');
                    }else if(window.innerWidth>768){
                        elementYou.classList.add('yourelementWin');
                        elementEnemy.classList.add('enemyelementLose');
                    }
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

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

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
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 0;
                setTimeout(() => {
                    gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    yourHealthBar.textContent = `${yourHPValue}/100`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    elementYou.innerHTML = `<img src="../asset/apiAirRumput/water.png" alt="Water Icon">`;
        
                    elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/water.png" alt="Water Icon">`;
       


                    if(window.innerWidth<=768){
                        elementYou.classList.add('yourelementTieMobile');
                        elementEnemy.classList.add('enemyelementTieMobile');
                    }else if(window.innerWidth>768){
                        elementYou.classList.add('yourelementTie');
                        elementEnemy.classList.add('enemyelementTie');
                    }
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');


                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

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
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 20;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    yourHealthBar.textContent = `${yourHPValue}/100`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    elementYou.innerHTML = `<img src="../asset/apiAirRumput/water.png" alt="Water Icon">`;
     
                    elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/grass.png" alt="Grass Icon">`;
       
                    if(window.innerWidth<=768){
                        elementYou.classList.add('yourelementLoseMobile');
                        elementEnemy.classList.add('enemyelementWinMobile');
                    }else if(window.innerWidth>768){
                        elementYou.classList.add('yourelementLose');
                        elementEnemy.classList.add('enemyelementWin');
                    }
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

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

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
    //if player choose grass button
    else if(btn.id === "grassAttackButton"){
        grassAttackCounter++;
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! Your attack loses!";
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 20;
                setTimeout(() => {                
                    elementYou.innerHTML = "";
                    elementEnemy.innerHTML = "";
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    yourHealthBar.textContent = `${yourHPValue}/100`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    notEffectiveContainer++;

                    elementYou.innerHTML = `<img src="../asset/apiAirRumput/grass.png" alt="Grass Icon">`;
       
                    elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/fire.png" alt="Fire Icon">`;
      

                    if(window.innerWidth<=768){
                        elementYou.classList.add('yourelementLoseMobile');
                        elementEnemy.classList.add('enemyelementWinMobile');
                    }else if(window.innerWidth>768){
                        elementYou.classList.add('yourelementLose');
                        elementEnemy.classList.add('enemyelementWin');
                    }
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

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

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
                enemyDamageThisTurn = 0;
                setTimeout(() => {

                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    yourHealthBar.textContent = `${yourHPValue}/100`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    superEffectiveContainer++;
                    elementYou.innerHTML = `<img src="../asset/apiAirRumput/grass.png" alt="Grass Icon">`;

                    elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/water.png" alt="Water Icon">`;
 

                    if(window.innerWidth<=768){
                        elementYou.classList.add('yourelementWinMobile');
                        elementEnemy.classList.add('enemyelementLoseMobile');
                    }else if(window.innerWidth>768){
                        elementYou.classList.add('yourelementWin');
                        elementEnemy.classList.add('enemyelementLose');
                    }
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

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

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
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 0;
                setTimeout(() => {
                    gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    yourHealthBar.textContent = `${yourHPValue}/100`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    elementYou.innerHTML = `<img src="../asset/apiAirRumput/grass.png" alt="Grass Icon">`;

                    elementEnemy.innerHTML = `<img src="../asset/apiAirRumput/grass.png" alt="Grass Icon">`;


                    if(window.innerWidth<=768){
                        elementYou.classList.add('yourelementTieMobile');
                        elementEnemy.classList.add('enemyelementTieMobile');
                    }else if(window.innerWidth>768){
                        elementYou.classList.add('yourelementTie');
                        elementEnemy.classList.add('enemyelementTie');
                    }
        
                    setTimeout(()=>{
                        NotEffectiveSound.play();
                    },500);
                    resultCheck()
                }, 1000);
                setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                    gameInstruction.textContent = `Let's continue the duel`;

                    fireAttackButton.classList.remove('hidden');
                    waterAttackButton.classList.remove('hidden');
                    grassAttackButton.classList.remove('hidden');
                    physicalAttackButton.classList.remove('hidden');

                    fireAttackButton.classList.add('cursor-pointer');
                    waterAttackButton.classList.add('cursor-pointer');
                    grassAttackButton.classList.add('cursor-pointer');
                    physicalAttackButton.classList.add('cursor-pointer');

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
    //if player choose physical button
     else if(btn.id === "physicalAttackButton"){
            physicalAttackCounter++;
              gameInstruction.innerHTML = `Since you use physical enemy then also use physical!`;
                playerDamageThisTurn = Math.floor(Math.random()*21);
                enemyDamageThisTurn = Math.floor(Math.random()*21);
                setTimeout(() => {
                    gameInstruction.textContent = `you dealt ${playerDamageThisTurn} damage and your opponent dealt ${enemyDamageThisTurn}! It's okay effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    yourHealthBar.textContent = `${yourHPValue}/100`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    if(window.innerWidth<=768){
                        elementYou.classList.add('yourelementPhysicalMobile');
                        elementEnemy.classList.add('enemyelementPhysicalMobile');
                    }else if(window.innerWidth>768){
                        elementYou.classList.add('yourelementPhysical');
                        elementEnemy.classList.add('enemyelementPhysical');
                    }
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                yourPokemon.classList.remove('yourelementPhysical');

                enemyPokemon.classList.remove('enemyelementPhysical');

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                return;
            }, 2500);

        }


        // after duel end click this button to restart the game
        playAgainButton.addEventListener("click", ()=>{
                duelResultContainer.classList.add("hidden");

                //reset the song
                tieSong.pause();
                victorySong.pause();
                victorySong.currentTime = 0;
                defeatedSong.pause();
                battleSong.pause();
                battleSong.currentTime = 0;
                opening.play();
                opening.currentTime=0;

                //replenish health
                yourHPValue = 100;
                enemyHPValue = 100;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHP.style.width = `${enemyHPValue}%`;
                yourHealthBar.textContent = `${yourHPValue}/100`;

                //hide the duel container
                duelContainer.classList.add("hidden");
                startAdventureButton.classList.remove("hidden");
                welcomeContainer.classList.remove("hidden");

                //show the character select screen again
                DisplayCharacter(characterArray);
                characterSelectionContainer.classList.remove('hidden');
                chooseCharacterButton.classList.add('hidden');
        });


    }

// fireAttackButton?.addEventListener("click", () =>{
//     console.log("fire attack");
// } );

//start the duel after clicking one of the element button
// Duplicate implementation of duelStart removed to fix compile error.

// function duelStart():void{
//     alert("Click the attack button to start the duel!");
// }
