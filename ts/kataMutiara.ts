const firstKataMutiara = document.getElementById("firstKataMutiara") as HTMLElement | null;
const secondKataMutiara = document.getElementById("secondKataMutiara") as HTMLElement | null;
const firstKataMutiaraMobile = document.getElementById("firstKataMutiaraMobile") as HTMLElement | null;
const secondKataMutiaraMobile = document.getElementById("secondKataMutiaraMobile") as HTMLElement | null;
const resultContainer= document.getElementById("resultContainer") as HTMLDivElement | null;
const resultText = document.getElementById("resultText") as HTMLDivElement | null;
const playAgainButton = document.getElementById("playAgainButton") as HTMLElement | null;
const kataMutiaraDescription:any = document.getElementById("kataMutiaraDescription");
const titleContainer = document.getElementById('titleContainer') as HTMLElement | null;
const countdownContainer = document.getElementById("countdownContainer") as HTMLElement | null;
const countdownText = document.getElementById("countdownText") as HTMLDivElement | null;
const undertheseaSong = document.getElementById("udertheseaSong") as HTMLAudioElement | null;
const cardmoveSound = document.getElementById("cardmoveSound") as HTMLAudioElement | null;
const cardokSound = document.getElementById("cardokSound") as HTMLAudioElement | null;
const cardvictorySound= document.getElementById("cardvictorySound") as HTMLAudioElement | null;
const cardlostSound= document.getElementById("cardlostSound") as HTMLAudioElement | null;
const nextLevelButton = document.getElementById('nextLevelButton') as HTMLElement | null;
const gameContainerDesktop = document.getElementById('gameContainerDesktop') as HTMLElement | null;
const gameContainerMobile = document.getElementById('gameContainerMobile') as HTMLElement | null;
const letPlayButtonMobile = document.getElementById("letPlayButtonMobile") as HTMLElement | null;
const resultContainerMobile = document.getElementById("resultContainerMobile") as HTMLElement | null;
const playAgainButtonMobile = document.getElementById("playAgainButtonMobile") as HTMLElement | null;
const nextLevelButtonMobile = document.getElementById('nextLevelButtonMobile') as HTMLElement | null;


let gameLevel:number = 5;

const kataMutiara:any[] = [
    { 1 : ["Kamu memang seperti lempeng bumi", "bergeser sedikit saja sudah mengguncang hatiku"] },
    { 2 : ["Selain ada garuda di dadaku", "di dadaku juga selalu ada kamu."] },
    { 3 : ["Lebih baik menjadi pahlawan", "daripada pacaran tapi jadi selingkuhan"] },
    { 4 : ["Menjaga Bumi butuh kekuatan", "Tapi menjagamu butuh pemasukan"] },
    { 5 : ["Aku memilih untuk menantang bahaya", "tetapi kamu memilih pria yang lebih kaya"] },
    { 6 : ["Berbukalah dengan keluarga", "Karena yang manis belum tentu mau diajak berkeluarga"] },
    { 7 : ["Ga masalah kalau kamu ga pilih aku", "memang enggak semua orang seleranya bagus"] },
    { 8 : ["Lebih baik gaji besar asal halal", "daripada gaji kecil tapi halal"] },
    { 9 : ["Gajian itu kayak mantan ya", "bisanya cuma lewat doang"] },
    { 10 : ["Hidup itu seperti roda", "kadang di atas, kadang di bawah"] },
    { 11 : ["Kenapa zombie kalo nyerang ramai-ramai?", "Kalau sendirian bukan zombie, tapi zomblo"] },
    { 12 : ["Cinta adalah pengorbanan", "tapi kalau pengorbanan mulu sih namanya penderitaan"]},
    { 13 : ["Aku rela ikut lomba lari keliling dunia", "asalkan engkau yang menjadi garis finishnya."]},
    { 14 : ["Hari Minggu itu weekend","tapi kalau cinta aku ke kamu tuh will never end."]},
    { 15 : ["Napasku kok sesak ya?", "Karena separuh nafasku ada di kamu"]},
    { 16 : ["Ikan apa yang bikin baper?", "Ikan stop loving you."]}
]


function shuffleArray(array:any[]) {
    const shuffled = [...array]; // Make a copy so the original array is not changed

    for (let i = shuffled.length - 1; i > 0; i--) {  
        // i goes from the last index down to 1
        const j = Math.floor(Math.random() * (i + 1)); 
        // Pick a random index between 0 and i (inclusive)

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        // Swap element at i with element at j
    }
    return shuffled; // Return the shuffled array
}

