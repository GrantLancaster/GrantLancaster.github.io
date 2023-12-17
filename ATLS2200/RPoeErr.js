const newBtn = document.querySelector("#button");
const numBox = document.querySelector(".number");
let length = 10;


function getRandom(length) {
    let number = Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    return number;
}
function displayNumber() {
    let Number = getRandom(length)

    string = Number.toString(); // Turns the number from getRandom() into a string
    let phoneNumber= ""; // The variable that will be our hyphenated phone number
    for (let i = 0; i < string.length; i++) { // Go through all numbers in the string
        if (i == 3) { // If we are at the end of the first 3 digits, add a '-'
            phoneNumber += "-";
        }
        if (i == 6) { // If we are at teh end the second 3 digits, add a '-'
            phoneNumber += "-";
        }
        phoneNumber += string[i]; // add the number in the string to the phone number
    }
    
    numBox.textContent = phoneNumber;
}

newBtn.addEventListener("click", displayNumber)
