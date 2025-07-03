const button = document.querySelector('.btn');
const table = document.querySelector('#table');
const letter = document.querySelector('#letter');
const shadow = document.querySelector('#letter-shadow');
const arrow = document.querySelector('#button-arrow');

var isAtTable = false;

button.addEventListener('click', () => {
    table.classList.toggle('change')
    letter.classList.toggle('change')
    shadow.classList.toggle('change')
    arrow.classList.toggle('change')
    isAtTable = !isAtTable;
    if(isAtTable) {
        button.textContent = "Press to step back";
    } else {
        button.textContent = "Press to step closer";
    }
;})