// Frontend logic for Trivia Quiz Game
const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const feedbackDiv = document.getElementById('feedback');
const scoreDiv = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

let currentIndex = 0;
let totalQuestions = 0;
let finished = false;

async function startQuiz() {
  const res = await fetch('/quiz');
  const data = await res.json();
  currentIndex = data.index;
  totalQuestions = data.total;
  finished = false;
  scoreDiv.textContent = '';
  feedbackDiv.textContent = '';
  restartBtn.style.display = 'none';
  showQuestion(data.question, data.options, data.index, data.total);
}

function showQuestion(question, options, index, total) {
  questionDiv.textContent = `Q${index + 1}/${total}: ${question}`;
  optionsDiv.innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => submitAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

async function submitAnswer(answer) {
  if (finished) return;
  const res = await fetch('/quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer })
  });
  const data = await res.json();
  if (data.finished) {
    finished = true;
    feedbackDiv.textContent = data.correct ? 'Correct! 🎉' : `Wrong! The correct answer was: ${data.correctAnswer}`;
    showFinalScore(data.score, totalQuestions);
  } else {
    feedbackDiv.textContent = data.correct ? 'Correct! 🎉' : `Wrong! The correct answer was: ${data.correctAnswer}`;
    showQuestion(data.nextQuestion, data.options, data.index, data.total);
  }
}

function showFinalScore(score, total) {
  scoreDiv.textContent = `Final Score: ${score} / ${total}`;
  optionsDiv.innerHTML = '';
  questionDiv.textContent = 'Quiz Finished!';
  restartBtn.style.display = 'block';
}

restartBtn.onclick = startQuiz;

// Start quiz on page load
startQuiz();
