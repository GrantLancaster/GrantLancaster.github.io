const canvas = document.getElementById("myCanvas");
canvas.height = Math.max(window.innerHeight, window.innerWidth);
canvas.width = canvas.height;
canvas.style.top = `${Math.max(window.innerHeight, window.innerWidth) / -4}px`;

const ctx = canvas.getContext("2d");

const data = {
  initialized: false,
  shapes: [],
  running: true,
  partitions: 16,
  alternate_direction: false,
  rotating_canvas: false,
  canvas_rot_increment: 1,
}

const startButton = document.querySelector("#start");
startButton.addEventListener("click", ()=>{
  data.running = true;
  if (!data.initialized) {initialize(); data.initialized = true;}
  animate();
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", ()=>{
  data.running = false;
});

const alt_direction = document.querySelector("#alt_direction");
alt_direction.addEventListener("change", (e)=>{
  if (e.target.checked) {
    data.alternate_direction = true;
  } else {
    data.alternate_direction = false;
  }
});

const canvas_rot = document.querySelector("#canvas_rotation");
canvas_rot.addEventListener("change", (e)=>{
  if (e.target.checked) {
    data.rotating_canvas = true;
  } else {
    data.rotating_canvas = false;
  }
})


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
    //this.check_boundries();
    this.move();
    this.increase_radius();
    this.draw();
  }
  move() {
    this.angle += 1;
    this.dist += 0.2;
    this.y = canvas.height/2 + (this.dist *this.direction) * Math.cos( (this.angle*Math.PI)/180 );
    this.x = canvas.width/2 + this.dist * Math.sin( (this.angle*Math.PI)/180 );
  }
  increase_radius() {
    //this.radius += 0.005;
    this.radius += this.dist/10000
  }
  check_boundries() {
    if (this.x > canvas.width + this.radius) {
      this.x = 0 ;
    } else if (this.x < 0 - this.radius) {
      this.x = canvas.width;
    }
    if (this.y > canvas.height + this.radius) {
      this.y = 0;
    } else if (this.y < 0 - this.radius) {
      this.y = canvas.height;
    }
  }
}

function initialize() {
  for (let shape=0; shape<data.partitions; shape++) {
    let increment = 360 / data.partitions;
    const circle = new Circle(
      canvas.width/2,
      canvas.height/2,
      6,
      increment * shape,
      `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    );

    if (data.alternate_direction) {
      if (shape%2 ==0 ) {
        circle.direction = -1;
      }
    }
    data.shapes.push(circle);
  }
}

function animate() {
  for ( let obj of data.shapes) {
    obj.update();
  }

  if (data.rotating_canvas) {
    canvas.style.transform = `rotate(${data.canvas_rot_increment}deg)`;
    data.canvas_rot_increment += 1;
  }

  if (data.running) {
    requestAnimationFrame(animate);
  }
}

