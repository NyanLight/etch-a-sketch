const container = document.querySelector("#container");

let size;
const resetBtn = document.querySelector("#reset");
const sizeBtn = document.querySelector("#size");
const colorBtn = document.querySelector("#color");

function createGrid(size) {
  for (i = 0; i < size * size; i++) {
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
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("hover");
  });
});

sizeBtn.addEventListener('click', () => {
    container.innerHTML='';
    size = Number(prompt('how many cells do you want?'));
    createGrid(size);
});

createGrid(4);


