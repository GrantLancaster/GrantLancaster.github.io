import grantL from "./info.js";
import { buildControllerButtons } from "./buttons.js";

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
        //---------------------------------
        const buttons = buildControllerButtons();
        project.appendChild(buttons);
        //-----------------------------------

        projectsParent.appendChild(project);
    }
    return projectsParent
}

const projects = buildProjectEntries();

export { projects }
