//remaining question's answer here.

/* 11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable. 
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct 
answer”. 
b. If the guessed number +1 is the secret number, show 
“Close enough to the correct answer” */


var secretNumber =  Math.floor(Math.random() * 10) + 1;
var userinputA = parseFloat(prompt("Guess the secret number (between 1 and 10):"));

if (userinputA === secretNumber) {
    alert("Bingo! Correct answer");
    
} else if (userinputA === secretNumber - 1 || userinputA === secretNumber + 1) {
    alert("Close enough to the correct answer");
}
else {
    alert("Sorry, try again");
}

/* 12. Write a program to check whether the given number is 
divisible by 3. Show the message to the user if the number is 
divisible by 3.
 */

var userInputB = parseFloat(prompt("Please give the number which is divisible by 3"));
// Check if the number is divisible by 3
if (userInputB % 3 === 0) {
    alert(userInputB + " is divisible by 3");
} else {
    alert(`${userInputB} is not divisible by 3`);
}

/* 13. Names & Total scores of two teams are taken as input. Write 
a program that shows which team has won the game or show if 
there is a tie. (Team A or Team B) */

const teamAName = prompt("Enter the name of Team A:");
const teamAScore = parseInt(prompt("Enter the total score of Team A:"));

const teamBName = prompt("Enter the name of Team B:");
const teamBScore = parseInt(prompt("Enter the total score of Team B:"));

// Check which team has won or if it's a tie
if (teamAScore > teamBScore) {
    alert(`${teamAName} has won the game!`);
} else if (teamBScore > teamAScore) {
    alert(`${teamBName} has won the game!`);
} else {
    alert("It's a tie!");
}

/* 14. Take a string, a number and a Boolean in three variables. 
Write a program that checks the type of variables & responds 
accordingly. Like */

// Define the variables
const strVariable = "Pakistan";
const numVariable = 42;
const boolVariable = true;

// Check the type of each variable and respond accordingly
if (typeof strVariable === "string") {
    console.log("strVariable is a string.");
}

if (typeof numVariable === "number") {
    console.log("numVariable is a number.");
}

if (typeof boolVariable === "boolean") {
    console.log("boolVariable is a boolean.");
}

/* 15. Write a program that checks whether the given input is an 
even number or an odd number */

// Get user input (you can replace this with any input method you prefer)
const userInputC = parseFloat(prompt("Enter a number:"));

// Check if the number is even or odd
if (userInputC % 2 === 0) {
    console.log(`${userInputC} is an even number.`);
} else {
    console.log(`${userInputC} is an odd number.`);
}

/* 16. Weather in Karachi nowadays is too cool, write a program 
that takes temperature as input and shows a message based on 
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */

// Get user input for temperature (you can replace this with any input method you prefer)
const userInputD = prompt("Enter the temperature in Celsius:");

// Convert the user input to a number
const temperature = parseFloat(userInputD);

// Check the temperature and display the appropriate message
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The weather today is normal.");
} else if (temperature > 20) {
    console.log("Today's weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today's weather is so cool.");
} else {
    console.log("The temperature is very cold.");
}

/* 17. Write a program to create a calculator for +,-,*, / & % using if 
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
 */

// Get user input for the first number
const numFirst = parseFloat(prompt("Enter the first number:"));

// Get user input for the second number
const numSecond = parseFloat(prompt("Enter the second number:"));

// Get user input for the operation
const operation = prompt("Enter the operation (+, -, *, /, %):");

// Initialize a variable to store the result
let result;

// Perform the calculation based on the operation
if (operation === "+") {
    result = numFirst + numSecond;
} else if (operation === "-") {
    result = numFirst - numSecond;
} else if (operation === "*") {
    result = numFirst * numSecond;
} else if (operation === "/") {
    // Check for division by zero
    if (numSecond !== 0) {
        result = numFirst / numSecond;
    } else {
        result = "Cannot divide by zero.";
    }
} else if (operation === "%") {
    result = numFirst % numSecond;
} else {
    result = "Invalid operation";
}

// Display the result to the user
console.log(`Result: ${result}`);


/* 18. Write a program that takes user input day name. If the day is 
Monday, Tuesday, Wednesday, Thursday or Friday, then show 
“It’s a week day”. If the day is Saturday then show “It’s 
weekend”. If the day is Sunday then show “Yay! It’s a holiday”. */

// Get user input for the day name
const day = prompt("Enter the day name:");

// Convert the day name to lowercase for case-insensitive comparison
const lowercaseDay = day.toLowerCase();

// Check the day and display the appropriate message
if (lowercaseDay === "monday" || lowercaseDay === "tuesday" || lowercaseDay === "wednesday" || lowercaseDay === "thursday" || lowercaseDay === "friday") {
    console.log("It's a week day.");
} else if (lowercaseDay === "saturday") {
    console.log("It's weekend.");
} else if (lowercaseDay === "sunday") {
    console.log("Yay! It's a holiday.");
} else {
    console.log("Invalid day name.");
}

/* 19. Write a program that takes input user’s score, if it’s greater 
than 50, say “You are passed”. Otherwise, show “Try again!” */

// Get user input for the score
const score = parseFloat(prompt("Enter your score:"));

// Check the score and display the appropriate message
if (score > 50) {
    console.log("You are passed.");
} else {
    console.log("Try again!");
}

/* 20. Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater 
number of 5 and 10 is 10.") */

// Get user input for the two numbers
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Check which number is greater
if (num1 > num2) {
    console.log(`The greater number of ${num1} and ${num2} is ${num1}.`);
} else if (num2 > num1) {
    console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);
} else {
    console.log(`Both numbers ${num1} and ${num2} are equal.`);
}



/*21. The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3 
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of 
hello world in different languages)
*/

/* In JavaScript, a switch statement is a control structure used for making decisions based on the value of an expression. It's a cleaner and more efficient way to handle multiple conditional branches compared to using a series of if statements.

Here's how a switch statement works:

You start with a switch keyword, followed by an expression you want to evaluate.

Inside the switch statement, you define multiple case blocks. Each case block checks whether the expression matches a specific value. If a match is found, the code inside that case block is executed.

    You often end each case block with a break statement. This is important because it tells JavaScript to exit the switch statement after the code in the matched case block is executed. Without break, JavaScript would continue to execute code in subsequent case blocks even if they don't m */

// Get user input for the language code
const languageCode = prompt("Enter a language code (e.g., es, de, en):");

// Initialize a variable to store the translated greeting
let greeting;

// Use a switch statement to set the greeting based on the language code
switch (languageCode.toLowerCase()) {
    case "es":
        greeting = "¡Hola, Mundo!";        
        break;
        case "de":
            greeting = "Hallo, Welt!";
            break;
        case "fr":
            greeting = "Bonjour, le monde!";
            break;
    default:
        greeting = "Hello, World!";
}

// Display the translated greeting

document.write(greeting);

/* 22. Write a program to take input a number & tell whether it’s a 
positive or negative number  */

// Get user input for the number
const number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

/* 23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1 
dog".
Run the program for a few different inputs and show the result 
to make sure it works */

// Get user input for the noun
const noun = prompt("Enter a noun:");

// Get user input for the number
const userNumber = parseInt(prompt("Enter a number:"));

// Define a function to pluralize the noun
function pluralizeNoun(noun, number) {
    if (number === 1) {
        return `${number} ${noun}`;
    } else {
        // Add "s" to the noun to make it plural
        return `${number} ${noun}s`;
    }
}

// Call the pluralizeNoun function and display the result
const pluralized = pluralizeNoun(noun, userNumber);
alert(`Pluralized: ${pluralized}`);
