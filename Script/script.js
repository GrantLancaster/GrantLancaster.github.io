import grantL from "./modules/info.js";
import homeScreen from "./modules/homeScreen.js";

const body = document.querySelector("body");
body.innerHTML =`
<div id="particles-js"></div>

<header>
    <div id="name">
        <p class="filled" id="firstName">Grant</p>
        <hp class="stroke" id="lastName">Lancaster</p>
    </div>
    <p id="subHeader">Developer | Designer | <span id="Abutton" class="controllerButtons">A</span> <span id="Bbutton" class="controllerButtons">B</span> <span id="Xbutton" class="controllerButtons">X</span> <span id="Ybutton" class="controllerButtons">Y</span> Enthusiast</p>
</header>
${homeScreen}

`
