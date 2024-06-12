
import { renderExpansion } from "./entry.js";

export function buildControllerButtons(number, site, expansion, github) {
    const buttonMargin = document.createElement("div");
    buttonMargin.className = "buttonMargin";
    buttonMargin.id = `buttons${number}`;


    const buttonParent = document.createElement("div");
    buttonParent.className = `buttonParent`;

    const topButtonContainer = document.createElement("div");
    topButtonContainer.className = "topAndBottom";
        const Ybutton = document.createElement("a");
            Ybutton.className = "controllerButtons"
            Ybutton.id = "Ybutton";
            Ybutton.textContent = "Y";
            Ybutton.href = github;
            Ybutton.target = "_blank";
            Ybutton.rel = "noopener noreferrer";
    topButtonContainer.appendChild(Ybutton);
    buttonParent.appendChild(topButtonContainer);

    const middleButtonContainer = document.createElement("div");
    middleButtonContainer.className = "middle";
        const Xbutton = document.createElement("button");
            Xbutton.className = "controllerButtons"
            Xbutton.id = "Xbutton";
            Xbutton.textContent = "X";
            Xbutton.addEventListener("click", function(e) {
                renderExpansion(expansion);
            })
    middleButtonContainer.appendChild(Xbutton);
        const Bbutton = document.createElement("button");
            Bbutton.className = "controllerButtons"
            Bbutton.id = "Bbutton";
            Bbutton.textContent = "B";
    middleButtonContainer.appendChild(Bbutton);
    buttonParent.appendChild(middleButtonContainer);

    const bottomButtonContainer = document.createElement("div");
    bottomButtonContainer.className = "topAndBottom";
        const Abutton = document.createElement("a");
            Abutton.className = "controllerButtons"
            Abutton.id = "Abutton";
            Abutton.textContent = "A";
            Abutton.href = site;
            Abutton.target = "_blank";
            Abutton.rel = "noopener noreferrer";
    bottomButtonContainer.appendChild(Abutton);
    buttonParent.appendChild(bottomButtonContainer);
    buttonMargin.appendChild(buttonParent);

    return buttonMargin
}

export function buildButtonLegend(number) {
    const legendParent = document.createElement("div");
    legendParent.className = "legendParent";
    legendParent.id = `legend${number}`;

    const Abutton = document.createElement("p");
    Abutton.className = "controllerButtons";
    Abutton.id = "Abutton";
    Abutton.textContent = "A";

    const Bbutton = document.createElement("p");
    Bbutton.className = "controllerButtons";
    Bbutton.id = "Bbutton";
    Bbutton.textContent = "B";

    const Xbutton = document.createElement("p");
    Xbutton.className = "controllerButtons";
    Xbutton.id = "Xbutton";
    Xbutton.textContent = "X";

    const Ybutton = document.createElement("p");
    Ybutton.className = "controllerButtons";
    Ybutton.id = "Ybutton";
    Ybutton.textContent = "Y";

    const buttons = [Abutton, Bbutton, Xbutton, Ybutton];
    const tags = [" - Open Live Site", " - Do Nothing", " - View Details", " - Open Github"]

    for (let i = 0; i < buttons.length; i++) {
        const buttonLegendContainer = document.createElement("div");
        buttonLegendContainer.className = "buttonLegendContainer";
        buttonLegendContainer.appendChild(buttons[i]);

        const tag = document.createElement("p");
        tag.className = "legendTag";
        tag.textContent = tags[i];
        buttonLegendContainer.appendChild(tag);
        legendParent.appendChild(buttonLegendContainer);

    }
    return legendParent
}