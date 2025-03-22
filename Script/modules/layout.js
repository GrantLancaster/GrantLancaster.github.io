export function splitLayout(leftType, leftContent, rightType, rightContent) {
    const layoutParent = document.createElement("div");
    layoutParent.className = "splitLayoutParent";

    const leftSide = document.createElement("div");
    leftSide.className = "splitLeftSide";
    if (leftType === "images") {
        for (let i = 0; i < rightContent.images.length; i++) {
            const logo = document.createElement("img");
            logo.className = "expansionLogos";
            logo.src = leftContent.images[i];
            logo.alt = "Logo for one of the libraries used in this project";
            leftSide.appendChild(logo);
        }
    } else if (leftType === "text") {
    const title = document.createElement("h4");
    title.className = "expansionCopy";
    title.textContent = leftContent.title;
    leftSide.appendChild(title);
    for (let p = 0; p < leftContent.copy.length; p++) {
        const paragraph = document.createElement("p");
        paragraph.className = "expansionCopy";
        paragraph.textContent = leftContent.copy[p];
        leftSide.appendChild(paragraph);
    }
    }
    layoutParent.appendChild(leftSide);

    const rightSide = document.createElement("div");
    rightSide.className = "splitRightSide";
    if (rightType === "images") {
        for (let i = 0; i < rightContent.images.length; i++) {
            const logo = document.createElement("img");
            logo.className = "expansionLogos";
            logo.src = rightContent.images[i];
            logo.alt = "Logo for one of the libraries used in this project";
            rightSide.appendChild(logo);
        }
    } 
    else if (rightType === "singleImage") {
        const logo = document.createElement("img");
        logo.className = "detailedImage";
        logo.src = rightContent;
        logo.alt = "Logo for one of the libraries used in this project";
        rightSide.appendChild(logo);
    }
    else if (rightType === "imageLink") {
        for (let i = 0; i < rightContent.link.length; i++) {
            const link = document.createElement("a");
            link.href = rightContent.link[i];
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            const logo = document.createElement("img");
            logo.className = "detailedImage";
            logo.src = rightContent.image[i];
            logo.alt = "Logo for one of the libraries used in this project";
            link.appendChild(logo);
            rightSide.appendChild(link);
        }
    }     else if (rightType === "imagesLinks") {
        for (let i = 0; i < rightContent.link.length; i++) {
            const link = document.createElement("a");
            link.href = rightContent.link[i];
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            const logo = document.createElement("img");
            logo.className = "comboImage";
            logo.src = rightContent.image[i];
            logo.alt = "Logo for one of the libraries used in this project";
            link.appendChild(logo);
            rightSide.appendChild(link);
        }
    } 
    else if (rightType === "text") {
    const title = document.createElement("h4");
    title.className = "expansionCopy";
    title.textContent = rightContent.title;
    rightSide.appendChild(title);
    for (let p = 0; p < rightContent.copy.length; p++) {
        const paragraph = document.createElement("p");
        paragraph.className = "expansionCopy";
        paragraph.textContent = rightContent.copy[p];
        rightSide.appendChild(paragraph);
    }
    }
    layoutParent.appendChild(rightSide);

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

export function createTitle(directory, whichHeadingElement, justHeading) {
    const titleParent = document.createElement("div");
    titleParent.className = "EXPtitleParent";

    const element = whichHeadingElement.toString();
    const title = document.createElement(element);
    title.className = "expansionCopy";
    title.textContent = directory.title;
    titleParent.appendChild(title);

    if(!justHeading) {
        for (let i = 0; i < directory.copy.length; i++) {
            const paragraph = document.createElement("p");
            paragraph.className = "expansionCopy";
            paragraph.textContent = directory.copy[i];
            titleParent.appendChild(paragraph);
        }
    } else {
        const hr = document.createElement("hr");
        titleParent.appendChild(hr);
    }

    return titleParent;
}

export function createCloseButton() {
    const closeParent = document.createElement("div");
    closeParent.className = "closeParent";

    const closeButton = document.createElement("img");
    closeButton.src = "./img/closeIcon.png";
    closeButton.alt = "A cross icon to close the project expansion";
    closeButton.className = "closeButton";
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

export function makeControllerButton(whichButton) {
    const button = document.createElement("span");
    let desiredButton = whichButton.toString();
    button.id = desiredButton + "button";
    button.className = "controllerButtons";
    button.innerText = desiredButton;

    return button.outerHTML
}