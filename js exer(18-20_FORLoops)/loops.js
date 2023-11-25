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
if () {
    
}
for (let i = 1; i <= userInput2; i++) {
    let result = userInput * i;
    document.write(`<h3>${userInput} X ${i} = ${result} </h3>`)
    
}
