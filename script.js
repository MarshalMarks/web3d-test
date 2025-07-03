const button = document.querySelector('.btn');
const changingElements = [];
changingElements.push(document.querySelector('#table'));
changingElements.push(document.querySelector('#letter'));
changingElements.push(document.querySelector('#letter-shadow'));
changingElements.push(document.querySelector('#button-arrow'));
changingElements.push(document.querySelector('#anything'));

var isAtTable = false;

button.addEventListener('click', () => {
    for(let element of changingElements) {
        element.classList.toggle('change');
    }
    isAtTable = !isAtTable;
    if(isAtTable) {
        button.textContent = "Press to step back";
    } else {
        button.textContent = "Press to step closer";
    }
;})