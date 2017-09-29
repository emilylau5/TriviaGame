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
var unanswered = 4;
// var questions = {
//   numberOne: "What is the name of the baboon in The Lion King?", 
//   numberTwo: "Who trained Hercules to go from zero to hero?",
//   numberThree: "Who is Woody's owner in The Toy Story?",
//   numberFour: "What is Sleeping Beauty's real name?",
//   };
// var answers = {
//   numberOne: ["Rakfiki", "Tafiki", "Zafiki","Nafiki"],
//   numberTwo: ["Zeus", "Zack", "Phil", "Toby"],
//   numberThree: ["Eric", "Andy", "Tommy", "Billy"],
//   numberFour: ["Aurora", "Crystal", "Calypso", "Ariana"],

// }
function reset() {
  $("#clear").hide()
  $("#start").html("<button type=button>" + "Start" + "</buttons>");
  $("#start").on("click", function() {
      start();
  })
  $("#buttons").hide();
}
function start() {
testTimer();
$("#clear").show()
$("#start").hide();
}
function displayScore() {
  $("#clear").html("Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" +
    "Unanswered Questions: " + (unanswered - (correctAnswers + incorrectAnswers)));
  // var resetBtn = $("<button>");
  $("#buttons").append("<button type=button>" + "Reset" + "</buttons>");
  $("#buttons").on("click", function() {
    reset();
  })
}
function testTimer() {
  intervalID = setInterval(decrement, 1000)
}
function decrement(){
  timer--;
  $("#timer").html("<h2>" + timer + "<h2>");

  if (timer === 0) {
    displayScore();

  }
}
$(".correct").on("click", function() {
  correctAnswers++;
})

$(".incorrect").on("click", function() {
  incorrectAnswers++;
})

$("#done").on("click", function(event) {
displayScore();
})

reset();