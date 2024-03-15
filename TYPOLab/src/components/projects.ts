
import { TYPOLab } from "./info.ts";

function buildProjects() {
    const projectParent: HTMLDivElement = document.createElement("div");
    projectParent.id = "projectParent";

    const projectKeys = Object.keys(TYPOLab.Sections.Projects);
    for (let i = 1; i < projectKeys.length; i++) {
        const projectEntry: HTMLDivElement = document.createElement("div");
        projectEntry.className = "projectEntry";

        const projectCopy: HTMLDivElement = document.createElement("div");
        projectCopy.className = "projectCopy";

        const title: HTMLHeadingElement = document.createElement("h2");
        title.innerHTML = `${TYPOLab.Sections.Projects[i].Name}`
        projectCopy.appendChild(title);

        const description: HTMLParagraphElement = document.createElement("p");
        description.innerText = `${TYPOLab.Sections.Projects[i].Description}`;
        if (TYPOLab.Sections.Projects[i].Description != "N/A") {projectCopy.appendChild(description)};

        const people: HTMLParagraphElement = document.createElement("p");
        for (let j = 0; j < TYPOLab.Sections.Projects[i].People.length; j++) {
            people.innerHTML += `${TYPOLab.Sections.Projects[i].People[j]}`+", ";
        }
        projectCopy.appendChild(people);
        projectEntry.appendChild(projectCopy);

        const projectImages: HTMLDivElement = document.createElement("div");
        projectImages.className = "projectImages";

        projectEntry.appendChild(projectImages);

        projectParent.appendChild(projectEntry);

    }

    return projectParent
}

const projectPage = buildProjects();

export { projectPage }