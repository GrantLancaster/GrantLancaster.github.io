import grantL from "./info.js";

let entry = "";
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
        <div class="module" id=${key}>
            <p class="description">${grantL.projects[key].description}</p>
                <div class="packages">
                    ${stuff}
                </div>
            <div class="titleParent">
                <h5 class="title">${grantL.projects[key].name}</h5>
                <p class="dates">${grantL.projects[key].dates}</p>
            </div>
            <a class="link" href=${grantL.projects[key].livePage} target="_blank" rel="noreferrer noopener"></a>
        </div>
`
}

for (let key in grantL.projects) {
    buildEntries(key);
}

export default entry;