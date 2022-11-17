/*
11/16/22
What To Do Next:
- make the square not be a solid line, but a block
- work on some gravity/velocity to the square

*/



const canvas = document.getElementById("#canvas");
const ctx = canvas.getContext("2d");

class GameBoard {
    constructor(canvas, ctx, width, height, color) {
        this.canvas = canvas;
        this.ctx = ctx
        this.size = {
            width: width,
            height: height
        }
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

class Player {
    constructor(canvas, ctx, posX, posY, color) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.color = color;
        this.position = {
            x: posX,
            y: posY
        }
        this.size = {
            width: 100,
            height: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.dimensions = {
            bottom: this.position.y + this.size.height
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        if (this.dimensions.bottom < playArea.size.height) {
            this.position.y++;
        }
    }
}

const playArea = new GameBoard(canvas, ctx, 500, 700, "pink");
const player = new Player(canvas, ctx, 0, 0, "blue");

function animate() {
    window.requestAnimationFrame(animate);
    player.draw();
}
animate();