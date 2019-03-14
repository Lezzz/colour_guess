var colours = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var header = document.querySelector("h1");
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
            header.style.backgroundColor = clicked;
            
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

function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];

}

function generateRandomColors(num) {
    //make array
    var arr = [];
    //add num randomcolros to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
