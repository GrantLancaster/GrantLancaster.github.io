const lightMode = document.getElementById("light");
const darkMode = document.getElementById("dark");
const content = document.getElementById("content");
const main = document.querySelector("main");
let stop = 1

function changeLight() {
  document.body.style.backgroundColor = "pink";
}
function changeDark() {
  document.body.style.backgroundColor = "#121212";
}
function spin(arrays) {

    for (let i = 0; i < arrays.length-1; i++) {
      document.getElementById(`div + ${i+1}`).style.transform = "rotate(15deg)";

    }
  
  content.removeEventListener("click", buildTunnel);
}
function buildTunnel() {
  const array = [main];
  
  for (let count = 0; count < 50; count++) {
    const newBox = document.createElement("div");
    array.push(newBox);
    array[count].setAttribute("id" ,`div + ${count+1}`);
    array[count].appendChild(array[count+1]);
    document.getElementById(`div + ${count+1}`).style.border = "1px solid Green";


  }
  spin(array);
}

lightMode.addEventListener("click", changeLight);
darkMode.addEventListener("click", changeDark);
content.addEventListener("click", buildTunnel);
