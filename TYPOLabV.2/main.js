import { header } from "./src/Script/header.js";
import { pageContent } from "./src/Script/pageContent.js";
import { footer } from "./src/Script/footer.js";

const body = document.querySelector("body");
body.appendChild(header);
body.appendChild(pageContent);//Page content is where everything is held. Visit pageContent.js to see it all.
body.appendChild(footer);
