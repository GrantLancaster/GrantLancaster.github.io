import grantL from "./info.js";
import { splitLayout, heroImage, createTitle, createCloseButton, createImageCarousel } from "./layout.js";

function buildExpansion(target) {
    const directory = grantL.projects[target].details

    const expansionFragment = document.createDocumentFragment();

    const expansionParent = document.createElement("div");
    expansionParent.className = "expansionParent";

    const items = [];

    const h1Title = createTitle(directory.name, "h1");
    const mainHero = heroImage(); // <---- STILL NEED MEDIA FOR THIS ONE
    const brief = createTitle(directory.brief, "h3");
    const process = splitLayout();
        process.childNodes[0].appendChild()
        process.childNodes[1].appendChild()
    const goal = createTitle(directory.goal ,"h3");
    const scope = createTitle(directory.scope,"h3");
    const research = splitLayout();
        research.childNodes[0].appendChild();
        research.childNodes[1].appendChild();
    const development = splitLayout();
        development.childNodes[0].appendChild();
        development.childNodes[1].appendChild();
    const devStruggles = createTitle(directory.struggles, "h4");
    const finalProduct = createTitle(directory.final , "h2");



    return expansionFragment
}

const expansion = buildExpansion();

export { expansion }