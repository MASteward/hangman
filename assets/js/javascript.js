window.onload = () => {

  console.log("JS Loaded");
  
  var score = 0;
  var guessesLeft = 10;
  var wrongLetters =[];
  var letterSpaces = [];
  var spaceDisplay = [];
  var words = ["horse", "boots", "pistol", "hat", "canteen", "chaps", "rope", "saddle"];
  var letterOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //Choose the word for the user to guess
  var answerWord = words[Math.floor(Math.random() * words.length)];
  console.log(answerWord);

  // Breaks apart the answer to the chosen word into an array
  var letterArray = answerWord.split("");
  console.log(letterArray);
//====================== RESETS ==========================================================
  var resetLetterSpaces = function() {
    document.getElementById("word").innerHTML = letterSpaces;
  }
  var resetGuesses = function() {
    document.getElementById("guesses").innerHTML = guessesLeft;
  }
  var resetLettersGuessed = function() {
    document.getElementById("used").innerHTML = wrongLetters;
  }
  var resetScore = function() {
    document.getElementById("score").innerHTML = score;
  }
//=========================== FUNCTIONS ================================================================
  // Creates the display of underscores equal to the amount of letters in the answer.

  function wordPrep() {
    letterSpaces = [];
    console.log(letterSpaces);
    for (i = 0; i < letterArray.length; i++) {
      letterSpaces.push("_");
    }
    spaceDisplay = letterSpaces.join(" ");
    document.getElementById("word").innerHTML = spaceDisplay;
  }

  function letterCheck(userGuess) {
    for (i = 0; i < letterArray.length; i++) {
      if (userGuess === letterArray[i]) {
        letterSpaces.splice(i, 1, userGuess);
        console.log("letterCheck", letterSpaces);
        console.log("letterChecks", letterArray);
      }
      else if (i === (letterArray.length - 1) && letterArray[i] !== userGuess) {
        wrongLetters.push(userGuess);
        guessesLeft --;
        console.log("letterCheck2", letterSpaces);
        console.log("letterChecks2", letterArray);
      }
    }
  }

  // Checks to see if the user has guessed the word or no more guesses
  function gameStatus() {
    if (guessesLeft === 0) {
      document.getElementById("word").innerHTML = "GAME OVER";
      resetGame();
    }
    else if (letterSpaces === letterArray) {
      score++;
      alert("You WON!!");
      wordPrep();
    }
    document.getElementById("word").innerHTML = letterSpaces.join(" ");
    document.getElementById("used").innerHTML = wrongLetters.join(" ");
    document.getElementById("guesses").innerHTML = guessesLeft;
    console.log("CHECKUP")
  }
// Resets variables back to starting point.
  function resetGame() {
    resetLetters();
    resetLetterSpaces();
    resetLettersGuessed();
  }

//============================================================
  wordPrep();
  function startGame() {
    document.onkeyup = function(event) {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log("HEY", userGuess);
      if (letterOption.indexOf(userGuess) !== -1) {
        letterCheck(userGuess);
        gameStatus();

      }
    }
  }
  wordPrep();
  startGame();
}
