import grantL from "./info.js";
import { buildControllerButtons, buildButtonLegend } from "./buttons.js";
import { buildExpansion } from "./expansion.js";
import { buildProjectLinks } from "./projectLinks.js";

function buildProjectEntries() {
    const directory = grantL.projects
    const projectsParent = document.createElement("div");
    projectsParent.id = "projectsParent";

    for (let i = 0; i < directory.length; i++) {
        const project = document.createElement("div");
        project.className = "projectEntries";

        const projectBgImage = document.createElement("div");
        projectBgImage.className = "projectBgImage";
        projectBgImage.style.backgroundImage = `url(${directory[i].cardImage})`;

        project.appendChild(projectBgImage);

        const projectTitleParent = document.createElement("div");
        projectTitleParent.className = "projectTitleParent";

        const title = document.createElement("h5")
        title.className = "title";
        title.textContent = directory[i].name;
        projectTitleParent.appendChild(title);

        const date = document.createElement("p");
        date.className = "dates";
        date.textContent = directory[i].dates;
        projectTitleParent.appendChild(date);
        project.appendChild(projectTitleParent);

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = directory[i].description;
        project.appendChild(description);

        const techStack = buildPackages(directory[i].packages);
        project.appendChild(techStack);

        const overlay = document.createElement("div");
        overlay.className = "link";
        overlay.id = i;
        //overlay.addEventListener("click", function() {renderExpansion(directory[i])});
        project.appendChild(overlay);

        const links = buildProjectLinks(directory[i].livePage, directory[i].github, directory[i]);
        project.appendChild(links);
        //-----------------------------------

        projectsParent.appendChild(project);
    }
    return projectsParent
}

const projects = buildProjectEntries();

export { projects }

function buildPackages(directory) {
    const packageParent = document.createElement("div");
    packageParent.className = "packages";

    for (let i = 0; i < directory.length; i++) {
        const stack = document.createElement("p");
        stack.className = "package";
        stack.textContent = directory[i];
        packageParent.appendChild(stack);
    }
    return packageParent;
}

export function renderExpansion(directory) {
    const content = document.querySelector("#contentParent");
    const expand = buildExpansion(directory);
    content.appendChild(expand);
    const capExpand = document.querySelector(".expansionOverlay");
    capExpand.style.animation = "0.2s ease-in-out fadein"
}

function makeVisible(event) {
    let num = parseInt(event.target.id);
    let button =  document.querySelector(`#buttons${num}`);
    let lgnd = document.querySelector(`#legend${num}`);
    button.style.visibility = "visible";
    if (button.style.visibility == "visible") {
        lgnd.style.visibility = "visible";
    }
    button.addEventListener("mouseenter", () => {
        button.style.visibility = "visible";
    });
}

function makeInvis(event) {
    let num = parseInt(event.target.id);
    let button =  document.querySelector(`#buttons${num}`);
    let lgnd = document.querySelector(`#legend${num}`);
    button.style.visibility = "hidden";
    if (button.style.visibility == "hidden") {
        lgnd.style.visibility = "hidden";
    }
    button.addEventListener("mouseleave", () => {
        button.style.visibility = "hidden";
    });
}
