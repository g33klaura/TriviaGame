/* Place for bits and pieces of things tried and in progress
*/



// IN-PROGRESS FUNCTIONS
// ****Still needs work!!!!!!!!!!
// Nothing populates questions/answers. Start in console!

function renderQuestion() {

	// $("#qna").add().addClass("widget").appendTo(document.body);
	
	// for (triviaIndex = 0; triviaIndex < triviaArray.length; triviaIndex++) {

	// for (triviaIndex = 0; triviaIndex < trivia.length; triviaIndex++) {

		// Think what I built above might be better than this....
    	if (triviaIndex <= (triviaArray.length - 1)) {
        // Display question and answers
        	console.log(triviaArray[triviaIndex][0]);
        	// console.log("Next question");
   		
   		} else {
        // If no more questions, render game end screen with scores
        	console.log("Game over");
        	// Show score totals
    	}

	}

