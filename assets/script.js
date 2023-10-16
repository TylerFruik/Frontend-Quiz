// #region ELEMENT SELECTORS
const timer = document.querySelector('.time-counter');
const answerBtns = document.querySelectorAll('.answer-btn');
const startQuizBtn = document.getElementById('start-quiz');
const game = document.querySelector('.game');
const mainMenu = document.querySelector('.main-menu');
const quitBtn = document.querySelector('.quit-btn');
const question = document.querySelector('.question');

//#endregion

// #region QUESTIONS
const questions = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6',
    'Question 7',
    'Question 8',
    'Question 9',
    'Question 10',
    'Question 11',
    'Question 12',
    'Question 13',
    'Question 14',
    'Question 15',
    'Question 16',
    'Question 17',
    'Question 18',
    'Question 19',
    'Question 20'
];
//#endregion

// #region FUNCTIONS
function gameStart() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    question.value = getQ();
}

function getQ() {
    if (questions.length > 0) {
        question.textContent = questions.pop();
    } else {
        gameEnd();
    }
}

function checkAnswer(submission) {
    console.log(submission);
}

function gameEnd() {
    console.log('You did it!');
}
// #endregion


// #region LISTENERS
answerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
        checkAnswer(btn.id);
    })
})

startQuizBtn.addEventListener('click', () => {
    game.style.display = 'grid';
    mainMenu.style.display = 'none';
    gameStart()
})

quitBtn.addEventListener('click', () => {
    game.style.display = 'none';
    mainMenu.style.display = 'flex';
})
// #endregion 

console.log(questions);