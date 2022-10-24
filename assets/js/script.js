const startButton = document.getElementById("start-btn");
const questionContainerEl = document.getElementById("question-container");
const startScreen = document.getElementById("startScreen");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");

// Questions array
const questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: [
        { text: "strings", correct: false },
        { text: "booleans", correct: false },
        { text: "alerts", correct: true },
        { text: "numbers", correct: false },
    ]
},
{
    question: "The condition in an if / else statement is enclosed within _____.",
    answers: [
        { text: "quotes", correct: false },
        { text: "curly brackets", correct: false },
        { text: "parentheses", correct: true },
        { text: "square brackets", correct: false },
    ]
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
        { text: "numbers and strings", correct: false },
        { text: "other arrays", correct: false },
        { text: "booleans", correct: false },
        { text: "all of the above", correct: true },
    ]
},
{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
        { text: "commas", correct: false },
        { text: "curly brackets", correct: false },
        { text: "quotes", correct: true },
        { text: "parentheses", correct: false },
    ]
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        { text: "JavaScript", correct: false },
        { text: "terminal / bash", correct: false },
        { text: "for loops", correct: false },
        { text: "console.log", correct: true },
    ]
},
]



// let shuffledQuestions = questions.sort(() => Math.random() - .5);
let currentQuestionIndex = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Quiz commencing!");
    startButton.classList.add("hide");
    startScreen.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    let q = questions[currentQuestionIndex];
    question.textContent = q.text;

    for (var i = 0; i < q.answers.length; i++) {
        document.getElementById()
    }
}

// function showQuestion (question) {
//     questionEl.innerText = question.question;
//     question.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerText = answer.text;
//         button.classList.add("btn");
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", selectAnswer)
//         answerButtonsEl.appendChild(button)
//     })
// }

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    }else  {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");

}



