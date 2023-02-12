// Assignment code here
//prompted for password criteria
//prompted for password length of 8-128
//asked to to confirm characters lower,upper,numeric,and/ special
//input must be validated after each prompt/at least one character type must be selected
//when all prompts are answered password is generated matching criteria
//the password is either displayed in alert/printed to page
//window.prompt()
//window.alert()
var passwordLength = 8;
var passwordCharacterOptions = [];
var availableCharacters = [];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "~", "{", "}", "[", "]", "<", ">",];

var generatePassword = function () {

  var lengthPrompt = function () {
    var lengthChoice = parsInt(window.prompt("Enter password length. Can only have 8-128 characters:"));
    if (!lengthChoice) {
      return;
    }
    else if (lengthChoice === NaN, lengthChoice < 8, lengthChoice > 128) {
      window.alert("Password length must be specified in digits from 8-128.  Please re-enter desired  password length.");
      return false;
    }
    else {
      PasswordLength = lengthChoice
    }
  };

  window.alert("You chose " + passwordLength + " as the password length");

  confirm("Should your password have uppercase letters?") {
    availableCharacters = availableCharacters.concat(upperCase);
    passwordCharacterOptions.push("uppercase, ");
  };

  confirm("Should your password have lowercase letters?") {
    availableCharacters = availableCharacters.concat(lowerCase);
    passwordCharacterOptions.push("lowercase, ");
  };

  confirm("should your password contain numbers?") {
    availableCharacters = availableCharacters.concat(numeric);
    passwordCharacterOptions.push("numeric, ")
  };

  confirm("should your password contain special charracters?") {
    availableCharacters = availableCharacters.concat(specialCharacter);
    passwordCharacterOptions.push("special characters ")
  };

  var criteriaAlert = function () {
    var characterChoice = window.alert(" You have chosen " + availableCharacters + "as your password criteria");
  };

}

window.alert("You have chosen " + passwordCharacterOptions + " for the password criteria");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
