export function splitLayout() {
    const layoutParent = document.createElement("div");
    layoutParent.className = "layoutParent";

    const leftSide = document.createElement("div");
    leftSide.className = "leftSide";

    const rightSide = document.createElement("div");
    rightSide.className = "rightSide";

    return layoutParent;
}

export function heroImage(src, alt) {
    const heroParent = document.createElement("div");
    heroParent.className = "heroParent";

    const image = document.createElement("img");
    image.className = "heroImage";
    image.src = src;
    image.alt = alt;
    heroParent.appendChild(image);

    return heroParent;
}

export function createTitle(titleText, whichHeadingElement) {
    const titleParent = document.createElement("div");
    titleParent.className = "titleParent";

    const element = whichHeadingElement.toString();
    const title = document.createElement(element);
    title.textContent = titleText;

    titleParent.appendChild(title);
    return titleParent;
}

export function createCloseButton() {
    const closeParent = document.createElement("div");
    closeParent.className = "closeParent";

    const closeButton = document.createElement("img");
    closeButton = className = "closeButton";
    closeParent.appendChild(closeButton);

    return closeParent;
}