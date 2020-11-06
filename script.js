const buttons = document.querySelectorAll('pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select')
const winner = document.getElementById('winner');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');
const choices = ['paper', 'rock', 'scissors', 'lizard', 'spoke'];

let score = 0;
let userChoice = undefined;

buttons.forEach(button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('date-choice');
        checkWinner();
    });
};
reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
});

openBtn.addEventListener('click', () => {

    modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})


function checkWinner() {
    const computerChoice = pickRandomChoice();
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);


    if (userChoice === computerChoice) {

        winner.innerText = 'draw';

    } else if {
        (userChoice === 'lizard' && computerChoice === 'spoke') ||

        (userChoice === 'scissors' && computerChoice === 'spoke') ||
        (userChoice === 'spoke' && computerChoice === 'scissors')

        {
            updateScore(1);
            winner.innerText = 'win';
        } else {

            updateScore(-1);
            winner.innerText = 'lost';

        }

        main.style.display = 'none';
        selection.style.display = 'flex';
    };


    function updateScore(value) {
        score += value;
        scoreEl.innerText = score;
    }

    function pickRandomChoice() {
        return choices[Math.floor(Math.random() * choices.length)];


    }


    function updateSelection(selectionEl, choice) {

        selectionEl.classlist.remove('btn-lizard');
        selectionEl.classlist.remove('btn-spoke');
        selectionEl.classList.remove('btn-scissors');
        const img = selectionEl.querySelector('icon-.svg');

        selectionEl.classList.add('btn-${choice}');

        img.src = 'icon.';
        img.alt = choice;


    }



    alert('hello');