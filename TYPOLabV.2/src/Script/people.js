
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";
import { TYPOLab } from "../../info.js";

const directory = TYPOLab.Sections.People;
function buildProfiles() {
    const layoutParent = buildLayoutParent();// The parent div holding the two collumn layout
    const neededRows = calculateNeededRows(directory,4);//Determines the rows needed for profiles
    let currentProfile = 0; //Global index for the profiles so they don't repeat

    for (let row = 0; row < neededRows; row++) {
        const layout = buildLayout(false, true, false, true);
        // The div inside the parent that is the two collumn layout
        // Layout has two children Divs: left = childNodes[0] and right = childNodes[1]
        const horizontalRule = buildHorizontalRule();// The horizontal rule that seperates the chunks
        horizontalRule.id = "People";
        layoutParent.appendChild(horizontalRule);
        layoutParent.appendChild(layout);

        for (let item = 0; item < 4; item++) {
            if (currentProfile >= directory.length) {break};//stop the loop if the profile index has gotten too big

            //The parent container for each of the profiles
            const profile = document.createElement("div");
            profile.className = "profile";

            const profilePic = document.createElement("img");
            profilePic.className = "profilePic";
            if (directory[currentProfile].Image == "") {//If no image is specified in info.js, use a generic logo picture
                profilePic.src = "./src/Images/defaultProfilePic.png";
            } else {
                profilePic.src = directory[currentProfile].Image;
            }
            profilePic.alt = `Picture of ${directory[currentProfile].Name}`;
            profile.appendChild(profilePic);

            const profileName = document.createElement("h3");
            profileName.className = "profileName";
            profileName.textContent = directory[currentProfile].Name;
            profile.appendChild(profileName);

            const profileRole = document.createElement("h3");
            profileRole.className = "profileRole";
            profileRole.textContent = directory[currentProfile].Role;
            profile.appendChild(profileRole);

            if (item < 2) {//Determine which side of the layout to put things
                //Less then 2 --> left side
                //2 or greater --> right side
                layout.childNodes[0].appendChild(profile);
            } else {
                layout.childNodes[1].appendChild(profile);
            }
            currentProfile++;
        }
    }
    return layoutParent;
}
//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const profiles = buildProfiles();

export { profiles }

//Calculates the number of rows needed to hold all profiles in info.js
function calculateNeededRows(list, thingsPerRow) {
    const neededRows = Math.ceil(list.length/thingsPerRow);
    console.log(neededRows);
    return neededRows;
}