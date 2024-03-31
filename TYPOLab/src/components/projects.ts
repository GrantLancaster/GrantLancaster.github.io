
import { TYPOLab } from "./info.ts";

function projectExpand(e: any) {
    console.log(e.target);
    /*const projectExpansion: HTMLDivElement = document.createElement("div");
    projectExpansion.className = "projectExpansion";

    const projectGallery: HTMLDivElement = document.createElement("div");
    projectGallery.className = "projectGallery";
    for (let j =0; j < TYPOLab.Sections.Projects[i].Images.length; j++) {
        let imageList: Array<string> = TYPOLab.Sections.Projects[i].Images;
        const galleryImage: HTMLImageElement = document.createElement("img");
        galleryImage.src = `${imageList[j]}`;
        projectGallery.appendChild(galleryImage);

    }
    projectExpansion.appendChild(projectGallery);
    //projectEntry.appendChild(projectExpansion);*/
}

function buildProjects() {
    const projectParent: HTMLDivElement = document.createElement("div");
    projectParent.id = "projectParent";

    const projectKeys = Object.keys(TYPOLab.Sections.Projects);
    for (let i = 1; i < projectKeys.length; i++) {
        const projectEntry: HTMLDivElement = document.createElement("div");
        projectEntry.className = "projectEntry";

        const projectBrief: HTMLDivElement = document.createElement("div");
        projectBrief.className = "projectBrief";

        const projectCopy: HTMLDivElement = document.createElement("div");
        projectCopy.className = "projectCopy";

        const title: HTMLHeadingElement = document.createElement("h2");
        title.className = "projectTitle";
        if (TYPOLab.Sections.Projects[i].Dates != "") {
            title.innerText = `${TYPOLab.Sections.Projects[i].Name} - ${TYPOLab.Sections.Projects[i].Dates}`;
        } else {
            title.innerText = `${TYPOLab.Sections.Projects[i].Name}`;
        }
        projectCopy.appendChild(title);

        const description: HTMLParagraphElement = document.createElement("p");
        description.innerText = `${TYPOLab.Sections.Projects[i].Description}`;
        if (TYPOLab.Sections.Projects[i].Description != "N/A") {projectCopy.appendChild(description)};

        const people: HTMLParagraphElement = document.createElement("p");
        for (let j = 0; j < TYPOLab.Sections.Projects[i].People.length; j++) {
            people.innerHTML += `${TYPOLab.Sections.Projects[i].People[j]}`+", ";
        }
        projectCopy.appendChild(people);
        projectBrief.appendChild(projectCopy);

        const projectImages: HTMLDivElement = document.createElement("div");
        projectImages.className = "projectImages";
        projectImages.style.backgroundImage = `url(${TYPOLab.Sections.Projects[i].EntryImage})`
        const image: HTMLImageElement = document.createElement("img");
        image.className = "projectEntryImage";
        image.src = `${TYPOLab.Sections.Projects[i].EntryImage}`
        image.alt = "Just a test";
        projectBrief.appendChild(projectImages);

        projectEntry.appendChild(projectBrief);

        projectParent.appendChild(projectEntry);

        projectEntry.addEventListener("click", projectExpand);

    }

    return projectParent
}

const projectPage = buildProjects();

export { projectPage }