/* 1. Declare an empty array using JS literal notation to store 
student names in future.*/

var studentName = [];

/* 2. Declare an empty array using JS object notation to store 
student names in future. */
var studentNames = new Array();

/* 3. Declare and initialize a strings array */

const fruits = ["apple", "banana", "cherry", "date"];

/*  4. Declare and initialize a numbers array. */
const numbers = [1, 2, 3, 4, 5];

/*5. Declare and initialize a boolean array.*/

const boolArray = [true, false, true, false, true];

/*6. Declare and initialize a mixed array */

const mixedArray = ["apple", 42, true, "banana", false, 7];

/*7. Declare and Initialize an array and store available mobile 
networks in Pakistan*/

let mobileNetworks = ["Jazz", "Telenor", "Zong", "Ufone", "Warid"];

/* 8. Declare and Initialize an array and store available education 
qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
M. Phil., PhD). Show the listed qualifications in your browser 
like:
 */

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");

for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ul>");

/* 9. Declare and initialize an empty array to store top movies of 
2015. Add movies one by one in an array. Display the elements 
& length of array in your browser. (Use array’s length method) */

// Declare an empty array for top movies of 2015
var topMovies2015 = [];

// Add movies to the array
topMovies2015.push("Jurassic World");
topMovies2015.push("Star Wars: The Force Awakens");
topMovies2015.push("Avengers: Age of Ultron");
topMovies2015.push("Inside Out");
topMovies2015.push("Mad Max: Fury Road");

// Display the elements in the array
document.write("<h2>Top Movies of 2015:</h2>");
document.write("<ul>");

for (var i = 0; i < topMovies2015.length; i++) {
    document.write("<li>" + topMovies2015[i] + "</li>");
}

document.write("</ul>");

// Display the length of the array
document.write("<p>Total number of movies: " + topMovies2015.length + "</p>");

/* 10. Declare and Initialize an array with your favorite cars. Show 
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array */

// Declare and initialize an array with favorite cars
var favoriteCars = ["Toyota Camry", "Honda Civic", "Ford Mustang", "Tesla Model 3", "Chevrolet Corvette"];

// a. First index of the array
var firstIndex = 0;

// b. Car at first index of the array
var carAtFirstIndex = favoriteCars[firstIndex];

// c. Last index of the array
var lastIndex = favoriteCars.length - 1;

// d. Car at last index of the array
var carAtLastIndex = favoriteCars[lastIndex];

// Display the results
document.write("<h2>Details of Favorite Cars:</h2>");
document.write("<p>a. First index of the array: " + firstIndex + "</p>");
document.write("<p>b. Car at first index of the array: " + carAtFirstIndex + "</p>");
document.write("<p>c. Last index of the array: " + lastIndex + "</p>");
document.write("<p>d. Car at last index of the array: " + carAtLastIndex + "</p>");


