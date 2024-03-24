import { TYPOLab } from "./info.ts";
import { buttons } from "./buttons.ts";
import { homePage, animateHomePage } from "./homePage.ts";
import { fadeInOut } from "./buttons.ts";

function animateHeader() {
    const theheader = <HTMLDivElement>document.querySelector(".header");
        document.removeEventListener("scroll", animateHeader);
        document.addEventListener("scroll", animateHomePage);
        theheader.className = "animateHeader";
        theheader.addEventListener("animationend", () => {
            theheader.className = "postAnimationHeader"
            theheader.removeEventListener("animationend", ()=>{});
        });
}

function buildHeader() {
    // Build the box that will ultimately be the header
    const headerBox: HTMLDivElement = document.createElement("div");
    headerBox.className = "header";

    // Build the element that is the TYPO Lab logo
    const logoImage: HTMLImageElement = document.createElement("img");
    logoImage.src = `${TYPOLab.LabLogo}`;
    logoImage.alt = "TYPO lab logo type";
    logoImage.id = "headerImage";
    logoImage.addEventListener("click", ()=> {
        const bodyContent = document.querySelector<HTMLDivElement>("#pageContent")!;
        fadeInOut(false);
        bodyContent.addEventListener("animationend", ()=>{
            bodyContent.style.height = "100%";
            bodyContent.innerHTML = homePage.outerHTML.toString();
            fadeInOut(true);
            bodyContent.removeEventListener("animationend",()=>{});
        })
    } )
    headerBox.appendChild(logoImage);
    // Pull in the buttons that wil be used for navigation
    headerBox.appendChild(buttons);

return headerBox
}

let header = buildHeader();

export { header, animateHeader }