import './style.css'

import { TYPOLab } from './components/info.ts'
import HomePage from './components/homePage.ts';
import { header, animateHeader } from './components/header.ts';
import { footer } from './components/footer.ts';

const body = document.querySelector<HTMLBodyElement>('body')!
body.appendChild(header);
// 
// Everything in between the header and footer will be changed when buttons are clicked
// by default it should load the homepage.
// 
body.appendChild(footer);

document.addEventListener("scroll", animateHeader);
