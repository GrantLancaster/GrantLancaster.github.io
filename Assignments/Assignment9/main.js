const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const theaterBox = document.querySelector(".full-img");



/* Declaring the array of image filenames */
const picArray = ["images/alexsander.jpg","images/francesco.jpg","images/hobbiton.jpg","images/johannes.jpg","images/podnar.jpg"];
/* Declaring the alternative text for each image file */
const altArray = ["Just an eyeball","sea foam","Flowers","Egyptian hyroglyphs","butterfly"];
/* Looping through images */

function swapImage(val) {
    displayedImage.src = val.target.src;
    displayedImage.alt = val.target.alt;
}
function darkLight() {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

for (let i = 0; i <= 4; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', picArray[i]);
newImage.setAttribute('alt', altArray[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener("click", swapImage);

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", darkLight);



