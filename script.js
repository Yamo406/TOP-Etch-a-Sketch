//Constant Variables
const squareButton = document.querySelector("#numberOfSquares");
const container = document.querySelector(".container");

// Variables
let squaresNumber = 16;

// square numbers button
squareButton.addEventListener("click", (e) => {
    e.preventDefault();
    squaresNumber = Number(prompt(
        "Enter the Number of squares you want per side (max 100)", 16
    ));
    if (squaresNumber > 100) {
        alert("Can't have more than 100 squares per side");
        squaresNumber = 16;
    }
});

// create the squares
for (let i = 0; i < squaresNumber; i++) {
    for (let j = 0; j < squaresNumber; j++) {
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        container.appendChild(div);
    }
}

// helper function to add Event delegation
function addGlobalEventListener(type, selector, callback, parent = document) {
    parent.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(e);
        }
    });
}

addGlobalEventListener(
    "mouseover",
    ".gridSquare",
    (e) => {
        e.target.style.backgroundColor =
            "#" +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0");
    },
    container
);
