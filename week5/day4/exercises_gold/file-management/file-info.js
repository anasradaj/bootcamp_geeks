// file-info.js
const fs = require('fs');
const path = require('path');

function showFileInfo() {
  const filePath = path.join(__dirname, 'data', 'example.txt');
  const exists = fs.existsSync(filePath);
  console.log(`File exists: ${exists}`);
  if (exists) {
    const stats = fs.statSync(filePath);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created: ${stats.birthtime}`);
  }
}

module.exports = { showFileInfo };
