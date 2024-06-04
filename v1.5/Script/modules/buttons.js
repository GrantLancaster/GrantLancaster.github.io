
export function buildControllerButtons() {
    const buttonParent = document.createElement("div");
    buttonParent.className = "buttonParent";

    const topButtonContainer = document.createElement("div");
    topButtonContainer.className = "topAndBottom";
        const Ybutton = document.createElement("button");
            Ybutton.className = "controllerButtons"
            Ybutton.id = "Ybutton";
            Ybutton.textContent = "Y";
    topButtonContainer.appendChild(Ybutton);
    buttonParent.appendChild(topButtonContainer);

    const middleButtonContainer = document.createElement("div");
    middleButtonContainer.className = "middle";
        const Xbutton = document.createElement("button");
            Xbutton.className = "controllerButtons"
            Xbutton.id = "Xbutton";
            Xbutton.textContent = "X";
    middleButtonContainer.appendChild(Xbutton);
        const Bbutton = document.createElement("button");
            Bbutton.className = "controllerButtons"
            Bbutton.id = "Bbutton";
            Bbutton.textContent = "B";
    middleButtonContainer.appendChild(Bbutton);
    buttonParent.appendChild(middleButtonContainer);

    const bottomButtonContainer = document.createElement("div");
    bottomButtonContainer.className = "topAndBottom";
        const Abutton = document.createElement("button");
            Abutton.className = "controllerButtons"
            Abutton.id = "Abutton";
            Abutton.textContent = "A";
    bottomButtonContainer.appendChild(Abutton);
    buttonParent.appendChild(bottomButtonContainer);

    return buttonParent
}