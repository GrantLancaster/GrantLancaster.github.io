const base = document.querySelector("#quoteBox");
const body = document.querySelector("body");
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
    buildImage(jsonData["joke"]);
    });
}

function buildImage(text) {
    const form = new FormData();
    form.append("text", text);
    fetch ("https://api.deepai.org/api/text2img", {
        method: "POST",
        headers: {
            "api-key": "quickstart-QUdJIGlzIGNvbWluZy4uLi4K"
        },
        body: form
    })
    .then ((response) => {return response.json()})
    .then ((jsonData2) => {
        console.log(jsonData2);
        body.style.backgroundImage = `url(${jsonData2["output_url"]})`;
    });
}


button.addEventListener("click", getQuote);
delButton.addEventListener("click", delQuote);

