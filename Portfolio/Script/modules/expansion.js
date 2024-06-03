import grantL from "./info.js";
import { splitLayout, heroImage, createTitle, createCloseButton, createImageCarousel } from "./layout.js";

function buildExpansion(target) {
    const directory = grantL.projects[target].details

    const expansionFragment = document.createDocumentFragment();

    const expansionParent = document.createElement("div");
    expansionParent.className = "expansionParent";
    expansionFragment.appendChild(expansionParent);


    const h1Title = createTitle(directory.name, "h1");
    expansionParent.appendChild(h1Title);
    const mainHero = heroImage(); // <---- STILL NEED MEDIA FOR THIS ONE
    const brief = createTitle(directory.brief, "h3");
    expansionParent.appendChild(brief);

    const process = splitLayout(directory.process.copy, directory.process.techLogos);
    expansionParent.appendChild(process);

    const goal = createTitle(directory.goal ,"h3");
    expansionParent.appendChild(goal);

    const scope = createTitle(directory.scope,"h3");
    expansionParent.appendChild(scope);

    const research = splitLayout();
    const development = splitLayout();
    const devStruggles = createTitle(directory.struggles, "h4");
    const finalProduct = createTitle(directory.final , "h2");



    return expansionFragment
}

const expansion = buildExpansion();

export { expansion }