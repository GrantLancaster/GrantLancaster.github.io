
import { TYPOLab } from "./info.ts";

function buildAbout() {
    const aboutParent: HTMLDivElement = document.createElement("div");
    aboutParent.id = "aboutParent";

    const title: HTMLHeadingElement = document.createElement("h1");
    title.textContent = "What is TYPO Lab?";
    title.className = "title";
    aboutParent.appendChild(title);

    const summary: HTMLHeadingElement = document.createElement("h2");
    summary.textContent = `${TYPOLab.Sections.About.Copy.TLDR}`;
    aboutParent.appendChild(summary);

    const descriptionParent: HTMLDivElement = document.createElement("div");
    for (let i = 0; i < TYPOLab.Sections.About.Copy.Details.length; i++) {
        const description: HTMLParagraphElement = document.createElement("p");
        description.textContent = `${TYPOLab.Sections.About.Copy.Details[i]}`;
        descriptionParent.appendChild(description);
    }
    aboutParent.appendChild(descriptionParent);
    
    return aboutParent
}

const aboutPage = buildAbout();

export { aboutPage }