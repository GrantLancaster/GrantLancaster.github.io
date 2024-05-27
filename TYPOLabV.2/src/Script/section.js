
export function buildLayoutParent() {
    const layoutParent = document.createElement("div");
    layoutParent.className = "layoutParent";

    return layoutParent
}

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

export function buildLayout(leftSideContent, rightSideContent) {
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
    
    return sectionParent
}

