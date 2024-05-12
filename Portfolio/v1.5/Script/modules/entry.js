import grantL from "./info.js";

let int = 0;
let entry = "";
let construction = "";


function buildEntries(key) {
    let stuff = "";
    let pckg = grantL.projects[key].packages;

    if (grantL.projects[key].isBuilt === false) {
        construction = `<p class="construct">Not Live -- Under Construction</p>`
    } else {construction = ""};

    for (let i = 0; i < grantL.projects[key].packages.length; i++) {
        stuff += `
            <div class="package">
                <p>${pckg[i]}</p>
            </div>
        `}
    entry += `
        <div class="module" id=${key}>
            <div class="titleParent">
                <h5 class="title">${grantL.projects[key].name}</h5>
                <p class="dates">${grantL.projects[key].dates}</p>
            </div>
            ${construction}
            <p class="description">${grantL.projects[key].description}</p>
                <div class="packages">
                    ${stuff}
                </div>
            <a id="${int}" class="link" href=${grantL.projects[key].livePage} target="_blank" rel="noreferrer noopener"></a>

            <div class="buttonParent" id="buttons${int}">
                <div class="topbottom">
                    <button class="controllerButtons" id="Ybutton" >Y</button>
                </div>
                <div class="middle">
                    <button class="controllerButtons" id="Xbutton">X</button>
                    <button class="controllerButtons" id="Bbutton">B</button>
                </div>
                <div class="topbottom">
                    <a class="controllerButtons" id="Abutton" href=${grantL.projects[key].livePage} target="_blank" rel="noreferrer noopener">A</a>
                </div>
            </div>
        </div>
`
int += 1;
}

for (let key in grantL.projects) {
    buildEntries(key);
}

export default entry;