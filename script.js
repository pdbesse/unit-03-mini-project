var wins = 0;
var ties = 0;
var losses = 0;


var choices = ["R", "P", "S"];

var play = function() {
  var userChoice = prompt("Enter R, P, or S:");
  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();

  
  var index = Math.floor(Math.random() * choices.length);
  var aiChoice = choices[index];

  alert("The computer chose " + aiChoice);

  if (userChoice === aiChoice) {
    ties++;
    alert("It's a tie!");

  } else if (
    (userChoice === "R" && aiChoice === "S") || 
    (userChoice === "P" && aiChoice === "R") || 
    (userChoice === "S" && aiChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  } else {
    losses++;
    window.alert("You lost!");
  }

  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  var playAgain = window.confirm("Play again?");

  if (playAgain) {
    play();
  }
};

play();
