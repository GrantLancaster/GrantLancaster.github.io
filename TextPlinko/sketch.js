class Cir {
  constructor() {
    this.x = Math.floor(Math.random()*3400);
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.color = {
      r: Math.floor(Math.random()*255),
      g: Math.floor(Math.random()*255),
      b: Math.floor(Math.random()*255)
    }
    this.gravity = 0.2;
    this.velocity = {
      x: 3,
      y: 0
    },
    this.collision = {
      v: true,
      h: true
    },
    this.collisionIntervals = {
      vertical: 100,
      horizontal: 250
    }
    this.time = {
      horizontal: {
        start: 0,
        end: 0
      },
      vertical: {
        start: 0,
        end: 0
      }
    }
    this.background = true;
  }
  draw() {
    fill(this.color.r, this.color.g, this.color.b)
    ellipse(this.x,this.y,this.width,this.height);
  }
  update() {
    this.draw();
    this.move();
    this.collide();
  }
  move() {
    this.y += this.velocity.y
    this.x += this.velocity.x
    this.velocity.y += this.gravity;
    this.velocity.x -= 0.001
    if (this.y > img.height) {
      this.y=-10
      this.color.r = Math.floor(Math.random()*255);
      this.color.g = Math.floor(Math.random()*255);
      this.color.b = Math.floor(Math.random()*255);
    }
    if (this.x > img.width+10) {
      this.x=-10
    }else if (this.x < -20) {
      this.x = img.width
    }
  }
  collide() {
    this.dataV = img.get(this.x, this.y+25);
    this.dataH = img.get(this.x+25, this.y);
    if (this.collision.v) {
      if (this.dataV[3]>=200) {
        this.time.vertical.start = frameCount
        this.velocity.y = -7;
        this.collision.v = false;
      }
    }
    if (this.collision.h) {
      if (this.dataH[3]>=200) {
        this.time.horizontal.start = frameCount
        this.velocity.x = -this.velocity.x;
        this.collision.h = false;
      }
    }
    this.time.vertical.end = frameCount;
    this.time.horizontal.end = frameCount;
      if (this.time.vertical.end - this.time.vertical.start >=this.collisionIntervals.vertical) {
        this.collision.v = true;
      }
      if (this.time.horizontal.end - this.time.horizontal.start >=this.collisionIntervals.horizontal) {
        this.collision.h = true;
      }
  }
}
const circles = []
const circle = new Cir;
circles.push(circle);
let img
const spawnBall = document.querySelector("#spawnBall");
spawnBall.addEventListener("click", ()=>{
  console.log("ball Spawned");
  const ball = new Cir
  circles.push(ball);
})
const toggleBG = document.querySelector("#backgroundToggle");
toggleBG.addEventListener("click", ()=>{
  if (circle.background) {
    circle.background = false;
  } else {
    circle.background = true;
  }
})

function preload() {
  img = loadImage("./images/Scan 5.jpeg");
}

function setup() {
  frameRate(60);
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (let i=0; i < img.pixels.length; i+=4) {
    if (img.pixels[i]<150 && img.pixels[i+1]<150 && img.pixels[i+2]<150) {
      img.pixels[i+3] = 255;
    } else {
    img.pixels[i+3] = 0;
    }
  }
  img.updatePixels();
  fill(0,255,0);
}

function draw() {
  frameCount
  if (circle.background) {
    background(255);
  }
  image(img,0,0);
  circles.forEach((ball)=>ball.update()); 
}

