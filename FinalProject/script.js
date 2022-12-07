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
}

class Orbits {
    constructor(canvas, ctx, xPos, yPos, xRadius, yRadius, rotation, sAngle, eAngle, color) {
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
        console.log("check 1: start method");
        this.ctx.beginPath();
        this.fillstyle = this.color;

        this.ctx.ellipse(this.position.x, this.position.y, this.radii.xRad, this.radii.yRad, this.rotation, this.angles.sAngle, this.angles.eAngle);
        this.ctx.fill();
        console.log("check 2: end method");
    }
}

class Planet {
    constructor(canvas, ctx, image=undefined, xPos, yPos, zPos, imgWidth, imgHeight, radius) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.planetImage = image;
        this.radius = radius;
        this.color = "red";
        this.imgSize = {
            width: imgWidth,
            height: imgHeight
        }
        this.position = {
            x: (xPos / 2) - (0.5 * this.imgSize.width),
            y: (yPos / 2) - (0.5 * this.imgSize.height),
            z: zPos
        }
    }

    draw() {
        const img = new Image();
        img.onload = () => {
            this.ctx.fillStyle = this.color; 
            this.ctx.fillRect(this.position.x, this.position.y, 200, 200); //shows the box of the image
            this.ctx.drawImage(img, this.position.x, this.position.y, this.imgSize.width, this.imgSize.height);
        };
        img.src = this.planetImage;
    }
}

//canvas.width = 1500;
//canvas.height = 1000

const drawSpace = new Canvas(canvas, ctx, 1500, 1000);
const logo = new Planet(canvas, ctx, "images/Logo.png", drawSpace.size.width, drawSpace.size.height, 100, 200, 200, 100);
const orbit1 = new Orbits(canvas, ctx, 0.5*drawSpace.size.width, 0.5*drawSpace.size.height, 0.75*drawSpace.size.width, 0.25*drawSpace.size.height, 0, 0, 2 * Math.PI, "red");
logo.draw();
orbit1.draw();