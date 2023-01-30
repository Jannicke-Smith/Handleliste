
const averageAge = () => {
    return (24 + 32 + 48) / 3;
}

console.log(averageAge());

console.log(calculate());

function calculate() {
    return 2 * 2;
}

const boxElement = document.querySelector('.box');

const selectElement = document.querySelector('.colors');

selectElement.addEventListener('change', (event) => {
    console.log(event.target.value);

    boxElement.setAttribute('style', `background-color: ${event.target.value};`)
    boxElement.classList.add(event.target.value);
});

