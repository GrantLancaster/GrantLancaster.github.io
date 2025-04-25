const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
let running = true;
let partitions = 16;

const startButton = document.querySelector("#start");
startButton.addEventListener("click", ()=>{
  running = true;
  animate();
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", ()=>{
  running = false;
});


class Circle {
  constructor(x,y,radius, angle, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angle = angle;
    this.dist = 0;
    this.color = color;
    this.direction = 1
  }
  draw(x,y) {
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.arc(this.x,this.y, this.radius, 0, 2*Math.PI);
    ctx.fill();
  }
  update() {
    this.move();
    this.increase_radius();
    this.draw();
  }
  move() {
    this.angle += 1;
    this.dist += 0.2;
    this.y = window.innerHeight/2 + (this.dist *this.direction) * Math.cos( (this.angle*Math.PI)/180 );
    this.x = window.innerWidth/2 + this.dist * Math.sin( (this.angle*Math.PI)/180 );
  }
  increase_radius() {
    this.radius += 0.001;
  }
}

const shapes=[];
for (let shape=0; shape<partitions; shape++) {
  let increment = 360 / partitions;
  const circle = new Circle(
    canvas.width/2,
    canvas.height/2,
    6,
    increment * shape,
    `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  );
  if (shape%2 ==0 ) {
    circle.direction = -1;
  }
  shapes.push(circle);
}

function animate() {
  for ( let obj of shapes) {
    obj.update();
  }

  if (running) {
    requestAnimationFrame(animate);
  }
}

