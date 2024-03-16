//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● date methods
Instructions
Let us self-learn something. You come to your new workplace
and you are an expert in the technologies your company is
working with. But all of the sudden your boss says. We want to
implement a feature with dates. This will happen all the time in
your career. So let's roll up our sleeves and start googling. How
to .... “date js”.
And as always the MDN docs are a great source Find how to
get the following:
1. Name of the current day e.g. Sunday
2. Current day of the month e.g. 31
3. Current month e.g January
4. Current Year e.g 2021
Create a function that will return a string in the following format:
`Today is Sunday the 31 of January 2021’
-------------------------------------------------------------------------*/
function getCurrentDate() {
    // Create a new Date object to get the current date
    let currentDate = new Date();

    // Get the name of the current day
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = daysOfWeek[currentDate.getDay()];

    // Get the current day of the month
    let currentDayOfMonth = currentDate.getDate();

    // Get the current month
    let monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentMonth = monthsOfYear[currentDate.getMonth()];

    // Get the current year
    let currentYear = currentDate.getFullYear();

    // Construct the string in the desired format
    let dateString = `Today is ${currentDay} the ${currentDayOfMonth} of ${currentMonth} ${currentYear}`;

    // Return the formatted string
    return dateString;
}

// Example usage:
console.log(getCurrentDate());

/*---------RESULT ----------------------------------------------------
node /tmp/K4QTCJd7Ot.js
Today is Saturday the 16 of March 2024

-------------------------------------------------------------------------*/

//ex.js