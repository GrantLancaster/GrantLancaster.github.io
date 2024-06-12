import { TYPOLab } from "../../info.js";
import { summary } from "./summary.js";
import { hero, projects } from "./projects.js";
import { profiles } from "./people.js";
import { courses } from "./courses.js";
import { contact } from "./contact.js";


//THIS PAGE HOLDS ALL OF THE ACTUAL CONTENT OF THE SITE
// Main.js establishes the header, pagecontent, and footer
// THIS FILE IS THE PAGECONTENT 
function buildPageContent() {
    const contentParent = document.createElement("div");
    contentParent.id = "contentParent";

    contentParent.appendChild(summary);
    // contentParent.appendChild(hero);
    contentParent.appendChild(projects);
    contentParent.appendChild(profiles);
    contentParent.appendChild(courses);
    contentParent.appendChild(contact);

    return contentParent
}
//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const pageContent = buildPageContent();

export { pageContent }