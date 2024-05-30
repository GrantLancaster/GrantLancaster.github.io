import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

function buildSummary() {
    const layoutParent = buildLayoutParent();
    const layout = buildLayout(false, false, true, false);
    const horizontalRule = buildHorizontalRule();
    horizontalRule.id = "About";

    layoutParent.appendChild(horizontalRule);
    layoutParent.appendChild(layout);

    const heading = document.createElement("p");
    heading.id = "heading";
    heading.textContent = `${TYPOLab.Summary}`;
    layout.childNodes[0].appendChild(heading);

    const TLDR = document.createElement("p");
    TLDR.id = "TLDR";
    TLDR.textContent = `${TYPOLab.Sections.About.Copy.TLDR}`;
    layout.childNodes[1].childNodes[1].appendChild(TLDR);

    return layoutParent
}

const summary = buildSummary();

export { summary }