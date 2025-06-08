const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Emoji data
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🌞', name: 'Sun' },
    { emoji: '🌙', name: 'Moon' },
    { emoji: '⭐', name: 'Star' },
    { emoji: '🎮', name: 'Game Controller' },
    { emoji: '🎵', name: 'Music Note' }
];

// Leaderboard
let leaderboard = [];

// Get random emoji with options
app.get('/api/emoji', (req, res) => {
    const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [correctEmoji.name];
    
    // Get 3 random incorrect options
    while (options.length < 4) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        if (!options.includes(randomEmoji.name)) {
            options.push(randomEmoji.name);
        }
    }
    
    // Shuffle options
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    
    res.json({
        emoji: correctEmoji.emoji,
        options: shuffledOptions,
        correctAnswer: correctEmoji.name
    });
});

// Submit guess
app.post('/api/guess', (req, res) => {
    const { guess, correctAnswer } = req.body;
    const isCorrect = guess === correctAnswer;
    
    res.json({
        correct: isCorrect,
        correctAnswer
    });
});

// New route to save the final score to the leaderboard
app.post('/api/save_score', (req, res) => {
    const { playerName, score } = req.body;

    if (playerName && typeof score === 'number') {
        let playerFound = false;
        for (let i = 0; i < leaderboard.length; i++) {
            if (leaderboard[i].name === playerName) {
                // Update score only if the new score is higher
                if (score > leaderboard[i].score) {
                    leaderboard[i].score = score;
                }
                playerFound = true;
                break;
            }
        }
        if (!playerFound) {
            leaderboard.push({ name: playerName, score: score });
        }
        // Sort leaderboard by score in descending order
        leaderboard.sort((a, b) => b.score - a.score);
        // Keep only top 10 scores
        leaderboard = leaderboard.slice(0, 10);
    }
    res.json({ leaderboard });
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 