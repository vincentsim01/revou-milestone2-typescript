document.addEventListener("dblclick", function (event) {
  event.preventDefault();
});

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











