"use strict";
// document.addEventListener("dblclick", function (event: MouseEvent): void {
//   event.preventDefault();
// });
Object.defineProperty(exports, "__esModule", { value: true });
exports.initNavMenu = initNavMenu;
// const burgericon = document.getElementById('burgericon') as HTMLElement | null;
// const navmobilecontainer = document.getElementById('navmobilecontainer') as HTMLElement | null;
// const navmobile = document.getElementById('navmobile') as HTMLElement | null;
// if (burgericon && navmobilecontainer) {
//   burgericon.addEventListener('click', () => {
//     navmobilecontainer.classList.toggle('hidden');
//   });
// }
// if (navmobilecontainer && navmobile) {
//   navmobilecontainer.addEventListener('click', function (event: MouseEvent): void {
//     event.stopPropagation();
//     const target = event.target as Node;
//     if (!navmobile.contains(target)) {
//       navmobilecontainer.classList.add('hidden');
//     }
//   });
// }
function initNavMenu() {
    var burgericon = document.getElementById('burgericon');
    var navmobilecontainer = document.getElementById('navmobilecontainer');
    var navmobile = document.getElementById('navmobile');
    burgericon === null || burgericon === void 0 ? void 0 : burgericon.addEventListener('click', function () {
        navmobilecontainer === null || navmobilecontainer === void 0 ? void 0 : navmobilecontainer.classList.toggle('hidden');
    });
    if (navmobilecontainer && navmobile) {
        navmobilecontainer.addEventListener('click', function (event) {
            var target = event.target;
            if (!navmobile.contains(target)) {
                navmobilecontainer.classList.add('hidden');
            }
        });
    }
}
var burgericon = document.getElementById('burgericon');
var navmobilecontainer = document.getElementById('navmobilecontainer');
var navmobile = document.getElementById('navmobile');
burgericon === null || burgericon === void 0 ? void 0 : burgericon.addEventListener('click', function () {
    navmobilecontainer === null || navmobilecontainer === void 0 ? void 0 : navmobilecontainer.classList.toggle('hidden');
});
if (navmobilecontainer && navmobile) {
    navmobilecontainer.addEventListener('click', function (event) {
        var target = event.target;
        if (!navmobile.contains(target)) {
            navmobilecontainer.classList.add('hidden');
        }
    });
}
