// #region ELEMENT SELECTORS
const timer = document.querySelector('.time-counter');
const answerBtns = document.querySelectorAll('.answer-btn');
const msg = document.querySelector('.msg');
const startQuizBtn = document.getElementById('start-quiz');
const game = document.querySelector('.game');
const mainMenu = document.querySelector('.main-menu');
const quitBtn = document.querySelector('.quit-btn');
const qDisplay = document.querySelector('.question-text');
const qNumDisplay = document.querySelector('.question-number');
const highScoresBtn = document.getElementById('high-scores');
const highScoresMenu = document.querySelector('.high-scores-menu');
let qNum = 1;
let timeLeft = 59;
let highScores = [];

//#endregion

// #region QUESTIONS
const quizContent =[
    {qIndex: 1,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 2,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 3,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 4,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 5,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 6,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 7,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 8,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 9,  qText: 'Test text?', qAns: 'a'},
    {qIndex: 10, qText: 'Test text?', qAns: 'a'},
    {qIndex: 11, qText: 'Test text?', qAns: 'a'},
    {qIndex: 12, qText: 'Test text?', qAns: 'a'},
    {qIndex: 13, qText: 'Test text?', qAns: 'a'},
    {qIndex: 14, qText: 'Test text?', qAns: 'a'},
    {qIndex: 15, qText: 'Test text?', qAns: 'a'},
    {qIndex: 16, qText: 'Test text?', qAns: 'a'},
    {qIndex: 17, qText: 'Test text?', qAns: 'a'},
    {qIndex: 18, qText: 'Test text?', qAns: 'a'},
    {qIndex: 19, qText: 'Test text?', qAns: 'a'},
    {qIndex: 20, qText: 'Test text?', qAns: 'a'}
];
//#endregion

// #region FUNCTIONS
function init() {
    const storedHighScores = JSON.parse(localStorage.getItem('highScores'));
    if (storedHighScores !== null) {
        highScores = storedHighScores;
    }
}

function gameStart() {
    timeLeft = 59;
    shuffleQ();
    getQ();
    countdown();
}

function shuffleQ() {
    for (let i = quizContent.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizContent[i], quizContent[j]] = [quizContent[j], quizContent[i]];
    }
}

function getQ() {
    if (quizContent.length > 0) {
        qNumDisplay.textContent = qNum;
        qDisplay.textContent = quizContent[0].qText;
        console.log(quizContent)
    } else {
        gameEnd();
    }
}

function checkAnswer(submission) {
    console.log(submission);
    if (submission == quizContent[0].qAns) {
        quizContent.pop();
        qNum++;
        timeLeft += 3;
        getQ();
    } else {
        timeLeft--;
    }
}

function countdown() {
    let timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            if (timeLeft > 10) {
                timer.textContent = timeLeft;
                timeLeft--;
            } else {
                timer.textContent = '0' + timeLeft;
                timeLeft--;
            }
        } else {
            timer.textContent = '00';
            clearInterval(timeInterval);
            outOfTime();
        }
    }, 1000);
}

function outOfTime() {
    msg.textContent = 'Out of Time!'
    startQuizBtn.textContent = 'Try Again?'
    game.style.display = 'none';
    mainMenu.style.display = 'flex';
    highScoresMenu.style.display = 'none';
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
    highScoresMenu.style.display = 'none';
    mainMenu.style.display = 'none';
    gameStart()
})

quitBtn.addEventListener('click', () => {
    game.style.display = 'none';
    highScoresMenu.style.display = 'none';
    mainMenu.style.display = 'flex';
})

highScoresBtn.addEventListener('click', () => {
    game.style.display = 'none';
    highScoresMenu.style.display = 'flex';
    mainMenu.style.display = 'none';
})

// #endregion 

init()


// BUGS
// Timer number is reset but the previous time is not stopped.
//  if the game is entered and exited before the timer hits 00
//  each time, several timers are in effect.