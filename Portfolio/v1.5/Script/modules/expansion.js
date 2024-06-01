import grantL from "./info.js";
import { splitLayout, heroImage, createTitle, createCloseButton } from "./layout.js";

function buildExpansion(target) {
    const directory = grantL.projects[target]

    const expansionFragment = document.createDocumentFragment();

    const expansionParent = document.createElement("div");
    expansionParent.className = "expansionParent";

    const h1Title = createTitle(directory.name, "h1");
    const mainHero = heroImage(); // <---- STILL NEED MEDIA FOR THIS ONE
    const brief = createTitle(directory.brief, "h3");
    const process = splitLayout();



    return expansionFragment
}

const expansion = buildExpansion();

export { expansion }