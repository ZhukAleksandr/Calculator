let display =document.querySelector('.display');

let buttons =Array.from(document.querySelectorAll('.button'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
});