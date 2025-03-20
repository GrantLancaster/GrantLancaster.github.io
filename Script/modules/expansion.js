import grantL from "./info.js";
import { splitLayout, heroImage, createTitle, createCloseButton, createImageCarousel } from "./layout.js";

export function buildExpansion(target) {
    const directory = target.details
    const expansionFragment = document.createDocumentFragment();

    const bgOverlay = document.createElement("div");
    bgOverlay.className = "expansionOverlay";
    expansionFragment.appendChild(bgOverlay);

    const expansionParent = document.createElement("div");
    expansionParent.className = "expansionParent";
    bgOverlay.appendChild(expansionParent);

    const closeButton = createCloseButton();
    expansionParent.appendChild(closeButton);
    closeButton.addEventListener("click", function(e) {closeWindow(e)});

    if (directory === "N/A") {
        const tempText = document.createElement("p");
        tempText.textContent = "Full documentation currently being edited and will be published soon.";
        expansionParent.appendChild(tempText);

        const devLogLink = document.createElement("a");
        devLogLink.href = "https://github.com/GrantLancaster/Archive/blob/main/portal/ProcessBlogs/ImpossibleCubeDevelopment.md";
        devLogLink.target = "_blank";
        devLogLink.rel = "noopener noreferrer";
        devLogLink.textContent = "here";

        const tempParagraph = document.createElement("p");
        tempParagraph.textContent = `In the mean time, you can view the projects dev log `;
        tempParagraph.appendChild(devLogLink);

        expansionParent.appendChild(tempParagraph);
        return expansionFragment
    } else {
        
    const h1Title = heroImage(directory.bannerImage, `Banner image of logo and name: ${directory.name}`);
    expansionParent.appendChild(h1Title);

    const brief = createTitle(directory.brief, "h4", false);
    expansionParent.appendChild(brief);

    const hr = document.createElement("hr");
    expansionParent.appendChild(hr);

    const process = splitLayout("text", directory.process, "images", directory.process);
    expansionParent.appendChild(process);

    const goalNScope = splitLayout("text", directory.goal, "text", directory.scope);
    expansionParent.appendChild(goalNScope);

    const processHeading = createTitle(directory.research, "h4", true);
    expansionParent.appendChild(processHeading);
    if (typeof directory.research.copy[0] === "object") {
        for (let i = 0; i < directory.research.copy.length; i++) {
            const research = splitLayout("text", directory.research.copy[i], "singleImage", directory.research.copy[i].image);
            expansionParent.appendChild(research);
        }
    }

    const devHeading = createTitle(directory.development, "h4", true)
    expansionParent.appendChild(devHeading);
    if (typeof directory.development.copy[0] === "object") {
        for (let i = 0; i < directory.development.copy.length; i++) {
            const dev = splitLayout("text", directory.development.copy[i], "singleImage", directory.development.copy[i].image);
            expansionParent.appendChild(dev);
        }
    }

    const struggles = createTitle(directory.struggles, "h4");
    expansionParent.appendChild(struggles);

    const final = splitLayout("text", directory.final, "imagesLinks", directory.final);
    expansionParent.appendChild(final);
    //const finalProduct = createTitle(directory.final , "h2");



    return expansionFragment
    }
}

function closeWindow(event) {
    const content = document.querySelector("#contentParent");
    const parent = document.querySelector(".expansionOverlay");
    parent.style.animation = "0.2s ease-in-out fadeout";
    parent.addEventListener("animationend", function() {
        content.removeChild(parent);

    });
}