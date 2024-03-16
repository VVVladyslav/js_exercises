//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

//create three different ways to declare variables
let x = 10;
var y = "Hello";
const z = true;

//declare a variable and reassign a value to it
let num = 5;
num = 8; // reassigned the value to 8

//create a variable and after that assign a string with its value being: He's got it!
let phrase;
phrase = "He's got it!";

/*
1. create a variable and assign a value on how much a restaurant bill is.
*/
let restaurantBill = 75.50;

/*
2. create a variable and assign a value on how much tax they should pay.
*/
let taxAmount = 9.12;

/*
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
*/
let totalBill = restaurantBill + taxAmount;
let outputMessage = `Your total bill is $${totalBill}.`;

// Round the number 50.6 to its nearest integer
let roundedNumber = Math.round(50.6);

//Create a variable that is undefined
let undefinedVariable;
