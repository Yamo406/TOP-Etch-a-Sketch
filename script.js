//Constant Variables
const squareButton = document.querySelector("#numberOfSquares");
const container = document.querySelector(".container");

// Variables
let squaresNumber = 16;

function createGrid(size) {
    container.innerHTML = "";

    container.style.setProperty("--grid-size", size);

    // create the squares
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        container.appendChild(div);
    }
}
createGrid(squaresNumber);

// square numbers button
squareButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newSize = Number(
        prompt("Enter the Number of squares you want per side (max 100)")
    );
    if (newSize > 100 || newSize === NaN || newSize === null || newSize === 0) {
        alert("Can't have more than 100 squares per side");
        newSize = 16;
    }
    squaresNumber = newSize;
    createGrid(squaresNumber);
});

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

addGlobalEventListener(
    "click",
    ".gridSquare",
    (e) => {
        e.target.style.backgroundColor = "white";
    },
    container
);
