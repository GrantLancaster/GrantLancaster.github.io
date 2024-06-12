import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

function buildSummary() {
    const layoutParent = buildLayoutParent();// The parent div holding the two collumn layout
    const layout = buildLayout(false, false, true, false);
        // The div inside the parent that is the two collumn layout
        // Layout has two children Divs: left = childNodes[0] and right = childNodes[1]
    const horizontalRule = buildHorizontalRule();// The horizontal rule that seperates the chunks
    horizontalRule.id = "About";

    layoutParent.appendChild(horizontalRule);
    layoutParent.appendChild(layout);

    //The bit quote at the top of the site
    const heading = document.createElement("p");
    heading.id = "heading";
    heading.textContent = `${TYPOLab.Summary}`;
    layout.childNodes[0].appendChild(heading);

    //The little summary blurb right bellow the main quote
    const TLDR = document.createElement("p");
    TLDR.id = "TLDR";
    TLDR.textContent = `${TYPOLab.Sections.About.Copy.TLDR}`;
    layout.childNodes[1].childNodes[1].appendChild(TLDR);

    return layoutParent
}
//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const summary = buildSummary();

export { summary }