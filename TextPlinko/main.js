import './style.css'

const body = document.querySelector("body");

const addCanvas = document.createElement("canvas")
body.appendChild(addCanvas);

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let image = new Image()
image.src="./images/Scan 5.jpeg";

console.log(image.height, image.width);

canvas.height = image.height;
canvas.width = image.width;

let heightRatio = canvas.height / image.height;
let widthRatio = canvas.width / image.width;
let ratio = Math.min(widthRatio, heightRatio);
let centerShift_x = ( canvas.width - image.width*ratio ) / 2;
let centerShift_y = ( canvas.height - image.height*ratio ) / 2;


image.onload = function () {
  context.drawImage(image,0,0,image.width, image.height,
    centerShift_x, centerShift_y, image.width*ratio, image.height*ratio);
    console.log("loaded");
    let data = context.getImageData(0,0,canvas.width,canvas.height);
    console.log(data);
    // for (let w = 0; w < image.width; w++) {
    //   for (let h = 0; h < image.height; h++) {

    //   }
    // }
}