//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● conditional statements
Instructions
Create a function that takes 1 argument, a number score.
Returns either “A”, ”B”, “C”, “D”, “F”.
score of:
0-64 is a “F”
65-69 is a “D”
70-79 is a “C”
80-89 is a “B”
90-100 is an “A
-------------------------------------------------------------------------*/

function getGrade(score) {
    if (score >= 0 && score <= 64) {
        return "F";
    } else if (score >= 65 && score <= 69) {
        return "D";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 90 && score <= 100) {
        return "A";
    } else {
        return "Invalid score"; // Handle invalid input
    }
}

/*---------RESULT ----------------------------------------------------

// Example usage:
console.log(getGrade(85)); // Output: B
console.log(getGrade(95)); // Output: A
console.log(getGrade(60)); // Output: F
-------------------------------------------------------------------------*/

//ex11.js
//ex10.js