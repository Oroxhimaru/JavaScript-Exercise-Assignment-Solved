// 1. Declare a variable called username.
var username;
//const username;
//let username; two other way of declaring variable

/* 2. Declare a variable called myName & assign to it a string 
that represents your Full Name. */

var myName = "M HASSAN MALIK";
//document.write(myName);


/* 3. Write a script to 
a. declare a JS variable, titled message
b. assign “Hello World” to the variable message
c. display the message in alert box */

var message;
message = "Hello World";
alert(message);


/* Write a script to save student’s bio data in JS variables 
and show the data in alert boxes. Example: */

// Gather student bio data
var fullName = prompt("Fullname");
var age = prompt("AGE");
var university = prompt("University Name");
var language = prompt("which programming language you are learning?");

    // Display student bio data using alert boxes
alert("FULLNAME: " + fullName);
alert("AGE: " + age);
alert("University: " + university);
alert("Programming language: " + language);



/* 5. Write a script to display the following alert using one JS 
variable */

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);



/* 6. Fortune Teller: Why pay a fortuneteller when you can 
just program your fortune yourself?
Store the following into variables: number of children, 
partner’s name, geographic location, and job title
i am not going to put any of this shit */

// Store fortune data in variables
var numberOfEpisode = prompt("how many episode are their in Anime which is you watching right now?");
var anime = prompt("What's the Anime's name?");
var year = prompt("Which year  is this?");

// Build the fortune message
var fortune = "You will finish " + numberOfEpisode + " episode of " + anime + " in " + year + ".";

// Display the fortune in an alert box
alert(fortune);



/* 7. Declare a variable called email & assign to it a string that 
represents your Email Address (e.g. abc@xyz.com). Show 
the below mentioned message in an alert box. (Hint: use 
string concatenation) */ 

var email = "hm51562@gmail.com";
alert("My email address is " + email);


/* 8. Declare a variable called book & give it the value “A 
smarter way to learn JavaScript”. Display the following
message in an alert box:
 */
var book ="'A smarter way to learn Javascript'";
alert("I am trying to learn from the book " + book );


/*9. Use the variables, declared in exercise 4 & show the details 
giving meaning to data. Like “My name is Ali Khan”, “I am 
17 years old”, “I study in SSUET”, “I take Mobile & Cloud 
Computing, Module A classes” */

alert("My name is " + fullName);
alert("I am " + age + " year old");
alert("I studied in " + university);
alert("I am learning a " + language);


/* 10. Write a script to display this in browser through JS */
document.write("Yay! I can write HTML content through Javascript");

//one more way
    // Gather student bio data
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var age = prompt("Enter your age:");
    var grade = prompt("Enter your grade:");
    
    // Create meaningful statements
    var nameStatement = "My name is " + firstName + " " + lastName + ".";
    var ageStatement = "I am " + age + " years old.";
    var gradeStatement = "I study in grade " + grade + ".";
    
    // Combine statements
    var combinedStatement = nameStatement + "\n" + ageStatement + "\n" + gradeStatement;
    
    // Display details in the HTML element with id "content"
    var contentElement = document.getElementById("content");
    contentElement.textContent = combinedStatement;

