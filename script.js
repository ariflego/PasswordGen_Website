const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("passwordOutput");
const passwordLength = document.getElementById("passwordLength");
const includeUppercase = document.getElementById("upperCharacters");
const includeLowercase = document.getElementById("lowerCharacters");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols){

    const upperChararacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChararacters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=";

    let allowedChars = "";
    let password = "";
    
    if(includeUppercase.checked){
        allowedChars += upperChararacters;
    };
    if(includeLowercase.checked){
        allowedChars += lowerChararacters;
    };
    if(includeNumbers.checked){
        allowedChars += numbers;
    };
    if(includeSymbols.checked){
        allowedChars += symbols;
    };

    if(length <= 0){
        return `(password can't be created, password needs to be atleast 1 character.)`;
    }
    else if(allowedChars.length === 0){
        return `(password can't be created, password needs to have atleast 1 set of characters)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

generateBtn.onclick = function(){
    const password = generatePassword(Number(passwordLength.value), includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    passwordOutput.textContent = password;
}
