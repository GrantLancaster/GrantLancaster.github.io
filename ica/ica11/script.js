const btn = document.querySelector("button");
const quoteSrc = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";


async function getQuote() {
    console.log("I was clicked yay");

    let response = await fetch(quoteSrc);
    let output = await response.text();
    let jsonOutput = JSON.parse(output);
    console.log(jsonOutput["message"]);
    displayQuote(jsonOutput["message"]);
    //.then(response => response.text("message"));
}

function displayQuote(x) {
    //const quoteBox = document.querySelector("#js-quote-text");
    //const textMessage = document.createTextNode(x);
    //quoteBox.appendChild(textMessage);
    document.getElementById("js-quote-text").textContent = x; //This targets the <div>, and changes it's text content to the jsonOutput from the previous function
}
getQuote();
btn.addEventListener("click", getQuote);