// Daily Challenge: Words In The Stars

function wordsInTheStars() {
    while (true) {
        const input = prompt('Enter several words separated by commas:');
        if (!input || input.indexOf(',') === -1) {
            console.log('Please enter at least two words separated by a comma.');
            continue;
        }
        const words = input.split(',').map(word => word.trim());
        const maxLen = Math.max(...words.map(word => word.length));
        const border = '*'.repeat(maxLen + 4);
        console.log(border);
        words.forEach(word => {
            const padded = word + ' '.repeat(maxLen - word.length);
            console.log(`* ${padded} *`);
        });
        console.log(border);
        break;
    }
}

wordsInTheStars();
