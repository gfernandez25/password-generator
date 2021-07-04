passwordGenInit();

function passwordGenInit() {
    var maxCharacterLength = checkLength();
    var characterTypeAnswers = characterTypes();
    var password = generatePassword(maxCharacterLength, characterTypeAnswers);

    console.log(password);
    // alert(password);
}

function checkLength() {
    var userInput = _prompt("Please select password length :  between 8 and 128 characters");

    //check that is number
    //check min of 8
    //check max of 128
    while (!Number.parseInt(userInput) || userInput < 8 || userInput > 128) {
        userInput = _prompt("needs to be a number between 8 and 128 characters");
    }

    return userInput;
}

function characterTypes() {
    var atLeastOneTrue = false;
    var characterTypeObj = {
        lowercase: false,
        uppercase: false,
        number: false,
        specialCharacter: false,
    };
    while (!atLeastOneTrue) {
        //check if user wants to use lowercase
        //check if user wants to use uppercase
        //check if user wants to use numbers
        //check if user wants to use special Character
        characterTypeObj.lowercase = _promptBoolean("Would you like to include lowercase letters in the password");
        characterTypeObj.uppercase = _promptBoolean("Would you like to include uppercase letters in the password");
        characterTypeObj.number = _promptBoolean("Would you like to include numbers in the password");
        characterTypeObj.specialCharacter = _promptBoolean("Would you like to include special characters in the password")

        //make sure that that at least one character type is selected
        var checkTrue = [];
        checkTrue.push(characterTypeObj.lowercase, characterTypeObj.uppercase, characterTypeObj.number, characterTypeObj.specialCharacter)

        for (var i = 0; i < checkTrue.length; i++) {
            if (_checkAnyTrue(checkTrue[i])) {
                atLeastOneTrue = true;
                break;
            }
        }

        if (!atLeastOneTrue) {
            alert("You must select at least one type of character")
        }
    }

    console.log("characterTypes", characterTypeObj);
    return characterTypeObj;
}

function generatePassword(maxCharacterLength, characterTypeSet) {
    var password ="";

    for (var i = 0; i < maxCharacterLength; i++) {
        password += _randomCharacterGenerator(characterTypeSet)
    }

    console.log("generatePassword", password);
    return password;
}

//utility functions
function _prompt(message) {
    var value = window.prompt(message);
    return value;
}

function _promptBoolean(message) {
    var value = window.confirm(message);
    return value;
}

function _checkAnyTrue(charType) {
    return charType === true;
}

function _randomCharacterGenerator(characterTypeSet) {
    var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbersSet = "0123456789";
    var specialCharactersSet = "!@#$%^&*_-+=";
    var passwordSet = "";
    var randomGeneratedCharacter;

    if(characterTypeSet.lowercase) { passwordSet += lowercaseSet }
    if(characterTypeSet.uppercase) { passwordSet += uppercaseSet }
    if(characterTypeSet.number) { passwordSet += numbersSet }
    if(characterTypeSet.specialCharacter) { passwordSet += specialCharactersSet }

    randomGeneratedCharacter = Math.floor(Math.random() * passwordSet.length)

    return passwordSet[randomGeneratedCharacter];
}


// // Assignment code
// var finalPasswordLength;
// var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
// var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var specialCharacters = "!@#$%^&*_-+=";
//
// //need to prompt for password length (min 8 characters - max 128 characters)
// //validate that is not null
//
//
//
// var passwordLengthInput = function () {
//
//     var passwordLength;
//
//     while (!!passwordLength) { // check for null , empty or undefined and goes into the loop
//
//         var passwordLength = window.prompt('Please select password length :  between 8 and 128 characters');
//
//         if (passwordLength === "" || passwordLength === null) {
//
//             window.alert("password cannot be empty") //evaluate to put message out
//         }
//     }
//     return passwordLength;
// };
//
// //validates that the number entered is between 8 and 128
// var passwordProperLength = function (passwordLength) {
//
//     if (passwordLength < 8 || passwordLength > 128) {
//
//         window.alert("password length must be between 8 and 128 characters")
//         checkpasswordLengthType();
//     }
//     return passwordLength;
// }
//
//
// //need to validate that is not a string
// //this function will handle validation
// var checkpasswordLengthType = function () {
//
//     passwordLength = passwordLengthInput()   //call function to check is not empty
//
//     // passwordLength = (Number.parseInt(passwordLength, 10))  //try to convert to int
//     //
//     // console.log(passwordLength); //just testing
//     //
//     //
//     // //if the value was successfully converted  then check for proper length
//     // if (Number.isInteger(passwordLength)) {
//     //
//     //     passwordProperLength(passwordLength); //function to check for proper length
//     //
//     //
//     // } else {
//     //     window.alert("invalid input, must enter only numbers") //is a string, restart function
//     //     checkpasswordLengthType();
//     // }
//     // ;
//     //
//     // finalPasswordLength = passwordLength;
// }
//
// checkpasswordLengthType()
// console.log(finalPasswordLength);
//
// //get all different types of characters
// var gatherCharacterTypes = function () {
//
//
// //need to prompt for character types
//
// // lowercase
//     var typeLowercase = window.confirm("Would you like to include lowercase letters in password");
//
//     console.log(typeLowercase);
//
// // uppercase
//     var typeUppercase = window.confirm("Would you like to include uppercase letters in password");
//
//     console.log(typeUppercase);
//
// // numeric
//     var typeNumeric = window.confirm("Would you like to include numeric characters in password");
//
//     console.log(typeNumeric);
//
// // special characters
//     var typeSpecialChar = window.confirm("Would you like to include special characters in password");
//     console.log(typeSpecialChar);
//
//     return selectionTypeArray = [typeLowercase, typeUppercase, typeNumeric, typeSpecialChar]; //try to return array
//
//
// }
// //need to make sure that at least one character type is selected (true)
//
// //gatherCharacterTypes()
//
// //console.log(selectionTypeArray);
//
// var validateSelectionType = function () {
//
//     var selectionTypeArray = gatherCharacterTypes(); //array of boolean values
//
//     var selectionValidation = false; //initialises as false, will change if any element in the array is true
//
//     //while (selectionValidation === false) {
//
//         for (var i = 0; i < selectionTypeArray.length; i++) {
//
//             if (selectionTypeArray[i] === true) {
//                 selectionValidation = true;
//
//             }
//
//         }
//         console.log(selectionValidation)
//
//     if (selectionValidation === false){
//         alert("you must select at least a character type for password");
//     }
//
// }
//
// //validateSelectionType()
//
// console.log(selectionTypeArray);
//
// //validateSelectionType();
//
// //password is generated that matches the selected criteria
//
// var generatePassword = function () {
//
// }
//
// //password is either displayed in an alert or written to the page
//
//
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
//
// // Write password to the #password input
//
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//
//     passwordText.value = password;
//
// }
//
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
