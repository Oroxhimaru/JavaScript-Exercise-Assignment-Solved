/* 1. Write a program to display the message “Hello World” 5 times 
in your browser using for loop. */

for (let index = 0; index < 5; index++) {
    console.log('Hello World');  
}

/* 2. Write a program to print numeric counting from 1 to 10. */

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* 3. Write a program to print multiplication table of any number 
using for loop. Table number & length should be taken as an 
input from user.
 */

let userInput = parseFloat(prompt("Enter a number to  print it's multiplication table"));
let userInput2 = parseFloat(prompt("Enter length of multiplication table"));

document.write(`<h2>Multiplication Table for ${userInput}</h2>`)

for (let i = 1; i <= userInput2; i++) {
    let result = userInput * i;
    document.write(`<h3>${userInput} X ${i} = ${result} </h3>`)
    
}


/* 4. You have an array
A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
Write each element on new line with the help of for loop.
 */

A = ["Nokia", "Samsung" , "Apple", "Sony", "Huawei"];

for (let index = 0; index < A.length; index++) {
    const element = A[index];
    document.write(`<h3>${element}</h3>`);
}

/* 5. Write a program to print items of the following array using for 
loop:
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] */

fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
      document.write(`<h3>${element}</h3>`)
      document.write(`<h3>Element at index ${index} is ${fruits[index]}</h3>`)    
}  

let firstStatementResult = ""; // Variable to store the results of the first statements

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];

    // Accumulate the results of the first statement
    firstStatementResult += `<h3>${element}</h3>`;
}

// Write the accumulated results of the first statement to the document
document.write(firstStatementResult);

// Now, display the second statements
for (let index = 0; index < fruits.length; index++) {
    // Display the second statement
    document.write(`<h3>Element at index ${index} is ${fruits[index]}</h3>`);
}


/* 6. Write a program to initialize an array of N items by using 
prompt. Where N is number of items as entered by the user.
 */

// Get the number of items from the user
let N = parseInt(prompt("Enter the number of items:"));

// Check if the entered value is non-negative
if (N <= 0 || isNaN(N)) {
    alert("Please enter a positive number.");
} else {
    // Initialize an array to store the items
    let array = [];

    // Prompt the user to enter each item
    for (let i = 0; i < N; i++) {
        let item = prompt("Enter item " + (i + 1) + ":");
        array.push(item);
    }

    // Display the initialized array
    document.write("The array of " + N + " items is: " + array.join(", "));
}

