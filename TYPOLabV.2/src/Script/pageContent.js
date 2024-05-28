import { TYPOLab } from "../../info.js";
import { summary } from "./summary.js";
import { hero, projects } from "./projects.js";

function buildPageContent() {
    const contentParent = document.createElement("div");
    contentParent.id = "contentParent";

    contentParent.appendChild(summary);
    // contentParent.appendChild(hero);
    contentParent.appendChild(projects);

    return contentParent
}

const pageContent = buildPageContent();

export { pageContent }