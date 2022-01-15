var topbar = document.getElementById("topbar");
var inputText = document.getElementById("new-colour");
var userColour;
const colorButton = document.querySelector(".color-button");

// topbar.stylebackgroundColor = "green";

document.getElementById("colour-button").addEventListener("click", changeColour);

function changeColour() {
    userColour = inputText.value;
    topbar.style.backgroundColor = userColour;
}