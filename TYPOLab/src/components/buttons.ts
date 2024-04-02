import { TYPOLab } from "./info.ts";
import { homePage } from "./homePage.ts";
import { aboutPage } from "./about.ts";
import { profiles } from "./people.ts";
import { projectPage, addListener } from "./projects.ts";
import { coursesPage } from "./courses.ts";
import { contactPage } from "./contact.ts";

let returnValue: string = "";
function fadeInOut(isInvis:boolean) {
    const bodyContent = document.querySelector<HTMLDivElement>("#pageContent")!;
    if (isInvis) {
        bodyContent.style.animation = "0.3s ease-in-out fadeIn";
    } else {
        bodyContent.style.animation = "0.3s ease-in-out fadeOut";
    }
}

function buttonClick(e: any) {
    const bodyContent = document.querySelector<HTMLDivElement>("#pageContent")!;
    const target: string = e.target.innerText;
    switch (target) {
        case "About":
            fadeInOut(false);
            bodyContent.addEventListener("animationend", ()=>{
                bodyContent.innerHTML = aboutPage.outerHTML.toString();
                bodyContent.style.height = "auto";
                fadeInOut(true);
                bodyContent.removeEventListener("animationend", ()=>{});
            })
        break;
        case "Projects":
            fadeInOut(false);
            bodyContent.addEventListener("animationend", ()=>{
                bodyContent.style.height = "auto";
                bodyContent.innerHTML = projectPage.outerHTML.toString();
                fadeInOut(true);
                addListener();
                bodyContent.removeEventListener("animationend", ()=>{});
            })
        break;
        case "People":
            fadeInOut(false);
            bodyContent.addEventListener("animationend", ()=>{
                bodyContent.style.height = "auto";
                bodyContent.innerHTML = profiles.outerHTML.toString();
                fadeInOut(true);
                bodyContent.removeEventListener("animationend", ()=>{});
            })
        break;
        case "Courses":
            fadeInOut(false);
            bodyContent.addEventListener("animationend", ()=>{
                bodyContent.style.height = "auto";
                bodyContent.innerHTML = coursesPage.outerHTML.toString();
                fadeInOut(true);
                bodyContent.removeEventListener("animationend", ()=>{});
            })
        break;
        case "Contact":
            fadeInOut(false);
            bodyContent.addEventListener("animationend", ()=>{
                bodyContent.style.height = "fit-content";
                bodyContent.innerHTML = contactPage.outerHTML.toString();
                fadeInOut(true);
                bodyContent.removeEventListener("animationend", ()=>{});
            })
        break;
        default:
            fadeInOut(false);
            bodyContent.addEventListener("animationend", ()=>{
                returnValue = homePage.outerHTML.toString();
                fadeInOut(true);
                bodyContent.removeEventListener("animationend", ()=>{});
            })
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


export { buttons, returnValue, fadeInOut }

