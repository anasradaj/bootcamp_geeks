const express = require('express');
const router = express.Router();

// Hard-coded quiz questions
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Jane Austen', 'Ernest Hemingway'],
    answer: 'Harper Lee'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
    answer: 'Jupiter'
  },
  {
    question: 'Which element has the chemical symbol O?',
    options: ['Gold', 'Oxygen', 'Osmium', 'Iron'],
    answer: 'Oxygen'
  },
  {
    question: 'What year did the Titanic sink?',
    options: ['1912', '1905', '1920', '1898'],
    answer: '1912'
  }
];

let userSession = {
  current: 0,
  score: 0,
  finished: false
};

// GET /quiz: Start the quiz and display the first question
router.get('/', (req, res) => {
  userSession = { current: 0, score: 0, finished: false };
  res.json({
    question: questions[0].question,
    options: questions[0].options,
    index: 0,
    total: questions.length
  });
});

// POST /quiz: Submit an answer and move to the next question
router.post('/', (req, res) => {
  if (userSession.finished) {
    return res.json({ message: 'Quiz already finished.', score: userSession.score });
  }
  const { answer } = req.body;
  const q = questions[userSession.current];
  let correct = false;
  if (answer && q && answer === q.answer) {
    userSession.score++;
    correct = true;
  }
  userSession.current++;
  if (userSession.current >= questions.length) {
    userSession.finished = true;
    return res.json({
      message: 'Quiz finished!',
      correct,
      correctAnswer: q.answer,
      score: userSession.score,
      finished: true
    });
  } else {
    const nextQ = questions[userSession.current];
    res.json({
      correct,
      correctAnswer: q.answer,
      nextQuestion: nextQ.question,
      options: nextQ.options,
      index: userSession.current,
      total: questions.length,
      finished: false
    });
  }
});

// GET /quiz/score: Display the user’s final score
router.get('/score', (req, res) => {
  res.json({ score: userSession.score, total: questions.length, finished: userSession.finished });
});

module.exports = router;
