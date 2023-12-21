const modules = document.querySelectorAll(".link");
const buttonParents = document.querySelectorAll(".buttonParent");

const quote = document.querySelector("#quoteParent");
const leftSide = document.querySelector(".leftSide");

function makeVisible(event) {
    let num = parseInt(event.target.id);
    let button =  document.querySelector(`#buttons${num}`);
    button.style.visibility = "visible";

    button.addEventListener("mouseenter", () => {
        button.style.visibility = "visible";
    });
}

function makeInvis(event) {
    let num = parseInt(event.target.id);
    let button =  document.querySelector(`#buttons${num}`);
    button.style.visibility = "hidden";

    button.addEventListener("mouseleave", () => {
        button.style.visibility = "hidden";
    });
}

modules.forEach(function(module) {
    module.addEventListener("mouseenter", makeVisible);
    module.addEventListener("mouseleave", makeInvis);
});

function handleTitle() {
    let leftSideWidth = leftSide.clientWidth;
    let quoteWidth = quote.clientWidth;
    let calcLeft = ((leftSideWidth/2)-(quoteWidth/2));
    quote.style.left = `${calcLeft}px`;
    quote.style.top = "50%";
}
handleTitle();
window.addEventListener("resize", handleTitle);