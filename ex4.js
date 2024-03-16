//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● functions
Instructions
Write a function that calculates the circle area by a given radius
as an argument. Print the area as it is calculated and then print
it rounded to two decimal places.
-------------------------------------------------------------------------*/

function calculateCircleArea(radius) {
    // Calculate the area
    let area = radius * radius * 3.14159; // Using an approximation of pi (π)

    // Print the area as it is calculated
    console.log("Area before rounding: " + area);

    // Round the area to two decimal places
    let roundedArea = Math.round(area * 100) / 100;

    // Print the rounded area
    console.log("Rounded area: " + roundedArea);
    
    // Return the rounded area
    return roundedArea;
}

// Example usage:
let radius = 5;
let area = calculateCircleArea(radius);
console.log("The area of the circle with radius " + radius + " is: " + area);

/*---------RESULT ----------------------------------------------------

-------------------------------------------------------------------------*/