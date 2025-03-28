// USE THIS TO FIX THE ISSUE https://stackoverflow.com/questions/34727936/typescript-bracket-notation-property-access 


import { TYPOLab } from "./info";

function buildProfiles() {
    const profileParent: HTMLDivElement = document.createElement("div");
    profileParent.id = "profileParent";

    const profileKeys = Object.keys(TYPOLab.Sections.People);
    for  (let i:number = 0; i < profileKeys.length; i++) {
        const profile: HTMLDivElement = document.createElement("div");
        profile.className = "profile";

        const profileImage: HTMLImageElement = document.createElement("img");
        profileImage.className = "profileImage";
        if (TYPOLab.Sections.People[i].Image != "") {
            profileImage.src = `${TYPOLab.Sections.People[i].Image}`;
            profileImage.alt = `Picture of ${TYPOLab.Sections.People[i].Name}`;
        } else {
            profileImage.src = "./src/Images/defaultProfilePic.png";
            profileImage.alt = "No personal photo provided; substituted lab logo."
        }
        profile.appendChild(profileImage);

        const name: HTMLHeadingElement = document.createElement("h2");
        name.className = "profileName";
        name.textContent = `${TYPOLab.Sections.People[i].Name}`;
        profile.appendChild(name);

        const role: HTMLHeadingElement = document.createElement("h5");
        role.className = "profileRole";
        role.textContent = `${TYPOLab.Sections.People[i].Role}`;
        profile.appendChild(role);

        profileParent.appendChild(profile);
    }
    return profileParent;
}

const profiles = buildProfiles();

export { profiles }