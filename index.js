const container = document.querySelector("#container");

let size = 4;
const resetBtn = document.querySelector("#reset");
const sizeBtn = document.querySelector("#size");
const colorBtn = document.querySelector("#color");

function createRow(size = 4) {
  for (j = 0; j < size; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.flexBasis = `${600 / size}px`;
    cell.addEventListener("mouseover", () => {
      cell.classList.add("hover");
    });
    container.appendChild(cell);
  }
}

function createGrid(size = 4) {
  for (i = 0; i < size; i++) {
    createRow();
  }
}

resetBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.classList.remove('hover');
    })

});

createGrid();
