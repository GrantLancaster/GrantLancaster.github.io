const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Canvas {
    constructor(canvas, ctx, width, height) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = {
            width: width,
            height: height
        }

        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
    }

    resize() {
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        if (window.devicePixelRatio > 1) {
            this.canvas.width = canvas.clientWidth * 2;
            this.canvas.height = canvas.clientHeight * 2;
            this.ctx.scale(2,2);
        } else {
            this.canvas.width = this.size.width;
            this.canvas.height = this.size.height;
        }
    }
}

class Orbits {
    constructor(canvas, ctx, xPos, yPos, xRadius, yRadius, rotation, sAngle, eAngle, color, ) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.rotation = rotation;
        this.color = color;
        this.angles ={
            start: sAngle,
            end: eAngle 
        }
        this.radii = {
            xRad: xRadius,
            yRad: yRadius
        }
        this.position = {
            x: xPos / 2, //use the Canvas width
            y: yPos / 2 //Use the Canvas height
        }
    }

    draw() {
        this.ctx.lineWidth = 5;
        this.ctx.globalAlpha = 0.3;
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.ellipse(this.position.x, this.position.y, this.radii.xRad, this.radii.yRad, this.rotation, this.angles.start, this.angles.end);
        this.ctx.stroke();
        this.ctx.globalAlpha = 1.0;
        //this.ctx.fill()
    }
}

class Planet {
    constructor(canvas, ctx, image=undefined, xPos, yPos, zPos, imgWidth, imgHeight, radius) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.planetImage = image;
        this.radius = radius;
        this.color = "red";
        this.image = image;
        this.imgSize = {
            width: imgWidth,
            height: imgHeight
        }
        this.logoPosition = {
            x: (xPos / 2) - (0.5 * this.imgSize.width),
            y: (yPos / 2) - (0.5 * this.imgSize.height),
        }
        this.position = {
            x: xPos,
            y: yPos,
            z: zPos
        }
    }

    draw() {
        if (this.image != undefined) {
        const img = new Image();
        img.onload = () => {
            this.ctx.fillStyle = this.color; 
            this.ctx.fillRect(this.logoPosition.x, this.logoPosition.y, this.imgSize.width, this.imgSize.height); //shows the box of the image
            this.ctx.drawImage(img, this.logoPosition.x, this.logoPosition.y, this.imgSize.width, this.imgSize.height);
        };
    
        img.src = this.planetImage;
    } else {
        this.ctx.beginPath();
        this.ctx.fillStyle = "orange";
        this.ctx.arc(this.position.x/2.5, this.position.y/2.5, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    }
}

//canvas.width = 1500;
//canvas.height = 1000

const drawSpace = new Canvas(canvas, ctx, canvas.offsetWidth, canvas.offsetHeight);
const logo = new Planet(canvas, ctx, "images/Logo.png", drawSpace.size.width, drawSpace.size.height, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.1);
const plane = new Planet(canvas, ctx, undefined, drawSpace.size.width, drawSpace.size.height, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.05)
const orbit1Front = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.4, drawSpace.size.width * 0.05, 0, 0, Math.PI, "gold");
const orbit1Back = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.4, drawSpace.size.width * 0.05, 0, Math.PI, Math.PI * 2, "gold");

function onReload() {
    window.location.reload();
}

function animate() {
    drawSpace.resize();
    logo.draw();
    orbit1Front.draw();
    orbit1Back.draw();
    plane.draw();
}

const planetData = orbit1Front.ctx.getImageData(0, 0, canvas.width, canvas.height);
console.log(planetData);

window.addEventListener("resize", drawSpace.resize);
window.addEventListener("resize", onReload);

animate();