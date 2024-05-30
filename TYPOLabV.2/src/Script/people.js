// USE THIS TO FIX THE ISSUE https://stackoverflow.com/questions/34727936/typescript-bracket-notation-property-access 

import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";
import { TYPOLab } from "../../info.js";

const directory = TYPOLab.Sections.People;
function buildProfiles() {
    const layoutParent = buildLayoutParent();
    const neededRows = calculateNeededRows(directory,4);
    let currentProfile = 0;

    for (let row = 0; row < neededRows; row++) {
        const layout = buildLayout(false, true, false, true);
        const horizontalRule = buildHorizontalRule();
        horizontalRule.id = "People";
        layoutParent.appendChild(horizontalRule);
        layoutParent.appendChild(layout);

        for (let item = 0; item < 4; item++) {
            if (currentProfile >= directory.length) {break};
            const profile = document.createElement("div");
            profile.className = "profile";

            const profilePic = document.createElement("img");
            profilePic.className = "profilePic";
            if (directory[currentProfile].Image == "") {
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

            if (item < 2) {
                layout.childNodes[0].appendChild(profile);
            } else {
                layout.childNodes[1].appendChild(profile);
            }
            currentProfile++;
        }
    }
    return layoutParent;
}

const profiles = buildProfiles();

export { profiles }

function calculateNeededRows(list, thingsPerRow) {
    const neededRows = Math.ceil(list.length/thingsPerRow);
    console.log(neededRows);
    return neededRows;
}