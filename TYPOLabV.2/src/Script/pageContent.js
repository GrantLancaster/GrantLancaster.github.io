import { TYPOLab } from "./info.js";

function buildPageContent() {
    const contentParent = document.createElement("div");
    contentParent.id = "contentParent";

    return contentParent
}

const pageContent = buildPageContent();

export { pageContent }