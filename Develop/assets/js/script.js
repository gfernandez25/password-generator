// Assignment code
var finalPasswordLength;

//need to prompt for password length (min 8 characters - max 128 characters)
//validate that is not null
var passwordLengthInput = function () {

    var passwordLength = ""; //set empty to get into loop at least once

    while (passwordLength === "" || passwordLength === null) {

        var passwordLength = window.prompt('Please select password length :  between 8 and 128 characters');

        if (passwordLength === "" || passwordLength === null) {

            window.alert("password cannot be empty") //evaluate to put message out
        }
    }
    return passwordLength;
};

//validates that the number entered is between 8 and 128
var passwordProperLength = function(passwordLength){

    if (passwordLength < 8 || passwordLength > 128) {

        window.alert("password length must be between 8 and 128 characters")
        checkpasswordLengthType();
    }
    return passwordLength;
}


//need to validate that is not a string
var checkpasswordLengthType = function () {

    passwordLength = passwordLengthInput()   //call function to check is not empty

    passwordLength = (Number.parseInt(passwordLength, 10))  //try to convert to int

    console.log(passwordLength); //just testing


    //if the value was successfully converted  then check for proper length
    if (Number.isInteger(passwordLength)) {

        passwordProperLength(passwordLength); //function to check for proper length


    } else {
        window.alert("invalid input, must enter only numbers")
        checkpasswordLengthType();
    };

}

checkpasswordLengthType()

//need to prompt for character types

// lowercase
var typeLowercase = window.confirm("Would you like to include lowercase letters in password");

console.log(typeLowercase);

// uppercase
var typeUppercase = window.confirm("Would you like to include uppercase letters in password");

console.log(typeUppercase);

// numeric
var typeNumeric = window.confirm("Would you like to include numeric characters in password");

console.log(typeNumeric);

// special characters
var typeSpecialChar = window.confirm("Would you like to include special characters in password");
console.log(typeSpecialChar)

//password is generated that matches the selected criteria


//password is either displayed in an alert or written to the page


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
