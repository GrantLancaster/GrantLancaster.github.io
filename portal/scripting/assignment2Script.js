const redValue = document.querySelector("#redcolors");
const red = document.querySelector(".redOutput");

const greenValue = document.querySelector("#greencolors");
const green = document.querySelector(".greenOutput");

const blueValue = document.querySelector("#bluecolors");
const blue = document.querySelector(".blueOutput");


function getSliderValue() {
    red.textContent = redValue.value;
    green.textContent = greenValue.value;
    blue.textContent = blueValue.value;
}
function changeBG() {
    const body = document.querySelector("body");
    body.style.backgroundColor = `rgb(${redValue.value}, ${greenValue.value}, ${blueValue.value}`;
}

red.textContent = redValue.value;
green.textContent = greenValue.value;
blue.textContent = blueValue.value;

redValue.addEventListener("input", getSliderValue);
greenValue.addEventListener("input", getSliderValue);
blueValue.addEventListener("input", getSliderValue);
window.addEventListener("input", changeBG);