var nrOfSq = 6;
var colours = generateRandomColors(nrOfSq);
var resetBtn = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var header = document.querySelector("h1");
var pickedColor = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var nrOfSq = 6;

easy.addEventListener("click", function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    nrOfSq = 3;
    colours = generateRandomColors(nrOfSq);
    pickedColor = pickColour();
    colourDisplay.textContent = pickedColor;
    header.style.backgroundColor = "#482728";
    messageDisplay.textContent = null;
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        };
    };
});



hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    nrOfSq = 6;
    colours = generateRandomColors(nrOfSq);
    pickedColor = pickColour();
    colourDisplay.textContent = pickedColor;
    header.style.backgroundColor = "#482728";
    messageDisplay.textContent = null;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
    };
});

colourDisplay.textContent = pickedColor;

resetBtn.addEventListener("click", function () {
    colours = generateRandomColors(nrOfSq);
    pickedColor = pickColour();
    colourDisplay.textContent = pickedColor;
    header.style.backgroundColor = "#482728";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
    };
    messageDisplay.textContent = null;

    resetBtn.textContent = "New Colours";
});

for (var i = 0; i < squares.length; i++) {
    //initial colours
    squares[i].style.backgroundColor = colours[i];

    //click listeners
    squares[i].addEventListener("click", function () {


        // grab colour
        var clicked = this.style.backgroundColor;
        //compare colour
        if (clicked === pickedColor) {
            messageDisplay.textContent = "Correct.";
            changeColours(clicked);
            header.style.backgroundColor = clicked;
            resetBtn.textContent = "Play again?";

        } else {
            this.style.backgroundColor = "#482728";
            messageDisplay.textContent = "Wrong. Try again.";
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
