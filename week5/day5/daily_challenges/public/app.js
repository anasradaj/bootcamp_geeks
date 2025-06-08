let currentEmoji = null;
let currentOptions = [];
let currentCorrectAnswer = null;
let score = 0;
let playerName = '';

document.getElementById('start-game-btn').addEventListener('click', startGame);
document.getElementById('play-again-btn').addEventListener('click', playAgain);
document.getElementById('save-score-btn').addEventListener('click', saveScoreAndReturnToSetup);

async function startGame() {
    score = 0; 
    document.getElementById('score').textContent = score;
    playerName = document.getElementById('player-name').value.trim();
    if (!playerName) {
        alert('Please enter your name to start the game!');
        return;
    }
    
    document.getElementById('player-setup').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    await loadNewEmoji();
    updateLeaderboard();
}

async function loadNewEmoji() {
    try {
        const response = await fetch('http://localhost:3000/api/emoji');
        const data = await response.json();
        
        currentEmoji = data.emoji;
        currentOptions = data.options;
        currentCorrectAnswer = data.correctAnswer;
        
        document.getElementById('emoji').textContent = currentEmoji;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        
        currentOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => submitGuess(option);
            optionsContainer.appendChild(button);
        });
        
        document.getElementById('feedback').textContent = '';
    } catch (error) {
        console.error('Error loading emoji:', error);
    }
}

async function submitGuess(guess) {
    try {
        const response = await fetch('http://localhost:3000/api/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                guess,
                correctAnswer: currentCorrectAnswer,
                playerName
            }),
        });
        
        const data = await response.json();
        
        if (data.correct) {
            score++;
            document.getElementById('score').textContent = score;
            document.getElementById('feedback').textContent = 'Correct! 🎉';
            document.getElementById('feedback').style.color = 'green';
        } else {
            document.getElementById('feedback').textContent = `Wrong! The correct answer was: ${data.correctAnswer}`;
            document.getElementById('feedback').style.color = 'red';
            document.getElementById('game').style.display = 'none';
            document.getElementById('game-over').style.display = 'block';
            document.getElementById('game-over-feedback').textContent = `Game Over! The correct answer was: ${data.correctAnswer}. Your score was ${score}.`;
            await saveFinalScore();
        }
        
        updateLeaderboard();
        
        if (data.correct) {
            setTimeout(loadNewEmoji, 1500);
        }
    } catch (error) {
        console.error('Error submitting guess:', error);
    }
}

async function saveFinalScore() {
    try {
        await fetch('http://localhost:3000/api/save_score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                playerName: playerName,
                score: score
            }),
        });
    } catch (error) {
        console.error('Error saving final score:', error);
    }
}

function playAgain() {
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadNewEmoji();
}

function saveScoreAndReturnToSetup() {
    saveFinalScore();
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('player-setup').style.display = 'block';
    document.getElementById('player-name').value = ''; 
    playerName = '';
    updateLeaderboard(); 
}

async function updateLeaderboard() {
    try {
        const response = await fetch('http://localhost:3000/api/leaderboard');
        const leaderboard = await response.json();
        
        const leaderboardElement = document.getElementById('leaderboard');
        leaderboardElement.innerHTML = '';
        
        leaderboard.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.name}: ${entry.score} points`;
            leaderboardElement.appendChild(li);
        });
    } catch (error) {
        console.error('Error updating leaderboard:', error);
    }
}