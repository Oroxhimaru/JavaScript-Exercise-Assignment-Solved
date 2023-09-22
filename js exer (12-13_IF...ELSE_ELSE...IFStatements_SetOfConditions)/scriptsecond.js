/* 11. Write a program that adds an else statement to the following 
script to display “You are not Fahad”
var firstName = "Ali";
if (firstName === "Fahad") {
 document.write("Hello Fahad!");
} */

var firstName = "Ali";

if (firstName === "Fahad") {
    document.write("Hello Fahad! <br>");
} else {
    document.write('You are not Fahad <br>');
}


/* 12. This if/else statement does not work. Try to fix it:
 var greeting;
 var hour = 13;
 if (hour < 18) {
 greeting = "Good day";
 else
 greeting = "Good evening";
 } */

 var greeting;
 var hour = 13;
 if (hour < 18) {
 greeting = "Good day";
 }
 else {
 greeting = "Good evening";
 }


 /* 13. Write a JavaScript program that accept two integers and 
display the larger. Also show if the two integers are equal */


var intOne = parseInt(prompt("Enter an integer"));
var intTwo = parseInt(prompt("Enter another integer"));

if (intOne == intTwo) {
    document.write("Integers are equal <br>");      
} 
else if (intOne > intTwo) {
    document.write(`${intOne} <br>`);
}
else {
    document.write(` ${intTwo} <br>`);
}



/* 14. Write a program that takes input a number from user & state 
whether the number is positive, negative or zero.*/

var nom = parseInt(prompt("Enter a number"));

if (nom > 0) {
    document.write("The number is Positive <br>");      
} 
else if (nom < 0) {
    document.write(`The number is Negative <br>`);
}
else {
    document.write(`The number is Zero <br>`);
}


/* 15. Ask the user what the current hour is. If the hour is between 
6 and 9 a.m., tell the user, "Breakfast is served." If the hour is 
between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If 
the hour is between 5 and 8 p.m., tell the user, "It's dinner 
time." For any other hours, tell the user, "Sorry, you'll have to 
wait, or go get a snack." (Hint: Store the hour in 24 hours clock 
format i.e. 14 for 2pm , 15 for 3pm) */

const eating = parseInt(prompt('Tell me the current hour (0-23):'));

if (!isNaN(eating) && eating >= 0 && eating <= 23) { //this is for if user input is not a number
if (eating >= 6 && eating <= 9) {
      alert('Breakfast is served.');
} else if (eating >= 11 && eating <= 13) {
    alert('Time for lunch.');
} else if (eating >= 17 && eating <= 20) {
    alert("It's dinner time.");
} else {
    alert("Sorry, you'll have to wait, or go get a snack.")
} 
} else {
    alert('Invalid input. Please enter a valid hour (0-23).');
}


/* 16. Write a program that stores value in a variable & tell whether 
the type of that variable is a "number", "string", "boolean" or 
“undefined */

// Get user input using prompt
var type = prompt("Enter something:");

// Check if the input is a boolean (true or false)
if (type === "true" || type === "false") {
    console.log("The input is a boolean.");
} else {
    // Try to convert the input to a number
    var numberInput = parseFloat(type);

    // Check if it's a valid number
    if (!isNaN(numberInput)) {
        console.log("The input is a number.");
    } else if (type === "") {
        console.log("The input is undefined.");
    } else if (typeof type === "string") {
        console.log("The input is a string.");
    } else {
        console.log("The input has an unknown data type.");
    }
}

/* 17. Write a program that takes a character (i.e. string of length 1) 
and returns true if it is a vowel, false otherwise. */

// Function to check if a character is a vowel
function isVowel(char) {
        // Convert the character to lowercase to handle both cases (uppercase and lowercase)
        char = char.toLowerCase();
        // Check if the character is one of the vowels
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}
var vowel = prompt("Enter a character:");

if (vowel.length === 1 && isVowel(vowel)) {
    console.log("The character is a vowel.");
} else {
    console.log("The character is not a vowel.");
}

/* 18. Choose the correct comparison operator to display "true", 
when:
10 is NOT equal to 8 */

if (10 !== 8) {
    console.log("true"); // This will display "true" because 10 is not equal to 8
} else {
    console.log("false"); // This part won't be executed because the condition is true
}


/* 19. Use a switch statement to rewrite the following JavaScript 
code. Prompt the user for the number of a month rather than 
setting it to 8:
 */
var monthNumber = parseInt(prompt("Enter the number of a month (1-12):"));
switch (monthNumber) {
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
    case 3:
        alert("March");
        break;
    case 4:
        alert("April"); 
        break;
    case 5:
        alert("May");
        break;
    case 6:
        alert("June"); 
        break;
    case 7:
        alert("July");
        break;
    case 8:
        alert("August"); 
        break;
    case 9:
        alert("September");
        break;
    case 10:
        alert("October"); 
        break;
    case 11:
        alert("November");
        break;
    case 12:
        alert("December");
        break;
    default:
        alert("Invalid month number");
        break;
}

/* 20. Use a conditional (ternary) operator for this exercise:
If the variable age is a value below 18, the value of the variable 
voteable should be "Too young",
otherwise the value of voteable should be "Old enough". */

var age = parseInt(prompt('Enter your age:'));
var voteable = (age < 18) ? 'Too young' : 'Old enough';
console.log(voteable);