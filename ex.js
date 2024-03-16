/*---------TO DO ----------------------------------------------------
JavaScript – more on data types
The following exercise contains the following subjects:
● data types
Instructions
1. Create a variable whose value holds a string.
2. Create a variable whose value holds a number.
3. Create a variable whose value holds an object.
4. Create a variable whose value holds a boolean.
5. Create a variable whose value holds null.
6. Create a variable whose value is undefined.
7. Create a variable whose value holds a symbol.
Console log the types of your variables.
-------------------------------------------------------------------------*/

// 1. Create a variable whose value holds a string.
let stringValue = "This is a string";

// 2. Create a variable whose value holds a number.
let numberValue = 42;

// 3. Create a variable whose value holds an object.
let objectValue = { key: "value" };

// 4. Create a variable whose value holds a boolean.
let booleanValue = true;

// 5. Create a variable whose value holds null.
let nullValue = null;

// 6. Create a variable whose value is undefined.
let undefinedValue;

// 7. Create a variable whose value holds a symbol.
let symbolValue = Symbol("mySymbol");

// Console log the types of your variables.
console.log(typeof stringValue); // string
console.log(typeof numberValue); // number
console.log(typeof objectValue); // object
console.log(typeof booleanValue); // boolean
console.log(typeof nullValue); // object (this is a known JavaScript quirk, null is incorrectly reported as an object)
console.log(typeof undefinedValue); // undefined
console.log(typeof symbolValue); // symbol

/*---------RESULT ----------------------------------------------------
string
number
object
boolean
object
undefined
symbol
-------------------------------------------------------------------------*/
