/* Place for bits and pieces of things tried and in progress
*/

// As long as this isn't linked to the html, nothing should interact


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

// ^^^^Should this function have the timer mechanism to not load immediately on function call??

// Tried this guy: would only shuffle "top layer", not the answers ~within~ the array
function shuffle(array) {
		var currentIndex = answers.length, tempValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			tempValue = answers[currentIndex];
			answers[currentIndex] = answers[randomIndex];
			answers[randomIndex] = tempValue;
		}
	return array;
}

/*
function shuffle(array) {
		while (randomArray.length < 4) {
			var rand = Math.floor(Math.random() * 4);

			if (randomArray.indexOf(trivia[currentQuestion].answers[0][rand]) === -1) {
				randomArray.push(trivia[currentQuestion].answers[0][rand]);
			}
		}
	console.log(randomArray);
}
*/


// <!-- Piece that Eric showed me -->
	function randomizearray() {
		 while (ranarray.length < 4){ 
		 	var rand = Math.floor(Math.random() * 4);
		 	if (ranarray.indexOf(trivia[round].ansarray[rand]) === -1) {
		 	ranarray.push(trivia[round].ansarray[rand]);
		 }
		}
		 console.log(ranarray);
	}


// Eric helping from Slack
	console.log(array[i].object[j])
	where i is the index (0,1,2,3etc) and j is the index of the object
	in your case console.log(trivia[0].q1a[0]) should return ALan Rickman


// Want radio buttons not to have icons....
// from jQuery UI page, but don't know how to re-write it
$( function() {
    $( "input" ).checkboxradio({
      icon: false
    });
 } );