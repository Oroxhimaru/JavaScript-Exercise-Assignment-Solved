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


/* 11. Write a program to store 3 student names in an array. Take 
another array to store score of these three students. Assume 
that total marks are 500 for each student, display the scores & 
percentages of students like: */

// Declare an array to store student names
var studentNames = ["M Hassan Malik", "Uchiha Madara", "Minato "];

// Declare an array to store scores of students
var scores = [430, 380, 470];

// Assume total marks for each student is 500
var totalMarks = 500;

// Calculate percentages for each student
var percentages = [];
for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    percentages.push(percentage.toFixed(2)); // Round the percentage to 2 decimal places
}

// Display scores and percentages
document.write("<h2>Student Scores and Percentages:</h2>");
for (var i = 0; i < studentNames.length; i++) {
    document.write("<p>" + studentNames[i] + " scored " + scores[i] + " out of " + totalMarks + " with a percentage of " + percentages[i] + "%</p>");
}


/* 12. Initialize an array with color names. Display the array 
elements in your browser.
a. Ask the user what color he/she wants to add to the 
beginning & add that color to the beginning of the array. 
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end & 
add that color to the end of the array. Display the updated 
array in your browser.
c. Add two more color to the beginning of the array. Display 
the updated array in your browser
d. Delete the first color in the array. Display the updated 
array in your browser.
e. Delete the last color in the array. Display the updated 
array in your browser.
f. Ask the user at which index he/she wants to add a color & 
color name. Then add the color to desired position/index. 
. Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete 
color(s) & how many colors he/she wants to delete. Then 
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your 
browser. */

// Initialize an array with color names
var colors = ["Red", "Green", "Blue"];

// Display the array elements in the browser
document.write("<h3>Original Array: " + colors.join(", ") + "</h3>");

// Ask the user for a color to add to the beginning of the array
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);

// Display the updated array
document.write("<h3>Array after adding color at the beginning: " + colors.join(", ") + "</h3>");

// Ask the user for a color to add to the end of the array
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

// Display the updated array
document.write("<h3>Array after adding color at the end: " + colors.join(", ") + "</h3>");

// Add two more colors to the beginning of the array
colors.unshift("Yellow", "Purple");

// Display the updated array
document.write("<h3>Array after adding two colors at the beginning: " + colors.join(", ") + "</h3>");

// Delete the first color in the array
colors.shift();

// Display the updated array
document.write("<h3>Array after deleting the first color: " + colors.join(", ") + "</h3>");

// Delete the last color in the array
colors.pop();

// Display the updated array
document.write("<h3>Array after deleting the last color: " + colors.join(", ") + "</h3>");

// Ask the user for the index and color to add at that position
var indexToAdd = parseInt(prompt("Enter the index to add color:"));
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
document.write("<h3>Array after adding color at index " + indexToAdd + ": " + colors.join(", ") + "</h3>");

// Ask the user for the index and number of colors to delete
var indexToDelete = parseInt(prompt("Enter the index to delete colors:"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
document.write("<h3>Array after deleting colors from index " + indexToDelete + ": " + colors.join(", ") + "</h3>");

/* 13. Write a program to store student scores in an array & sort 
the array in ascending order using Array’s sort method.  */

// Array to store student scores
var scores = [320, 230, 480, 120];

// Sorting the array in ascending order
scores.sort(function(a,b) {
    return a-b;
});

// Displaying the sorted scores
document.write("<h3>Sorted Scores: " + scores.join(", ") + "</h3>");

/* 14. Write a program to sort the below mentioned array:
var fruits = [“strawberry”, “apple”, “orange”, “banana”];
 */

var fruit = ["strawberry", "apple", "orange", "banana"];
fruit.sort();

console.log(fruit);  // Output: ["apple", "banana", "orange", "strawberry"]

/* 15. Write a program to initialize an array with city names. Copy 
3 array elements from cities array to selectedCities array */

// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Create an empty array to store selected cities
var selectedCities = [];

// Copy 3 elements from cities array to selectedCities array
selectedCities = cities.slice(2, 5);

console.log(selectedCities);  


/* 16. Write a program to create a single string from the below 
mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

document.write(singleString);
// Output: "This is my cat"


/* 17. Create a new array. Store values one by one in such a way 
that you can access the values in the order in which they were 
stored. (FIFO-First In First Out)
 */

var fifoArray = [];

// Add elements to the array using push method
fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("monitor");

// Access and remove elements in the order they were stored (FIFO)
var firstElement = fifoArray.shift(); // Removes and returns "keyboard"
var secondElement = fifoArray.shift(); // Removes and returns "mouse"
var thirdElement = fifoArray.shift(); // Removes and returns "printer"
var fourthElement = fifoArray.shift(); // Removes and returns "monitor"
console.log(firstElement); 
console.log(secondElement); 
console.log(thirdElement); 
console.log(fourthElement); 


/*18. Create a new array. Store values one by one in such a way 
that you can access the values in reverse order. (Last In-First 
Out)
 */

var lifoArray = [];

// Adding elements in LIFO order
lifoArray.push("keyboard"); 
lifoArray.push("mouse"); 
lifoArray.push("printer"); 
lifoArray.push("monitor");

// Accessing values in reverse order (Last In-First Out)
var lastElement = lifoArray.pop(); // Removes and returns "fourth"
var secondLastElement = lifoArray.pop(); // Removes and returns "third"
var thirdLastElement = lifoArray.pop(); // Removes and returns "two"
var fourthLastElement = lifoArray.pop(); // Removes and returns "First"


console.log(lastElement); 
console.log(secondLastElement); 
console.log(thirdLastElement); 
console.log(fourthLastElement); 


/* 19. Write a program to store phone manufacturers (Apple, 
Samsung, Motorola, Nokia, Sony & Haier) in an array. Display 
the following dropdown/select menu in your browser using 
document.write() method: */

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write('</select>');

/* phoneManufacturers.forEach(manufacturer => {
    document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
}); another way */

/*20. Declare and initialize an empty multidimensional array.
(Array of arrays) */

var multiDimensionalArray = [];
multiDimensionalArray.push([1, 2, 3]); // Adds an array [1, 2, 3] to the multidimensional array
multiDimensionalArray.push(["apple", "banana", "orange"]); // Adds an array ["apple", "banana", "orange"] to the multidimensional array

/* 21. Declare and initialize a multidimensional array representing
the following matrix:
0 1 2 3
1 0 1 2
2 1 0 1 */

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix);