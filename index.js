const container = document.querySelector("#container");

let size;
let color = "black";
const resetBtn = document.querySelector("#reset");
const sizeBtn = document.querySelector("#size");
const colorBtn = document.querySelector("#color");

function createGrid(size) {
  for (i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.flexBasis = `${500 / size}px`;
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = `${color}`;
    });
    container.appendChild(cell);
  }
}

resetBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

sizeBtn.addEventListener("click", () => {
  answer = Number(prompt("how many cells do you want?"));
  if (answer > 0 && answer <= 100) {
    container.innerHTML = "";
    size = answer;
    sizeBtn.textContent = `${size}X${size}`
    createGrid(size);
  } else if (answer == 0) {
    return;
  } else {
    alert("Enter a value in range from 0 to 100");
  }
});

colorBtn.addEventListener("change", () => {
  color = document.getElementById("color").value;
});

createGrid(4);
