// Assignment code here
//prompted for password criteria
//prompted for password length of 8-128
//asked to to confirm characters lower,upper,numeric,and/ special
//input must be validated after each prompt/at least one character type must be selected
//when all prompts are answered password is generated matching criteria
//the password is either displayed in alert/printed to page
//window.prompt()
//window.alert()
var passwordLength = 0;
var passwordCharacterOptions = ["lowercase", "uppercase", "numeric", "special"];
var createdPassword = [];

var lengthPrompt = function () {
  var lengthChoice = window.prompt("Enter password length of 8-128:");
  if (!lengthChoice) {
    return;
  } else {
    passwordLength = lengthChoice
  }
};

window.alert("You chose " + passwordLength + " as the password length" );

var characterPrompt = function () {
  var characterChoice = window.prompt("")
};

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
