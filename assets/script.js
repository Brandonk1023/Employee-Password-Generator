
var passwordLength = 0;
var passwordCharacterOptions = [];
var availableCharacters = [];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "~", "{", "}", "[", "]", "<", ">",];

function generatePassword() {

  availableCharacters = [];

  passwordLength = parseInt(window.prompt("Enter password length. Can only have 8-128 characters:"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be specified in digits from 8-128.  Please re-enter desired  password length.");
    return " Please try again.";
  }

  window.alert("You chose " + passwordLength + " as the password length");

  function criteria() {

    if (confirm("Should your password have uppercase letters?")) {
      availableCharacters = availableCharacters.concat(upperCase);
      passwordCharacterOptions.push("uppercase");
    };

    if (confirm("Should your password have lowercase letters?")) {
      availableCharacters = availableCharacters.concat(lowerCase);
      passwordCharacterOptions.push(" lowercase");
    };

    if (confirm("should your password contain numbers?")) {
      availableCharacters = availableCharacters.concat(numeric);
      passwordCharacterOptions.push(" numeric")
    };

    if (confirm("should your password contain special charracters?")) {
      availableCharacters = availableCharacters.concat(specialCharacter);
      passwordCharacterOptions.push(" special characters")
    }
    return;
  };

  var password = "";

  criteria()

  if (availableCharacters.length < 1 ) {
    window.alert("Password must have at least 1 specified criteria. Please try again.")
    return "Please try again.";
  }

  window.alert(" You have chosen " + passwordCharacterOptions + ", as your password criteria.");
  passwordCharacterOptions = [];

  for (var x = 0; x < passwordLength; x++) {
    var randomCharacter = Math.floor(Math.random() * availableCharacters.length);
    password = password + availableCharacters[randomCharacter];
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
