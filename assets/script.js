// #region ELEMENT SELECTORS
const timer = document.querySelector('.time-counter');
const answerBtns = document.querySelectorAll('.answer-btn');
const msg = document.querySelector('.msg');
const startQuizBtn = document.getElementById('start-quiz');
const game = document.querySelector('.game');
const mainMenu = document.querySelector('.main-menu');
const qDisplay = document.querySelector('.question-text');
const qNumDisplay = document.querySelector('.question-number');
const highScoresBtn = document.getElementById('high-scores');
const highScoresMenu = document.querySelector('.high-scores-menu');
const highScoresList = document.querySelector('.high-scores-list');
const highScoresReturn = document.getElementById('high-scores-return');
const aText = document.getElementById('a');
const bText = document.getElementById('b');
const cText = document.getElementById('c');
const dText = document.getElementById('d');
const scoreText = document.querySelector('.score-num');
const gameOver = document.querySelector('.game-over-menu');
const saveScoreBtn = document.getElementById('save-score');
const quitBtn = document.querySelector('.quit-btn');
const gameOverScore = document.querySelector('.game-over-score');
const gameOverQuitBtn = document.querySelector('.game-over-quit-btn');
const gameOverTime = document.querySelector('.game-over-time');
const enterScoreMenu = document.querySelector('.enter-score-menu');
let qNum = 1;
let highScores = [];
let timeLeft = 60;
let timeInterval;
let score = 0;
let quizContent = [];
//#endregion
// #region QUESTIONS
function setQuestions() {
    quizContent =[
        {qIndex: 1,  
            qText: 'What does HTML stand for?', 
            qAns: 'a', 
            aA: 'Hyper Text Markup Language', 
            aB: 'High Tech Modern Language', 
            aC: 'Hyper Transfer Markup Language', 
            aD: 'Hyperlink and Text Markup Language'},
        {qIndex: 2,
            qText: 'Which HTML tag is used to create an ordered list?', 
            qAns: 'b', 
            aA: '<ul>', 
            aB: '<ol>', 
            aC: '<li>', 
            aD: '<list>'},
        {qIndex: 3,  
            qText: 'What is the correct HTML for creating a hyperlink', 
            qAns: 'c', 
            aA: '<link href="https://example.com"&gt;Click here</link>', 
            aB: '<a url="https://example.com"&gt;Click here</a>', 
            aC: '<a href="https://example.com"&gt;Click here</a>', 
            aD: '<hyperlink>Click here</hyperlink>'},
        {qIndex: 4,  
            qText: 'Which HTML element is used to define the structure of an HTML document?', 
            qAns: 'd', 
            aA: '<body>', 
            aB: '<head>', 
            aC: '<structure>', 
            aD: '<html>'},
        {qIndex: 5,  
            qText: 'Which HTML tag is used for creating a line break?', 
            qAns: 'a', 
            aA: '<br>', 
            aB: '<lb>', 
            aC: '<newline>', 
            aD: '<line>'},
        {qIndex: 6,  
            qText: 'What is the purpose of the HTML <div> element?', 
            qAns: 'b', 
            aA: 'To create a hyperlink', 
            aB: 'To define a division or a section in an HTML document', 
            aC: 'To format text with bold styling', 
            aD: 'To insert an image'},
        {qIndex: 7,  
            qText: 'What does CSS stand for?', 
            qAns: 'c', 
            aA: 'Computer Style Sheets', 
            aB: 'Colorful Style Sheets', 
            aC: 'Cascading Style Sheets', 
            aD: 'Creative Style Sheets'},
        {qIndex: 8,  
            qText: 'How do you add a background color in CSS?', 
            qAns: 'd', 
            aA: 'color: background-yellow;', 
            aB: 'set-bg: yellow;', 
            aC: 'bg-color: yellow;', 
            aD: 'background-color: yellow;'},
        {qIndex: 9,  
            qText: 'Which CSS property is used to change the text color of an element?', 
            qAns: 'a', 
            aA: 'color', 
            aB: 'text-color', 
            aC: 'font-color', 
            aD: 'text-style'},
        {qIndex: 10, 
            qText: 'What is the correct CSS syntax for adding a comment?', 
            qAns: 'b', 
            aA: '// This is a comment //', 
            aB: '/* This is a comment */', 
            aC: '\' This is a comment \'', 
            aD: '# This is a comment #'},
        {qIndex: 11, 
            qText: 'How do you select an element with the class "example" in CSS', 
            qAns: 'c', 
            aA: 'example', 
            aB: '#example', 
            aC: '.example', 
            aD: '<example>'},
        {qIndex: 12, 
            qText: 'Which CSS property is used to control the spacing between elements in a box model layout?', 
            qAns: 'd',
            aA: 'margin',
            aB: 'spacing',
            aC: 'gap',
            aD: 'padding'},
        {qIndex: 13, 
            qText: 'What is JavaScript?', 
            qAns: 'a',
            aA: 'A programming language that runs in the browser',
            aB: 'A type of coffee',
            aC: 'A server-side scripting language',
            aD: 'A markup language'},
        {qIndex: 14, 
            qText: 'How do you declare a variable in JavaScript?', 
            qAns: 'b',
            aA: 'variable myVariable;',
            aB: 'var myVariable;',
            aC: 'v myVariable;',
            aD: 'let myVariable;'},
        {qIndex: 15, 
            qText: 'Which operator is used for equality in JavaScript?', 
            qAns: 'c',
            aA: '===',
            aB: ':=',
            aC: '==',
            aD: '='},
        {qIndex: 16, 
            qText: 'What is the correct way to write a conditional statement in JavaScript?', 
            qAns: 'd',
            aA: 'if (x = 5) { ... }',
            aB: 'if x = 5 then { ... }',
            aC: 'if x == 5 { ... }',
            aD: 'if (x == 5) { ... }'},
        {qIndex: 17, 
            qText: 'What is the purpose of the JavaScript function "parseInt()"', 
            qAns: 'a',
            aA: 'To convert a string to an integer',
            aB: 'To round a decimal number to the nearest integer',
            aC: 'To format text',
            aD: 'To create a new paragraph element'},
        {qIndex: 18, 
            qText: 'What is the result of the expression: 3 + "3" in JavaScript?', 
            qAns: 'b',
            aA: '33',
            aB: '\"33\"',
            aC: '6',
            aD: '36'},
        {qIndex: 19, 
            qText: 'Which language sets most of the styling of a website?', 
            qAns: 'c',
            aA: 'Python',
            aB: 'Java',
            aC: 'CSS',
            aD: 'C++'},
        {qIndex: 20, 
            qText: 'Which of the following is NOT commonly used in frontend web development?', 
            qAns: 'd',
            aA: 'HTML',
            aB: 'CSS',
            aC: 'JS',
            aD: 'Python'}
    ];
}
//#endregion
// #region FUNCTIONS
function init() {
    const storedHighScores = JSON.parse(localStorage.getItem('highScores'));
    if (storedHighScores !== null) {
        highScores = storedHighScores;
    } else {
        highScoresList.textContent = 'You have no previous scores!'
        highScoresList.style.color = 'var(--secondary)';
    }
}

