import { buttons } from "./buttons.js";

function buildHeader() {
    const headerParent = document.createElement("div");
    headerParent.id = "headerParent";

    const headerImage = document.createElement("img");
    headerImage.id = "headerImage";
    headerImage.src =  "./src/Images/typolabheadershrunk.png";
    headerImage.alt = "Logo for the TYPOLab";
    headerParent.appendChild(headerImage);

    headerParent.appendChild(buttons);


    return headerParent
}

const header = buildHeader();

export { header }
