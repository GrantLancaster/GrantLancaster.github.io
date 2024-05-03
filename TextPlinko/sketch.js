class Cir {
  constructor() {
    this.x = Math.floor(Math.random()*1080);
    this.y = 50;
    this.width = 13;
    this.height = 11;
    this.color = {
      r: 0,
      g: 0,
      b: 0
    }
    this.gravity = 0.05;
    this.velocity = {
      x: 1,
      y: 0
    },
    this.collision = {
      v: true,
      h: true
    },
    this.collisionIntervals = {
      vertical: 50,
      horizontal: 10
    }
    this.time = {
      horizontal: {
        start: 0,
        end: 0
      },
      vertical: {
        start: 0,
        end: 0
      },
      audio: {
        start: 0,
        end:0
      }
    }
    this.audioInterval = 10;
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
    this.velocity.x -= 0.001;
    if (this.y > img.height+10) {
      this.y=-1
    }else if (this.y < -2) {
      this.y=img.height
    }
    if (this.x > img.width) {
      this.velocity.x = -this.velocity.x;
    }else if (this.x < 0) {
      this.velocity.x = -this.velocity.x;
    }
  }
  collide() {
    for (let deg=0; deg<=360; deg++) {
      const radian = deg * (Math.PI/180);
      this.data = img.get((this.x+((this.width/2)*Math.cos(radian))),(this.y+((this.height/2)*Math.sin(radian))));
      
      //Checks for Vertical collisions
      if (this.collision.v) {
        if (this.data[3]>=200) {
          this.time.vertical.start = frameCount
          this.velocity.y = -(this.velocity.y)/1.5;

          this.time.audio.start = frameCount;
          //song2.play()
          song2.jump(random(song2.duration()));

          this.collision.v = false;
        }
      }

      // Checks For Horizontal collisions
      if ((deg==0 || deg==180)) {
        if (this.collision.h) {
          if (this.data[3]>=200) {
            this.time.horizontal.start = frameCount
            this.velocity.x = -(this.velocity.x)/1.01;

            this.time.audio.start = frameCount
            //song2.play();
            song2.jump(random(song2.duration()));

            this.collision.h = false;
          }
        }
     }

     // Resets the Collision Timer After The Set Period of Time
      this.time.vertical.end = frameCount;
      this.time.horizontal.end = frameCount;
      this.time.audio.end = frameCount;
        if (this.time.vertical.end - this.time.vertical.start >=this.collisionIntervals.vertical) {
          this.collision.v = true;
        }
        if (this.time.horizontal.end - this.time.horizontal.start >=this.collisionIntervals.horizontal) {
          this.collision.h = true;
        }
        if (this.time.audio.end - this.time.audio.start >= this.audioInterval) {
          //song2.stop()
        }
    }
  }
}

const circles = []
const circle = new Cir;
circles.push(circle);
let img
/*
const spawnBall = document.querySelector("#spawnBall");
spawnBall.addEventListener("click", ()=>{
  console.log("ball Spawned");
  const ball = new Cir
  Cir.x = 1 + Math.floor(Math.random()*4);
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
*/
let song, song2;
function preload() {
  img = loadImage("./images/Scan5ShrunkRed.png");
  overlay = loadImage("./images/Scan5Shrunk.png");

  // ADD FILE PATHS FOR SONGS HERE
  //song = loadSound();
  song2 = loadSound("./audio/TimeToTalk,Avaya&RYVM-FoundYou[NCSRelease].mp3");
}

function setup() {
  frameRate(60);
  song2.play();
  song2.loop();
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (let i=0; i < img.pixels.length; i+=4) {
    if (img.pixels[i]>200 && img.pixels[i+1]<1 && img.pixels[i+2]<1) {
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
  image(overlay,0,0);
  circles.forEach((ball)=>ball.update()); 

}

