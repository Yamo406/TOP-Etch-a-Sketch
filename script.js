// create the boxes
const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("gridBox");
        container.appendChild(div);
    }
}

container.addEventListener("mouseover", (event) => {
    let target = event.target.closest(".gridBox");
    target.style.backgroundColor =
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

    // target.classList.add('active');
});
