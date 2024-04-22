// etch-a-sketch.js
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

function createGrid(squaresPerSide) {
    // Clear the container
    container.innerHTML = '';

    // Calculate the width and height of each square
    const squareSize = container.offsetWidth / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        // Create a new square
        const div = document.createElement('div');
        // Add the square class to the square
        div.classList.add('square');
        // Set the width and height of the square
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        // Add event listener to change the color of the square when the mouse hovers over it
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
        // Add the square to the container
        container.appendChild(div);
    }
}

resetButton.addEventListener('click', function() {
    // Prompt the user for the number of squares per side
    let squaresPerSide = prompt('Enter the number of squares per side for the new grid (max 100):');
    // Validate the input
    squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide), 1), 100);
    createGrid(squaresPerSide);
});

// Create initial 16x16 grid
createGrid(16);