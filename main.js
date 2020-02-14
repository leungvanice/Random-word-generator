var randomWord = require("random-words");
wordDisplay = document.querySelector("#word-display");

var random_word = randomWord();
function generateWord() {
  var random_word = randomWord();
  wordDisplay.innerHTML = random_word;
}

wordDisplay.innerHTML = random_word;
