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
startAdventureButton.addEventListener("click", () => {
    const duelContainer = document.getElementById("duelContainer");
    duelContainer.classList.remove("hidden");
    welcomeDescription.classList.add("hidden");
    startAdventureButton.classList.add("hidden");
    welcomeTitle.classList.add("hidden");
    welcomeContainer.classList.add("hidden");
});

const enemyAttackArray = ["Fire", "Water", "Grass", "Physical"];

let playerDamageThisTurn;

let enemyDamageThisTurn;

let enemyAttackThisTurn;

let yourHPValue = 100;

let enemyHPValue = 100;

// fireAttackButton.addEventListener("click", () => alert("Fire attack clicked"));
// waterAttackButton.addEventListener("click", () => console.log("Water attack clicked"));
// grassAttackButton.addEventListener("click", () => console.log("Grass attack clicked"));
// physicalAttackButton.addEventListener("click", () => console.log("Physical attack clicked"));

function resultCheck(){
    if(yourHPValue <= 0 && enemyHPValue != 0){
        gameInstruction.textContent = "You have been defeated!";
        duelResultContainer.classList.remove("hidden");
        duelResultText.textContent = "You lost the duel!";
        return;
    }else if(yourHPValue != 0 && enemyHPValue <= 0){
        gameInstruction.textContent = "You won the duel!";
        duelResultContainer.classList.remove("hidden");
        duelResultText.textContent = "You won the duel!";
        return;
    }else if(yourHPValue <= 0 && enemyHPValue <= 0){
        gameInstruction.textContent = "Both you and the enemy have been defeated!";
        duelResultContainer.classList.remove("hidden");
        duelResultText.textContent = "It's a draw!";
        return;
    }
}

function duelStart(e){
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
        if(enemyAttackThisTurn === "Fire"){
            gameInstruction.textContent = "Enemy used Fire attack! It's a tie!";
            playerDamageThisTurn = 10;
            enemyDamageThisTurn = 10;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's normally effective`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                resultCheck();

            }, 1000);
            setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');
                
                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);

        }else if(enemyAttackThisTurn === "Water"){
            gameInstruction.textContent = "Enemy used Water attack! Your attack loses!";
            playerDamageThisTurn = 5;
            enemyDamageThisTurn = 20;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's not effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                resultChe   ck();
            }, 1000);
                        setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);
        }else if(enemyAttackThisTurn === "Grass"){
            gameInstruction.textContent = "Enemy used Grass attack! Your attack wins!";
            playerDamageThisTurn = 20;
            enemyDamageThisTurn = 5;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's super effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                resultCheck();
            }, 1000);
            setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);
        }

    }
    else if(e.target.id === "waterAttackButton"){
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! your attack wins!";
                playerDamageThisTurn = 20;
                enemyDamageThisTurn = 5;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's super effective`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    resultCheck();
                }, 1000);
            }else if(enemyAttackThisTurn === "Water"){
                gameInstruction.textContent = "Enemy used Water attack! It's a tie!";
                playerDamageThisTurn = 10;
                enemyDamageThisTurn = 10;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    resultCheck();
                }, 1000);
            setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);
            }else if(enemyAttackThisTurn === "Grass"){
                gameInstruction.textContent = "Enemy used Grass attack! Your attack loses!";
                playerDamageThisTurn = 5;
                enemyDamageThisTurn = 20;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's not effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    resultCheck();
                }, 1000);
            setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);
            }

        }
    else if(e.target.id === "grassAttackButton"){
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! Your attack loses!";
                playerDamageThisTurn = 5;
                enemyDamageThisTurn = 20;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's not effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                                    resultCheck();
                }, 1000);
            setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);
            }else if(enemyAttackThisTurn === "Water"){
                gameInstruction.textContent = "Enemy used Water attack! Your attack wins!";
                playerDamageThisTurn = 20;
                enemyDamageThisTurn = 5;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                                    resultCheck();
                }, 1000);
            setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);
            }else if(enemyAttackThisTurn === "Grass"){
                gameInstruction.textContent = "Enemy used Grass attack! It's a tie!";
                playerDamageThisTurn = 10;
                enemyDamageThisTurn = 10;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                                    resultCheck();
                }, 1000);
                setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);
            }

         }
     else if(e.target.id === "physicalAttackButton"){
              gameInstruction.innerHTML = `Enemy used  ${enemyAttackThisTurn} attack! However it doesn't matter since you use physical!`;
                playerDamageThisTurn = 15;
                enemyDamageThisTurn = 15;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's okay effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                                    resultCheck();
                }, 1000);
            setTimeout(() => {
                gameInstruction.textContent = `Let's continue the duel`;
                fireAttackButton.classList.remove('cursor-not-allowed');
                waterAttackButton.classList.remove('cursor-not-allowed');
                grassAttackButton.classList.remove('cursor-not-allowed');
                physicalAttackButton.classList.remove('cursor-not-allowed');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                return;
            }, 2000);

        }

}

