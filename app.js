var characters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"];

$( document ).ready(function() {

  var passwordTryed = "";

  $("#button").on("click", function () {
    var originalPassword = $("#input").val();
    tryGuessPassword(originalPassword, "", 0);
  });
});

var secure = 0;
var tryes = 0;
var characteresIndex = 0;

function incrementNewCharacter(passwordTryed) {
  console.log("vai incrementar um char");
}

function tryGuessPassword(originalPassword, passwordTryed, index) {
  tryes++;
  secure++;
  if(secure > 1000) {
    return true;
  }

  // console.log("chamou tryGuessPassword");
  // console.log('originalPassword', originalPassword);
  // console.log('passwordTryed', passwordTryed);
  // console.log('index', index);

  if (characters[index] !== undefined) {
    var passwordGuess = passwordTryed + characters[index];
    if(originalPassword === passwordGuess) {
      console.log("ACHOU!!! " + passwordGuess);
    } else {
      $("#try").html(tryes);
      console.log("não é " + passwordGuess);
      if((index - 1) === characters.length) {
        passwordTryed = incrementNewCharacter(passwordTryed);
      }
      tryGuessPassword(originalPassword, passwordTryed, ++index);
    }
  }
}