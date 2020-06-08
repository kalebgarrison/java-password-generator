// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Character variables 

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArr = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerArr = lowerCase.split("");
var numbers = "01234456789";
var numbersArr = numbers.split("");
var symbols = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolsArr = symbols.split("");

// Generate Password function

function generatePassword(){

    var allCharacters = [];
    var password = "";
    
    var passLength = prompt('How long would you like the password to be?')

    if (passLength < 8 || passLength > 128){
        alert('You must have between 8 and 128 characters.')
        console.log(passLength)
    }
else {
    if (confirm('Would you like to use uppercase letter?')){
        allCharacters = allCharacters.concat (upperArr)
        console.log(allCharacters)
    }
    if (confirm('Would you like to use lowercase letters?')){
        allCharacters = allCharacters.concat (lowerArr)
        console.log(allCharacters)
    }
    if (confirm('Would you like to use numbers?')){
        allCharacters = allCharacters.concat (numbersArr)
        console.log(allCharacters)
    }
    if (confirm('Would you like to use symbols?')){
        allCharacters = allCharacters.concat (symbolsArr)
        console.log(allCharacters)
    }
    if (allCharacters.length === 0){
        alert('You must select a character to complete the password.')
    }
    else { 
        for(var i = 0; i < passLength; i++){

            // password = password + upperArr + lowerArr + numbersArr + symbolsArr[Math.floor(Math.random() * passLength)]
            
            password = password + allCharacters[ Math.floor(Math.random() * allCharacters)];
            console.log(password)
        }
        {
            return password;
        }
    }
    }

}







