// etch-a-sketch.js
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
let squaresPerSide = 16; // Default number of squares per side

function createGrid() {
    // Clear the container
    container.innerHTML = '';

    // Calculate the width and height of each square
    const squareSize = container.offsetWidth / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        // Create a new square div
        const div = document.createElement('div');
        // Add the square class to the div
        div.classList.add('square');
        // Set the width and height of the square
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        // Add a mouseover event listener to the square
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
        // Append the square to the container
        container.appendChild(div);
    }
}

resetButton.addEventListener('click', function() {
    // Prompt the user for the number of squares per side
    const userInput = prompt('Enter the number of squares per side for the new grid (max 100):');
    // If the user didn't enter a value, return early
    if (userInput === null || userInput === '') return;
    // Validate the input
    squaresPerSide = Math.min(Math.max(parseInt(userInput), 1), 100);
    createGrid();
});

// Create initial 16x16 grid
createGrid();