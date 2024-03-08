import './style.css'

import { TYPOLab } from './components/info.ts'
import { header, animateHeader } from './components/header.ts';
import { returnValue } from './components/buttons.ts';
import { homePage, animateHomePage } from './components/homePage.ts';
import { footer } from './components/footer.ts';
import { profiles } from './components/people.ts';

let currentPage: HTMLDivElement = homePage;

const body = document.querySelector<HTMLBodyElement>('body')!
body.appendChild(header);
// 
body.appendChild(currentPage);
// Everything in between the header and footer will be changed when buttons are clicked
// by default it should load the homepage.
// 
body.appendChild(footer);

document.addEventListener("scroll", animateHeader);
document.addEventListener("scroll", animateHomePage);

console.log(body.children[2]);