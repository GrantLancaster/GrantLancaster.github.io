import './style.css'

import { header, animateHeader } from './components/header.ts';
import { pageContent, pageContentBackground } from './components/pageContent.ts';
import { homePage } from './components/homePage.ts';
import { footer } from './components/footer.ts';



const body = document.querySelector<HTMLBodyElement>('body')!;
body.appendChild(header);
body.appendChild(pageContent); //Just container for all the page content
body.appendChild(pageContentBackground); //Background for teh content of page
body.appendChild(footer);

const bodyContent = document.querySelector<HTMLDivElement>("#pageContent")!;
bodyContent.innerHTML = homePage.outerHTML.toString();

document.addEventListener("scroll", animateHeader);

