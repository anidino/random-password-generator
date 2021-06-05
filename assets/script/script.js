// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// arrays of all the possible characters 
var symbArray = ["!", "@", "#", "$", "%", "^", "&", "/", "_", "-", "+", "="];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// new, empty arrays
var array1 = [];
var array2 = [];

// Prompt and confirmations for user to answer 
  var numCharacter = prompt ("How many characters would you like in your password?");
  var symbols = confirm ("Press OK if you would you like special characters in your password.");
  var numbers = confirm ("Press OK if you would like numbers in your password.");
  var upperCase = confirm ("Press OK if you would like UPPERCASE letters in your password.");
  var lowerCase = confirm ("Press OK if you would like lowercase letters in your password.");


// use concat method to connect strings and allow user's response to be accounted for 

if (symbols){
  array1 = array1.concat(symbArray);
  
}

if (numbers){
  array1 = array1.concat(numbArray);

}

if (lowerCase){
  array1 = array1.concat(lowerArray);

}

if (upperCase){
  array1 = array1.concat(upperArray);
}
console.log(array1)


for (var i = 0; i < numCharacter; i++) {
      
  array2.push (array1[Math.floor(Math.random() * array1.length)]); 
  }

  return array2.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);