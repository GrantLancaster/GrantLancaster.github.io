import { TYPOLab } from "../../info.js";
import { summary } from "./summary.js";
import { hero, projects } from "./projects.js";
import { profiles } from "./people.js";
import { courses } from "./courses.js";

function buildPageContent() {
    const contentParent = document.createElement("div");
    contentParent.id = "contentParent";

    contentParent.appendChild(summary);
    // contentParent.appendChild(hero);
    contentParent.appendChild(projects);
    contentParent.appendChild(profiles);
    contentParent.appendChild(courses);

    return contentParent
}

const pageContent = buildPageContent();

export { pageContent }