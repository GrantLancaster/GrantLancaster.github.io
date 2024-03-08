import { TYPOLab } from "./info.ts";

function animateHomePage() {
    const theHomePage: HTMLDivElement = document.querySelector("#preAnimationHomePage")!;
    document.removeEventListener("scroll", animateHomePage);
    theHomePage.id = "animateHomePage";
    theHomePage.addEventListener("animationend", () => {
        theHomePage.id = "postAnimationHomePage";
        theHomePage.removeEventListener("animationend", ()=>{});
    })
}

function buildHomePage() {
    // START WITH BUILDING THE SUMMARY QUOTE
    const homePage: HTMLDivElement = document.createElement("div");
    homePage.id = "preAnimationHomePage";

    const homePageBackground: HTMLDivElement = document.createElement("div");
    homePageBackground.id = "homePageBackground";
    homePage.appendChild(homePageBackground);

    const summary: HTMLHeadingElement = document.createElement("h1");
    summary.id = "summary";
    summary.innerText = `${TYPOLab.Summary}`;

    homePage.appendChild(summary);
    // ----------------------------------- 
    return homePage
}

const homePage = buildHomePage();


export { homePage, animateHomePage }

