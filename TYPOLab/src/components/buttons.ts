import { TYPOLab } from "./info.ts";

function addButtons() {
    // Create the bucket that will hold all the buttons
    const buttonParent: HTMLDivElement = document.createElement("div");
    buttonParent.id = "headerButtonParent";

    // loop throught all the sections of the TYPOLab object and make buttons for them
    for (let i = 0; i < Object.keys(TYPOLab.Sections).length; i++) {
            const button: HTMLButtonElement = document.createElement("button");
            button.className = "headerButton";
            button.textContent = `${Object.keys(TYPOLab.Sections)[i]}`
            buttonParent.appendChild(button);
        }
    return buttonParent
}

const buttons = addButtons();

export { buttons }

