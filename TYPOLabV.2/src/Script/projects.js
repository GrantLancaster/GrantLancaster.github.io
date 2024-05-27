import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

const directory = TYPOLab.Sections.Projects;
function buildHero() {
    const layoutParent = buildLayoutParent();
    const layout = buildLayout();
    const horizontalRule = buildHorizontalRule();
    horizontalRule.id = "Projects";

    layoutParent.appendChild(horizontalRule);
    layoutParent.appendChild(layout);

    for (let i = 1; i <=2; i++) {
        const heroImage = document.createElement("div");
        heroImage.className = "heroImage";
        heroImage.style.backgroundImage = `url(${directory[i].EntryImage})`;
        layout.childNodes[i-1].appendChild(heroImage);

        const heroTitle = document.createElement("h1");
        heroTitle.className = "heroTitle";
        heroTitle.textContent = directory[i].Name;
        layout.childNodes[i-1].appendChild(heroTitle);
    }
    return layoutParent
}

function buildProjects() {
    const layoutParent = buildLayoutParent();

    const keys = Object.keys(directory);
    for (let i = 1; i <= keys.length; i++) {
        const layout = buildLayout();
        const horizontalRule = buildHorizontalRule();
        horizontalRule.id = "Projects";

        layoutParent.appendChild(horizontalRule);
        layoutParent.appendChild(layout);

        const projectsImage = document.createElement("div");
        projectsImage.className = "projectsImage";
        projectsImage.style.backgroundImage = `url(${directory[i].EntryImage})`;
        layout.childNodes[0].appendChild(projectsImage);


        const projectsTitle = document.createElement("h2");
        projectsTitle.className = "projectsTitle";
        projectsTitle.textContent = `${directory[i].Name}`;
        layout.childNodes[1].appendChild(projectsTitle);
    }
    return layoutParent
}

const hero = buildHero();
const projects = buildProjects();

export { hero, projects }