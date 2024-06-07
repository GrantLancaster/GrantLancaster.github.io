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


    const h1Title = heroImage(directory.bannerImage, `Banner image of logo and name: ${directory.name}`);
    expansionParent.appendChild(h1Title);
    
    const brief = createTitle(directory.brief, "h4");
    expansionParent.appendChild(brief);

    const hr = document.createElement("hr");
    expansionParent.appendChild(hr);

    const process = splitLayout("text", directory.process, "images", directory.process);
    expansionParent.appendChild(process);

    const goalNScope = splitLayout("text", directory.goal, "text", directory.scope);
    expansionParent.appendChild(goalNScope);

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