/*
When using event listeners, you can't use functions that have parameters.
you have to make two functions. The first is called by the event listener (the event function).
The event function is then calling another function that can have various parameters.
This is why you couln't get the circle to move when you clicked it!!!!
*/
const minusButton = document.querySelector('.minusButton');
const plusButton = document.querySelector('.plusButton');
const resetButton = document.querySelector('.resetButton');
const submitButton = document.querySelector('.submitButton');
const buttons = [minusButton, plusButton, resetButton, submitButton];
const output = document.querySelector('.output');

let firstThree = "000";
let middleThree = "000";
let lastFour = "0000";
/*
firstThree = Integer.parseint(firstThree);
middleThree = Integer.parseint(middleThree);
lastFour = Integer.parseint(lastFour);
*/

const placeHoldNum = "(000) 000 - 0000";

let phone_content = document.querySelector('.phone');

function check() {
    console.log("Event Listener Applied");
}

function incrementUp() {
    console.log("went up");
    firstThree++;
    middleThree = firstThree *2;
    lastFour = middleThree * 4;
    output.textContent = `(${firstThree}) ${middleThree} - ${lastFour}`;    
}

function incrementDown() {
    console.log("went down");
    firstThree--;
    if (firstThree <= 0) {
        firstThree = 0;
    }
    output.textContent = `(${firstThree}) ${middleThree} - ${lastFour}`; 
}

function resetNumber() {
    output.textContent = placeHoldNum;
    firstThree = middleThree = lastFour = 0000;
}

function submitNumber() {
    alert(output.textContent);
}

function updateOutput() {
    output.textContent = phone_content.value;
}


buttons[0].addEventListener("click", incrementDown);
buttons[1].addEventListener("click",incrementUp);
buttons[2].addEventListener("click", resetNumber);
buttons[3].addEventListener("click", submitNumber);

output.textContent = placeHoldNum;