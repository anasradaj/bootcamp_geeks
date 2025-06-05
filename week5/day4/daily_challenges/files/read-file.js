import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function displayFileContent() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'file-data.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file-data.txt:', err);
    } else {
      console.log('Content of file-data.txt:');
      console.log(data);
    }
  });
}


