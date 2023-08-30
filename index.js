const container = document.querySelector('#container');

let size = 4; 
const resetBtn = document.querySelector('#reset');
const sizeBtn = document.querySelector('#size');
const colorBtn = document.querySelector('#color');


function createRow () {
    for (j = 0; j < size; j++ ) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.flexBasis = `${600 / size}px`;
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hover');
        });
        container.appendChild(cell);
    }
}

function createGrid () {
    for (i = 0; i < size; i ++) {
        createRow(); 
    }
};

function eraseBackground () {
    cell.classList.remove('hover');
};

resetBtn.addEventListener('click', () => eraseBackground);


createGrid();