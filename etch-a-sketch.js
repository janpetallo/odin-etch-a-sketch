// etch-a-sketch.js
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
let squaresPerSide = 16; // Default number of squares per side

// Generate a base RGB color
let baseR = Math.floor(Math.random() * 256);
let baseG = Math.floor(Math.random() * 256);
let baseB = Math.floor(Math.random() * 256);

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
            // Get the current opacity
            let currentOpacity = parseFloat(this.getAttribute('data-opacity')) || 0;
            // Decrease the opacity by 10%
            currentOpacity = Math.max(currentOpacity + 0.1, 0);
            // Update the opacity attribute
            this.setAttribute('data-opacity', currentOpacity);
            // Set the background color of the square
            this.style.backgroundColor = `rgba(${baseR}, ${baseG}, ${baseB}, ${currentOpacity})`;
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
    // if 0 or negative number is entered, prompt again
    if (parseInt(userInput) <= 0) {
        alert('Please enter a positive number.');
        return;
    }
    // Validate the input
    squaresPerSide = Math.min(Math.max(parseInt(userInput), 1), 100);
    // Generate a new base RGB color
    baseR = Math.floor(Math.random() * 256);
    baseG = Math.floor(Math.random() * 256);
    baseB = Math.floor(Math.random() * 256);
    createGrid();
});

// Create initial 16x16 grid
createGrid();