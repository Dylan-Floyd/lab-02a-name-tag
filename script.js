let button = document.getElementById('set-name');
let input = document.getElementById('name-input');
let display = document.getElementById('name-display');

button.addEventListener('click', () => {
    display.textContent = input.value;
    input.value = "";
})