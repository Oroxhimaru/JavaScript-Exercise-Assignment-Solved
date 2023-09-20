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

