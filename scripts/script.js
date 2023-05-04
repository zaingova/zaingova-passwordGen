// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(criteria) {
  getCriteria();
}

function getCriteria() {
  var criteria = [0, 0, 0, 0];
  var answer;
  var valid = false;

  while (!valid) {
    answer = window.prompt("Please enter a password-length (8-128): ");

    if (answer > 128 || answer < 8) {
      window.alert("Please enter a valid length")
    } else {
      criteria[0] = answer;
      console.log(criteria[0]);
      valid = true;
    }
  }

  valid = false;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
