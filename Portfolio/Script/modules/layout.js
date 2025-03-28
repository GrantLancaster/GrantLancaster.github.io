export function splitLayout(leftContent, rightContent) {
    const layoutParent = document.createElement("div");
    layoutParent.className = "layoutParent";

    const leftSide = document.createElement("div");
    leftSide.className = "leftSide";
    for (let p = 0; p < leftContent.length; p++) {
        const paragraph = document.createElement("p");
        paragraph.innerText = leftContent[p]
        leftSide.appendChild(paragraph);
    }

    const rightSide = document.createElement("div");
    rightSide.className = "rightSide";
    for (let i = 0; i < rightContent.length; i++) {
        const logo = document.createElement("img");
        logo.src = rightContent[i];
        logo.alt = ""
        rightSide.appendChild(logo);
    }

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
    closeButton.src = 
    closeButton.alt =
    closeButton = className = "closeButton";
    closeParent.appendChild(closeButton);

    return closeParent;
}

export function createImageCarousel(imageList) {
    const carouselParent = document.createElement("div");
    carouselParent.className = "carouselParent";

    for (let i = 0; i < imageList.length; i++) {
        const image = document.createElement("img");
        image.className = "carouselImage";
        image.src = imageList[i];
        image.alt = "";
        carouselParent.appendChild(image);
    }
    return carouselParent;
}