// const firstKataMutiara = document.getElementById("firstKataMutiara");
// const secondKataMutiara = document.getElementById("secondKataMutiara");
// const resultContainer = document.getElementById("resultContainer");
// const resultText = document.getElementById("resultText");
// const playAgainButton = document.getElementById("playAgainButton");
// const kataMutiaraDescription = document.getElementById("kataMutiaraDescription");
// const countdownContainer = document.getElementById("countdownContainer");
// const countdownText = document.getElementById("countdownText");
// const undertheseaSong = document.getElementById("udertheseaSong");
// const cardmoveSound = document.getElementById("cardmoveSound");
// const cardokSound = document.getElementById("cardokSound");
// const cardvictorySound = document.getElementById("cardvictorySound");
// const cardlostSound = document.getElementById("cardlostSound");
// // item[Object.keys(item)[0]][0]
// // item[Object.keys(item)[0]][1]
// const kataMutiara = [
//     { 1 : ["Kamu memang seperti lempeng bumi", "bergeser sedikit saja sudah mengguncang hatiku"] },
//     { 2 : ["Selain ada garuda di dadaku", "di dadaku juga selalu ada kamu."] },
//     { 3 : ["Lebih baik menjadi pahlawan", "daripada pacaran tapi jadi selingkuhan"] },
//     { 4 : ["Menjaga Bumi butuh kekuatan", "Tapi menjagamu butuh pemasukan"] },
//     { 5 : ["Aku memilih untuk menantang bahaya", "tetapi kamu memilih pria yang lebih kaya"] },
//     { 6 : ["Berbukalah dengan keluarga", "Karena yang manis belum tentu mau diajak berkeluarga"] },
//     { 7 : ["Ga masalah kalau kamu ga pilih aku", "memang enggak semua orang seleranya bagus"] },
//     { 8 : ["Lebih baik gaji besar asal halal", "daripada gaji kecil tapi halal"] },
//     { 9 : ["Gajian itu kayak mantan ya", "bisanya cuma lewat doang"] },
//     { 10 : ["Hidup itu seperti roda", "kadang di atas, kadang di bawah"] },
//     { 11 : ["Kenapa zombie kalo nyerang ramai-ramai?", "Kalau sendirian bukan zombie, tapi zomblo"] },
//     { 12 : ["Cinta adalah pengorbanan", "tapi kalau pengorbanan mulu sih namanya penderitaan"]},
//     { 13 : ["Aku rela ikut lomba lari keliling dunia", "asalkan engkau yang menjadi garis finishnya."]},
//     { 14 : ["Hari Minggu itu weekend","tapi kalau cinta aku ke kamu tuh will never end."]},
//     { 15 : ["Napasku kok sesak ya?", "Karena separuh nafasku ada di kamu"]},
//     { 16 : ["Ikan apa yang bikin baper?", "Ikan stop loving you."]}
// ]


// function shuffleArray(array) {
//     const shuffled = [...array]; // Make a copy so the original array is not changed

//     for (let i = shuffled.length - 1; i > 0; i--) {  
//         // i goes from the last index down to 1
//         const j = Math.floor(Math.random() * (i + 1)); 
//         // Pick a random index between 0 and i (inclusive)

//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//         // Swap element at i with element at j
//     }
//     return shuffled; // Return the shuffled array
// }

// function shuffleArray2(array) { // Make a copy so the original array is not changed
//             for (let i = array.length - 1; i > 0; i--) {
//                 const j = Math.floor(Math.random() * (i + 1));
//                 [array[i], array[j]] = [array[j], array[i]];
//             }
//             return array;
// }

// function selectRandomPairs(data, count = 6) {
//     const shuffled = shuffleArray(data); // Shuffle the array
//     return shuffled.slice(0, count);     // Take the first `count` items
// }

// let randomKataMutiara = shuffleArray(kataMutiara);

// let randomKataFive = selectRandomPairs(randomKataMutiara, 5);

// let firstKataArray = [];
// let secondKataArray = [];
// let shuffledfirstKataArray;
// let shuffledsecondKataArray;
// let firstCard = null;
// let secondCard = null;

// const letPlayButton = document.getElementById("letPlayButton");

// letPlayButton.addEventListener("click", () => {
//     undertheseaSong.play();
//     letPlayButton.classList.add("hidden");
//     firstKataMutiara.classList.remove("hidden");
//     secondKataMutiara.classList.remove("hidden");
//     kataMutiaraDescription.innerHTML = `
//     <div class="font-preahvihear text-xs text-gray-900 mb-2 bg-white/30 border border-black rounded-md p-5" >

