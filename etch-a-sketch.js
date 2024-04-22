// etch-a-sketch.js
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

function createGrid(squaresPerSide) {
    // Clear the container
    container.innerHTML = '';

    // Calculate the width and height of each square
    const squareSize = container.offsetWidth / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}

resetButton.addEventListener('click', function() {
    let squaresPerSide = prompt('Enter the number of squares per side for the new grid (max 100):');
    squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide), 1), 100);
    createGrid(squaresPerSide);
});

// Create initial 16x16 grid
createGrid(16);