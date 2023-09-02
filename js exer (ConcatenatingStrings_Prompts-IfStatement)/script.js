/* 1. Write a program that takes input a name from user & greet the 
user like this: */

var userInput = prompt("Please Enter your Name");
alert("Hi " + userInput);

/*  2. Write a program to take input a number from user & display 
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by 
default.
 */

var userInput1 = parseFloat(prompt("Enter a number to print its multiplication table"));

if (isNaN(userInput1)) {
    userInput1 = 5;
    for (let i = 1; i <= 10; i++) {
        document.write("<h3>" + userInput1 + " X " + i + " = " + i * userInput1 + "</h3>");
    }
} else {
    for (let i = 1; i <= 10; i++) {
        document.write("<h3>" + userInput1 + " X " + i + " = " + i * userInput1 + "</h3>");
    }
}


// another method for same problem:
var userInput2 = parseFloat(prompt("Enter a number to print its multiplication table"));

if (isNaN(userInput2)) { //isNaN(userInput2) condition checks if the input is not a number (NaN). If it's not a number, then userInput2 is assigned the default value of 5,
    userInput2 = 5;
}

for (let i = 1; i <= 10; i++) {
    document.write(`<h3>${userInput2} X ${i} = ${i * userInput2}</h3>`);
}


/*3. Write a program to take “city” name as input from user. If user 
enters “Karachi”, welcome the user like this: “Welcome to city 
of lights */

var userInput3 = prompt("Please Enter your city");
if (userInput3.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");    
}

/*4. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is 
female, give the message: Good Morning Ma’am. */

/*var userInput4 = prompt("Please Enter your Gender");
if (userInput4.toLowerCase()  === "male") {  //This code as a issue and that is if someone write elephant instead female still  it will run the second code so the below new code is better.
       alert("GOOD MORNING SIR");    
} else {
    alert("GOOD MORNING MA'AM");
}
*/

var userInput4 = prompt("Please Enter your Gender");

if (userInput4.toLowerCase() === "male") {
    alert("GOOD MORNING SIR");
} else if (userInput4.toLowerCase() === "female") {
    alert("GOOD MORNING MA'AM");
} else {
    alert("You're mentally ill, (Please select male or female)");
}

/* 5. Write a program to take input color of road traffic signal from 
the user & show the message according to this table:
Signal color Message
red vehicles must stop
yellow vehicles should get ready to move
green vehicles can move now */

var signalColor = prompt("Enter the color of the road traffic signal");

if (signalColor.toLowerCase() === "red") {
    alert("Vehicles must stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Vehicles should get ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Vehicles can move now");
} else {
    alert("Please enter a valid signal color (red, yellow, or green)");
}


/* 6. Write a program to take input max age & current age from 
user. If the current age is less than or equal to max age, show the message “You are welcome" */
var maxAge = parseInt(prompt("Enter the maximum age"));
var currentAge = parseInt(prompt("Enter your current age"));

if (currentAge <= maxAge) {
    alert("You are welcome");
}


/* 7. Write a program to take input remaining fuel in car (in litres) 
from user. If the current fuel is less than 0.25litres, show the 
message “Please refill the fuel in your car” */

var fuel = parseInt(prompt("Remaining fuel in car in litres"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


/* 8. Run this script, & check whether alert message would be 
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}
b. var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}
e. if (true){
 alert("True");
}
if (false){
 alert("False");
}
f. if("car" < "cat"){
 alert("car is smaller than cat");
} */

var a = 4;  
if (++a === 5){
 alert("given condition for variable a is true");
} //true

var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
} //false

var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}  //false
if (c === 13){
 alert("condition 2 is true");
} // true
if (++c < 14){
 alert("condition 3 is true");
} //false
if(c === 14){
 alert("condition 4 is true");
} true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}  //yes it is equal

if (true){
    alert("True");
   }
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
   } //yep

/* 9. Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute grade as 
per following table: 
Percentage % Grade Remarks
Greater than or equal to 80 A-one Excellent
Greater than or equal to 70 A Good
Greater than or equal to 60 B You need to improve
Less than 60 Fail Sorry
Show the total marks, marks obtained, percentage, grade & 
remarks like */

var subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1"));
var subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2"));
var subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3"));
var totalMarks = parseFloat(prompt("Enter total marks"));

var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write(`<p>Grade: ${grade}</p>`);
document.write(`<p>Remarks: ${remarks}</p>`);


/* 10. Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Take input 
from users, the following: 
a. Name of item1 
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser */

var itemName1 = prompt("Enter the name of item 1");
var itemName2 = prompt("Enter the name of item 2");
var itemPrice1 = parseFloat(prompt("Enter the price of item 1"));
var itemPrice2 = parseFloat(prompt("Enter the price of item 2"));
var itemQuantity1 = parseInt(prompt("Enter the ordered quantity of item 1"));
var itemQuantity2 = parseInt(prompt("Enter the ordered quantity of item 2"));
var shippingCharges = parseFloat(prompt("Enter the shipping charges"));

var totalCost = (itemPrice1 * itemQuantity1) + (itemPrice2 * itemQuantity2) + shippingCharges;

if (totalCost > 2000) {
    var discount = totalCost * 0.1;
    totalCost -= discount;
}

document.write("<h2>Shopping Cart</h2>");
document.write("<p>Item 1: " + itemName1 + "</p>");
document.write("<p>Price of item 1: " + itemPrice1 + " PKR</p>");
document.write("<p>Quantity of item 1: " + itemQuantity1 + "</p>");
document.write("<p>Item 2: " + itemName2 + "</p>");
document.write("<p>Price of item 2: " + itemPrice2 + " PKR</p>");
document.write("<p>Quantity of item 2: " + itemQuantity2 + "</p>");
document.write(`<p>Shipping charges: ${shippingCharges} PKR</p>`);
document.write("<p>Total cost: " + totalCost.toFixed(2) + " PKR</p>");

if (discount) {
    document.write(`<p>Discount applied: ${discount.toFixed(2)} PKR</p>`);
}


