// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.documentElement.style.setProperty("--bg-color", "#ffffff");
    document.documentElement.style.setProperty("--card-bg", "#eeeeee");
    document.documentElement.style.setProperty("--text-color", "#222222");
    document.documentElement.style.setProperty("--hover-bg", "#cccccc");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#313e51");
    document.documentElement.style.setProperty("--card-bg", "#3b4d66");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--hover-bg", "#475d85");
  }
});

// Variables
let currentSubject = "";
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = "";
let timerInterval = null;

const subjectButtons = document.querySelectorAll(".subject-btn");
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const scoreScreen = document.getElementById("score-screen");
const scoreText = document.getElementById("score-text");
const questionCount = document.getElementById("question-count");
const timerDisplay = document.getElementById("timer");
const progressFill = document.getElementById("progress-fill");

subjectButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
  const subjectMap = {
  html: "html",
  css: "css",
  javascript: "js",
  accessibility: "accessibility"
};
currentSubject = subjectMap[btn.innerText.toLowerCase()];

    document.querySelector(".quiz-wrapper").classList.add("hidden");
    quizScreen.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = "";
    loadQuestion();
  });
});

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  clearInterval(timerInterval); // Clear previous timer

  const questionObj = questionsData[currentSubject][currentQuestionIndex];
  questionText.innerText = questionObj.question;
  optionsContainer.innerHTML = "";
  selectedAnswer = "";

  const shuffledOptions = shuffle([...questionObj.options]);

  shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.addEventListener("click", () => {
      if (selectedAnswer) return; // Disable further clicks
      selectedAnswer = option;

      Array.from(optionsContainer.children).forEach(b => {
        b.disabled = true;
        if (b.innerText === questionObj.answer) {
          b.classList.add("correct");
        } else if (b.innerText === option) {
          b.classList.add("wrong");
        }
      });
    });
    optionsContainer.appendChild(btn);
  });

  const total = questionsData[currentSubject].length;
  questionCount.innerText = `Question ${currentQuestionIndex + 1} of ${total}`;

  const percent = ((currentQuestionIndex) / total) * 100;
  progressFill.style.width = `${percent}%`;

  let timeLeft = 15;
  timerDisplay.innerText = `⏱️ ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      selectedAnswer = "___TIMEOUT___";
      Array.from(optionsContainer.children).forEach(b => {
        b.disabled = true;
        if (b.innerText === questionObj.answer) {
          b.classList.add("correct");
        }
      });
    }
  }, 1000);
}

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) return alert("Select an answer or wait for timeout!");

  const correctAnswer = questionsData[currentSubject][currentQuestionIndex].answer;
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questionsData[currentSubject].length) {
    loadQuestion();
  } else {
    clearInterval(timerInterval);
    showFinalScore();
  }
});

function showFinalScore() {
  quizScreen.classList.add("hidden");
  scoreScreen.classList.remove("hidden");

  const total = questionsData[currentSubject].length;
  let message = "";
  const percent = (score / total) * 100;

  if (percent === 100) {
    message = "🥳 Perfect! You're a legend!";
  } else if (percent >= 70) {
    message = "🔥 Great job!";
  } else if (percent >= 40) {
    message = "👍 Not bad, keep practicing!";
  } else {
    message = "😢 Better luck next time!";
  }

  scoreText.innerText = `${message} You scored ${score} out of ${total}.`;
}
