// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getCriteria());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(criteria) {
  // password stored in empty string
  var password = "";

  // loop that picks a random char from available characters in criteria[1], which runs for as many times as the password length, stored in criteria[0]
  for (var i = 1; i <= criteria[0]; i++) {
    var char = Math.floor(Math.random()
      * criteria[1].length + 1);

    password += criteria[1].charAt(char)
  }

  return password;
}

// function that returns the password length and the available characters to use, in an array
function getCriteria() {
  // criteria for password gets stored in this array;
  var criteria = [0, 0];

  // user choice for each section gets stored here
  var answer;

  // condition to continue looping
  var valid = false;
  var caseSelected = false;

  // variables used for determining what characters to use for the password
  var passwordChars = "";

  var lowerCase = "abcdefghijklmnopqrstuv";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = ")!@#$%^&*(";

  while (!caseSelected) {
    // gets user's choice on whether to include lowercase
    while (!valid) {
      answer = window.prompt("Include lowercase? (y/n): ");

      if (answer.toLowerCase() === "y") {
        passwordChars += lowerCase;
        caseSelected = true;
        valid = true;
      } else if (answer.toLowerCase() === "n") {
        valid = true;
      } else {
        window.alert("Please enter a valid input (y/n)");
      }
    }

    valid = false;

    // gets user's choice on whether to include uppercase
    while (!valid) {
      answer = window.prompt("Include uppercase? (y/n): ");

      if (answer.toLowerCase() === "y") {
        passwordChars += upperCase;
        caseSelected = true;
        valid = true;
      } else if (answer.toLowerCase() === "n") {
        valid = true;
      } else {
        window.alert("Please enter a valid input (y/n)");
      }
    }

    // checks if either upper/lowercase has been selected. User needs to pick at least 1
    if (caseSelected) {
      break;
    } else {
      window.alert("You need to select either upper/lowercase.");
      valid = false;
    }
  }

  valid = false;

  // gets user's choice on whether to include numbers
  while (!valid) {
    answer = window.prompt("Include numbers? (y/n): ");

    if (answer.toLowerCase() === "y") {
      passwordChars += numbers;
      break;
    } else if (answer.toLowerCase() === "n") {
      break;
    } else {
      window.alert("Please enter a valid input (y/n)");
    }
  }

  valid = false;

  // gets user's choice on whether to include special characters
  while (!valid) {
    answer = window.prompt("Include special characters? (y/n): ");

    if (answer.toLowerCase() === "y") {
      passwordChars += specialChars;
      break;
    } else if (answer.toLowerCase() === "n") {
      break;
    } else {
      window.alert("Please enter a valid input (y/n)");
    }
  }

  valid = false;

  // gets user's preferred password length
  while (!valid) {
    answer = window.prompt("Please enter a password-length (8-128): ");

    if (answer > 128 || answer < 8 || isNaN(answer)) {
      window.alert("Please enter a valid length");
    } else {
      criteria[0] = answer;
      valid = true;
    }
  }

  criteria[1] = passwordChars;

  console.log(criteria);
  return criteria;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
