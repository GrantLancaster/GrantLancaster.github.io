const base = document.querySelector("#quoteBox");
const button = document.querySelector("#gen");
const delButton = document.querySelector("#del");
let tick = 0;
let words = null;

function delQuote() {
    const stuff = document.querySelector("h2");
    base.removeChild(stuff);
}

function getQuote() {
    const block = document.createElement("h2");
    const catFact = fetch("https://icanhazdadjoke.com/",{
        headers: {
            "Accept": "application/json"
        }
    })
    .then ((response) => {return response.json()})
    .then ((jsonData) => {

    block.setAttribute("id" , `block${tick}`)
    block.innerHTML = jsonData["joke"];

    base.appendChild(block);
    tick++;
    });
}

button.addEventListener("click", getQuote);
delButton.addEventListener("click", delQuote);
