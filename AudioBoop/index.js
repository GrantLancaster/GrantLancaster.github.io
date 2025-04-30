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
  gradient: {
    active: false,
    r_decrement: 0,
    g_decrement: 0,
    b_decrement: 0,
  },
  color: {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  },
}

const startButton = document.querySelector("#start");
startButton.addEventListener("click", ()=>{
  data.running = true;
  if (!data.initialized) {
    initialize();
    data.initialized = true;
  }
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
});

const gradient_box = document.querySelector("#gradient");
gradient_box.addEventListener("change", (e)=>{
  if (e.target.checked) {
    data.gradient.active = true;
  } else {
    data.gradient.active = false;
  }
});

const partition_box = document.querySelector("#partitions");
partition_box.addEventListener("change", (e)=>{
  data.partitions = e.target.value || 16;
})


class Circle {
  constructor(x,y,radius, angle, color, id) {
    this.id = id;
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
    this.check_boundries();
    this.move();
    this.increase_radius();
    this.draw();
  }
  move() {
    this.angle += 1;
    this.dist += 0.2;
    this.y = canvas.height/2 + (this.dist * this.direction) * Math.cos( (this.angle*Math.PI)/180 );
    this.x = canvas.width/2 + this.dist * Math.sin( (this.angle*Math.PI)/180 );
  }
  increase_radius() {
    //this.radius += 0.005;
    //this.radius += 0.002;
  }
  check_boundries() {
    if (this.dist > 300) {
      this.dist = 0;
      if (this.id % 2 == 0) {
        this.direction *= -1;
      }
    }
  }
}

function reroll_colors() {
  data.color.r = Math.floor(Math.random() * 255);
  data.color.g = Math.floor(Math.random() * 255);
  data.color.b = Math.floor(Math.random() * 255);
}

function initialize() {
  let increment = 360 / data.partitions;
  data.gradient.r_decrement = Math.floor(data.color.r / data.partitions);
  data.gradient.g_decrement = Math.floor(data.color.g / data.partitions);
  data.gradient.b_decrement = Math.floor(data.color.b / data.partitions);

  for (let shape=0; shape<data.partitions; shape++) {
    if (!data.gradient.active) {
      reroll_colors();
    } else {
      data.color.r += data.gradient.r_decrement * shape;
      data.color.g += data.gradient.g_decrement * shape;
      data.color.b += data.gradient.b_decrement * shape;
    }
    const circle = new Circle(
      canvas.width/2,
      canvas.height/2,
      6,
      increment * shape,
      `rgb(${data.color.r},${data.color.g},${data.color.b})`,
      shape
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

