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
            //this.ctx.drawImage(img, this.Position.x, this.Position.y, this.imgSize.width, this.imgSize.height);
        };
        img.src = this.planetImage;
        this.ctx.drawImage(img, this.Position.x, this.Position.y, this.imgSize.width, this.imgSize.height);

    }
}

class Planet {
    constructor(canvas, ctx, image=undefined, xPos, yPos, zPos, imgWidth, imgHeight, planetRadius, orbitSpeed, color, orbitUsedX, orbitUsedY, orbitAngle) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.planetImage = image;
        this.radius = planetRadius;
        this.speed = orbitSpeed;
        this.color = color;
        this.image = image;
        this.moving = false;
        this.tValue = Math.PI;
        this.angle = orbitAngle;
        this.imgSize = {
            width: imgWidth,
            height: imgHeight
        }
        this.orbitUsed = {
            x: orbitUsedX,
            y: orbitUsedY
        }
        this.position = {
            x: xPos,
            y: yPos,
            z: zPos
        }
    }

    update() {
        this.draw();
        this.move();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    move() {
        /*
        Ellipse Parametric equations with off-axis rotation:
        x = (X-AxisRadius)cos(range)cos(rotationAngle) - (Y-axisRadius)sin(range)sin(rotationAngle) + horizontalShift
        y = (Y-AxisRadius)cos(range)sin(rotationAngle) + (Y-axisRadius)sin(range)cos(rotationAngle) + verticalShift
        */
        this.moving = true;
        if (this.moving == true) {
            this.position.x = (Math.cos(this.tValue) * this.orbitUsed.x * Math.cos(this.angle) - this.orbitUsed.y * Math.sin(this.tValue) * Math.sin(this.angle)) + (drawSpace.size.width/2);
            this.position.y = (Math.sin(this.tValue) * this.orbitUsed.y * Math.cos(this.angle) + this.orbitUsed.x * Math.cos(this.tValue) * Math.sin(this.angle)) + (drawSpace.size.height/2);
            this.tValue += this.speed * Math.PI;
        } else {
            this.position.x -= 1;
            this.position.y -= 1;
        }
    }
}

const drawSpace = new Canvas(canvas, ctx, canvas.offsetWidth, canvas.offsetHeight);

const orbit1Front = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.4, drawSpace.size.width * 0.05, 0, 0, Math.PI, "gold");
const orbit1Back = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.4, drawSpace.size.width * 0.05, 0, Math.PI, Math.PI * 2, "gold");

const orbit2Front = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.2, drawSpace.size.width * 0.02, 0, 0, Math.PI, "gold")
const orbit2Back = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.2, drawSpace.size.width * 0.02, 0, Math.PI, Math.PI * 2, "gold");

const orbit3Front = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.3, drawSpace.size.width * 0.03, -Math.PI/6, 0, Math.PI, "gold")
const orbit3Back = new Orbits(canvas, ctx, drawSpace.size.width, drawSpace.size.height, drawSpace.size.width *0.3, drawSpace.size.width * 0.03, -Math.PI/6, Math.PI, Math.PI * 2, "gold");
// Orbit Attributes: (canvas, ctx, xPos, yPos, xRadius, yRadius, rotation, sAngle, eAngle, color, orbitUsedX, orbitUsedY)

const logo = new LogoStar(canvas, ctx, "images/Logo.png", drawSpace.size.width, drawSpace.size.height, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.1);

const planet1 = new Planet(canvas, ctx, undefined, (drawSpace.size.width/2) /*- orbit1Front.radii.xRad*/, orbit1Front.position.y, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.05, 0.002, "orange", orbit1Front.radii.xRad, orbit1Front.radii.yRad, orbit1Front.rotation);
const planet2 = new Planet(canvas, ctx, undefined, (drawSpace.size.width/2) /*- orbit2Front.radii.xRad*/, orbit3Front.position.y, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.03, 0.004, "green", orbit2Front.radii.xRad, orbit2Front.radii.yRad, orbit2Front.rotation);
const planet3 = new Planet(canvas, ctx, undefined, (drawSpace.size.width/2) /*- orbit2Front.radii.xRad*/, orbit3Front.position.y, 100, drawSpace.size.width * 0.2, drawSpace.size.width * 0.2, drawSpace.size.width * 0.03, 0.003, "red", orbit3Front.radii.xRad, orbit3Front.radii.yRad, orbit3Front.rotation);
//constructor(canvas, ctx, image=undefined, xPos, yPos, zPos, imgWidth, imgHeight, planetRadius, orbitSpeed, color, orbitUsedX, orbitUsedY, orbitAngle) {

function onReload() {
    window.location.reload();
}

function animate() {
    drawSpace.resize();

    orbit1Back.draw();
    orbit2Back.draw();
    orbit3Back.draw();
    
    logo.update();

    orbit1Front.draw();
    orbit2Front.draw();
    orbit3Front.draw();

    planet3.update();
    planet2.update();
    planet1.update();

    window.requestAnimationFrame(animate);

}

window.addEventListener("resize", drawSpace.resize);
window.addEventListener("resize", onReload);
window.addEventListener("click", (e) => {
    console.log("I clicked the orange planet");
})

animate();