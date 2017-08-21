// Write function that doesn't have to be hard-coded, so can cycle through questions with answers?
// Will those each be objects?


/* VARIABLES =========================================
 */

// Object holding each question along with four possible answers
var trivia = {
    q1: ["In movie adaptation of The Hitchhiker\’s Guide to the Galaxy, who voiced Marvin the robot?", "Alan Rickman", "Alan Alda", "Alan Tudyk", "Alan Cumming"],
    q2: ["Which member of Monty Python wrote and directed Brazil?", "Terry Gilliam", "John Cleese", "Graham Chapman", "Eric Idle"],
    q3: ["Who played the reptilian villain, King Koopa, in Super Mario Bros.?", "Dennis Hopper", "Dennis Leary", "Dennis Quaid", "Dennis Farina"],
    q4: ["In Prometheus, who are the scientists in the crew searching for?", "The Engineers", "The Mechanics", "The Lumineers", "The Xenomorphs"],
    q5: ["Who starred as engineer Dr. William Weir in Event Horizon?", "Sam Neill", "Sam Rami", "Sam Elliott", "Sam Rockwell"],
    q6: ["What 80s pop star played the blood-thirsty Aunty Entity in Mad Max Beyond Thunderdome?", "Tina Turner", "Janet Jackson", "Vanessa Williams", "Gloria Estefan"],
    q7: ["Jeff Bridges and Bruce Boxleitner, as Clu and Tron, battle what rogue AI operating system in Tron?", "Master Control Program", "Central Processing Unit", "Master Blaster", "Universal Serial Bus"],
    q8: ["What is the name of the girl Caleb primarily interacts with in Ex Machina?", "Ava", "Eva", "Cher", "Anna"],
    q9: ["In The Fifth Element, who plays Jean-Baptiste Emanuel Zorg?", "Gary Oldman", "Gary Sinise", "Gary Busey", "Gary Cole"],
    q10: ["Who wrote and performed the title theme for Flash Gordon?", "Queen", "Kiss", "STYX", "Rush"]
};

// Score starts at 0; number of correct, incorrect, and skipped questions will update these variables
var right = 0;
var wrong = 0;
var skipped = 0;

// Variable to hold the index of current question
var triviaIndex = 0;

// Array of questions  ***Redundant?***
var triviaArray = [trivia.q1, trivia.q2, trivia.q3, trivia.q4, trivia.q5, trivia.q6, trivia.q7, trivia.q8, trivia.q9, trivia.q10];

// console.log(triviaArray);

// Empty variable to hold player's guess
// Set to number?? Set to what?....
var playerGuess = 0;


// Testing question
// console.log(trivia.q4[0]);
// Testing answers retrieval
// console.log(trivia.q4[1]);
// [1] is always right answer. Thus need these to populate randomly in buttons....




/* FUNCTIONS =========================================
 */


// Function to loop through trivia questions
// and display each possible answer in RANDOM order


// ****Still needs work!!!!!!!!!!
// Nothing populates questions/answers. Start in console!
function renderQuestion() {

	// $("#qna").add().addClass("widget").appendTo(document.body);
	
	// for (triviaIndex = 0; triviaIndex < triviaArray.length; triviaIndex++) {

	// for (triviaIndex = 0; triviaIndex < trivia.length; triviaIndex++) {


    	if (triviaIndex <= (triviaArray.length - 1)) {
        // Display question and answers
        	console.log(triviaArray[triviaIndex][0]);
        	// console.log("Next question");
   		
   		} else {
        // If no more questions, render game end screen with scores
        	console.log("Game over");
        	// Show score totals
    	}

	// }

}

// ^^^^Should this function have the timer mechanism to not load immediately on function call??

// Will need if/else for each correct answer?
// Do every correct answer in one if (use || for or)?


/* MAIN PROCESS =========================================
 */



// This code makes sure the JS doesn't run until the HTML is finished loading
// How much of the process does this block need to contain?****
$(document).ready(function() {

	$(".answers").hide();

// When the player clicks the start button, it will run the following function to hide the start button and show the question/answer buttons
	$("#game-start").on("click", function() { 
    
    console.log("Start button was clicked");

    // then .hide to take off the page when game starts
    // Not working on deployed GithubPages site tho..........
    $("#game-start").hide();

    $(".answers").show();

    // Call a function to start rendering questions??
    // renderQuestion();
    });


// After start is clicked, the game begins

// The first question with buttons for 4 possible answers needs to render, along with a timer for answering just this question*********

// For loop? Do/while loop?
// playerGuess part needs to be linked where "this" is





// THIS ISN'T LINKED TO ANYTHING YET, JUST PUZZLE PIECE
    // If there are no more questions, stop the function
    if (triviaIndex === triviaArray.length) {
        return;
    }

    // Determine which answer button was selected****
    // What should this consist of??
    // Something that captures which button is pressed????
    // "value" related to the button value!!
    playerGuess = $(this).attr("value");
    console.log("You chose: " + playerGuess);

    // After each answer is selected, a screen displays telling user if correct,
    if (playerGuess === triviaArray[triviaIndex][1]) {
        console.log("Correct");

        // incorrect,
    } else if (playerGuess !== triviaArray[triviaIndex][1]) {
        console.log("Incorrect");

        // or if time ran out (these will be totaled at the END of the game)
    } else {
        console.log("Times up");
    }

    // Increment the trivia question index variable and call the renderQuestion function
    triviaIndex++;
    renderQuestion();

});


// After a set amount of time, the next question and answer set will appear

// This will repeat for the length of the trivia array





/* For total game ending screen, say something like: 
Congrats, you\'ve scored ______. You like a lot of the same movies as me!
*/

// Want Flash Theme to play on end screen!!!!