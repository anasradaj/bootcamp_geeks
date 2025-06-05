
const { readFile, writeFile } = require('./fileManager.js');

// Read from Hello World.txt
readFile('Hello World.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('Content of Hello World.txt:', data);
    // Write to Bye World.txt
    writeFile('Bye World.txt', 'Writing to the file', err => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote to Bye World.txt');
      }
    });
  }
});

