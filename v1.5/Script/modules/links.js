
import grantL from "./info.js";

function buildLinks() {
    const directory = grantL.resume.links;
    const linkParent = document.createElement("div");
    linkParent.id = "linkParent";

    const iconParent = document.createElement("div");
    iconParent.id = "iconParent";
    for (let i = 0; i < directory.length; i++) {
        const image = document.createElement("img");
        image.className = "icons";
        image.src = directory[i].image;
        image.alt = "Icons for External Links";

        const link = document.createElement("a");
        link.href = directory[i].link;
        link.target = "_blank";
        link.rel = "noreferrer noopener";
        link.appendChild(image);

        iconParent.appendChild(link);
    }

    linkParent.appendChild(iconParent);

    const arrow = document.createElement("img");
    arrow.className = "icons";
    arrow.id = "arrow";
    arrow.src = "./img/pixelDownArrow.png";
    arrow.alt = "Image of a down arrow in pixel art style";

    linkParent.appendChild(arrow);

    return linkParent
}

const links = buildLinks();

export { links }
