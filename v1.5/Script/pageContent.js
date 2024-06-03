import { home } from "./modules/homeScreen.js";

function buildPageContent() {
    const fragment = document.createDocumentFragment();

    const contentParent = document.createElement("div");
    contentParent.id = "contentParent";
    fragment.appendChild(contentParent);

    const leftSide = document.createElement("div");
    leftSide.className = "leftSide";
    leftSide.appendChild(home);


    contentParent.appendChild(leftSide);

    const rightSide = document.createElement("div");
    rightSide.className = "rightSide";


    contentParent.appendChild(rightSide);


    return fragment
}

const contentParent = buildPageContent();

export { contentParent }