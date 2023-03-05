const buttons = document.querySelectorAll('button'); 
let newButtonContent = '-'

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let currentCard = document.getElementById(button.dataset.number); 
        currentCard.classList.toggle('hide');
        let currentButtonContent = button.textContent; 
        button.textContent = newButtonContent; 
        newButtonContent = currentButtonContent;
    })
})