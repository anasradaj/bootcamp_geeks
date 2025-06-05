const fs = require('fs');

function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    callback(err, data);
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', err => {
    callback(err);
  });
}

module.exports = { readFile, writeFile };