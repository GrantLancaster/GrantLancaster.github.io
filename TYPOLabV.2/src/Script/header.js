import { buttons } from "./buttons.js";

function buildHeader() {
    //Parent container div for the header
    const headerParent = document.createElement("div");
    headerParent.id = "headerParent";

    const headerImage = document.createElement("img");
    headerImage.id = "headerImage";
    headerImage.src =  "./src/Images/typolabheadershrunk.png";
    headerImage.alt = "Logo for the TYPOLab";
    headerParent.appendChild(headerImage);

    //The buttons from buttons.js appended to the parent container
    headerParent.appendChild(buttons);


    return headerParent
}
//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const header = buildHeader();

export { header }
