// -- Global Variables --
var currentQ;
var rightAnswer;
var wrongAnswer;
var noAnswer;
var answered;
var time;
var seconds;
var userPick;
var gifsArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
var messages = {
    right: "You got it! Keep on sleighin!",
    wrong: "No, sorry that's not it!",
    noTime: "You're out of time!",
    finished: "Ho Ho Ho, You've answered them all! Let's see how you did."
}

// -- Questions --
var triviaQs = [{
    question: "Which of these names starting with a V is actually a reindeer?",
    answerChoices: ["Venti", "Volly", "Vicki", "Vixen"],
    answer: 3
},{
    question: "All I want for Christmas is my...?",
    answerChoices: ["Own Big House", "Two Front Teeth", "Little Brown Dog", "Shiny New Boots"],
    answer: 1
},{
    question: "What should you do under a mistletoe?",
    answerChoices: ["Give a Hug", "Dance", "Give a Kiss", "Spin Around"],
    answer: 2
},{
    question: "What is Santa's real name?",
    answerChoices: ["Michael Holly", "Chris Krinkle", "Kris Kringle", "Mike Jolly"],
    answer: 2
},{
    question: "How many reindeers did Santa's sleigh have?",
    answerChoices: ["7", "8", "9", "10"],
    answer: 1
},{
    question: "Which of these reindeers do not belong?",
    answerChoices: ["Rufus", "Dasher", "Prancer", "Comet"],
    answer: 0
},{
    question: "What should kids leave out for Santa on Christmas Eve?",
    answerChoices: ["A Bottle of Wine", "A PB & J Sandwich", "Cookies & Milk", "Mac & Cheese"],
    answer: 2
},{
    question: "What is Frosty the Snowman's nose made out of?",
    answerChoices: ["A Carrot", "A Potato", "A Rock", "A Button"],
    answer: 3
},{
    question: "What color is the Grinch?",
    answerChoices: ["Green", "Blue", "Red", "Yellow"],
    answer: 0
},{
    question: "Which Christmas ballet is the most famous of all?",
    answerChoices: ["Rudolphs Surprise", "The Nutcracker", "Mr & Mrs Clause", "Frosty Goes to New York"],
    answer: 1
}];

// -- Functions --

// New Game
function newGame(){
	$('#endMessage').empty();
	$('#numberCorrect').empty();
	$('#numberWrong').empty();
	$('#noAnswer').empty();
	currentQ = 0;
	rightAnswer = 0;
	wrongAnswer = 0;
	noAnswer = 0;
	newQuestion();
};

// On Click Start
$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

// New Question
function newQuestion(){
	$('#message').empty();
	$('#correctAnswer').empty();
	$('#answerImg').empty();
	answered = true;
	
	// Add question# and question to div (use .html)
	$('#theQuestion').html('Question # '+(currentQ+1)+' of '+triviaQs.length);
    $('.question').html('<h2>' + triviaQs[currentQ].question + '</h2>');
    // Create a for loop to go thru question answers
	for (var i = 0; i < 4; i++) {
        // Create div for each answer
        var choices = $('<div>');
        // Add text (use .text()) to show the answerChoices in each div
        choices.text(triviaQs[currentQ].answerChoices[i]);
        // Add custom attribute ('data-answer') to each answer
        choices.attr({'data-answer': i });
        // Add class ('thisChoice') to divs
        choices.addClass('thisChoice');
        // Append the choice divs to the .answers div
		$('.answers').append(choices);
    }
    // Start countdown when question is shown
    countdown();
    
	// When one of answers is clicked...
	$('.thisChoice').on('click',function(){
        // Set userPick to what was chosen via the div
        userPick = $(this).data('answer');
        // Stop the time Interval (use clearInterval())
        clearInterval(time);
        // Show answer function
		showAnswer();
	});
};

// Countdown timer
function countdown() {
    seconds = 15;
    // Add html (use .html()) to show the timeleft
    $('#timeRem').html('<h3>Time Remaining: ' + seconds + ' seconds</h3>');
    // Set the time variable to go down every second
    time = setInterval(showCountdown, 1000);
    // Set answered boolean to true
    answered = true;
};

function showCountdown() {
    seconds--;
    // Change html (use .html()) for time remaining
    $('#timeRem').html('<h3>Time Remaining: ' + seconds + ' seconds</h3>');
    // If seconds seconds < 1, set answered boolean to false and show answer function
    if (seconds < 1) {
        answered = false;
        clearInterval(time);
        showAnswer();
    }
};








/* ---- Game Structure ----
10 questions - All Christmas themed

1. Press Start to start quiz (on click event)
    - hide start div on click, show question div
2. Display question and answers
    - after start (on click), append object.question into question div and object.answer into answer div
    - do :hover css (background, border color, etc) when answering.
    - pressing correct answer should give us "correct" and display image (.html)
        - 5 sec and switch to next question
    - pressing incorrect answer/no user input should give us "wrong" and show correct answer/image (.html)
        - 5 sec and switch to next question
3. Timer counts down on each question (go with ~15 seconds)
    - applies to one question, not entire game
4. At the end (after 10 questions):
    - clear timeout (timer) and hide
    - show # correct,incorrect, and unanswered answers
    - game reset button
*/