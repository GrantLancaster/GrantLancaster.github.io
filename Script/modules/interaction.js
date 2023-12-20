const modules = document.querySelectorAll(".link");
const buttonParents = document.querySelectorAll(".buttonParent");

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