function shuffleArray2(array:any[]) { // Make a copy so the original array is not changed
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
}

function selectRandomPairs(data:any[], count:number =6 ) {
    const shuffled = shuffleArray(data); // Shuffle the array
    return shuffled.slice(0, count);     // Take the first `count` items
}

//to randomize the whole array
let randomKataMutiara:any[] = shuffleArray(kataMutiara);

//to pick 5 items from the randomized array
let randomKataFive:any[] = selectRandomPairs(randomKataMutiara, 5);

let firstKataArray:string[] = [];
let secondKataArray:string[] = [];
let shuffledfirstKataArray:string[] = [];
let shuffledsecondKataArray:string[] = [];
let firstCard:any= null;
let secondCard:any= null;

const letPlayButton = document.getElementById("letPlayButton") as HTMLElement | null;

letPlayButton.addEventListener("click", () => {
    undertheseaSong.play();
    letPlayButton?.classList.add("hidden");
    // firstKataMutiara.classList.remove("hidden");
    // secondKataMutiara.classList.remove("hidden");
    gameContainerDesktop?.classList.remove('hidden');
    kataMutiaraDescription.classList.add('hidden');
    titleContainer?.classList.add('hidden');
    countdownContainer?.classList.remove("hidden");
    createBoard();
});

letPlayButtonMobile.addEventListener("click", () => {
    undertheseaSong.play();
    letPlayButtonMobile?.classList.add("hidden");
    // firstKataMutiara.classList.remove("hidden");
    // secondKataMutiara.classList.remove("hidden");
    gameContainerMobile?.classList.remove('hidden');
    kataMutiaraDescription.classList.add('hidden');
    titleContainer?.classList.add('hidden');
    countdownContainer?.classList.remove("hidden");
    createBoardMobile();
});

