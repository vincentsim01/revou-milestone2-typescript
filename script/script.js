const burgericon = document.getElementById('burgericon');
const navmobilecontainer = document.getElementById('navmobilecontainer');
const navmobile = document.getElementById('navmobile');

burgericon.addEventListener('click', () => {
    navmobilecontainer.classList.toggle('hidden');
});


navmobilecontainer.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!navmobile.contains(event.target)) {
        navmobilecontainer.classList.add('hidden');
    }
  });


let magicMeter = document.getElementById('magicMeter');
let magicDuelLevel = document.getElementById('magicDuelLevel');

magicMeter.style.width = magicDuelLevel.innerText * 10 + '%';
