// create the boxes
const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("gridBox");
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
    ".gridBox",
    (e) => {
        e.target.style.backgroundColor =
            "#" +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0");
    },
    container
);
