import { TYPOLab } from "./info.ts";

function buildFooter() {
    // Build the box that ultimately is the footer
    const footerBox: HTMLDivElement = document.createElement("div");
    footerBox.id = "footer";

    // Create the element that will hold the CU and ATLAS Logos
    const footerIMG: HTMLImageElement = document.createElement("img");
    footerIMG.id = "footerImage";
    footerIMG.src = `${TYPOLab.ATLASLogo}`;
    footerIMG.alt = "Atlas and CU Boulder logos";
    footerBox.appendChild(footerIMG);

    // Creating the address box and text content
    const footerAddress: HTMLDivElement = document.createElement("div");
    footerAddress.id = "footerAddress";
    for (let i = 0; i < TYPOLab.Address.length; i++) {
        const address: HTMLParagraphElement = document.createElement("p");
        address.className = "addressLines";
        address.textContent = `${TYPOLab.Address[i]}`;
        footerAddress.appendChild(address);
    }
    footerBox.appendChild(footerAddress);

    return footerBox
}

let footer = buildFooter();

export { footer }