// document.addEventListener("dblclick", function (event: MouseEvent): void {
//   event.preventDefault();
// });

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


const burgericon = document.getElementById('burgericon');
const navmobilecontainer = document.getElementById('navmobilecontainer');
const navmobile = document.getElementById('navmobile');

burgericon?.addEventListener('click', () =>{
    navmobilecontainer.classList.toggle('hidden');

})

if(navmobilecontainer && navmobile){
    navmobilecontainer.addEventListener('click', function(event:MouseEvent):void{


        const target=event.target as Node;
        if(!navmobile.contains(target)){
            navmobilecontainer.classList.add('hidden');
        }
    })
}