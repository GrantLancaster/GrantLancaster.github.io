import grantL from "./info.js"
import aboutMe from "./aboutMe.js";
import entry from "./entry.js";

let stuff = "";


let pckg = grantL.projects.impossibleCube.packages;
for (let i = 0; i < grantL.projects.impossibleCube.packages.length; i++) {
    stuff += `
        <div class="package">
            <p>${pckg[i]}</p>
        </div>
        `
    }
let content = `
    ${aboutMe}
    ${entry}

`

export default content;