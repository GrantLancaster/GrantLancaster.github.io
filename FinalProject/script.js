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

class LogoStar {
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
        this.Position = {
            x: (xPos / 2) - (0.5 * this.imgSize.width),
            y: (yPos / 2) - (0.5 * this.imgSize.height),
        }
    }

    update() {
        this.draw();
    }
    draw() {
        const img = new Image();
        img.onload = () => {
            this.ctx.fillStyle = this.color; 
            this.ctx.fillRect(this.Position.x, this.Position.y, this.imgSize.width, this.imgSize.height); //shows the box of the image
            this.ctx.drawImage(img, this.Position.x, this.Position.y, this.imgSize.width, this.imgSize.height);
        };
        img.src = this.planetImage;
    }
}

class Planet {
    constructor(canvas, ctx, image=undefined, xPos, yPos, zPos, imgWidth, imgHeight, planetRadius, orbitSpeed) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.planetImage = image;
        this.radius = planetRadius;
        this.speed = orbitSpeed;
        this.color = "red";
        this.image = image;
        this.moving = false;
        this.tValue = Math.PI;
        this.imgSize = {
            width: imgWidth,
            height: imgHeight
        }
        this.position = {
            x: xPos,
            y: yPos,
            z: zPos
        }
        this.startPos = {
            x: xPos,
            y: yPos
        }
    }

    update() {
        this.draw();
        //this.checkPlanet();
        this.move();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "orange";
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    checkPlanet() {
        /* equation of Ellipse
         x^2    y^2
         ---- + ---- = radius
        xRad^2  yRad^2
        */
       if (this.position.x <= this.startPos.x) {
            this.moving = true;
       }else if (this.position.x  >= this.startPos.x + 2*orbit1Front.radii.xRad) {
            this.moving = false;
       }
    }
    move() {
        this.moving = true;
        if (this.moving == true) {
            this.position.x = (Math.cos(this.tValue) * orbit1Front.radii.xRad) + (drawSpace.size.width/2);
            this.position.y = (Math.sin(this.tValue) * orbit1Front.radii.yRad) + (drawSpace.size.height/2);
            this.tValue += this.speed * Math.PI;
        } else {
            this.position.x -= 1;
            this.position.y -= 1;
        }
    }
}

//canvas.width = 1500;
//canvas.height = 1000

const drawSpace = new Canvas(canvas, ctx, canvas.offsetWidth, canvas.offsetHeight);

const orbit1Front = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.4, drawSpace.size.width * 0.05, 0, 0, Math.PI, "gold");
const orbit1Back = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.4, drawSpace.size.width * 0.05, 0, Math.PI, Math.PI * 2, "gold");
// Orbit Attributes: (canvas, ctx, xPos, yPos, xRadius, yRadius, rotation, sAngle, eAngle, color)

const logo = new LogoStar(canvas, ctx, "images/Logo.png", drawSpace.size.width, drawSpace.size.height, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.1);
const plane = new Planet(canvas, ctx, undefined, (drawSpace.size.width/2) /*- orbit1Front.radii.xRad*/, orbit1Front.position.y, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.05, 0.002)
// planet Attributes: (canvas, ctx, image=undefined, xPos, yPos, zPos, imgWidth, imgHeight, radius

function onReload() {
    window.location.reload();
}

function animate() {
    drawSpace.resize();
    orbit1Back.draw();
    logo.update();

    orbit1Front.draw();
    plane.update();

    window.requestAnimationFrame(animate);

}

//const planetData = orbit1Front.ctx.getImageData(0, 0, canvas.width, canvas.height);
//console.log(planetData);

window.addEventListener("resize", drawSpace.resize);
window.addEventListener("resize", onReload);

animate();