import { TYPOLab } from "./info.ts";
import { homePage, animateHomePage } from "./homePage.ts";
import { profiles } from "./people.ts";

let returnValue: string = "";
function buttonClick(e: any) {
    const bodyContent = document.querySelector<HTMLDivElement>("#pageContent")!;
    const target: string = e.target.innerText;
    switch (target) {
        case "About":
            returnValue = target;
        break;
        case "Projects":
            returnValue = target;
        break;
        case "People":
            bodyContent.innerHTML = profiles.outerHTML.toString();
        break;
        case "Courses":
            returnValue = target;
        break;
        case "Contact":
            returnValue = target;
        break;
        default:
            returnValue = homePage.outerHTML.toString();
    }
    return returnValue
}

function addButtons() {
    // Create the bucket that will hold all the buttons
    const buttonParent: HTMLDivElement = document.createElement("div");
    buttonParent.id = "headerButtonParent";

    // loop throught all the sections of the TYPOLab object and make buttons for them
    for (let i = 0; i < Object.keys(TYPOLab.Sections).length; i++) {
            const button: HTMLButtonElement = document.createElement("button");
            button.className = "headerButton";
            button.textContent = `${Object.keys(TYPOLab.Sections)[i]}`
            button.addEventListener("click", buttonClick);
            buttonParent.appendChild(button);
        }
    return buttonParent
}

const buttons = addButtons();


export { buttons, returnValue }

