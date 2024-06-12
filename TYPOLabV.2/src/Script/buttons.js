import { TYPOLab } from "../../info.js";

function buildButtons() {
    // A Large Div That holds all the individual buttons
    const buttonParent = document.createElement("div")
    buttonParent.id = "buttonParent";

    //Generate buttons based off of the Names of the data sections
    //  in info.js
    const keys = Object.keys(TYPOLab.Sections);
    for (let i=0; i < keys.length; i++) {
        //Create Each button
        const button = document.createElement("button");
        button.className = "headerButton";
        button.textContent = keys[i];
        
        //Add click event listeners that bring the sections into view
        //  on the screen when clicked.
        button.addEventListener("click", (e)=>{
            const projectView = document.querySelector(`#${keys[i]}`);
            e.preventDefault();
            projectView.scrollIntoView({behavior: "smooth"});
        })

        buttonParent.appendChild(button);
    }
    //Returns the parent div holding all the button content 
    return buttonParent
}

// Saves the generated buttons to a variable, then
//  Exports them to other files.
const buttons = buildButtons();

export { buttons }