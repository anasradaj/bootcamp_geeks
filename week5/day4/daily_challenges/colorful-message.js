// colorful-message.js
import chalk from 'chalk';

export function showColorfulMessage() {
  console.log(chalk.magentaBright.bgCyan.bold('Hello from your colorful Node.js module!'));
}
