var colours = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");

colourDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    //initial colours
    squares[i].style.backgroundColor = colours[i];

    //click listeners
    squares[i].addEventListener("click", function () {


        // grab colour
        var clicked = this.style.backgroundColor;
        //compare colour
        if (clicked === pickedColor) {
            messageDisplay.textContent = "WINNER! CONGRATZ!";
            changeColours(clicked);
        } else {
            this.style.backgroundColor = "#c0f8d1";
            messageDisplay.textContent = "Try again";
        };
    });
}

function changeColours(colour) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;

    }
}

function pickColour(){
var random = Math.floor(Math.random() * colours.length);
return colours[random];

}
