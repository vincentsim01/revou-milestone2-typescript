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

function duelStart(e){
    // alert('duel start')
    enemyAttackThisTurn = enemyAttackArray[Math.floor(Math.random() * enemyAttackArray.length)];

    yourHP.style.width = `${yourHPValue}%`;

    enemyHP.style.width = `${enemyHPValue}%`;
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

            }, 1000);
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
            }, 1000);
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
            }, 1000);
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
                }, 1000);
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
                }, 1000);
            }

        }else if(e.target.id === "grassAttackButton"){
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
                }, 1000);
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
                }, 1000);
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
                }, 1000);
            }

        }else if(e.target.id === "physicalAttackButton"){
              gameInstruction.innerHTML = `Enemy used  ${enemyAttackThisTurn} attack! However it doesn't matter since you use physical!`;
                playerDamageThisTurn = 15;
                enemyDamageThisTurn = 15;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage! It's okay effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                }, 1000);

        }

}
}
