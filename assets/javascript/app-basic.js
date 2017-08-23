// #This is the Basic Trivia Assignment, featuring an overall game timer and radio-style buttons

// #Player has a limited amount of time to answer all questions on one screen
// #Game ends when the timer runs out or all questions have been answered
// #Page will reveal how many questions were answered correctly, incorrectly, or missed/skipped
// #Player can only select one answer per question

/* Needs:
[] Start button
[] Variables with questions/answers/arrays of each
[] Score variables
[] Questions above answer choices on page after Start is pressed
[] Countdown timer to begin after Start is pressed
[] Score total page after timer ends/questions answered
[] Queen <3

*/


/* VARIABLES =========================================
 */

// Object holding each question along with four possible answers
// EDIT ORDER OF ANSWERS SO THE CORRECT ONE ISN'T ALWAYS THE FIRST*********

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





/* FUNCTIONS =========================================
 */

// Function to run countdown timer
function countdown() {
	// Call to empty the instructions div so only the timer shows
	$("#instructions").empty();

	// Will start clock......... (doesn't yet)
	$("#timer").append("<p>The timer is running</p>");
	console.log("Timer running");
}



/* MAIN PROCESS =========================================
*/

$(document).ready(function() {

	// Space for timer & game data start out hidden????
	// $("#timer").hide();
	// $("#qna").hide();

	// #Still need start button
	// #Still hide button once clicked, then render a) Timer, b) questions w/ answer radio buttons

	$("#game-start").on("click", function() {
		console.log("Start button was clicked");

		$("#game-start").hide();

		// $("#timer").show();
		// $("#qna").show();

		countdown();
	});

})
