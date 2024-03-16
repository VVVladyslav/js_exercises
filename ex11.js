//CODE BY -----VLAD ZHARKOV Frontend 2 itworks

/*---------TO DO ----------------------------------------------------
The following exercise contains the following subjects:
● Order Of Operation
● If statements
Instructions
John and Mike both play basketball on different teams. In the
latest 3 games, John's team scored 89, 120, and 103 points,
while Mike's team scored 116, 94, and 123 points.
1. Calculate the average score for each team.
2. Decide which team wins on average (highest average
score), and print the winner to the console. Also include
the average score in the output.
3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
same average score).
4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console.
5. Like before, change the scores to generate different
winners, keeping in mind there might be draws.
-------------------------------------------------------------------------*/

// Scores for John, Mike, and Mary
let johnScores = [89, 120, 103];
let mikeScores = [116, 94, 123];
let maryScores = [97, 134, 105];

// Function to calculate average score
function calculateAverage(scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}

// Function to determine the winner
function determineWinner(johnAverage, mikeAverage, maryAverage) {
    if (johnAverage > mikeAverage && johnAverage > maryAverage) {
        return ['John', johnAverage];
    } else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
        return ['Mike', mikeAverage];
    } else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
        return ['Mary', maryAverage];
    } else {
        return ['It\'s a draw', johnAverage];
    }
}

// Calculate average scores
let johnAverage = calculateAverage(johnScores);
let mikeAverage = calculateAverage(mikeScores);
let maryAverage = calculateAverage(maryScores);

// Determine the winner
let [winner, averageScore] = determineWinner(johnAverage, mikeAverage, maryAverage);

// Output the winner to the console
console.log(`${winner} wins with an average score of ${averageScore}.`);

// EXTRA: Change the scores to generate different winners
johnScores = [110, 120, 90];
mikeScores = [116, 94, 123];
maryScores = [97, 134, 105];

// Recalculate average scores
johnAverage = calculateAverage(johnScores);
mikeAverage = calculateAverage(mikeScores);
maryAverage = calculateAverage(maryScores);

// Determine the winner again
[winner, averageScore] = determineWinner(johnAverage, mikeAverage, maryAverage);

// Output the winner to the console
console.log(`${winner} wins with an average score of ${averageScore}.`);

/*---------RESULT ----------------------------------------------------

-------------------------------------------------------------------------*/

//ex11.js
//ex12.js