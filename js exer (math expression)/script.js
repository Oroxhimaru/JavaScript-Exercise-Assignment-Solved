/* 1. Write a program that take two numbers & add them in a new 
variable. Show the result in your browser. */
var num1 = 13;
var num2 = 9;
var numTotal = num1 + num2;
alert("Sum of " + num1 + " and "+ num2 + " is " + numTotal);

/* 2. Repeat task1 for subtraction, multiplication, division & 
modulus. E.g.
 */

var num3 = 13;
var num4 = 9;
var numTotal2 = num3 - num4;
alert("Result of subtracting " + num4 + " from "+ num3 + " is " + numTotal2);


var num5 = 13;
var num6 = 9;
var numTotal3 = num5 * num6;
alert("Result of multiplying " + num5 + " and "+ num6 + " is " + numTotal3);


var num7 = 13;
var num8 = 9;
var numTotal4 = num7 / num8;
alert("Result of dividing " + num7 + " by "+ num8 + " is " + numTotal4);

var num9 = 13;
var num10 = 9;
var numTotal5 = num9 % num10;
alert("Remainder of dividing " + num9 + " by " + num10 + " is " + numTotal5);



/* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value 
after variable declaration is: ??”
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial 
value: 3”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value 
after increment is: 4”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value 
after addition is: 11”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value 
after decrement is: 10”.
k. Show the remainder after dividing the variable’s value by 
3. Output : “The remainder is : 1”
 */

var someNum;
document.write("<h3>Value after variable declaration is: " + someNum + "</h3>");
someNum = 3;
document.write("<h3>Initial value: " + someNum + "</h3>");
someNum++;
document.write("<h3>Value after increment is: " + someNum + "</h3>");
var total = someNum + 7;
document.write("<h3>Value after addition is: " + total + "</h3>");
total--;
document.write("<h3>Value after decrement is: " + total + "</h3>");
var remainder = total % 3;
document.write("<h3>The remainder is: " + remainder + "</h3>");


/*  4. Cost of one movie ticket is 600 PKR. Write a script to store 
ticket price in a variable & calculate the cost of buying 5 tickets 
to a movie. Example output */

var ticketPrice = 600;
var costOf5 = ticketPrice * 5;
document.write("<h3>Total cost to buy 5 tickets to a movie is: " + costOf5 + " PKR </h3>");

/* 5. Write a script to display multiplication table of any number in 
your browser. E.g */
// ONE WAY
document.write("<h3>Multiplication table of " + 4 + "</h3> <br>");
document.write("<h3>" + 4  + " X " + 1 + " = " + 4 + "</h3>");
document.write("<h3>" + 4  + " X " + 2 + " = " + 8 + "</h3>");
document.write("<h3>" + 4  + " X " + 3 + " = " + 12 + "</h3>");
document.write("<h3>" + 4  + " X " + 4 + " = " + 16 + "</h3>");
document.write("<h3>" + 4  + " X " + 5 + " = " + 20 + "</h3>");
document.write("<h3>" + 4  + " X " + 6 + " = " + 24 + "</h3>");
document.write("<h3>" + 4  + " X " + 7 + " = " + 28 + "</h3>");
document.write("<h3>" + 4  + " X " + 8 + " = " + 32 + "</h3>");
document.write("<h3>" + 4  + " X " + 9 + " = " + 36 + "</h3>");
document.write("<h3>" + 4  + " X " + 10 + " = " + 40 + "</h3>");

// ANOTHER WAY
var userInput = parseFloat(prompt("ENTER THE VALUE OF MULTIPLICATION TABLE"));
document.write("<h3>Multiplication table of " + userInput + "</h3> <br>");
for (let i = 1; i <= 10 ; i++){
    document.write("<h3>" + userInput + " X " + i + " = " + i*userInput + "</h3>");
}


/* 6. The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”. */

var Celsius = 12;
let $F = (Celsius* 9/5)+32;
document.write("<h2>" + Celsius + "C is " + $F + "F</h2>"); 
var Fahrenheit = 68;
let $C = (Fahrenheit-32)* 5/9;
document.write("<h2>" + Fahrenheit + "F is " + $C + "C</h2>");


