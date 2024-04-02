
import { TYPOLab } from "./info.ts";

function addListener() {
    const entry = document.querySelectorAll(".projectEntry")!;
    entry.forEach((element) => element.addEventListener("click", projectExpand));
}
function removeListener() {
    const entry = document.querySelectorAll(".projectEntry")!;
    entry.forEach((element) => element.removeEventListener("click", projectExpand));
}

function closeExpand() {
    removeListener();
    console.log("AHAHAHAHAHAHAHHAHAHH");

}

function projectExpand(e: any) {
    let parent = document.getElementById(`${e.target.id}`)!;
    let index = e.target.id;
    
    if (index == "") {
        index = e.target.parentNode.id;
        parent = document.getElementById(`${e.target.parentNode.id}`)!;
        if (index == "") {
            index = e.target.parentNode.parentNode.id;
            parent = document.getElementById(`${e.target.parentNode.parentNode.id}`)!;
            if (index == "") {
                index = e.target.parentNode.parentNode.parentNode.id;
                parent = document.getElementById(`${e.target.parentNode.parentNode.parentNode.id}`)!;
            }
        }
    }

    const projectExpansion: HTMLDivElement = document.createElement("div");
    projectExpansion.className = "projectExpansion";

    const projectGallery: HTMLDivElement = document.createElement("div");
    projectGallery.className = "projectGallery";
        for (let i = 0; i < TYPOLab.Sections.Projects[index].Images.length; i++) {
            const galleryImage: HTMLImageElement = document.createElement("img");
                galleryImage.src = `${TYPOLab.Sections.Projects[index].Images[i]}`;
                galleryImage.alt = "More Testing";
            projectGallery.appendChild(galleryImage);
        }
    projectExpansion.appendChild(projectGallery);

    const zineLink: HTMLAnchorElement = document.createElement ("a");
    zineLink.href = `${TYPOLab.Sections.Projects[index].zineLink}`;
    zineLink.innerText = "PDF of full zine";
    projectExpansion.appendChild(zineLink);
    
    const close: HTMLImageElement = document.createElement("img");
    close.className = "closeTab";
    close.src = "";
    close.alt = "Small X to close the expanded window";
    projectExpansion.appendChild(close);

    parent.appendChild(projectExpansion);

    const closeButton = document.querySelector(".closeTab")!;
    closeButton.addEventListener("click", closeExpand);
}

function buildProjects() {
    const projectParent: HTMLDivElement = document.createElement("div");
    projectParent.id = "projectParent";

    const projectKeys = Object.keys(TYPOLab.Sections.Projects);
    for (let i = 1; i < projectKeys.length; i++) {
        const projectEntry: HTMLDivElement = document.createElement("div");
        projectEntry.className = "projectEntry";
        projectEntry.id = `${i}`;

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

        projectBrief.appendChild(projectImages);
        projectEntry.appendChild(projectBrief);
        projectParent.appendChild(projectEntry);

    }

    return projectParent
}

const projectPage = buildProjects();

export { projectPage, addListener }