import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.redBright("\n \t\t Welcome to Saiqa - Word Counter"));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(50));
console.log(chalk.bold("Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.yellow(words.length)}`));
console.log("=".repeat(50));
