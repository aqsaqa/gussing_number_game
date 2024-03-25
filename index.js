#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number.done
//user inout for gussing number.done
//compare user input with copmuter generated number and show result.done
const randoNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randoNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    }
]);
if (answer.userGuessNumber === randoNumber) {
    console.log("congratulation you guess right number.");
}
else {
    console.log("you guess wrong number");
}
