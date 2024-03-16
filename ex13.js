//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● integers
Instructions
Create a JS function to determine whether or not a given year
is a leap year. The function should take a year as an argument:
1. Determine whether or not it is a leap year
● If the given year is a leap year, the program should print "It
is indeed a leap year", otherwise the program will print
"This is not a leap year."
Help:
every year that is divisible by 4 is a leap year except for the
ones that are also divisible by 100 unless it is divisible by 400.
Example: 2012 is the leap year 2100 is not But 2400 is.
-------------------------------------------------------------------------*/

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("It is indeed a leap year");
    } else {
        console.log("This is not a leap year");
    }
}

// Example usage:
isLeapYear(2012); // Output: It is indeed a leap year
isLeapYear(2100); // Output: This is not a leap year
isLeapYear(2400); // Output: It is indeed a leap year

/*---------RESULT ----------------------------------------------------

node /tmp/hBespk6wua.js
It is indeed a leap year
This is not a leap year
It is indeed a leap year

-------------------------------------------------------------------------*/

//ex13.js
//ex12.js