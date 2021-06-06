//asignment code 
var generateBtn = document.querySelector("#generate");


//ask user for prefered password length and alert if invalid number is entered 
function generatePassword() {
    var charPrompt = prompt("How long would you like your password to be? (hint: 8-128)");
    //if function to return valid password length
    if (charPrompt < 8 || charPrompt > 128) {
        alert("You must enter a number between 8 and 128.");
        return generatePassword();
    }

    // if user selects number between 8 and 128 
    if (charPrompt >= 8 && charPrompt <= 128) {


        //confirm messages for user to select "OK" or "Cancel"
        var symbols = confirm("Press OK if you would like special characters in your password.");
        var numbers = confirm("Press OK if you would like numbers in your password.");
        var upperCase = confirm("Press OK if you would you like UPPERCASE letters in your password.");
        var lowerCase = confirm("Press OK if you would like lowercase letters in your password.");
    }

    // user must select one of the options above to avoid this alert
    if (symbols === false && numbers === false && upperCase === false && lowerCase === false) {
        alert("Please confirm a set of criteria!");
        return generatePassword();
    }


    //if and if user selects "Ok", add characters from that array to their password. If "Cancel" is selected, do not add any characters from corresponding array. 
    if (symbols) {
        var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "/"]
    }
    if (symbols === false) {
        var symbols = [""];
    }
    if (numbers) {
        var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }
    if (numbers === false) {
        var numbers = [""]
    }
    if (upperCase) {
        var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    }
    if (upperCase === false) {
        var upperCase = [""]
    }
    if (lowerCase) {
        var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    }
    if (lowerCase === false) {
        var lowerCase = [""]
    }


    // random password  
    var randomP = symbols + numbers + upperCase + lowerCase

    //remember to use math.floor to round down and math.random to generate random number
    var password = "";
    for (var i = 0; i < charPrompt; i++) {
        var created = randomP[Math.floor(Math.random() * randomP.length)];
        password += created;
    }

    //return random password to user
    return password
}
//from assignment code 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

