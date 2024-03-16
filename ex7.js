//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● Declaring functions 2
Instruction
Copy the code below to your computer, answer the
questions on the file, and submit.
/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.


// From function declarations to explicit and implicit
return functions (one of each).
function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
const randomNumbers = (a, b) => Math.random() * (a - b) +
b;
-------------------------------------------------------------------------*/
// From function declarations to explicit and implicit return functions (one of each).
// Explicit return function declaration
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

// Implicit return function declaration
const welcome = () => 'Welcome to Appleseeds Bootcamp!';

// Explicit return function declaration
function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// Implicit return function declaration
const power = a => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
};

// From function expressions to IIFE functions.
// IIFE for squareRoot function
(() => {
    const squareRoot = a => Math.sqrt(a);
    console.log(squareRoot(16)); // Output: 4
})();

// IIFE for randomNumbers function
(() => {
    const randomNumbers = (a, b) => Math.random() * (a - b) + b;
    console.log(randomNumbers(0, 10)); // Output: random number between 0 and 10
})();

/*---------RESULT ----------------------------------------------------

-------------------------------------------------------------------------*/

//ex7.js
//ex8.js