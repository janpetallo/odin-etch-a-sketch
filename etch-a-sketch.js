// get id container
const container = document.getElementById('container');

// create grid
for(let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    // change color on hover
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
    container.appendChild(div);
}