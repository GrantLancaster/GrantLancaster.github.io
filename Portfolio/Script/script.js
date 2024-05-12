import grantL from "./modules/info.js";
import homeScreen from "./modules/homeScreen.js";
import content from "./modules/project.js";
import links from "./modules/links.js";

const body = document.querySelector("body");
body.innerHTML =`
<div id="particles-js"></div>

<div id="parent">
    <div class="leftSide">
        ${homeScreen}
        ${links}
    </div>

    <div class="rightSide">
        ${content}
    </div>
</div>

`
