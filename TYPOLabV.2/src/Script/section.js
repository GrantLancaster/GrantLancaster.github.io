//Generic parent container for the layouts
export function buildLayoutParent() {
    const layoutParent = document.createElement("div");
    layoutParent.className = "layoutParent";

    return layoutParent
}

//The horizontal lines that break up the website and sections
export function buildHorizontalRule() {
    const hrParent = document.createElement("div");
    hrParent.className = "hrParent";

    const leftRule = document.createElement("hr");
    leftRule.className = "leftRule";
    hrParent.appendChild(leftRule);

    const rightRule = document.createElement("hr");
    rightRule.className = "rightRule";
    hrParent.appendChild(rightRule);

    return hrParent
}

//The two column layout that is the entire site.
//Actually just a bunch of these that are all the same size to give the 
//  appearance of two columns 
export function buildLayout(splitLeft, leftFlex, splitRight, rightFlex) {
    const sectionParent = document.createElement("div");
    sectionParent.className = "sectionParent";

    const leftSide = document.createElement("div");
    leftSide.className = "leftSide";
    // leftSide.appendChild(leftSideContent);
    sectionParent.appendChild(leftSide);

    const rightSide = document.createElement("div");
    rightSide.className = "rightSide";
    // rightSide.appendChild(rightSideContent);
    sectionParent.appendChild(rightSide);

    if (leftFlex) {
        leftSide.style.display = "flex";
    }
    if (rightFlex) {
        rightSide.style.display = "flex";
    }

    if (splitLeft) {//Split the left half of the layout into two sections
        const leftLeftHalf = document.createElement("div");
        leftLeftHalf.className = "leftLeftHalf";
        leftSide.appendChild(leftLeftHalf);

        const leftRightHalf = document.createElement("div");
        leftRightHalf.className = "leftRightHalf";
        leftSide.appendChild(leftRightHalf);
    } 

    if (splitRight) {//Split the right half of the layout into two sections
        const rightLeftHalf = document.createElement("div");
        rightLeftHalf.className = "rightLeftHalf";
        rightSide.appendChild(rightLeftHalf);

        const rightRightHalf = document.createElement("div");
        rightRightHalf.className = "rightRightHalf";
        rightSide.appendChild(rightRightHalf);
    }
    
    return sectionParent
}

