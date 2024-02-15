const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What year did the Titanic sink?",
        answers: ["1912", "1920", "1930", "1940"],
        correctAnswer: "1912"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: "H2O"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Jupiter", "Venus", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        answers: ["O", "O2", "H2O", "CO2"],
        correctAnswer: "O2"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the tallest mammal?",
        answers: ["Elephant", "Giraffe", "Hippo", "Rhino"],
        correctAnswer: "Giraffe"
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        answers: ["Venus", "Mercury", "Mars", "Saturn"],
        correctAnswer: "Venus"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the world's largest ocean?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "What is the capital of Spain?",
        answers: ["Barcelona", "Madrid", "Valencia", "Seville"],
        correctAnswer: "Madrid"
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: ["Ag", "Au", "Hg", "Pb"],
        correctAnswer: "Ag"
    },
    {
        question: "Who discovered penicillin?",
        answers: ["Marie Curie", "Alexander Fleming", "Albert Einstein", "Isaac Newton"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the largest organ in the human body?",
        answers: ["Brain", "Liver", "Heart", "Skin"],
        correctAnswer: "Skin"
    }
];

const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers-container");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");

let currentQuestion = 0;
let score = 0;
let mistakes = [];

function showResult() {
    questionContainer.style.display = "none";
    answersContainer.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.style.display = "block";
    let resultText = "";
    if (score > 8) {
        resultText += '<p style="color: green;">Passed</p>';
    } else {
        resultText += '<p style="color: red;">Failed</p>';
    }
    resultText += `Score: ${score} out of ${questions.length}!<br><br>`;
    if (score <= 8) {
        resultText += "<p>Mistakes:</p>";
        mistakes.forEach((mistake, index) => {
            resultText += `<p class="mistake">${index + 1}. ${mistake.question}<br>`;
            resultText += `Your Answer: ${mistake.chosenAnswer}<br>`;
            resultText += `Correct Answer: ${mistake.correctAnswer}<br></p>`;
        });
    }
    resultContainer.innerHTML = resultText;
}
function displayQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = question.question;
    answersContainer.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.addEventListener("click", () => {
            checkAnswer(answer === question.correctAnswer, answer);
        });
        answersContainer.appendChild(button);
    });
}

function checkAnswer(isCorrect, chosenAnswer) {
    if (isCorrect) {
        score++;
    } else {
        mistakes.push({ question: questions[currentQuestion].question, chosenAnswer, correctAnswer: questions[currentQuestion].correctAnswer });
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    answersContainer.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.style.display = "block";
    let resultText = `You scored ${score} out of ${questions.length}!<br><br>`;
    if (mistakes.length > 0) {
        resultText += "Mistakes:<br>";
        mistakes.forEach((mistake, index) => {
            resultText += `${index + 1}. ${mistake.question}<br>`;
            resultText += `Your Answer: ${mistake.chosenAnswer}<br>`;
            resultText += `Correct Answer: ${mistake.correctAnswer}<br><br>`;
        });
    }
    resultContainer.innerHTML = resultText;
}

displayQuestion();
submitButton.addEventListener("click", showResult);