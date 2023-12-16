const newBtn = document.querySelector("#button");
const numBox = document.querySelector(".number");
let length = 9;


function getRandom(length) {
    let number = Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    return number;
}
function displayNumber() {
    let phoneNumber = getRandom(length)
    numBox.textContent = phoneNumber;
}

newBtn.addEventListener("click", displayNumber)
