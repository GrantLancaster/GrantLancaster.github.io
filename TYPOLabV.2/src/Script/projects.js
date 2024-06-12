import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

const directory = TYPOLab.Sections.Projects;
function buildHero() {
    const layoutParent = buildLayoutParent();// The parent div holding the two collumn layout
    const layout = buildLayout();
            // The div inside the parent that is the two collumn layout
        // Layout has two children Divs: left = childNodes[0] and right = childNodes[1]
    const horizontalRule = buildHorizontalRule();// The horizontal rule that seperates the chunks
    horizontalRule.id = "Projects";

    layoutParent.appendChild(horizontalRule);
    layoutParent.appendChild(layout);

    for (let i = 1; i <=2; i++) {
        const heroImage = document.createElement("div");
        heroImage.className = "heroImage";
        heroImage.style.backgroundImage = `url(${directory[i].EntryImage})`;
        layout.childNodes[i-1].appendChild(heroImage);

        const heroTitle = document.createElement("h1");
        heroTitle.className = "heroTitle";
        heroTitle.textContent = directory[i].Name;
        layout.childNodes[i-1].appendChild(heroTitle);
    }
    return layoutParent
}

function buildProjects() {
    const layoutParent = buildLayoutParent();// The parent div holding the two collumn layout

    const keys = Object.keys(directory);
    for (let i = 0; i < directory.length; i++) {
        const layout = buildLayout(false, true, true, true);
            // The div inside the parent that is the two collumn layout
            // Layout has two children Divs: left = childNodes[0] and right = childNodes[1]
        const horizontalRule = buildHorizontalRule();// The horizontal rule that seperates the chunks
        horizontalRule.id = "Projects";

        layoutParent.appendChild(horizontalRule);
        layoutParent.appendChild(layout);

        //The picture that is present for each of the projects
        const projectsImage = document.createElement("div");
        projectsImage.className = "projectsImage";
        projectsImage.id = keys[i];
        projectsImage.style.backgroundImage = `url(${directory[i].EntryImage})`;
        projectsImage.addEventListener("click", (e)=> {expandProject(e)})//Make the image clickable to create the expansion
        layout.childNodes[0].appendChild(projectsImage);

        //The title that is right next to the project picture 
        const projectsTitle = document.createElement("h2");
        projectsTitle.className = "projectsTitle";
        projectsTitle.id = keys[i];
        projectsTitle.textContent = directory[i].Name + " - " + directory[i].Dates;
        projectsTitle.addEventListener("click", (e)=>{expandProject(e)});//Make the title clickable to open the expansion
        layout.childNodes[0].appendChild(projectsTitle);

        if (directory[i].Description != "N/A") {//If there IS a description in info.js, the load it, otherwise don't do anything
            const description = document.createElement("p");
            description.className = "projectsDescription";
            description.textContent = directory[i].Description;
            layout.childNodes[1].childNodes[0].appendChild(description);
        }

        if (directory[i].People != "N/A") {//If there ARE people listed in info.js, the load it, otherwise don't do anything
            const people = document.createElement("p");
            people.className = "projectsPeople";
            people.textContent = "Collaborators: ";
            for (let j = 0; j<directory[i].People.length; j++) {
                if (j != directory[i].People.length-1) {
                    people.textContent += directory[i].People[j]+", ";
                } else {//Don't add a comma after the last person
                    people.textContent += directory[i].People[j];
                }
            }
            layout.childNodes[1].childNodes[1].appendChild(people);
        }

        //Create a link that opens a new tab with the full zine PDF
        if (directory[i].ZinePDFLink != "N/A") {
            const link = document.createElement("a");
            link.href = directory[i].ZinePDFLink;
            link.target="_blank" ;
            link.rel="noreferrer noopener";
            link.textContent = "View Full Zine PDF";
            layout.childNodes[1].childNodes[0].appendChild(link);

        }
    }
    return layoutParent
}
//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const hero = buildHero();
const projects = buildProjects();

export { hero, projects }

function expandProject(target) {
    const contentParent = document.getElementById("contentParent");//Grab the div that is the page content
    const project = directory[target.target.id];

    //Create the darker background when expansion is opened
    const expansionOverlay = document.createElement("div");
    expansionOverlay.className = "expansionOverlay";

    //Create the parent container for the project expansion
    const expandedParent = document.createElement("div");
    expandedParent.className = "expandedParent";
    expansionOverlay.appendChild(expandedParent);

    //Create a close button for the expansion
    const close =  document.createElement("button");
    close.className = "closeButton";
    close.textContent = "Close";
    close.addEventListener("click", (e)=> {removePanel(e.target, contentParent)});//Removes the panel when the close button is clicked
    expandedParent.appendChild(close);

    //Load all the images info.js for each project so the viewer to scroll through them.
    for (let p = 0; p < project.Images.length; p++) {
        const image = document.createElement("img");
        image.className = "carouselImage";
        image.src = project.Images[p];
        image.alt = "One of the pages from this zine.";
        expandedParent.appendChild(image);
    }

    //Attach the expansion to page
    contentParent.appendChild(expansionOverlay);
}

function removePanel(element, content) {
    const panel = element.parentElement.parentElement;
    content.removeChild(panel);
}