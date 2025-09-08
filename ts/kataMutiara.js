var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var firstKataMutiara = document.getElementById("firstKataMutiara");
var secondKataMutiara = document.getElementById("secondKataMutiara");
var resultContainer = document.getElementById("resultContainer");
var resultText = document.getElementById("resultText");
var playAgainButton = document.getElementById("playAgainButton");
var kataMutiaraDescription = document.getElementById("kataMutiaraDescription");
var titleContainer = document.getElementById('titleContainer');
var countdownContainer = document.getElementById("countdownContainer");
var countdownText = document.getElementById("countdownText");
var undertheseaSong = document.getElementById("udertheseaSong");
var cardmoveSound = document.getElementById("cardmoveSound");
var cardokSound = document.getElementById("cardokSound");
var cardvictorySound = document.getElementById("cardvictorySound");
var cardlostSound = document.getElementById("cardlostSound");
var nextLevelButton = document.getElementById('nextLevelButton');
var gameLevel = 5;
var kataMutiara = [
    { 1: ["Kamu memang seperti lempeng bumi", "bergeser sedikit saja sudah mengguncang hatiku"] },
    { 2: ["Selain ada garuda di dadaku", "di dadaku juga selalu ada kamu."] },
    { 3: ["Lebih baik menjadi pahlawan", "daripada pacaran tapi jadi selingkuhan"] },
    { 4: ["Menjaga Bumi butuh kekuatan", "Tapi menjagamu butuh pemasukan"] },
    { 5: ["Aku memilih untuk menantang bahaya", "tetapi kamu memilih pria yang lebih kaya"] },
    { 6: ["Berbukalah dengan keluarga", "Karena yang manis belum tentu mau diajak berkeluarga"] },
    { 7: ["Ga masalah kalau kamu ga pilih aku", "memang enggak semua orang seleranya bagus"] },
    { 8: ["Lebih baik gaji besar asal halal", "daripada gaji kecil tapi halal"] },
    { 9: ["Gajian itu kayak mantan ya", "bisanya cuma lewat doang"] },
    { 10: ["Hidup itu seperti roda", "kadang di atas, kadang di bawah"] },
    { 11: ["Kenapa zombie kalo nyerang ramai-ramai?", "Kalau sendirian bukan zombie, tapi zomblo"] },
    { 12: ["Cinta adalah pengorbanan", "tapi kalau pengorbanan mulu sih namanya penderitaan"] },
    { 13: ["Aku rela ikut lomba lari keliling dunia", "asalkan engkau yang menjadi garis finishnya."] },
    { 14: ["Hari Minggu itu weekend", "tapi kalau cinta aku ke kamu tuh will never end."] },
    { 15: ["Napasku kok sesak ya?", "Karena separuh nafasku ada di kamu"] },
    { 16: ["Ikan apa yang bikin baper?", "Ikan stop loving you."] }
];
function shuffleArray(array) {
    var _a;
    var shuffled = __spreadArray([], array, true); // Make a copy so the original array is not changed
    for (var i = shuffled.length - 1; i > 0; i--) {
        // i goes from the last index down to 1
        var j = Math.floor(Math.random() * (i + 1));
        // Pick a random index between 0 and i (inclusive)
        _a = [shuffled[j], shuffled[i]], shuffled[i] = _a[0], shuffled[j] = _a[1];
        // Swap element at i with element at j
    }
    return shuffled; // Return the shuffled array
}
function shuffleArray2(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
function selectRandomPairs(data, count) {
    if (count === void 0) { count = 6; }
    var shuffled = shuffleArray(data); // Shuffle the array
    return shuffled.slice(0, count); // Take the first `count` items
}
//to randomize the whole array
var randomKataMutiara = shuffleArray(kataMutiara);
//to pick 5 items from the randomized array
var randomKataFive = selectRandomPairs(randomKataMutiara, 5);
var firstKataArray = [];
var secondKataArray = [];
var shuffledfirstKataArray = [];
var shuffledsecondKataArray = [];
var firstCard = null;
var secondCard = null;
var letPlayButton = document.getElementById("letPlayButton");
letPlayButton.addEventListener("click", function () {
    undertheseaSong.play();
    letPlayButton.classList.add("hidden");
    firstKataMutiara.classList.remove("hidden");
    secondKataMutiara.classList.remove("hidden");
    kataMutiaraDescription.classList.add('hidden');
    titleContainer === null || titleContainer === void 0 ? void 0 : titleContainer.classList.add('hidden');
    // kataMutiaraDescription.innerHTML = `
    // <div class="font-preahvihear text-xs text-gray-900 mb-2 bg-white/30 border border-black rounded-md p-5" >
    // <b><u>Temukan pasangan kata yang cocok! </u></b>
    // <ul class='list-disc'>
    // <li>Si Mutiara mengucapkan beberapa kata bijak yang terdiri dari 2 frase </li>
    // <li>Frase pertama terletak di kotak atas dan frase kedua terletak di kotak bawah</li>
    // <li>Kalian harus memasangkan frase pertama dengan frase kedua yang tepat!</li>
    // <li>Mohon jangan terburu-buru dalam memilih pasangan! Karena Si Mutiara perlu waktu untuk memproses kedua frase yang dipilih</li>
    // </ul>
    // </div>
    // `;
    countdownContainer.classList.remove("hidden");
    createBoard();
});
var timeCounter = 46;
var intervalId = null;
function runCountDown() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(function () {
        if (timeCounter > 0) {
            timeCounter--;
            countdownText.textContent = " ".concat(timeCounter, " detik");
        }
        else {
            clearInterval(intervalId);
            countdownText.textContent = "Waktu habis!";
            cardlostSound.play();
            resultContainer.classList.remove("hidden");
            resultText.textContent = "You Lose!";
        }
    }, 1000);
}
function createBoard() {
    setTimeout(runCountDown, 3000);
    randomKataFive.forEach(function (item) {
        var card1 = document.createElement("div");
        card1.classList.add("card");
        card1.classList.add("m-3");
        card1.textContent = '?';
        card1.dataset.Content = item[Object.keys(item)[0]][0];
        card1.dataset.id = item[Object.keys(item)[0]];
        card1.classList.add("firstPhraseMove");
        card1.addEventListener("click", flipCard);
        firstKataMutiara.appendChild(card1);
        var card2 = document.createElement("div");
        card2.classList.add("card2");
        card2.classList.add("m-3");
        card2.textContent = '?';
        card2.style.backgroundPosition = "left";
        card2.dataset.Content = item[Object.keys(item)[0]][1];
        card2.dataset.id = item[Object.keys(item)[0]];
        card2.classList.add("secondPhraseMove");
        card2.addEventListener("click", flipCard);
        secondKataMutiara.appendChild(card2);
    });
    //from the array of cards for 1st phrase then we will randomize the order
    var divs = Array.from(firstKataMutiara.children);
    var shuffleddivs = shuffleArray2(divs);
    shuffleddivs.forEach(function (div) { return firstKataMutiara.appendChild(div); });
    //from the array of cards for 2nd phrase then we will randomize the order
    var divs2 = Array.from(secondKataMutiara.children);
    var shuffleddivs2 = shuffleArray2(divs2);
    shuffleddivs2.forEach(function (div) { return secondKataMutiara.appendChild(div); });
    //moving intro animation for the cards set at 4 seconds and then the css is removed
    setTimeout(function () {
        var firstPhraseMoveElements = document.querySelectorAll('.firstPhraseMove');
        firstPhraseMoveElements.forEach(function (element) {
            element.classList.remove('firstPhraseMove');
        });
        var secondPhraseMoveElements = document.querySelectorAll('.secondPhraseMove');
        secondPhraseMoveElements.forEach(function (element) {
            element.classList.remove('secondPhraseMove');
        });
    }, 4000);
}
function flipCard() {
    var _this = this;
    if (this.classList.contains("flipped"))
        return;
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
            setTimeout(function () {
                _this.textContent = '?';
                _this.classList.remove("flipped");
            }, 800);
            return;
        }
        checkMatch();
    }
    //if there is a third card being flipped the system will say no
    else if (firstCard !== null && secondCard !== null) {
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
        setTimeout(function () {
            firstCard.textContent = "?";
            secondCard.textContent = "?";
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetTurn();
        }, 1000);
    }
}
//click the play at the same level again button
function playAgain() {
    firstKataMutiara.textContent = "";
    secondKataMutiara.textContent = "";
    resultContainer.classList.add("hidden");
    resultText.textContent = "";
    //to randomize the whole array
    randomKataMutiara = shuffleArray(kataMutiara);
    //to pick 5 items from the randomized array
    randomKataFive = selectRandomPairs(randomKataMutiara, gameLevel);
    createBoard();
}
// click the next level button
function playAgainWin() {
    firstKataMutiara.textContent = "";
    secondKataMutiara.textContent = "";
    resultContainer.classList.add("hidden");
    resultText.textContent = "";
    //to randomize the whole array
    randomKataMutiara = shuffleArray(kataMutiara);
    gameLevel++;
    //to pick 5 items from the randomized array
    randomKataFive = selectRandomPairs(randomKataMutiara, gameLevel);
    createBoard();
    //hide the nextlevel button after 1 second
    setTimeout(function () {
        nextLevelButton.classList.add('hidden');
    }, 1000);
}
//play again button will always appear regardless player lose or win the round and the difficulty remains the same
playAgainButton.addEventListener("click", function () {
    clearInterval(intervalId);
    timeCounter = 46;
    playAgain();
});
//next level button will appear only when player managed to clear the round and the difficulty will increase by 1 additional card
nextLevelButton.addEventListener("click", function () {
    clearInterval(intervalId);
    timeCounter = 46;
    playAgainWin();
});
// set the card back
function resetTurn() {
    var _a;
    _a = [null, null], firstCard = _a[0], secondCard = _a[1];
    if (document.querySelectorAll(".matched").length === randomKataFive.length * 2) {
        setTimeout(function () {
            var timeRemain = 45 - timeCounter;
            //show result and the next level button
            resultContainer.classList.remove("hidden");
            nextLevelButton.classList.remove("hidden");
            resultText.textContent = "🎉 You Win! Your time was " + timeRemain + " seconds";
            cardvictorySound.play();
            //stop interval first then when createboard function is called then it will reset the countdown
            if (intervalId) {
                clearInterval(intervalId);
            }
        }, 500);
    }
}
