//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● if/else
● ==, ===
● prompt
Instructions
Use the prompt method to get information from the user.
The Exercise
1. Declare a variable 'numSiblings' based on a prompt input
like this:
prompt('How many siblings do you have?');
2. If you have one sibling, log to the console '1 sibling!' (use
loose equality == for now)
3. Use an else-if block to log 'More than 1 sibling' in case
'numSiblings' is greater than 1
4. Use an else block to log 'No siblings' (this block will be
executed when 'numSiblings' is 0 or any other value)
5. Test the code with different values of 'numSiblings',
including 1 and 0.
6. Change == to ===, and test the code again, with the same
values of 'numSiblings'. Notice what happens when there
is exactly 1 sibling! Why is this happening?
7. Finally, convert 'numSibling' to a number, and watch what
happens now when you input 1.
8. Reflect on why we should use the === operator and type
conversion in this situation.

-------------------------------------------------------------------------*/

// Step 1: Prompt the user to enter the number of siblings
let numSiblings = prompt('How many siblings do you have?');

// Step 2: Check if the number of siblings is equal to 1 using loose equality (==)
if (numSiblings == 1) {
    // Step 3: Log '1 sibling!' if there is one sibling
    console.log('1 sibling!');
} 
// Step 4: Check if the number of siblings is greater than 1
else if (numSiblings > 1) {
    // Step 5: Log 'More than 1 sibling' if there are more than one sibling
    console.log('More than 1 sibling');
} 
else {
    // Step 6: Log 'No siblings' for any other value including 0
    console.log('No siblings');
}

// Step 7: Test with === operator
// Convert numSiblings to a number
numSiblings = Number(numSiblings);

// Step 8: Reflect on why we should use the === operator and type conversion
// When using strict equality (===), the comparison checks not only the value but also the type. 
// This prevents unexpected type coercion. For example, when comparing '1' (a string) with 1 (a number) using ==, 
// they are considered equal due to type coercion. However, using === ensures that both the value and the type are compared accurately.

/*---------RESULT ----------------------------------------------------

-------------------------------------------------------------------------*/

//ex9.js
//ex10.js