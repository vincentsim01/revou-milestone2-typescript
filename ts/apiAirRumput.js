var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var startAdventureButton = document.getElementById("startAdventureButton");
var welcomeDescription = document.getElementById("welcomeDescription");
var welcomeTitle = document.getElementById("welcomeTitle");
var welcomeContainer = document.getElementById("welcomeContainer");
var gameInstruction = document.getElementById("gameInstruction");
var fireAttackButton = document.getElementById("fireAttackButton");
var waterAttackButton = document.getElementById("waterAttackButton");
var grassAttackButton = document.getElementById("grassAttackButton");
var physicalAttackButton = document.getElementById("physicalAttackButton");
var yourHPContainer = document.getElementById("yourHPContainer");
var yourHP = document.getElementById("yourHP");
var enemyHPContainer = document.getElementById("enemyHPContainer");
var enemyHP = document.getElementById("enemyHP");
var duelResultContainer = document.getElementById("duelResultContainer");
var duelResultText = document.getElementById("duelResultText");
var duelResultSuperEffective = document.getElementById("duelResultSuperEffective");
var duelResultNotEffective = document.getElementById("duelResultNotEffective");
var duelResultNormallyEffective = document.getElementById("duelResultNormallyEffective");
var fireAttackCount = document.getElementById("fireAttackCount");
var waterAttackCount = document.getElementById("waterAttackCount");
var grassAttackCount = document.getElementById("grassAttackCount");
var physicalAttackCount = document.getElementById("physicalAttackCount");
var totalRoundCount = document.getElementById("totalRoundCount");
var enemyPokemonContainer = document.getElementById("enemyPokemonContainer");
var yourPokemonContainer = document.getElementById("yourPokemonContainer");
var elementEnemy = document.getElementById("elementEnemy");
var elementYou = document.getElementById("elementYou");
var enemyPokemon = document.getElementById("enemyPokemon");
var yourPokemon = document.getElementById("yourPokemon");
var superEffectiveSound = document.getElementById("superEffectiveSound");
var NotEffectiveSound = document.getElementById("NotEffectiveSound");
var playAgainButton = document.getElementById("playAgainButton");
var battleSong = document.getElementById("battleSong");
var victorySong = document.getElementById("victorySong");
var defeatedSong = document.getElementById('defeatedSong');
var tieSong = document.getElementById('tieSong');
var opening = document.getElementById('opening');
var characterSelectionContainer = document.getElementById('characterSelectionContainer');
var chooseCharacterButton = document.getElementById('chooseCharacterButton');
var characterDisplayContainer = document.getElementById('characterDisplayContainer');
var yourName = document.getElementById('yourName');
var enemyName = document.getElementById('enemyName');
var gameStory = document.getElementById('gameStory');
var chooseCharacterText = document.getElementById('chooseCharacterText');
var generationList = document.getElementById('generationList');
var charactersClass = document.getElementsByClassName('character');
var yourHealthBar = document.getElementById('yourHealthBar');
var duelContainer = document.getElementById("duelContainer");
var roundCounter = 0;
var fireAttackCounter = 0;
var waterAttackCounter = 0;
var grassAttackCounter = 0;
var physicalAttackCounter = 0;
var superEffectiveContainer = 0;
var normallyEffectiveContainer = 0;
var notEffectiveContainer = 0;
var chosenEnemy = null;
var pokemonGenerationArray = [
    {
        'RedBlue': {
            fire: 'charmander',
            water: 'squirtle',
            grass: 'bulbasaur'
        }
    },
    {
        'GoldSilver': {
            fire: 'cyndaquil',
            water: 'totodile',
            grass: 'chikorita'
        }
    },
    {
        'RubySapphire': {
            fire: 'torchic',
            water: 'mudkip',
            grass: 'treecko'
        }
    },
    {
        'DiamondPearl': {
            fire: 'chimchar',
            water: 'piplup',
            grass: 'turtwig'
        }
    },
    {
        'BlackWhite': {
            fire: 'tepig',
            water: 'oshawott',
            grass: 'snivy'
        }
    },
    {
        'XY': {
            fire: 'fennekin',
            water: 'froakie',
            grass: 'chespin'
        }
    },
    {
        'SunMoon': {
            fire: 'litten',
            water: 'popplio',
            grass: 'rowlet'
        }
    },
    {
        'SwordShield': {
            fire: 'scorbunny',
            water: 'sobble',
            grass: 'grookey'
        }
    },
    {
        'ScarletViolet': {
            fire: 'fuecoco',
            water: 'quaxly',
            grass: 'sprigatito'
        }
    }
];
var randomGenObj = pokemonGenerationArray[Math.floor(Math.random() * pokemonGenerationArray.length)];
var pokemons = Object.values(Object.values(randomGenObj)[0]);
var gameVersion = pokemonGenerationArray.map(function (genObj) { return Object.keys(genObj)[0]; });
var characterArray = __spreadArray([], pokemons, true);
pokemonGenerationArray.forEach(function (item) {
    var newDiv = document.createElement('button');
    newDiv.textContent = Object.keys(item)[0];
    newDiv.classList = "text-white ml-3 mr-3 md:text-lg text-sm cursor-pointer hover:scale-110 active:scale-90 ";
    newDiv.id = "generation-".concat(Object.keys(item)[0]);
    var newImg = document.createElement('img');
    newImg.src = "../asset/apiAirRumput/".concat(Object.keys(item)[0], ".png");
    newImg.classList = 'md:w-[80px] w-[60px] mx-auto';
    newDiv.appendChild(newImg);
    generationList.appendChild(newDiv);
});
gameVersion.forEach(function (item) {
    var versionSelected = document.getElementById("generation-".concat(item));
    versionSelected.addEventListener('click', function () {
        var findVersion = Object.values(Object.values(pokemonGenerationArray.find(function (gen) { return gen[item]; }))[0]);
        characterArray = __spreadArray([], findVersion, true);
        DisplayCharacter(characterArray);
    });
});
var enemyArray = ['aang', 'kakashi', 'brewmaster'];
chooseCharacterButton.addEventListener('click', function () {
    characterSelectionContainer.classList.remove('hidden');
    DisplayCharacter(characterArray);
    opening.play();
    chooseCharacterText.classList.add('slowlyAppear');
    characterDisplayContainer.classList.add('slowlyAppear');
    generationList.classList.add('slowlyAppear');
    gameStory.classList.remove('hidden');
    gameStory.classList.add('starWarsText');
});
function DisplayCharacter(characterArray) {
    characterDisplayContainer.innerHTML = '';
    characterArray.forEach(function (item) {
        var newDiv = document.createElement('div');
        var newImg = document.createElement('img');
        newImg.src = "../asset/apiAirRumput/".concat(item, ".png");
        newImg.alt = item;
        newImg.id = "".concat(item, "Character");
        newImg.classList = "character cursor-pointer active:scale-90 active:border active:border-red-300 active:shadow-lg hover:scale-110 transition-transform duration-300 mx-auto ml-6 mr-6";
        newImg.classList.add('md:w-34');
        newImg.classList.add('w-16');
        var newbr = document.createElement('br');
        var newName = document.createElement('div');
        newName.textContent = item.charAt(0).toUpperCase() + item.slice(1);
        newName.classList = 'text-center text-white font-lexend mt-2 mb-4';
        newDiv.appendChild(newImg);
        newDiv.appendChild(newbr);
        newDiv.appendChild(newName);
        characterDisplayContainer.appendChild(newDiv);
        pokemons = __spreadArray([], characterArray, true);
    });
    clickPokemon();
}
function clickPokemon() {
    pokemons.forEach(function (pokemon) {
        var itemsCharacter = document.querySelectorAll(".character");
        itemsCharacter.forEach(function (item) {
            item.addEventListener("click", function () {
                // Remove selection from all
                itemsCharacter.forEach(function (i) { return i.classList.remove('selected'); });
                // Add selection to clicked
                item.classList.add("selected");
            });
        });
        var pokemonCharacter = document.getElementById("".concat(pokemon, "Character"));
        //update your pokemon avatar at the battle arena to the one that you selected
        pokemonCharacter.addEventListener('click', function () {
            yourPokemon.src = "../asset/apiAirRumput/".concat(pokemon, ".png");
            yourName.textContent = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
            startAdventureButton.classList.remove('hidden');
        });
    });
}
startAdventureButton.addEventListener("click", function () {
    //choose one random character from the enemy array
    chosenEnemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    enemyPokemon.src = "../asset/apiAirRumput/".concat(chosenEnemy, ".png");
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
    setTimeout(function () {
        yourPokemon.classList.remove('youMoveRight');
        enemyPokemon.classList.remove('enemyMoveLeft');
    }, 1000);
    opening.pause();
    battleSong.play();
});
fireAttackButton === null || fireAttackButton === void 0 ? void 0 : fireAttackButton.addEventListener("click", duelStart);
waterAttackButton === null || waterAttackButton === void 0 ? void 0 : waterAttackButton.addEventListener("click", duelStart);
grassAttackButton === null || grassAttackButton === void 0 ? void 0 : grassAttackButton.addEventListener("click", duelStart);
physicalAttackButton === null || physicalAttackButton === void 0 ? void 0 : physicalAttackButton.addEventListener("click", duelStart);
// function duelStart():void{
//     alert("Click the attack button to start the duel!");
// }
var iconArray = ['fire.png', 'water.png', 'grass.png', 'physical.png'];
var enemyAttackArray = ["Fire", "Water", "Grass"];
var playerDamageThisTurn;
var enemyDamageThisTurn;
var enemyAttackThisTurn;
var yourHPValue = 100;
var enemyHPValue = 100;
yourHealthBar.textContent = "".concat(yourHPValue, "/100");
//duel outcome
function resultCheck() {
    setTimeout(function () {
        if (yourHPValue <= 0 && enemyHPValue > 0) {
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
        }
        else if (yourHPValue > 0 && enemyHPValue <= 0) {
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
        }
        else if (yourHPValue <= 0 && enemyHPValue <= 0) {
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
    }, 1000);
}
function duelStart(e) {
    var btn = e.currentTarget;
    roundCounter++;
    //choose which element for enemy either fire, water or grass
    enemyAttackThisTurn = enemyAttackArray[Math.floor(Math.random() * enemyAttackArray.length)];
    //assign health bar
    yourHP.style.width = "".concat(yourHPValue, "%");
    enemyHP.style.width = "".concat(enemyHPValue, "%");
    yourHealthBar.textContent = "".concat(yourHPValue, "/100");
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
    if (btn.id == "fireAttackButton") {
        fireAttackCounter++;
        if (enemyAttackThisTurn === "Fire") {
            gameInstruction.textContent = "Enemy used Fire attack! It's a tie!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 0;
            setTimeout(function () {
                gameInstruction.textContent = "Both you and your opponent dealt ".concat(playerDamageThisTurn, " damage! It's normally effective");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                normallyEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/fire.png\" alt=\"Fire Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/fire.png\" alt=\"Fire Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementTieMobile');
                    elementEnemy.classList.add('enemyelementTieMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.classList.add('enemyelementTie');
                }
                setTimeout(function () {
                    NotEffectiveSound.play();
                }, 500);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementTie');
                elementEnemy.classList.remove('enemyelementTie');
                return;
            }, 2500);
        }
        else if (enemyAttackThisTurn === "Water") {
            gameInstruction.textContent = "Enemy used Water attack! Your attack loses!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 20;
            setTimeout(function () {
                gameInstruction.textContent = "You dealt ".concat(playerDamageThisTurn, " damage but your opponent dealt ").concat(enemyDamageThisTurn, " damage! It's super effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                notEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/fire.png\" alt=\"Fire Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/water.png\" alt=\"Water Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementLoseMobile');
                    elementEnemy.classList.add('enemyelementWinMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.classList.add('enemyelementWin');
                }
                setTimeout(function () {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();
                }, 600);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementLoseMobile');
                elementEnemy.classList.remove('enemyelementWinMobile');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }
        else if (enemyAttackThisTurn === "Grass") {
            gameInstruction.textContent = "Enemy used Grass attack! Your attack wins!";
            playerDamageThisTurn = 20;
            enemyDamageThisTurn = 0;
            setTimeout(function () {
                gameInstruction.textContent = "You dealt ".concat(playerDamageThisTurn, " damage but your opponent dealt ").concat(enemyDamageThisTurn, " damage! It's super effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                superEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/fire.png\" alt=\"Fire Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/grass.png\" alt=\"Grass Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementWinMobile');
                    elementEnemy.classList.add('enemyelementLoseMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.classList.add('enemyelementLose');
                }
                setTimeout(function () {
                    enemyPokemon.classList.add('getHit');
                    superEffectiveSound.play();
                }, 600);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementWinMobile');
                elementEnemy.classList.remove('enemyelementLoseMobile');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }
    }
    //if player choose water button
    else if (btn.id === "waterAttackButton") {
        waterAttackCounter++;
        if (enemyAttackThisTurn === "Fire") {
            gameInstruction.textContent = "Enemy used Fire attack! your attack wins!";
            playerDamageThisTurn = 20;
            enemyDamageThisTurn = 0;
            setTimeout(function () {
                gameInstruction.textContent = "You dealt ".concat(playerDamageThisTurn, " damage but your opponent dealt ").concat(enemyDamageThisTurn, " damage! It's super effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                superEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/water.png\" alt=\"Water Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/fire.png\" alt=\"Fire Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementWinMobile');
                    elementEnemy.classList.add('enemyelementLoseMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.classList.add('enemyelementLose');
                }
                setTimeout(function () {
                    enemyPokemon.classList.add('getHit');
                    superEffectiveSound.play();
                }, 600);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementWinMobile');
                elementEnemy.classList.remove('enemyelementLoseMobile');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }
        else if (enemyAttackThisTurn === "Water") {
            gameInstruction.textContent = "Enemy used Water attack! It's a tie!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 0;
            setTimeout(function () {
                gameInstruction.textContent = "Both you and your opponent dealt ".concat(playerDamageThisTurn, " damage! It's normally effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                normallyEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/water.png\" alt=\"Water Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/water.png\" alt=\"Water Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementTieMobile');
                    elementEnemy.classList.add('enemyelementTieMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.classList.add('enemyelementTie');
                }
                setTimeout(function () {
                    NotEffectiveSound.play();
                }, 500);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementTieMobile');
                elementEnemy.classList.remove('enemyelementTieMobile');
                return;
            }, 2500);
        }
        else if (enemyAttackThisTurn === "Grass") {
            gameInstruction.textContent = "Enemy used Grass attack! Your attack loses!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 20;
            setTimeout(function () {
                gameInstruction.textContent = "You dealt ".concat(playerDamageThisTurn, " damage but your opponent dealt ").concat(enemyDamageThisTurn, " damage! It's super effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/water.png\" alt=\"Water Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/grass.png\" alt=\"Grass Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementLoseMobile');
                    elementEnemy.classList.add('enemyelementWinMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.classList.add('enemyelementWin');
                }
                setTimeout(function () {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();
                }, 600);
                notEffectiveContainer++;
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementLoseMobile');
                elementEnemy.classList.remove('enemyelementWinMobile');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }
    }
    //if player choose grass button
    else if (btn.id === "grassAttackButton") {
        grassAttackCounter++;
        if (enemyAttackThisTurn === "Fire") {
            gameInstruction.textContent = "Enemy used Fire attack! Your attack loses!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 20;
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "You dealt ".concat(playerDamageThisTurn, " damage but your opponent dealt ").concat(enemyDamageThisTurn, " damage! It's super effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                notEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/grass.png\" alt=\"Grass Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/fire.png\" alt=\"Fire Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementLoseMobile');
                    elementEnemy.classList.add('enemyelementWinMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.classList.add('enemyelementWin');
                }
                setTimeout(function () {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();
                }, 600);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementLoseMobile');
                elementEnemy.classList.remove('enemyelementWinMobile');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }
        else if (enemyAttackThisTurn === "Water") {
            gameInstruction.textContent = "Enemy used Water attack! Your attack wins!";
            playerDamageThisTurn = 20;
            enemyDamageThisTurn = 0;
            setTimeout(function () {
                gameInstruction.textContent = "You dealt ".concat(playerDamageThisTurn, " damage but your opponent dealt ").concat(enemyDamageThisTurn, " damage! It's super effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                superEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/grass.png\" alt=\"Grass Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/water.png\" alt=\"Water Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementWinMobile');
                    elementEnemy.classList.add('enemyelementLoseMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.classList.add('enemyelementLose');
                }
                setTimeout(function () {
                    enemyPokemon.classList.add('getHit');
                    superEffectiveSound.play();
                }, 600);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementWinMobile');
                elementEnemy.classList.remove('enemyelementLoseMobile');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }
        else if (enemyAttackThisTurn === "Grass") {
            gameInstruction.textContent = "Enemy used Grass attack! It's a tie!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 0;
            setTimeout(function () {
                gameInstruction.textContent = "Both you and your opponent dealt ".concat(playerDamageThisTurn, " damage! It's normally effective!");
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = "".concat(yourHPValue, "%");
                yourHealthBar.textContent = "".concat(yourHPValue, "/100");
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = "".concat(enemyHPValue, "%");
                normallyEffectiveContainer++;
                elementYou.innerHTML = "<img src=\"../asset/apiAirRumput/grass.png\" alt=\"Grass Icon\">";
                elementEnemy.innerHTML = "<img src=\"../asset/apiAirRumput/grass.png\" alt=\"Grass Icon\">";
                if (window.innerWidth <= 768) {
                    elementYou.classList.add('yourelementTieMobile');
                    elementEnemy.classList.add('enemyelementTieMobile');
                }
                else if (window.innerWidth > 768) {
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.classList.add('enemyelementTie');
                }
                setTimeout(function () {
                    NotEffectiveSound.play();
                }, 500);
                resultCheck();
            }, 1000);
            setTimeout(function () {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = "Let's continue the duel";
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
                elementYou.classList.remove('yourelementTieMobile');
                elementEnemy.classList.remove('enemyelementTieMobile');
                return;
            }, 2500);
        }
    }
    //if player choose physical button
    else if (btn.id === "physicalAttackButton") {
        physicalAttackCounter++;
        gameInstruction.innerHTML = "Since you use physical enemy then also use physical!";
        playerDamageThisTurn = Math.floor(Math.random() * 21);
        enemyDamageThisTurn = Math.floor(Math.random() * 21);
        setTimeout(function () {
            gameInstruction.textContent = "you dealt ".concat(playerDamageThisTurn, " damage and your opponent dealt ").concat(enemyDamageThisTurn, "! It's okay effective!");
            yourHPValue = yourHPValue - enemyDamageThisTurn;
            yourHP.style.width = "".concat(yourHPValue, "%");
            yourHealthBar.textContent = "".concat(yourHPValue, "/100");
            enemyHPValue = enemyHPValue - playerDamageThisTurn;
            enemyHP.style.width = "".concat(enemyHPValue, "%");
            normallyEffectiveContainer++;
            if (window.innerWidth <= 768) {
                yourPokemon.classList.add('yourelementPhysicalMobile');
                enemyPokemon.classList.add('enemyelementPhysicalMobile');
            }
            else if (window.innerWidth > 768) {
                yourPokemon.classList.add('yourelementPhysical');
                enemyPokemon.classList.add('enemyelementPhysical');
            }
            setTimeout(function () {
                NotEffectiveSound.play();
            }, 500);
            resultCheck();
        }, 1000);
        setTimeout(function () {
            elementYou.innerHTML = "";
            elementEnemy.innerHTML = "";
            gameInstruction.textContent = "Let's continue the duel";
            yourPokemon.classList.remove('yourelementPhysical');
            enemyPokemon.classList.remove('enemyelementPhysical');
            yourPokemon.classList.remove('yourelementPhysicalMobile');
            enemyPokemon.classList.remove('enemyelementPhysicalMobile');
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
    playAgainButton.addEventListener("click", function () {
        duelResultContainer.classList.add("hidden");
        //reset the song
        tieSong.pause();
        victorySong.pause();
        victorySong.currentTime = 0;
        defeatedSong.pause();
        battleSong.pause();
        battleSong.currentTime = 0;
        opening.play();
        opening.currentTime = 0;
        //replenish health
        yourHPValue = 100;
        enemyHPValue = 100;
        yourHP.style.width = "".concat(yourHPValue, "%");
        enemyHP.style.width = "".concat(enemyHPValue, "%");
        yourHealthBar.textContent = "".concat(yourHPValue, "/100");
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
