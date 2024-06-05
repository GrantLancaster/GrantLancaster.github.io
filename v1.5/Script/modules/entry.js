import grantL from "./info.js";
import { buildControllerButtons } from "./buttons.js";
import { buildExpansion } from "./expansion.js";

function buildProjectEntries() {
    const directory = grantL.projects
    const projectsParent = document.createElement("div");
    projectsParent.id = "projectsParent";

    for (let i = 0; i < directory.length; i++) {
        const project = document.createElement("div");
        project.className = "projectEntries";

        const projectTitleParent = document.createElement("div");
        projectTitleParent.classname = "projectTitleParent";

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
        overlay.addEventListener("mouseenter", makeVisible)
        overlay.addEventListener("mouseleave", makeInvis);
        overlay.addEventListener("click", function() {renderExpansion(directory[i])});
        project.appendChild(overlay);
        //---------------------------------
        const buttons = buildControllerButtons(i);
        project.appendChild(buttons);
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

function renderExpansion(directory) {
    const content = document.querySelector("#contentParent");
    const expand = buildExpansion(directory);
    content.appendChild(expand);
}

function makeVisible(event) {
    let num = parseInt(event.target.id);
    let button =  document.querySelector(`#buttons${num}`);
    button.style.visibility = "visible";

    button.addEventListener("mouseenter", () => {
        button.style.visibility = "visible";
    });
}

function makeInvis(event) {
    let num = parseInt(event.target.id);
    let button =  document.querySelector(`#buttons${num}`);
    button.style.visibility = "hidden";

    button.addEventListener("mouseleave", () => {
        button.style.visibility = "hidden";
    });
}
