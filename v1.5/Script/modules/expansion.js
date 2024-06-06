import grantL from "./info.js";
import { splitLayout, heroImage, createTitle, createCloseButton, createImageCarousel } from "./layout.js";

export function buildExpansion(target) {
    const directory = target.details
    const expansionFragment = document.createDocumentFragment();

    const bgOverlay = document.createElement("div");
    bgOverlay.className = "expansionOverlay";
    expansionFragment.appendChild(bgOverlay);

    const expansionParent = document.createElement("div");
    expansionParent.className = "expansionParent";
    bgOverlay.appendChild(expansionParent);

    const closeButton = createCloseButton();
    expansionParent.appendChild(closeButton);
    closeButton.addEventListener("click", function(e) {closeWindow(e)})


    const h1Title = createTitle(directory.name, "h1");
    expansionParent.appendChild(h1Title);
    
   // const mainHero = heroImage(); // <---- STILL NEED MEDIA FOR THIS ONE
    const brief = createTitle(directory.brief, "p");
    expansionParent.appendChild(brief);

    const process = splitLayout(directory.process.copy, directory.process.copy);
    expansionParent.appendChild(process);

    //const goal = createTitle(directory.goal ,"h3");
    //const scope = createTitle(directory.scope,"h3");
    //const research = splitLayout();
        // research.childNodes[0].appendChild();
        // research.childNodes[1].appendChild();
    //const development = splitLayout();
        // development.childNodes[0].appendChild();
        // development.childNodes[1].appendChild();
    //const devStruggles = createTitle(directory.struggles, "h4");
    //const finalProduct = createTitle(directory.final , "h2");



    return expansionFragment
}

function closeWindow(event) {
    const content = document.querySelector("#contentParent");
    const parent = document.querySelector(".expansionOverlay");
    parent.style.animation = "0.2s ease-in-out fadeout";
    parent.addEventListener("animationend", function() {
        content.removeChild(parent);

    });
}