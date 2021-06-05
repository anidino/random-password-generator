// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// arrays of all the possible characters 
var symbArray = ["!", "@", "#", "$", "%", "^", "&", "/", "_", "-", "+", "="];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// new, empty arrays
var resultArray = [];
var userArray = [];

// Prompt and confirmations for user to answer 
  var numCharacter = prompt ("How many characters would you like in your password?");
  var symbols = confirm ("Would you like special characters in your password?");
  var numbers = confirm ("Would you like numbers in your password?");
  var upperCase = confirm ("Would you like UPPERCASE letters in your password?");
  var lowerCase = confirm ("Would you like lowercase letters in your password?");


// use concat method to connect strings and allow user's response to be accounted for 

if (symbols){
  resultArray = resultArray.concat(symbArray);
  
}

if (numbers){
  resultArray = resultArray.concat(numbArray);

}

if (lowerCase){
  resultArray = resultArray.concat(lowerArray);

}

if (upperCase){
  resultArray = resultArray.concat(upperArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);