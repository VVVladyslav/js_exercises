//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● functions
Instruction
1. The world population is 7900 million people. Create
a function declaration called 'percentageOfWorld1'
which receives a 'population' value, and returns the
percentage of the world population that the given
population represents. For example, China has
1441 million people, so it's about 18.2% of the world
population.
2. To calculate the percentage, divide the given
'population' value by 7900 and then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of
countries of your choice, store the results into
variables and log them to the console.
4. Create a function expression that does the exact
same thing, called 'percentageOfWorld2', and also
call it with 3 country populations (can be the same
populations)
-------------------------------------------------------------------------*/

// Function declaration
function percentageOfWorld1(population) {
    return ((population / 7900) * 100) + '%';
}

// Function calls for three populations
let chinaPercentage = percentageOfWorld1(1441);
let indiaPercentage = percentageOfWorld1(1380);
let usaPercentage = percentageOfWorld1(331);

// Logging the results to the console
console.log('China represents about ' + chinaPercentage + ' of the world population.');
console.log('India represents about ' + indiaPercentage + ' of the world population.');
console.log('USA represents about ' + usaPercentage + ' of the world population.');

// Function expression
const percentageOfWorld2 = function(population) {
    return ((population / 7900) * 100) + '%';
};

// Function calls for the same three populations
chinaPercentage = percentageOfWorld2(1441);
indiaPercentage = percentageOfWorld2(1380);
usaPercentage = percentageOfWorld2(331);

// Logging the results to the console
console.log('China represents about ' + chinaPercentage + ' of the world population.');
console.log('India represents about ' + indiaPercentage + ' of the world population.');
console.log('USA represents about ' + usaPercentage + ' of the world population.');

/*---------RESULT ----------------------------------------------------

-------------------------------------------------------------------------*/

//ex9.js
//ex8.js