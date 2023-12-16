import grantL from "./modules/info.js";

const body = document.querySelector("body");
body.innerHTML =`
<div id="particles-js"></div>
<header>
    <div class="header">
    <div id="name">
        <h5 class="filled">Grant</h5>
        <h5 class="stroke">Lancaster</h5>
    </div>
    <p>Developer   |   Designer   |   Goofball</p>
    </div>
</header>

<article class="bodyBlock"></article>

<div class="container">
    <h4 class="mainContent" id="impossibleCube">IMPOSSIBLE CUBE</h4>
    <h4 class="mainContent" id="dataDice">DATA DICE</h4>
    <h4 class="mainContent" id="nexusPlay">NEXUS PLAY</h4>
    <h4 class="mainContent" id="galaga">REALLY BAD GALAGA</h4>
    <h4 class="mainContent" id="audioTurtle">AUDIO TURTLE</h4>
    <h4 class="mainContent" id="info">ABOUT ME</h4>
</div>
`

const impossibleCube = document.querySelector("#impossibleCube");
const dataDice = document.querySelector("#dataDice");
const nexusPlay = document.querySelector("#nexusPlay");
const galaga = document.querySelector("#galaga");
const audioTurtle = document.querySelector("#audioTurtle");
const aboutMe = document.querySelector("#info");
let entries = [impossibleCube, dataDice, nexusPlay, galaga, audioTurtle];
for (let i=0; i < entries.length; i++) {
    entries[i].addEventListener("click", updatePage);
}


function updatePage(e) {
    let target = e.target.id
    let frame = document.querySelector(".bodyBlock");
    frame.innerHTML = `
    <div class="newContent">
        <div class="inviz">
        <h4 class="stroke">${grantL.projects[target].name}</h4>
        <h5 class="filled">${grantL.projects[target].dates}</h5>
        <p>${grantL.projects[target].description}</p>
        <p>Travel to live page bellow</p> 
        <h5 class="travel"><a target="_blank" rel="noreferrer noopener" href=${grantL.projects[target].livePage}>Travel</a></h5>
        
        </div>
    </div>
    `
}

