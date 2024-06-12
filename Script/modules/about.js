import grantL from "./info.js";

function buildAboutSection() {
    const directory = grantL.aboutme
    const aboutParent = document.createElement("div");
    aboutParent.id = "aboutParent";

    for (let i = 0; i < directory.length; i++) {
        const p = document.createElement("p");
        p.innerText = directory[i];
        aboutParent.appendChild(p);
    } 

    const lineBreak = document.createElement("hr");
    aboutParent.appendChild(lineBreak);
    return aboutParent
}

const about = buildAboutSection();

export { about }
