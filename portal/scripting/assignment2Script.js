const redValue = document.querySelector("#redcolors");
const red = document.querySelector(".redOutput");

const greenValue = document.querySelector("#greencolors");
const green = document.querySelector(".greenOutput");

const blueValue = document.querySelector("#bluecolors");
const blue = document.querySelector(".blueOutput");

const picture = document.querySelector("#image");
const picOut = document.querySelector(".picOut");

const userName = document.querySelector("#name");
const nameOut = document.querySelector(".nameOut");
const button = document.querySelector("#submit");
const spinBody = document.querySelector("#spinBody")
const block = document.createElement("p");


function getSliderValue() {
    red.textContent = redValue.value;
    green.textContent = greenValue.value;
    blue.textContent = blueValue.value;
}
function changeBG() {
    const body = document.querySelector("body");
    body.style.backgroundColor = `rgb(${redValue.value}, ${greenValue.value}, ${blueValue.value}`;
}
function uploadPic() {
    const size = document.createElement("p");
    size.textContent = `File is ${picture.files[0]["size"]} bytes`;
    picOut.appendChild(size);
}
function addName() {
    const content = userName.value;
    block.textContent = content;
    spinBody.appendChild(block);
}

red.textContent = redValue.value;
green.textContent = greenValue.value;
blue.textContent = blueValue.value;

redValue.addEventListener("input", getSliderValue);
greenValue.addEventListener("input", getSliderValue);
blueValue.addEventListener("input", getSliderValue);
window.addEventListener("input", changeBG);
picture.addEventListener("input", uploadPic);
userName.addEventListener("input", addName);