let timeCounter:number = 46;
let intervalId:any=null;
function runCountDown(){
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
    if (timeCounter > 0) {
        timeCounter--;
        countdownText.textContent = ` ${timeCounter} detik`;
    } else {
        clearInterval(intervalId);
        countdownText.textContent = "Waktu habis!";
        cardlostSound.play();
        resultContainer?.classList.remove("hidden");
        resultText.textContent = "You Lose!";
    }
}, 1000);
}


 function createBoard():void {
            setTimeout(runCountDown, 3000);

            randomKataFive.forEach((item) => {
                const card1 = document.createElement("div");
                card1.classList.add("card");
                card1.classList.add("m-3");
                card1.textContent = '?';
                card1.dataset.Content = item[Object.keys(item)[0]][0];
                card1.dataset.id = item[Object.keys(item)[0]];
                card1.classList.add("firstPhraseMove");
                card1.addEventListener("click", flipCard);
                firstKataMutiara?.appendChild(card1);

                const card2 = document.createElement("div");
                card2.classList.add("card2");
                card2.classList.add("m-3");
                card2.textContent = '?';
                card2.style.backgroundPosition = "left";
                card2.dataset.Content = item[Object.keys(item)[0]][1];
                card2.dataset.id = item[Object.keys(item)[0]];
                card2.classList.add("secondPhraseMove");
                card2.addEventListener("click", flipCard);
                secondKataMutiara?.appendChild(card2);
            });

            //from the array of cards for 1st phrase then we will randomize the order
            const divs = Array.from(firstKataMutiara.children);
            let shuffleddivs = shuffleArray2(divs)
            shuffleddivs.forEach(div => firstKataMutiara.appendChild(div)); 

            //from the array of cards for 2nd phrase then we will randomize the order
            const divs2 = Array.from(secondKataMutiara.children);
            let shuffleddivs2 = shuffleArray2(divs2)
            shuffleddivs2.forEach(div => secondKataMutiara.appendChild(div));  

            //moving intro animation for the cards set at 4 seconds and then the css is removed
            setTimeout(()=>{
                const firstPhraseMoveElements = document.querySelectorAll('.firstPhraseMove');
                firstPhraseMoveElements.forEach(element => {
                    element.classList.remove('firstPhraseMove');
                });

                const secondPhraseMoveElements = document.querySelectorAll('.secondPhraseMove');
                secondPhraseMoveElements.forEach(element => {
                    element.classList.remove('secondPhraseMove');
                });
            }, 4000);
    }

     function createBoardMobile():void {
            setTimeout(runCountDown, 3000);

            randomKataFive.forEach((item) => {
                const card1 = document.createElement("div");
                card1.classList.add("cardMobile");
                card1.classList.add("m-3");
                card1.textContent = '?';
                card1.dataset.Content = item[Object.keys(item)[0]][0];
                card1.dataset.id = item[Object.keys(item)[0]];
                card1.classList.add("firstPhraseMove");
                card1.addEventListener("click", flipCardMobile);
                firstKataMutiaraMobile?.appendChild(card1);

                const card2 = document.createElement("div");
                card2.classList.add("card2Mobile");
                card2.classList.add("m-3");
                card2.textContent = '?';
                card2.style.backgroundPosition = "left";
                card2.dataset.Content = item[Object.keys(item)[0]][1];
                card2.dataset.id = item[Object.keys(item)[0]];
                card2.classList.add("secondPhraseMove");
                card2.addEventListener("click", flipCardMobile);
                secondKataMutiaraMobile?.appendChild(card2);
            });

            //from the array of cards for 1st phrase then we will randomize the order
            const divs = Array.from(firstKataMutiaraMobile.children);
            let shuffleddivs = shuffleArray2(divs)
            shuffleddivs.forEach(div => firstKataMutiaraMobile.appendChild(div)); 

            //from the array of cards for 2nd phrase then we will randomize the order
            const divs2 = Array.from(secondKataMutiara.children);
            let shuffleddivs2 = shuffleArray2(divs2)
            shuffleddivs2.forEach(div => secondKataMutiaraMobile.appendChild(div));  

            //moving intro animation for the cards set at 4 seconds and then the css is removed
            setTimeout(()=>{
                const firstPhraseMoveElements = document.querySelectorAll('.firstPhraseMove');
                firstPhraseMoveElements.forEach(element => {
                    element.classList.remove('firstPhraseMove');
                });

                const secondPhraseMoveElements = document.querySelectorAll('.secondPhraseMove');
                secondPhraseMoveElements.forEach(element => {
                    element.classList.remove('secondPhraseMove');
                });
            }, 4000);
    }
    function flipCard():void {
        if (this.classList.contains("flipped")) return;    
        this.textContent = this.dataset.Content;
        this.classList.add("flipped");
        cardmoveSound.play();

        if (!firstCard) {
            firstCard = this;
        } 
        else if (firstCard && !secondCard) {
            secondCard = this;
            if (firstCard.parentElement === this.parentElement) {
                secondCard = null;
                setTimeout(() => {
                    this.textContent = '?';
                    this.classList.remove("flipped");
                }, 800);
                return
            }
            checkMatch();
        } 

        //if there is a third card being flipped the system will say no
        else if (firstCard!== null && secondCard !== null) {
            alert('Please wait for the pearl to finish checking');
            this.textContent = '?';
            this.classList.remove("flipped");
        }

    }



        function flipCardMobile():void {
        if (this.classList.contains("flipped")) return;    
        this.textContent = this.dataset.Content;
        this.classList.add("flipped");
        cardmoveSound.play();

        if (!firstCard) {
            firstCard = this;
        } 
        else if (firstCard && !secondCard) {
            secondCard = this;
            if (firstCard.parentElement === this.parentElement) {
                secondCard = null;
                setTimeout(() => {
                    this.textContent = '?';
                    this.classList.remove("flipped");
                }, 800);
                return
            }
            checkMatchMobile();
        } 

        //if there is a third card being flipped the system will say no
        else if (firstCard!== null && secondCard !== null) {
            alert('Please wait for the pearl to finish checking');
            this.textContent = '?';
            this.classList.remove("flipped");
        }

    }

        function checkMatch() {
            if (firstCard.dataset.id === secondCard.dataset.id) {
                firstCard.classList.add("matched");
                secondCard.classList.add("matched");
                cardokSound.play();
                resetTurn();
            } 
            else {
                setTimeout(() => {
                firstCard.textContent = "?";
                secondCard.textContent = "?";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetTurn();
                }, 1000);
            }
        }

        function checkMatchMobile() {
            if (firstCard.dataset.id === secondCard.dataset.id) {
                firstCard.classList.add("matched");
                secondCard.classList.add("matched");
                cardokSound.play();
                resetTurnMobile();
            } 
            else {
                setTimeout(() => {
                firstCard.textContent = "?";
                secondCard.textContent = "?";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetTurnMobile();
                }, 1000);
            }
        }

        //click the play at the same level again button
        function playAgain(){
            firstKataMutiara.textContent="";
            secondKataMutiara.textContent="";
            resultContainer.classList.add("hidden");
            resultText.textContent = "";
            //to randomize the whole array
            randomKataMutiara = shuffleArray(kataMutiara);

            //to pick 5 items from the randomized array
            randomKataFive = selectRandomPairs(randomKataMutiara, gameLevel);
            createBoard();
        }

        function playAgainMobile(){
            firstKataMutiaraMobile.textContent="";
            secondKataMutiaraMobile.textContent="";
            resultContainerMobile.classList.add("hidden");
            resultText.textContent = "";
            //to randomize the whole array
            randomKataMutiara = shuffleArray(kataMutiara);

            //to pick 5 items from the randomized array
            randomKataFive = selectRandomPairs(randomKataMutiara, gameLevel);
            createBoardMobile();
        }

        // click the next level button
        function playAgainWin(){
            firstKataMutiara.textContent="";
            secondKataMutiara.textContent="";
            resultContainer.classList.add("hidden");
            resultText.textContent = "";
            //to randomize the whole array
            randomKataMutiara = shuffleArray(kataMutiara);
            gameLevel++;

            //to pick 5 items from the randomized array
            randomKataFive = selectRandomPairs(randomKataMutiara, gameLevel);
            createBoard();
     

            //hide the nextlevel button after 1 second
            setTimeout(() => {
                nextLevelButton.classList.add('hidden')
            },1000)
        }

        function playAgainWinMobile(){

            firstKataMutiaraMobile.textContent="";
            secondKataMutiaraMobile.textContent="";
            resultContainerMobile.classList.add("hidden");
            resultText.textContent = "";
            //to randomize the whole array
            randomKataMutiara = shuffleArray(kataMutiara);
            gameLevel++;

            //to pick 5 items from the randomized array
            randomKataFive = selectRandomPairs(randomKataMutiara, gameLevel);
            createBoardMobile();

            //hide the nextlevel button after 1 second
            setTimeout(() => {
                nextLevelButtonMobile.classList.add('hidden')
            },1000)
        }

        //play again button will always appear regardless player lose or win the round and the difficulty remains the same
        playAgainButton.addEventListener("click", () => {
            clearInterval(intervalId);
            timeCounter = 46;
            playAgain();
        })

        playAgainButtonMobile.addEventListener("click", () => {
            clearInterval(intervalId);
            timeCounter = 46;
            playAgainMobile();
        })

        //next level button will appear only when player managed to clear the round and the difficulty will increase by 1 additional card
        nextLevelButton.addEventListener("click", () => {
            clearInterval(intervalId);
            timeCounter = 46;
            playAgainWin();
        })

        nextLevelButtonMobile.addEventListener("click", () => {
            clearInterval(intervalId);
            timeCounter = 46;
            playAgainWinMobile();
        })

        // set the card back
        function resetTurn() {
            [firstCard, secondCard] = [null, null];
            if (document.querySelectorAll(".matched").length === randomKataFive.length*2) {
                setTimeout(
                    () => 
                        {
                        let timeRemain:number = 45 - timeCounter;
                        //show result and the next level button
                        resultContainer.classList.remove("hidden");
                        nextLevelButton.classList.remove("hidden");
                        resultText.textContent = "🎉 You Win! Your time was " + timeRemain + " seconds";
                        cardvictorySound.play();

                        //stop interval first then when createboard function is called then it will reset the countdown
                        if (intervalId) {
                            clearInterval(intervalId);
                        }
                    },
                     500);
            }
        }


        function resetTurnMobile() {
            [firstCard, secondCard] = [null, null];
            if (document.querySelectorAll(".matched").length === randomKataFive.length*2) {
                setTimeout(
                    () => 
                        {
                        let timeRemain:number = 45 - timeCounter;
                        //show result and the next level button
                        resultContainerMobile.classList.remove("hidden");
                        nextLevelButtonMobile.classList.remove("hidden");
                        resultText.textContent = "🎉 You Win! Your time was " + timeRemain + " seconds";
                        cardvictorySound.play();

                        //stop interval first then when createboard function is called then it will reset the countdown
                        if (intervalId) {
                            clearInterval(intervalId);
                        }
                    },
                     500);
            }
        }

        




