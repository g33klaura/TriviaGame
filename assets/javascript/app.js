// Write function that doesn't have to be hard-coded, so can cycle through questions with answers?
// Will those each be objects?


/* VARIABLES =========================================
 */

// Object holding each question along with four possible answers
/*
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
*/

// try this one instead
var trivia = {

    q1: "In movie adaptation of The Hitchhikers Guide to the Galaxy, who voiced Marvin the robot?",
    q1a: ["Alan Rickman", "Alan Alda", "Alan Tudyk", "Alan Cumming"],

    q2: "Which member of Monty Python wrote and directed Brazil?",
    q2a: ["Terry Gilliam", "John Cleese", "Graham Chapman", "Eric Idle"],

    q3: "Who played the reptilian villain, King Koopa, in Super Mario Bros.?",
    q3a: ["Dennis Hopper", "Dennis Leary", "Dennis Quaid", "Dennis Farina"],

    q4: "In Prometheus, who are the scientists in the crew searching for?",
    q4a: ["The Engineers", "The Mechanics", "The Lumineers", "The Xenomorphs"],

    q5: "Who starred as engineer Dr. William Weir in Event Horizon?",
    q5a: ["Sam Neill", "Sam Rami", "Sam Elliott", "Sam Rockwell"],

    q6: "What 80s pop star played the blood-thirsty Aunty Entity in Mad Max Beyond Thunderdome?",
    q6a: ["Tina Turner", "Janet Jackson", "Vanessa Williams", "Gloria Estefan"],

    q7: "Jeff Bridges and Bruce Boxleitner, as Clu and Tron, battle what rogue AI operating system in Tron?",
    q7a: ["Master Control Program", "Central Processing Unit", "Master Blaster", "Universal Serial Bus"],

    q8: "What is the name of the girl Caleb primarily interacts with in Ex Machina?",
    q8a: ["Ava", "Eva", "Cher", "Anna"],

    q9: "In The Fifth Element, who plays Jean-Baptiste Emanuel Zorg?",
    q9a: ["Gary Oldman", "Gary Sinise", "Gary Busey", "Gary Cole"],

    q10: "Who wrote and performed the title theme for Flash Gordon?",
    q10a: ["Queen", "Kiss", "STYX", "Rush"]

};


// Score starts at 0; number of correct, incorrect, and skipped questions will update these variables
var right = 0;
var wrong = 0;
var skipped = 0;

// Empty variable to hold player's guess
var playerGuess = 0;

// Variable to hold the index of current question
// setting this to 10 for now if decrementing the answers below****
// NOT SURE IF THIS IS BEING USED CORRECTLY
var triviaIndex = 0;

// So made a new one....
// var currentQuestion = 0;

// Array of the questions in trivia object
var questionsArray = [trivia.q1, trivia.q2, trivia.q3, trivia.q4, trivia.q5, trivia.q6, trivia.q7, trivia.q8, trivia.q9, trivia.q10];

// Array of the answers in trivia object
var answersArray = [trivia.q1a, trivia.q2a, trivia.q3a, trivia.q4a, trivia.q5a, trivia.q6a, trivia.q7a, trivia.q8a, trivia.q9a, trivia.q10a];


// Empty array to hold randomized answers to each question
var randomArray = [];


// Testing question
console.log(trivia.q1);
// Testing answers retrieval
console.log(trivia.q1a);
console.log(trivia.q1a[0]);
// [0] is always right answer when un-shuffled... doesn't work to call out (playerGuess === to trivia[1] when shuffled...)
// console.log(trivia.q1a.length);
// console.log(trivia.indexOf(trivia.q1a));  ~WRONG
// console.log(answers[trivia.q1a]);  ~WHY IS THIS UNDEFINED


/* FUNCTIONS =========================================
 */


// Function to loop through trivia questions
// and display each possible answer in RANDOM order


// Took out function renderQuestion() until ready for it
// HERE******
// renderQuestion needs to also a) render SHUFFLED answers, b) start/reveal a timer

// Now this guy shuffles the letters of the first answer *unamused face*
/*
function shuffle(array) {
		while (randomArray.length < 4) {
			var rand = Math.floor(Math.random() * 4);

			if (randomArray.indexOf(trivia.q1a[0][rand]) === -1) {
				randomArray.push(trivia.q1a[0][rand]);
			}
		}
	console.log(randomArray);
}
*/


// Will need if/else for each correct answer?
// Do every correct answer in one if (use || for or)?


/* MAIN PROCESS =========================================
 */


// This code makes sure the JS doesn't run until the HTML is finished loading
// How much of the process does this block need to contain?****
$(document).ready(function() {

    // Starts off hiding portion that shows the answer buttons
    // Is clunky tho. You see it flash on the screen on page load
    // Switch to having it populate after the start is clicked???????
    $("#questions").hide();
    $(".answers").hide();

    // When the player clicks the start button, this function runs to a) hide the start button, b) reveal the answer buttons and begin the game on the first question
    $("#game-start").on("click", function() {

        console.log("Start button was clicked");

        // Not working on deployed GithubPages site tho..........
        $("#game-start").hide();

        $("#questions").show();

        $(".answers").show();

        // Or really, the .show() for ".answers" should happen as part of the renderQuestion() function
        // renderQuestion();
    });


    // After start is clicked, the game begins

    // The first question with buttons for 4 possible answers needs to render, along with a timer for answering just this question*********

    // For loop? Do/while loop?
    // playerGuess part needs to be linked where "this" is
    for (triviaIndex = 0; triviaIndex < questionsArray.length; triviaIndex++) {

        // 'var questions' to show game questions on page
        var questions = $("<p>");

        questions.attr("question-data", questionsArray[triviaIndex]);

        questions.text(questionsArray[triviaIndex]);

        $("#questions").append(questions);

    }


    // THIS ISN'T LINKED TO ANYTHING OTHER THAN THE OVERALL DOC.READY FUNCTION, JUST PUZZLE PIECE
    // If there are no more questions, stop the function
    if (triviaIndex === questionsArray.length) {
        return;
    }

    // Determine which answer button was selected****
    // What should this consist of??
    // Something that captures which button is pressed????
    // "value" related to the button value!!
    playerGuess = $(this).attr("value");
    console.log("You chose: " + playerGuess);

    // After each answer is selected, a screen displays telling user if correct,
    // These aren't in order of the array anymore since ~hopefully~ they'll be rendering randomly
    if (playerGuess === "Alan Rickman" || playerGuess === "Sam Neill" || playerGuess === "Tina Turner" || playerGuess === "Master Control Program" || playerGuess === "Ava" || playerGuess === "The Engineers" || playerGuess === "Queen" || playerGuess === "Gary Oldman" || playerGuess === "Terry Gilliam" || playerGuess === "Dennis Hopper") {

        console.log("Correct");

        // incorrect,  ***BUT THIS WON"T WORK IF RANDOMIZING THE QUESTIONS
        // change to ELSE
        // } else if (playerGuess !== triviaArray[triviaIndex][1]) {
        // console.log("Incorrect");

    } else {

        console.log("Incorrect");

    }

    // or if time ran out (these will be totaled at the END of the game)
    // } else {
    // console.log("Times up");
    // }

    // Increment or DECREMENT**** (depends on how being used above) the trivia question index variable and call the renderQuestion function
    triviaIndex++;
    // renderQuestion();

});


// After a set amount of time, the next question and answer set will appear

// This will repeat for the length of the trivia array



// For total game ending screen, say something like: 
// Congrats, you\'ve scored ______. You like a lot of the same movies as me!


// Want Flash Theme to play on end screen!!!!