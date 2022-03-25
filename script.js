// document.getElement is a DOM function that capters the element by its ID
let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let minus = document.getElementById('minus');
let output = document.getElementById('score');

// The score will declared to zero as it is our default value
let score = 0;

// JS addEventListener listens to muese click
plus.addEventListener('click', () => {
    score++;
    output.innerHTML = score;
    if(score >= 1){
        output.style.color = 'green';
    }else if(score == 0){
        output.style.color = 'white';
    }
});

minus.addEventListener('click', () => {
    score--;
    output.innerHTML = score;
    if(score < 1){
        output.style.color = 'red';
    }else if(score == 0){
        output.style.color = 'white';
    }
});

reset.addEventListener('click', () => {
    score = 0;
    output.innerHTML = score;
    output.style.color = 'white';
});