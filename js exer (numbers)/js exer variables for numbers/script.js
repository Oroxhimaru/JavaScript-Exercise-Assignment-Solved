/*  1. Declare a variable called age & assign to it your age. Show 
your age in an alert box */

var age = 24;
alert("I am " + age + " years old");

/*  2. Declare & initialize a variable to keep track of how many 
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You 
have visited this site N times” */


// Check if the 'visitCount' key exists in localStorage
if (localStorage.getItem('visitCount')) {
    // If it exists, increment the count
    var count = parseInt(localStorage.getItem('visitCount'))+ 1;
    localStorage.setItem('visitCount', count)
}
else {
    // If it doesn't exist, initialize the count to 1
    localStorage.setItem('visitCount', 1);
}
// Get the current count from localStorage
var visitCount = localStorage.getItem('visitCount');

// Create a message with the visit count
var message = "You have visited this site " + visitCount + " times.";

// Display the message in an alert
alert(message);


/* 3. Declare a variable called birthYear & assign to it your 
birth year. Show the following message in your browser:
 */

var birthYear = 1999;
var message = "My birth year is " + birthYear + "<br> Data type of my variable is " + typeof birthYear;
document.write(message);



/* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables 
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to 
order
Show the following message in your browser: “John 
Doe ordered 5 T-shirt(s) on XYZ Clothing store” */

var a = prompt("What's your name?");
var b = "XYZ Clothing store";
var c = prompt("how many t-shirts you want to order?");
var d = a + " ordered " + c + " on " + b;
document.write("<br>" + d);