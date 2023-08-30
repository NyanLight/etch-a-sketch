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

sizeBtn.addEventListener("click", () => {
  answer = Number(prompt("how many cells do you want?"));
  if (answer > 0 && answer <= 100) {
    container.innerHTML = "";
    size = answer;
    createGrid(size);
  } else if (answer == 0) {
    return;
  } else {
    alert("Type value in range from 0 to 100");
  }
});

createGrid(4);
