import { TYPOLab } from "../../info.js";

function buildSummary() {
    const summaryParent = document.createElement("div");
    summaryParent.id = "summaryParent";

    const heading = document.createElement("p");
    heading.id = "heading";
    heading.textContent = `${TYPOLab.Summary}`;
    summaryParent.appendChild(heading);

    const TLDR = document.createElement("p");
    TLDR.id = "TLDR";
    TLDR.textContent = `${TYPOLab.Sections.About.Copy.TLDR}`;
    summaryParent.appendChild(TLDR);

    return summaryParent
}

const summary = buildSummary();

export { summary }