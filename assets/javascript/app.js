// start button

// counter starting at 10000 going down to 0 to timer ID
// only one answer allowed per form
// button forms
// set timer to start at start button
// if user click correct answer and timer is more than 0
// show youre correct, add to correct answers counter
// else if incorrect or timer equals 0
// add to incorrect answers
// settimeout for correct answer display
// next question
// add id to button tag to show correct or incorrect
var timer = 10;
var intervalID;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
function displayScore() {
  $("#clear").html("Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" +
    "Unanswered Questions: " + unanswered);
}
function testTimer() {
  intervalID = setInterval(decrement, 1000)
}
function decrement(){
  timer--;
  $("#timer").html("<h2>" + timer + "<h2>");

  if (timer === 0) {
    alert("Time Up!");
    displayScore();

  }
}


testTimer();