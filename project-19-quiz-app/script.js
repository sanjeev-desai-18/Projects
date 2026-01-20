const quizContainer = document.querySelector(".quiz-container");
const question = document.getElementById("question");
const answerList = document.getElementById("answer-list");
const answers = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next-btn");
const playBtn = document.getElementById("play-btn");
const userScore = document.getElementById("user-score");
const resultContainer = document.querySelector(".result-container");
const totalScore = document.getElementById("total-score");

let quizCounter = 0;
let score = 0;
let clicked = false;

// console.log(answers);

const quiz = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

function displayQueAns() {
  answerList.innerHTML = "";
  nextBtn.classList.add("hidden");
  if (quizCounter < quiz.length) {
    question.textContent = quiz[quizCounter].question;
    const answers = quiz[quizCounter].answers;
    answers.forEach((answer) => {
      const li = document.createElement("li");
      li.className = "answer";
      li.textContent = answer.text;
      answerList.appendChild(li);
      if (answer.correct) {
        li.dataset.correct = true;
      }
      li.addEventListener("click", checkAnswer);
    });
  } else {
    quizContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");
    userScore.textContent = score;
    totalScore.textContent = quiz.length;
    resultContainer.classList.remove("hidden");
  }
}

function checkAnswer(e) {
  if (clicked) return;
  clicked = true;

  nextBtn.classList.remove("hidden");
  const allAnswers = Array.from(e.target.parentElement.children);
  if (e.target.dataset.correct) {
    e.target.classList.add("correct-answer");
    score++;
  } else {
    e.target.classList.add("wrong-answer");
    allAnswers.forEach((answer) => {
      if (answer.dataset.correct) {
        answer.classList.add("correct-answer");
      }
    });
  }
}

nextBtn.addEventListener("click", showNextQue);

function showNextQue() {
  clicked = false;

  quizCounter++;
  displayQueAns();
}

playBtn.addEventListener("click", resetQuiz);

function resetQuiz() {
  console.log(clicked);

  quizCounter = 0;
  score = 0;
  clicked = false;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  displayQueAns();
}

displayQueAns();