//     <b><u>Temukan pasangan kata yang cocok! </u></b>
//     <ul class='list-disc'>
//     <li>Si Mutiara mengucapkan beberapa kata bijak yang terdiri dari 2 frase </li>
//     <li>Frase pertama terletak di kotak atas dan frase kedua terletak di kotak bawah</li>
//     <li>Kalian harus memasangkan frase pertama dengan frase kedua yang tepat!</li>
//     <li>Mohon jangan terburu-buru dalam memilih pasangan! Karena Si Mutiara perlu waktu untuk memproses kedua frase yang dipilih</li>
//     </ul>
//     </div>
//     `;
//     countdownContainer.classList.remove("hidden");
//     createBoard();
// });

// let timeCounter = 31;
// let intervalId=null;
// function runCountDown(){
//     // clearInterval(intervalId);
//             if (intervalId) {
//                 clearInterval(intervalId);
//             }
//     intervalId = setInterval(() => {
//     if (timeCounter > 0) {
//         timeCounter--;
//         countdownText.textContent = ` ${timeCounter} detik`;
//     } else {
//         clearInterval(intervalId);
//         countdownText.textContent = "Waktu habis!";
//         cardlostSound.play();
//         resultContainer.classList.remove("hidden");
//         resultText.textContent = "You Lose!";

//     }
// }, 1000);
// }


// // function youLose() {
// //             clearInterval(intervalId);
// //             countdownText.textContent = "Waktu habis!";
// //             resultContainer.classList.remove("hidden");
// //             resultText.textContent = "You Lose!";
// //             timeCounter = 30;

// // }

//  function createBoard() {
//             // firstKataMutiara.innerHTML = "";
//             // secondKataMutiara.innerHTML = "";
//             setTimeout(runCountDown, 3000);

//             randomKataFive.forEach((item) => {
//                 // firstKataArray.push(item[Object.keys(item)[0]][0]);
//                 // shuffledfirstKataArray = shuffleArray(firstKataArray);
//                 // secondKataArray.push(item[Object.keys(item)[0]][1]);
//                 // shuffledsecondKataArray = shuffleArray(secondKataArray);

//                 const card1 = document.createElement("div");
//                 card1.classList.add("card");
//                 card1.classList.add("m-3");
//                 card1.textContent = '?';
//                 // card1.style.backgroundColor = "rgb(51, 102, 204)";
//                 // card1.style.backgroundImage = "url('../asset/bordersea.jpg')";
//                 card1.dataset.Content = item[Object.keys(item)[0]][0];
//                 card1.dataset.id = item[Object.keys(item)[0]];
//                 card1.classList.add("firstPhraseMove");
//                 card1.addEventListener("click", flipCard);
//                 firstKataMutiara.appendChild(card1);

//                 const card2 = document.createElement("div");
//                 card2.classList.add("card2");
//                 card2.classList.add("m-3");
//                 card2.textContent = '?';
//                 card2.style.backgroundColor = "rgba(43, 51, 67, 1)";
//                 card2.style.backgroundPosition = "left";
//                 card2.dataset.Content = item[Object.keys(item)[0]][1];
//                 card2.dataset.id = item[Object.keys(item)[0]];
//                 card2.classList.add("secondPhraseMove");
//                 card2.addEventListener("click", flipCard);
//                 secondKataMutiara.appendChild(card2);



//             });

//             const divs = Array.from(firstKataMutiara.children);
//             let shuffleddivs = shuffleArray2(divs)
//             shuffleddivs.forEach(div => firstKataMutiara.appendChild(div)); 

//             const divs2 = Array.from(secondKataMutiara.children);
//             let shuffleddivs2 = shuffleArray2(divs2)
//             shuffleddivs2.forEach(div => secondKataMutiara.appendChild(div));  

//             setTimeout(()=>{
//                 const firstPhraseMoveElements = document.querySelectorAll('.firstPhraseMove');
//                 firstPhraseMoveElements.forEach(element => {
//                     element.classList.remove('firstPhraseMove');
//                 });

//                 const secondPhraseMoveElements = document.querySelectorAll('.secondPhraseMove');
//                 secondPhraseMoveElements.forEach(element => {
//                     element.classList.remove('secondPhraseMove');
//                 });
//             }, 4000);
//     }

//     // function randomizeDiv(){
//     //         const divs = Array.from(firstKataMutiara.querySelectorAll('.card'));
//     //         let shuffleddivs = shuffleArray2(divs)
//     //         shuffleddivs.forEach(div => firstKataMutiara.appendChild(div)); 

