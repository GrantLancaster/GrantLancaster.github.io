import grantL from "./info.js";
import { links } from "./links.js";
import { makeControllerButton } from "./layout.js";

function buildHomeScreen () {
    const homeParent = document.createElement("div");
    homeParent.id = "homeParent";

    const header = document.createElement("div");
    header.id = "header";
    homeParent.appendChild(header);

    const nameParent = document.createElement("div");
    nameParent.id = "nameParent";
        const firstName = document.createElement("p");
        firstName.textContent = "Grant";
        firstName.id = "firstName";
        firstName.className = "filled";
        nameParent.appendChild(firstName);

        const lastName = document.createElement("p");
        lastName.textContent = "Lancaster";
        lastName.id = "lastName";
        lastName.className = "stroke";
        nameParent.appendChild(lastName);
    header.appendChild(nameParent);

    const subHeaderParent = document.createElement("div");
    subHeaderParent.id = "subHeader";
        const subHeader = document.createElement("p");
        subHeader.id = "subHeader";
        subHeader.innerHTML = `Developer | Designer | ${makeControllerButton("A")}${makeControllerButton("B")}${makeControllerButton("X")}${makeControllerButton("Y")} Enthusiast`;
    subHeaderParent.appendChild(subHeader);
    header.appendChild(subHeaderParent);

    const quoteParent = document.createElement("div");
    quoteParent.id = "quoteParent";

    const quote = document.createElement("h5");
    quote.id = "quote";
    quote.innerText = "Let's Build New Worlds!";
    quoteParent.appendChild(quote);
    homeParent.appendChild(quoteParent);

    //Import the links part here
    homeParent.appendChild(links);
    //------------------------

    return homeParent
}

const home = buildHomeScreen();

export { home }

let homescreen = `
<header>
    <div id="name">
        <p class="filled" id="firstName">Grant</p>
        <p class="stroke" id="lastName">Lancaster</p>
    </div>
    <p id="subHeader">Developer | Designer | <span id="Abutton" class="controllerButtons">A</span> <span id="Bbutton" class="controllerButtons">B</span> <span id="Xbutton" class="controllerButtons">X</span> <span id="Ybutton" class="controllerButtons">Y</span> Enthusiast</p>
</header>

<div id="quoteParent">
    <h5 id="quote">Let's Build New Worlds!</h5>
</div>
`

export default homescreen;