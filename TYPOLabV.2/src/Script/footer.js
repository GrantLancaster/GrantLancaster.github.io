import { TYPOLab } from "./info.js";

function buildFooter() {
    const footerParent = document.createElement("div");
    footerParent.id = "footerParent";

    const footerIMG = document.createElement("img");
    footerIMG.id = "footerImage";
    footerIMG.src = `${TYPOLab.ATLASLogo}`;
    footerIMG.alt = "CU and ATLAS Institute Logos";
    footerParent.appendChild(footerIMG);

    const footerAddress = document.createElement("div")
    footerAddress.id = "footerAddress";
    for (let i = 0; i < TYPOLab.Address.length; i++) {
        const address = document.createElement("p");
        address.className = "addressLines";
        address.textContent = `${TYPOLab.Address[i]}`;
        footerAddress.appendChild(address);
    }
    footerParent.appendChild(footerAddress);

    return footerParent
}

const footer = buildFooter();

export { footer }