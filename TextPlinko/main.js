import './style.css'

class Circle {
  constructor (ctx, x, y, radius, gravity) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.gravity = gravity;
    this.color = "blue";
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, 360, false);
  }
  update() {
    this.x += this.gravity
  }
}

const body = document.querySelector("body");

const addCanvas = document.createElement("canvas")
body.appendChild(addCanvas);

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let image = new Image()
image.src="./images/Scan 5.jpeg";
image.height = image.height;
image.width = image.width;
console.log(image.height, image.width);

canvas.height = 1200;
canvas.width = 800;

let heightRatio = canvas.height / image.height;
let widthRatio = canvas.width / image.width;
let ratio = Math.min(widthRatio, heightRatio);
let centerShift_x = ( canvas.width - image.width*ratio ) / 2;
let centerShift_y = ( canvas.height - image.height*ratio ) / 2;
const circle = new Circle(context,200,30,15,0.5);


image.onload = function () {
  context.drawImage(image,0,0,image.width, image.height,
    centerShift_x, centerShift_y, image.width*ratio, image.height*ratio);
    console.log("loaded");
    const data = context.getImageData(0,0,image.width,image.height).data;
    const imageMap = buildMap(data);
    handleMap(imageMap);
  }

function buildMap(data) {
    let tracker = 0;
    const imageMap = []
    for (let h = 0; h < image.height; h++) {
      const pixelRow = []
      for (let w = 0; w < image.width; w++) {
        let pixel = [];
        for (let i = tracker; i < tracker+4; i++) {
          pixel.push(data[i]);
        }
        pixelRow.push(pixel);
        tracker+=4;
      }
      imageMap.push(pixelRow);
    }
  return imageMap
}

function handleMap(map) {
  console.log(map);
  const condensedMap = [];
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const point = [];
      const r = map[y][x][0];
      const g = map[y][x][1];
      const b = map[y][x][2];
      const a = map[y][x][3];
      if (r<=150 && g<=150 && b<=150) {
        point.push(x,y,r,g,b,a);
        condensedMap.push(point);
      //buildBlock(x,y,r,g,b,a);
      }
      // else {
      //   buildBlock(x,y,255,0,0,255);
      // }
    }
  }
  //console.log(condensedMap);
  drawCondensed(condensedMap);
}

function drawCondensed(array) {
  for (let p = 0; p < array.length; p++) {
    const x = array[p][0];
    const y = array[p][1];
    const r = array[p][2];
    const g = array[p][3];
    const b = array[p][4];
    const a = array[p][5];
    buildBlock(x,y,255,0,0,a);
  }
  circle.draw();
}

function buildBlock(x,y,r,g,b,a) {
  context.fillStyle = `rgba(${r},${g},${b},${a})`;
  context.beginPath();
  context.rect(x,y,1,1);
  context.fill();
}


function animate() {

  window.requestAnimationFrame(animate);
}

function draw() {
  
}
