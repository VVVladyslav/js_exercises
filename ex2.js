/*---------TO DO ----------------------------------------------------
JavaScript – functions
The following exercise contains the following subjects:
● functions
Instructions
1. Write a function called ‘countryInfo’ which takes three
parameters: 'country', 'population' and 'capitalCity'. Based
on this input, the function returns a string with this format:
‘Spain has 47 million people and its capital city is Madrid’
2. Call this function 3 times, with input data for 3 different
countries. Store the returned values in 3 different
variables, and log them to the console.
-------------------------------------------------------------------------*/

// Write a function called ‘countryInfo’ which takes three parameters: 'country', 'population', and 'capitalCity'.
// Based on this input, the function returns a string with this format: ‘Spain has 47 million people and its capital city is Madrid’
function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// Call this function 3 times, with input data for 3 different countries.
// Store the returned values in 3 different variables, and log them to the console.

// Call for the first country: Spain
let infoSpain = countryInfo('Spain', 47, 'Madrid');
console.log(infoSpain);

// Call for the second country: United States
let infoUSA = countryInfo('United States', 331, 'Washington, D.C.');
console.log(infoUSA);

// Call for the third country: China
let infoChina = countryInfo('China', 1402, 'Beijing');
console.log(infoChina);

/*---------RESULT ----------------------------------------------------
Spain has 47 million people and its capital city is Madrid
United States has 331 million people and its capital city is Washington, D.C.
China has 1402 million people and its capital city is Beijing
-------------------------------------------------------------------------*/