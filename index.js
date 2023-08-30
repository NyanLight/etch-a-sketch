const container = document.querySelector("#container");

let size;
const resetBtn = document.querySelector("#reset");
const sizeBtn = document.querySelector("#size");
const colorBtn = document.querySelector("#color");


function createGrid(size) {
    for (j = 0; j < (size * size); j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.flexBasis = `${600 / size}px`;
        cell.addEventListener("mouseover", () => {
          cell.classList.add("hover");
        });
        container.appendChild(cell);
  }
}

resetBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.classList.remove('hover');
    })

});


createGrid(4);
