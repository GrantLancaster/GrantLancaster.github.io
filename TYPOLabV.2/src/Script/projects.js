import { TYPOLab } from "../../info.js";

const directory = TYPOLab.Sections.Projects;
function buildHero() {
    const heroParent = document.createElement("div");
    heroParent.id = "heroParent";

    for (let i = 1; i <=2; i++) {
        const heroItem = document.createElement("div");
        heroItem.className = "heroItem";

        const heroImage = document.createElement("div");
        heroImage.className = "heroImage";
        heroImage.style.backgroundImage = `url(${directory[i].EntryImage})`;
        heroItem.appendChild(heroImage);


        const heroTitle = document.createElement("h1");
        heroTitle.className = "heroTitle";
        heroTitle.textContent = directory[i].Name;
        heroItem.appendChild(heroTitle);

        heroParent.appendChild(heroItem);
    }
    return heroParent
}

function buildProjects() {
    const projectsParent = document.createElement("div");
    projectsParent.id = "projectsParent";

    const keys = Object.keys(directory);
    for (let i = 1; i <= keys.length; i++) {
        const projectsItem = document.createElement("div");
        projectsItem.className = "projectsItem";

        const projectsImage = document.createElement("div");
        projectsImage.className = "projectsImage";
        projectsImage.style.backgroundImage = `url(${directory[i].EntryImage})`;
        projectsItem.appendChild(projectsImage);

        const projectsTitle = document.createElement("p");
        projectsTitle.className = "projectsTitle";
        projectsTitle.textContent = `${directory[i].Name}`;
        projectsItem.appendChild(projectsTitle);

        projectsParent.appendChild(projectsItem);
    }
    return projectsParent
}

const hero = buildHero();
const projects = buildProjects();

export { hero, projects }