// Add click event listener
document.getElementById("generate").addEventListener("click", passwordGenInit);

function passwordGenInit() {
    var maxCharacterLength = checkLength();
    var characterTypeAnswers = characterTypes();
    var password = generatePassword(maxCharacterLength, characterTypeAnswers);

    document.getElementById("password").innerHTML = password;

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

function generatePassword(passwordLength, characterTypeSet) {
    var password ="";

    for (var i = 0; i < passwordLength; i++) {
        password += _randomCharacterGenerator(characterTypeSet)
    }
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



