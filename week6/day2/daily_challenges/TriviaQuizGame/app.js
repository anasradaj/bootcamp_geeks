const express = require('express');
const app = express();
const path = require('path');
const quizRouter = require('./routes/quiz');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/quiz', quizRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia Quiz Game server running at http://localhost:${PORT}`);
});