function showMainMenu() {
    mainMenu.style.display = 'flex';
    game.style.display = 'none';
    highScoresMenu.style.display = 'none';
    gameOver.style.display = 'none';
    enterScoresMenu.style.display = 'none';
}

function gameStart() {
    score = 0;
    scoreText.textContent = score;
    qNum = 1;
    setQuestions();
    shuffleQ();
    countdown();
    getQ();
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
        aText.textContent = quizContent[0].aA;
        bText.textContent = quizContent[0].aB;
        cText.textContent = quizContent[0].aC;
        dText.textContent = quizContent[0].aD;
    } else {
        gameEnd();
    }
}

function checkAnswer(submission) {
    if (submission == quizContent[0].qAns) {
        quizContent.shift();
        qNum++;
        score++;
        timeLeft += 3;
        scoreText.textContent = score;
        getQ();
    } else {
        quizContent.shift();
        qNum++;
        timeLeft--;
        getQ();
    }
}

function countdown() {
    timeInterval = setInterval(function () {
        if (timeLeft > -1) {
            if (timeLeft > 9) {
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
    msg.textContent = 'Out of Time!';
    startQuizBtn.textContent = 'Try Again?';
    game.style.display = 'none';
    mainMenu.style.display = 'flex';
    highScoresMenu.style.display = 'none';
}

function gameEnd() {
    game.style.display = 'none';
    highScoresMenu.style.display = 'none';
    mainMenu.style.display = 'none';
    gameOver.style.display = 'flex';
    gameOverScore.textContent = score;
    gameOverTime.textContent = timeLeft + 2;
    clearInterval(timeInterval);
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
    gameOver.style.display = 'none';
    enterScoreMenu.style.display = 'none';
    timeLeft = 60;
    clearInterval(timeInterval);
    gameStart();
})

quitBtn.addEventListener('click', () => {
    showMainMenu();
})

gameOverQuitBtn.addEventListener('click', () => {
    showMainMenu();
})

saveScoreBtn.addEventListener('click', () => {
    enterScoreMenu.style.display = 'flex'
    game.style.display = 'none';
    highScoresMenu.style.display = 'none';
    mainMenu.style.display = 'none';
    gameOver.style.display = 'none';
})

highScoresBtn.addEventListener('click', () => {
    highScoresMenu.style.display = 'flex';
    game.style.display = 'none';
    mainMenu.style.display = 'none';
    gameOver.style.display = 'none';
    enterScoresMenu.style.display = 'none'
})

highScoresReturn.addEventListener('click', () => {
    showMainMenu();
})
// #endregion 
init()