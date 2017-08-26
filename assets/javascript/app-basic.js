// #This is the Basic Trivia Assignment, featuring an overall game timer and radio-style buttons

// #Player has a limited amount of time to answer all questions on one screen
// #Game ends when the timer runs out or all questions have been answered
// #Page will reveal how many questions were answered correctly, incorrectly, or missed/skipped
// #Player can only select one answer per question

/* Needs:
[x] Start button
[x] Variables with questions/answers/arrays of each
[x] Score variables
[] Questions above answer choices on page after Start is pressed
[x] Countdown timer to begin after Start is pressed
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
    q8a: ["Ava", "Eva", "Cher", "Ana"],

    q9: "In The Fifth Element, who plays Jean-Baptiste Emanuel Zorg?",
    q9a: ["Gary Oldman", "Gary Sinise", "Gary Busey", "Gary Cole"],

    q10: "Who wrote and performed the title theme for Flash Gordon?",
    q10a: ["Queen", "Kiss", "STYX", "Rush"]

};


// Array of the questions in trivia object
var questionsArray = [trivia.q1, trivia.q2, trivia.q3, trivia.q4, trivia.q5, trivia.q6, trivia.q7, trivia.q8, trivia.q9, trivia.q10];

// Array of the answers in trivia object
var answersArray = [trivia.q1a, trivia.q2a, trivia.q3a, trivia.q4a, trivia.q5a, trivia.q6a, trivia.q7a, trivia.q8a, trivia.q9a, trivia.q10a];


// SCORE VARIABLES
// Number of correct, incorrect, and skipped questions will update these variables
var right = 0;
var wrong = 0;
var skipped = 0;


// TIMER VARIABLES
// Set timer to 2 minutes****
var timeRemaining = 120;

// Variable to hold the interval id when executing the run function
var intervalId;

// Empty array to hold player guesses
var playerGuess = [];

var q1 = "";
var q2 = "";
var q3 = "";
var q4 = "";
var q5 = "";
var q6 = "";
var q7 = "";
var q8 = "";
var q9 = "";
var q10 = "";






/* FUNCTIONS =========================================
 */

// Function to run countdown timer  ****NOT DONE
function countdown() {

	// Call to empty the instructions div so only the timer shows ~ kinda clunky tho....
	$("#instructions").remove();

	// $("#timer").show();

	run();
	// decrement();
	
}

// Buttons for testing the timer (THEN DELETE)
// $("#stop-test").on("click", stop);
// $("#resume-test").on("click", run);


// function starts the timer
// decrements the number once a second
function run(){
	intervalId = setInterval(decrement, 1000);
	
	// Displays remaining time on page
	// $("#timer").html("<p>Time remaining: " + timeRemaining + "</p>"); 

	// Need "if timeRemaining === 0 || all questions answered, stop"
	// console.log("Timer running");
}

// function has timer count down
function decrement() {
	timeRemaining--;

	// console.log("Timer running");

	$("#timer").html("<p>You have " + timeRemaining + " seconds left!</p>"); 

	// Need "if timeRemaining === 0 || all questions answered, stop"
	if (timeRemaining === 0) {
		stop();

		console.log("Time is up");
	}
	
}

// Function to stop the timer once time is up
function stop() {
	
	clearInterval(intervalId);

	console.log("Timer stopped");
}

function playTrivia() {

	$("#qna").show();

	// New variable to hopefully allow game data to render on the page
	// Thinking I need a for loop, to run through my trivia array. But what would make my data loop through and create the radio button groups so I don't have to write them into the html?????....

	// So this creates any number of radio buttons, w/o labels....
	/*
	for (var i = 0; i < 10; i++) {
		var radioBtn = $("<input type='radio' name='rbtnCount' />");
		radioBtn.appendTo("#score");
		// setting to score div to see what happens
	}
	*/

}

// I need help with loops :(
function score() {

	$("#qna").empty();
	$("#timer").empty();

	if (q1 === "Alan Rickman") {
		right++;
	} else if (q1 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q2 === "Terry Gilliam") {
		right++;
	} else if (q2 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q3 === "Dennis Hopper") {
		right++;
	} else if (q3 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q4 === "The Engineers") {
		right++;
	} else if (q4 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q5 === "Sam Neill") {
		right++;
	} else if (q5 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q6 === "Tina Turner") {
		right++;
	} else if (q6 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q7 === "Master Control Program") {
		right++;
	} else if (q7 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q8 === "Ava") {
		right++;
	} else if (q8 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q9 === "Gary Oldman") {
		right++;
	} else if (q9 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	if (q10 === "Queen") {
		right++;
	} else if (q10 === undefined) {
		skipped++;
	} else {
		wrong++;
	};

	$("#right").html("<p>You got " + right + " correct answers.</p>");
	$("#wrong").html("<p>You missed " + wrong + " answers.</p>");
	$("#skipped").html("<p>You skipped " + skipped + " questions.");

}




/* MAIN PROCESS =========================================
*/


// Testing question
// console.log(trivia.q1);
// Testing answers retrieval
// console.log(trivia.q1a);
// console.log(trivia.q1a[0]);


$(document).ready(function() {

	// Space for timer & game data start out hidden????
	// $("#timer").hide();
	$("#qna").hide();

	// #Still need: render a) Timer~DONE, b) questions w/ answer radio buttons

	$("#game-start").on("click", function() {
		console.log("Start button was clicked");

		// $("#game-start").hide();
		$(this).remove();
		// $("#timer").show();
		// $("#qna").show();

		// Run the function to start the timer
		countdown();
		playTrivia();
	});


	// $("#game-submit").click(function() {
	// 	$(this).submit();
	// 	console.log(this);
		
	// 	// Thinking I'll need new var here to capture the values checked off
	// 	var playerGuess = $(input[value]).val();
	// 	console.log(playerGuess);
	// });

	$("#game-submit").on("click", function(event) {
		
		console.log("Submit button pressed");

		// Stop the timer
		stop();

		// Keep submit button from trying to submit to a server?
		event.preventDefault();

		// Need to capture radio buttons that were checked off  ~Probably a better way....
		q1 = $("input[name='q1']:checked").val();
		q2 = $("input[name='q2']:checked").val();
		q3 = $("input[name='q3']:checked").val();
		q4 = $("input[name='q4']:checked").val();
		q5 = $("input[name='q5']:checked").val();
		q6 = $("input[name='q6']:checked").val();
		q7 = $("input[name='q7']:checked").val();
		q8 = $("input[name='q8']:checked").val();
		q9 = $("input[name='q9']:checked").val();
		q10 = $("input[name='q10']:checked").val();

		// Push button values to array of player guess
		playerGuess.push(q1 + ", " + q2 + ", " + q3 + ", " + q4 + ", " + q5 + ", " + q6 + ", " + q7 + ", " + q8 + ", " + q9 + ", " + q10);

			console.log(playerGuess);

		// Run function to calculate number of right wrong skipped
		// FUNCTION HERE
		score();

		console.log("You got " + right + " correct answers.");
		console.log("You missed " + wrong + " answers.");
		console.log("You skipped " + skipped + " questions.");

	});

});
