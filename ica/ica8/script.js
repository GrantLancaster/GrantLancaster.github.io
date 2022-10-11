let btn = document.querySelector("button");
let header = document.querySelector("h1");
let body = document.querySelector("body");
let colors = ["blue", "red", "blue", "pink","green"];
let saying = ["I changed","And did it again","oh wow again?", "im dizzy, pls", "Okay, you need to stop"];
let index = 0;

let boxes = document.getElementById("box");


btn.addEventListener('click', giveAlert);
boxes.addEventListener('click', addDiv)

function giveAlert() {
    btn.textContent = "you did it";
    header.textContent = saying[index];
    body.style.backgroundColor = colors[index];
    index += 1;
    if (index === 5) {
        index = 0
    }
}



