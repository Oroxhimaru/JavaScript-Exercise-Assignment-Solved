/*  1. Write a program to check whether the given input number is 
divisible by 3 or else show a message “Number is not divisible 
by 3”. */

// Get user input for the number
const userInput = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (userInput % 3 === 0) {
      console.log(`${userInput} is divisible by 3`);
} else {
    console.log(`${userInput} is not divisible by 3`);
}

/* 2. Write a program that checks whether the given input is an even 
number or an odd number. */

// Get user input for the number
const userInput2 = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (userInput2 % 2 === 0) {
    console.log(`${userInput2} is Even`);
} else {
    console.log(`${userInput2} is Odd`);
}

/* 3. Write an if/else statement with the following condition:
If the variable age is greater than 18, output "Old enough", 
otherwise output "Too young" */

const age = 24; // Replace 24 with the actual age value

if (age > 18) {
    console.log("Old enough");
} else {
    console.log("Too young");
}

/* 4. Write a program that prompts the user for their name, and then 
displays a special greeting to that person if their name is the 
same as yours. If the name entered by the user is anything 
other than your name, your code should not produce any 
output. */

const yourName = "M.HASSAN MALIK";
const userName = prompt("Enter your name:");

if (userName.toLowerCase() === yourName.toLowerCase()) {
    console.log(`Hello, ${userName}! You have the same name as me.`);
}

/* 5. Write a program to check whether the given input number is 
divisible by 3 or not by using Switch Case statements. Show a 
message “Number is not divisible by 3” or “Number is divisible 
by 3”. */

// Get user input for the number
const userInput3 = parseInt(prompt("Enter a number:"));

// Calculate the remainder when dividing by 3
const remainder = userInput3 % 3;

// Use a switch case statement to check if it's divisible by 3
switch (remainder) {
    case 0:
        console.log(`${userInput3} is divisible by 3.`);        
        break;

    default:
        console.log(`${userInput3} is not divisible by 3.`);
        break;
}

 /* 6. Write a program that takes a character(number or string) in a 
variable & checks whether the given input is a number, 
uppercase letter or lower case letter. (Hint: ASCII codes:-
A=65, Z=90, a=97, z=122)
 */


// Get user input for a character
const userInput4 = prompt("Enter a character (number or letter):");

// Check if the input is a number
if (!isNaN(userInput4)) {
    console.log(`${userInput4} is a number.`);
} else {
    const charCode = userInput4.charCodeAt(0);
    
    // Check if the input is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
        console.log(`${userInput4} is an uppercase letter.`);
    }
    // Check if the input is a lowercase letter
    else if (charCode >= 97 && charCode <= 122) {
        console.log(`${userInput4} is a lowercase letter.`);
    } else {
        console.log(`${userInput4} is not a number or a letter.`);
    }
}

/* 7. Write a program to create a calculator for +, -, *, /, % using 
switch case statements. (number1, number2 and operator will 
be input) */

// Get user input for the first number
const num1 = parseFloat(prompt("Enter the first number:"));

// Get user input for the second number
const num2 = parseFloat(prompt("Enter the second number:"));

// Get user input for the operation (+, -, *, /, %)
const operator = prompt("Enter the operation (+, -, *, /, %):");

// Initialize a variable to store the result
let result;

// Use a switch case to perform the calculation based on the operator
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      // Check for division by zero
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero.";
    }
    break;
  case "%":
    result = num1 % num2;
    break;
  default:
    result = "Invalid operator";
}

// Display the result to the user
console.log(`Result: ${result}`);

/* 8. Write a program that takes time as input from user in 24 hours 
clock format like: 1900 = 7pm. Implement the following case 
using if, else & else if statements
 */

// Get user input for time
const userInput5 = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

// Check the time and provide a response
if (userInput5 >= 0 && userInput5 < 1200) {
    console.log("Good morning!");
} else if (userInput5 >= 1200 && userInput5 < 1700) {
    console.log("Good afternoon!");
} else if (userInput5 >= 1700 && userInput5 < 2100) {
    console.log("Good evening!");
} else if (userInput5 >= 2100 && userInput5 <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid input. Please enter a valid time in 24-hour format.");
}


/* 9. Write a program that takes a calendar year in YYYY format in 
a variable. Check & notify the user whether it is a leap year or 
not. */


// Get user input for the year
const year = parseInt(prompt("Enter a year (YYYY):"));

// Check if it's a leap year
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}


/*
10. Write a program that 
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give 
message “ Please enter your password”
ii. Check if both passwords are same. If they are same, 
show message “Correct! The password you entered 
matches the original password”. Show “Incorrect 
password” otherwise */

// Store the correct password in a variable
const correctPassword = "Gameover"; // Replace with your actual password

// Ask the user to enter their password
const userPassword = prompt("Enter your password:");

// Check if the user entered a password
if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

