import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */
    
// (a) Home Team name for 2014 world cup final
console.log("Task 1a: Answer:");
    function HomeTeamName() {
        for (let i = 0; i < fifaData.length; i++) {
            if(fifaData[i].Year === 2014) {
                console.log(`${fifaData[i].Year} - Home Team Name: ${fifaData[i]["Home Team Name"]}`);
            }
        }
    }
    HomeTeamName();


// (b) Away Team name for 2014 world cup final
console.log("Task 1b Answer:");
    function AwayTeamName() {
        for (let i = 0; i < fifaData.length; i++) {
            if(fifaData[i].Year === 2014) {
                console.log(`${fifaData[i].Year} - Away Team Name: ${fifaData[i]["Away Team Name"]}`);
            }
        }
    }
    AwayTeamName();

// (c) Home Team goals for 2014 world cup final
console.log("Task 1c Answer:");
    function HomeTeamGoals() {
        for (let i = 0; i < fifaData.length; i++) {
            if(fifaData[i].Year === 2014) {
                console.log(`${fifaData[i].Year} - Home Team Goals: ${fifaData[i]["Home Team Goals"]}`);
            }
        }
    }
    HomeTeamGoals();

// (d) Away Team goals for 2014 world cup final
console.log("Task 1d Answer:");
    function AwayTeamGoals() {
        for (let i = 0; i < fifaData.length; i++) {
            if(fifaData[i].Year === 2014) {
                console.log(`${fifaData[i].Year} - Away Team Goals: ${fifaData[i]["Away Team Goals"]}`);
            }
        }
    }
    AwayTeamGoals();


// (e) Winner of 2014 world cup final 
console.log("Task 1e Answer:");
    function winnerOf2014() {
        for (let i = 0; i < fifaData.length; i++) {
            if(fifaData[i].Year === 2014 && fifaData[i].Stage === "Final" && fifaData[i]["Home Team Goals"] > fifaData[i]["Away Team Goals"]) {
                console.log(`The Winner of ${fifaData[i].Year} is ${fifaData[i]["Home Team Name"]}`);
            } else if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final" && fifaData[i]["Away Team Goals"] > fifaData[i]["Home Team Goals"]) {
                console.log(`The Winner of ${fifaData[i].Year} is ${fifaData[i]["Away Team Name"]}`);

            }
        }
    }
    winnerOf2014();

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log("Task 2 Answer:");
    function getFinals() {
        for (let i = 0; i < fifaData.length; i++) {
            if(fifaData[i].Stage === "Final") {
                console.log(fifaData[i]);
            }
        }
    }
    getFinals();


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an 
array called `years` containing all of the years in the dataset */

function getYears() {

};

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
