const startAdventureButton = document.getElementById("startAdventureButton");
const welcomeDescription = document.getElementById("welcomeDescription");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeContainer = document.getElementById("welcomeContainer");
startAdventureButton.addEventListener("click", () => {
    const duelContainer = document.getElementById("duelContainer");
    duelContainer.classList.remove("hidden");
    welcomeDescription.classList.add("hidden");
    startAdventureButton.classList.add("hidden");
    welcomeTitle.classList.add("hidden");
    welcomeContainer.classList.add("hidden");
});