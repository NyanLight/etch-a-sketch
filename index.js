const container = document.querySelector('#container');

let size = 20; 



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

createGrid ();

function hoverEffect () {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hover');
    });
}
