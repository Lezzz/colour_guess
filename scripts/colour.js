var colours = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colours[3];
var colourDisplay = document.getElementById("colourDisplay");

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
            alert("correct");
        };


    });
}