/* 7. Write a program to implement checkout process of a shopping 
cart system for an e-commerce website. Store the following in 
variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser. */
// Store the values in variables
var priceItem1 = 100;
var priceItem2 = 150;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 20;

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Shopping Cart Receipt</h2>");
document.write("<p>Price of Item 1: " + priceItem1 + "</p>");
document.write("<p>Price of Item 2: " + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
document.write("<p><strong>Total Cost: " + totalCost + "PKR</strong></p>");


/* 8. Write a script to take total marks & marks obtained by a 
student. Compute the percentage & show the result in your 
browser.
 */
// Store the values in variables
var totalMarks = parseFloat(prompt("Enter total marks:"));
var marksObtained = parseFloat(prompt("Enter marks obtained:"));

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h2>Percentage Calculator</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p><strong>Percentage: " + percentage.toFixed(2) + "%</strong></p>");

/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script 
to convert the total currency to Pakistani Rupees. Perform all 
calculations in a single expression */

var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateDollarToRupee = 283.50;
var exchangeRateRiyalToRupee = 42.50;

var totalRupees = (usDollars * exchangeRateDollarToRupee) + (saudiRiyals * exchangeRateRiyalToRupee);

document.write("Total currency in Pakistani Rupees: " + totalRupees.toFixed(2));

/* 10. Write a program to initialize a variable with some number 
and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2 
Perform all calculations in a single expression */

var initialNumber = 20;

var finalResult = ((initialNumber + 5) * 10) / 2;

alert("Final result: " + finalResult);


/* 11. The Age Calculator: Forgot how old someone is? Calculate 
it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: “They are either NN or NN 
years old” */


var currentYear = new Date().getFullYear(); // Get the current year

var birthYear = 1999; // Replace with the person's birth year

var age1 = currentYear - birthYear;
var age2 = age1 - 1; // Subtract 1 from age1 to get the other possible age

document.write("<h2>They are either " + age1 + " or " + age2 + " years old</h2>");


/* 12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and 
output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The area is 
NN”. (Hint : Area of a circle = π r2, π = 3.142)
 */

var radius = 12;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("<h3>The circumference is " + circumference.toFixed(2) + "</h3>");
document.write("<h3>The area is " + area.toFixed(2) + "</h3>");


/* 13. Write a program to take a number in a variable, do the 
required arithmetic to display the following result in your 
browser:
resuit:
the value of a is: 10

the value of ++a is: 11
Now the value of a is: 11 
the value of a++ is: 11
Now the value of a is: 12
the value of --a is: 11
Now the value of a is: 11 
the value of a-- is: 11
Now the value of a is: 10 
*/

document.write("<h3>Result:</h3>");
document.write("<h3>The value of a is: 10</h3>");

var a = 10;

document.write("<h3>The value of ++a is: " + (++a) + "</h3>");
document.write("<h3>Now the value of a is: " + a + "</h3>");

document.write("<h3>The value of a++ is: " + (a++) + "</h3>");
document.write("<h3>Now the value of a is: " + a + "</h3>");

document.write("<h3>The value of --a is: " + (--a) + "</h3>");
document.write("<h3>Now the value of a is: " + a + "</h3>");

document.write("<h3>The value of a-- is: " + (a--) + "</h3>");
document.write("<h3>Now the value of a is: " + a + "</h3>");


/* 14. What will be the output in variables a, b & result after 
execution of the following script:
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;
Explain the output at each stage:
 --a; 
 --a - --b;  --a - --b + ++b; 
 --a - --b + ++b + b--; */

/* --a;  //ANSWERS HERE OF EACH STAGE: value is 1
 --a - --b; // value is 1-0 = 1
 --a - --b + ++b; // value is 1-0+1 = 2
 --a - --b + ++b + b--;/// value is 1-0+1+1 = 3  */

 var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result);
document.write("<h1>--a - --b + ++b + b--</h1>");
document.write("<h4>Result is "+result + "</h4>")
document.write("<h2>further details given in comment section of javascript</h2>")

/* 15. The Lifetime Supply Calculator: Ever wonder how 
much a “lifetime supply” of your favorite snack is? Wonder no 
more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of 
your life 
Output the result to the screen like so: “You will need NNNN to 
last you until the ripe old age of NN” */

var favoriteSnack = "Butter Puff biscuits"; // Replace with your favorite snack
var currentAge = 24; // Replace with your current age
var maxAge = 63; // Replace with your estimated maximum age
var amountPerDay = 2; // Replace with the estimated amount per day

var yearsRemaining = maxAge - currentAge;
var totalAmountNeeded = yearsRemaining * 365 * amountPerDay;
document.write("<h1>The Lifetime Supply Calculator:</h1>");
var result = "<h2>You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "</h2>";
document.write(result);
