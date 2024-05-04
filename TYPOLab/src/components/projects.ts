
import { TYPOLab } from "./info.ts";

function addListener() {
    const things = document.querySelectorAll(".projectEntry");
    things.forEach(thing =>{thing.addEventListener("click", function(this:HTMLElement, e: Event) {
        projectExpand(parseInt(this.id));
    })})   
}

function removePanel(parent: HTMLElement) {
    const panel: HTMLElement = parent.parentElement!;
    const body: HTMLElement = document.querySelector("body")!;
    body.removeChild(panel);
}

function projectExpand(id: number) {
    const bgDarken: HTMLDivElement = document.createElement("div");
    bgDarken.className = "bgDarken";

    const expandedProject: HTMLDivElement = document.createElement("div");
    expandedProject.className = "expandedProject";

    const closeButton: HTMLImageElement = document.createElement("img");
    closeButton.className = "closeButton"
    closeButton.src = "./src/Images/closeIcon.png";
    closeButton.alt = "An X to close the panel";
    closeButton.addEventListener("click", function(this: HTMLElement, e: Event) {removePanel(this)});

    const expandedCopy: HTMLDivElement = document.createElement("div");
    expandedCopy.className = "expandedCopy";
        //ADD THE TITLE TO THE EXPANDED PROJECT
        const title: HTMLHeadingElement = document.createElement("h1");
        title.innerText = `${TYPOLab.Sections.Projects[id].Name}`
        expandedCopy.appendChild(title);
        
        //ADD ALL THE PEOPLE TO THE EXPANDED PROEJCT
        const people: HTMLParagraphElement = document.createElement("p");
        for (let p=0; p<TYPOLab.Sections.Projects[id].People.length; p++) {
            if (p != TYPOLab.Sections.Projects[id].People.length-1) {
            people.innerText += (TYPOLab.Sections.Projects[id].People[p] + ", ")
            } else {
                people.innerText += TYPOLab.Sections.Projects[id].People[p] 
            }
        }
        expandedCopy.appendChild(people);

        //ADD THE DESCRIPTION IF ONE IS PRESENT
        if (TYPOLab.Sections.Projects[id].Description != "N/A") {
            const description: HTMLParagraphElement = document.createElement("p");
            description.innerText = TYPOLab.Sections.Projects[id].Description;
            expandedCopy.appendChild(description);
        }
    expandedProject.appendChild(expandedCopy);

    //BUILD THE IMAGE CAROUSEL
    const imageCarousel: HTMLDivElement = document.createElement("div");
    imageCarousel.className = "imageCarousel";
    for (let pic=0; pic<TYPOLab.Sections.Projects[id].Images.length; pic++) {
        const img: HTMLImageElement = document.createElement("img");
        img.className = "carouselImage";
        img.src = TYPOLab.Sections.Projects[id].Images[pic];
        img.alt = "Example work";
        imageCarousel.appendChild(img);
    }
    expandedProject.appendChild(imageCarousel);

    //ADD LINK TO THE ZINE PDF
    if (TYPOLab.Sections.Projects[id].ZinePDFLink != "N/A") {
        const pdfLink: HTMLAnchorElement = document.createElement("a");
        pdfLink.className = "pdfLink";
        pdfLink.href = TYPOLab.Sections.Projects[id].ZinePDFLink;
        pdfLink.target = "_blank";
        pdfLink.rel = "noreferrer noopener";
        pdfLink.textContent = "Link full Zine PDF";
        expandedProject.appendChild(pdfLink);
    }

    bgDarken.appendChild(expandedProject);
    bgDarken.appendChild(closeButton);

    const body: HTMLElement = document.querySelector("body")!;
    body.appendChild(bgDarken);
}

function buildProjects() {
    const projectParent: HTMLDivElement = document.createElement("div");
    projectParent.id = "projectParent";

    const projectKeys = Object.keys(TYPOLab.Sections.Projects);
    for (let i = 1; i < projectKeys.length; i++) {
        const project = [];
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
        project.push(projectEntry, i);

        projectDetails.push(project);

        projectParent.appendChild(projectEntry);
    }
    return projectParent
}
const projectDetails: Array<Array<HTMLElement|number>> = [];
const projectPage = buildProjects();

export { projectPage, addListener }