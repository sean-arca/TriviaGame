// -- Global Variables --
var currentQ;
var rightAnswer;
var wrongAnswer;
var noAnswer;
var answered;
var time;
var gifsArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
var messages = {
    right: "You got it! Keep on sleighin!",
    wrong: "No, sorry that's not it!",
    noTime: "You're out of time!",
    finished: "Ho Ho Ho, You've answered them all! Let's see how you did."
}

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