const firstKataMutiara = document.getElementById("firstKataMutiara");
const secondKataMutiara = document.getElementById("secondKataMutiara");

const kataMutiara = [
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
    { 15 : ["Mapasku kok sesak ya?", "Karena separuh nafasku ada di kamu"]},
    { 16 : ["Ikan apa yang bikin baper?", "Ikan stop loving you."]}
]


function shuffleArray(array) {
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

function selectRandomPairs(data, count = 5) {
    const shuffled = shuffleArray(data); // Shuffle the array
    return shuffled.slice(0, count);     // Take the first `count` items
}

let randomKataFive = selectRandomPairs(kataMutiara, 5);

// let filteredFive = [];

// for (let i = 0; i < 5; i++) {
//     let index = Math.floor(Math.random() * kataMutiara.length-1);
//     filteredFive.push(kataMutiara[index]);
// }


// const randomFirstFive = [];
// for (let j = 0; j < filteredFive.length; j++) {

//     let index = Math.floor(Math.random() * filteredFive.length-1);
//     console.log(index);
//     randomFirstFive.push(index);

// }


randomKataFive.map((item) => {
    firstKataMutiara.innerHTML += `
        <div class="text-gray-700 w-[15%] h-[30vh] border border-black">
            "${item[Object.keys(item)[0]][0]}"
        </div>
    `;
    secondKataMutiara.innerHTML += `
        <div class="text-gray-700 w-[15%] h-[30vh] border border-black">
            "${item[Object.keys(item)[0]][1]}"
        </div>
    `;
})




