// #region ELEMENT SELECTORS
const timer = document.querySelector("time-counter");
const answerButtons = document.querySelectorAll('.answer-btn');
//#endregion
let qOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// #region QUESTIONS
const q1 = "Question 1";
const q2 = "Question 2";
const q3 = "Question 3";
const q4 = "Question 4";
const q5 = "Question 5";
const q6 = "Question 6";
const q7 = "Question 7";
const q8 = "Question 8";
const q9 = "Question 9";
const q10 = "Question 10";
const q11 = "Question 11";
const q12 = "Question 12";
const q13 = "Question 13";
const q14 = "Question 14";
const q15 = "Question 15";
const q16 = "Question 16";
const q17 = "Question 17";
const q18 = "Question 18";
const q19 = "Question 19";
const q20 = "Question 20";
//#endregion

// #region FUNCTIONS
function checkAnswer(submission) {
    console.log(submission);
}
// #endregion


// #region LISTENERS
answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        checkAnswer(button.id);
    })
})
// #endregion 

