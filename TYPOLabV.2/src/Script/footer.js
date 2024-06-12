import { TYPOLab } from "../../info.js";

function buildFooter() {
    //Footer parent div container
    const footerParent = document.createElement("div");
    footerParent.id = "footerParent";

    const footerIMG = document.createElement("img");
    footerIMG.id = "footerImage";
    footerIMG.src = `${TYPOLab.ATLASLogo}`;
    footerIMG.alt = "CU and ATLAS Institute Logos";
    footerParent.appendChild(footerIMG);

    //Parent div for the address in the footer
    const footerAddress = document.createElement("div")
    footerAddress.id = "footerAddress";
    for (let i = 0; i < TYPOLab.Address.length; i++) {
        //Each of the address lines
        const address = document.createElement("p");
        address.className = "addressLines";
        address.textContent = `${TYPOLab.Address[i]}`;
        footerAddress.appendChild(address);
    }
    footerParent.appendChild(footerAddress);

    return footerParent
}

//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const footer = buildFooter();

export { footer }