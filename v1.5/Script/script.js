//import "./CSS/index.css";
import { contentParent } from "./pageContent.js";

const body = document.querySelector("body");

const particleParent = document.createElement("div");
particleParent.id = "particles-js";
body.appendChild(particleParent);

body.appendChild(contentParent);



