/*---------TO DO ----------------------------------------------------
JavaScript – functions
The following exercise contains the following subjects:
● functions
Instructions
Why pay a fortune teller when you can just program your
fortune yourself?
1. Write a function named `tellFortune` that takes 4
parameters:
jobTitle, location, partnerName, numberOfChildren.
Based on this output the function returns a string with this
format:
‘You will be a programmer in New York married to Rana
with 2 children’.
-------------------------------------------------------------------------*/

//CODE MY ------------------------------------------------------------------
/*-------------------------------------------------------------------------*/

// Write a function named `tellFortune` that takes 4 parameters: jobTitle, location, partnerName, numberOfChildren.
// Based on this input, the function returns a string with this format: ‘You will be a programmer in New York married to Rana with 2 children’.
function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return "You will be a " 
    + jobTitle 
    + " in " 
    + location 
    + " married to " 
    + partnerName 
    + " with "  
    + numberOfChildren 
    +  " children.";
}

// Example usage of the function:
let fortune1 = tellFortune('programmer', 'New York', 'Rana', 2);
console.log(fortune1); // Output: You will be a programmer in New York married to Rana with 2 children.

// Another example usage:
let fortune2 = tellFortune('teacher', 'Paris', 'John', 3);
console.log(fortune2); // Output: You will be a teacher in Paris married to John with 3 children.

/*---------RESULT ----------------------------------------------------

-------------------------------------------------------------------------*/