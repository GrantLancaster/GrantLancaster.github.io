import grantL from "./info.js";

let entry = "";
/*for (let i = 0; i < grantL.projects.impossibleCube.packages.length; i++) {
    stuff += `
        <div class="package">
            <p>${pckg[i]}</p>
        </div>
        `}

entry =`
    <div class="module" id="impossibleCube">
        <p class="description">${grantL.projects.impossibleCube.description}</p>
        <div class="packages">
            ${stuff}
        </div>
        <h5 class="title">${grantL.projects.impossibleCube.name}</h5>
    </div>
`*/

function buildEntries(key) {
    let stuff = "";
    let pckg = grantL.projects[key].packages;

    for (let i = 0; i < grantL.projects[key].packages.length; i++) {
        stuff += `
            <div class="package">
                <p>${pckg[i]}</p>
            </div>
        `}
    entry += `
        <div class="module" id="impossibleCube">
            <p class="description">${grantL.projects[key].description}</p>
                <div class="packages">
                    ${stuff}
                </div>
            <h5 class="title">${grantL.projects[key].name}</h5>
        </div>
`
}

for (let key in grantL.projects) {
    buildEntries(key);
}
export default entry;