//     //         const divs2 = Array.from(secondKataMutiara.querySelectorAll('.card'));
//     //         let shuffleddivs2 = shuffleArray2(divs2)
//     //         shuffleddivs2.forEach(div => secondKataMutiara.appendChild(div));       
//     // }

//     // randomizeDiv();



//     // const cardClassElement = document.getElementsByClassName("card");
//     // for(let i=cardClassElement.length-1; i>=0; i--) {
//     //         const j = Math.floor(Math.random() * (i + 1)); 
//     // }

//     function flipCard() {
//         if (this.classList.contains("flipped")) return;    
//         this.textContent = this.dataset.Content;
//         this.classList.add("flipped");
//         cardmoveSound.play();

//         if (!firstCard) {
//             firstCard = this;

//             // setTimeout(() => {
//             //     checkMatch();
//             // }, 5000);

//         } 
//         // else if(firstCard && secondCard)
//         //     {

//         //     }
//         else if (firstCard && !secondCard) {
//             secondCard = this;
//             if (firstCard.parentElement === this.parentElement) {
//                 secondCard = null;
//                 setTimeout(() => {
//                     this.textContent = '?';
//                     this.classList.remove("flipped");
//                 }, 800);
//                 return
//             }

//             // this.textContent = this.dataset.Content;
//             // this.classList.add("flipped");
//             checkMatch();
//         } 
//         // else if (firstCard.parentElement === this.parentElement) {
//         //     secondCard = null;
//             // this.textContent = '?';
//             // this.classList.remove("flipped");
//         // } 
//         else if (firstCard!== null && secondCard !== null) {
//             alert('Please wait for the pearl to finish checking');
//             this.textContent = '?';
//             this.classList.remove("flipped");
//             // firstCard = this;


//         }

//         console.log(`firstCard: ${firstCard.textContent}, secondCard: ${secondCard.textContent}`);

//     }

  

//     //     function flipCard() {
//     //   if (lockBoard || this.classList.contains("flipped")) return;

//     //   this.textContent = this.dataset.symbol;
//     //   this.classList.add("flipped");

//     //   if (!firstCard) {
//     //     firstCard = this;
//     //   } else {
//     //     secondCard = this;
//     //     checkMatch();
//     //   }
//     // }

//         function checkMatch() {
//             if (firstCard.dataset.id === secondCard.dataset.id) {
//                 firstCard.classList.add("matched");
//                 secondCard.classList.add("matched");
//                 cardokSound.play();
//                 resetTurn();

//             } 
//             // else if(firstCard.classList.contains("flipped") && !secondCard.classList.contains("flipped")) {
//             //     firstCard.textContent = "?";
//             //     firstCard.classList.remove("flipped");
//             //     firstCard = null;
//             //     alert('only firstclick')
//             // }
//             else {

//                 setTimeout(() => {
//                 firstCard.textContent = "?";
//                 secondCard.textContent = "?";
//                 firstCard.classList.remove("flipped");
//                 secondCard.classList.remove("flipped");
//                 resetTurn();
//                 // [firstCard, secondCard] = [null, null];
//                 }, 1000);
//             }
//         }

//         function playAgain(){
//             firstKataMutiara.textContent="";
//             secondKataMutiara.textContent="";
//             resultContainer.classList.add("hidden");
//             resultText.textContent = "";

//             // countdownContainer.classList.add("hidden");

//             createBoard();
//         }

//         playAgainButton.addEventListener("click", () => {
//             clearInterval(intervalId);
//             timeCounter = 31;
//             playAgain();
//             // timeCounter = 30;
//         })

        

//         function resetTurn() {
//             [firstCard, secondCard] = [null, null];
//             //   lockBoard = false;

//             // Check win
//             if (document.querySelectorAll(".matched").length === randomKataFive.length*2) {
//                 setTimeout(
//                     () => 
//                         {
//                         resultContainer.classList.remove("hidden");
//                         resultText.textContent = "🎉 You Win!";
//                         cardvictorySound.play();

//                     },
//                      500);
//             }
//         }

//     // createBoard();

// // randomKataFive.map((item) => {
// //     firstKataMutiara.innerHTML += `
// //         <div class="text-gray-700 w-[15%] h-[30vh] border border-black">
// //             "${item[Object.keys(item)[0]][0]}"
// //         </div>
// //     `;
// //     secondKataMutiara.innerHTML += `
// //         <div class="text-gray-700 w-[15%] h-[30vh] border border-black">
// //             "${item[Object.keys(item)[0]][1]}"
// //         </div>
// //     `;
// // })




