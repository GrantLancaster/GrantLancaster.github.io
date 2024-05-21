import { TYPOLab } from "./info.js";

function buildButtons() {
    const buttonParent = document.createElement("div")
    buttonParent.id = "buttonParent";

    const keys = Object.keys(TYPOLab.Sections);
    for (let i=0; i < keys.length; i++) {
        const button = document.createElement("button");
        button.className = "headerButton";
        button.textContent = keys[i];
        
        buttonParent.appendChild(button);
    }

    return buttonParent
}

const buttons = buildButtons();

export { buttons }