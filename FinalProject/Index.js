
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
}//end of GameBoard class

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
            x: 1,
            Xmax: 10,
            y: 1,
            Ymax: 10
            }
        this.sides = {
            right: this.position.x + this.size.width,
            bottom: this.position.y + this.size.height
            }
        this.acceleration = {
            x: 2,
            y: 2
            }
        }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    gravity() {
        this.position.y += this.acceleration.y;
        this.sides.bottom = this.position.y + this.size.height; //Gotta make sure you update the variable each time through the loop
        if (this.sides.bottom + this.acceleration.y < canvas.height) {
            this.acceleration.y += 1;
        } else {
            this.acceleration.y =0;
        }
    }
    update() {
        //this.gravity(); //force it to have gravity
    }

    arrowKeysDown() {
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.position.y -= (this.velocity.y * this.acceleration.y);
                    if (this.velocity.y < this.velocity.Ymax) {
                        this.velocity.y++;
                    } else this.velocity.y = this.velocity.Ymax;
                    break;

                case "ArrowRight":
                    this.position.x += (this.velocity.x * this.acceleration.x);
                    if (this.velocity.x < this.velocity.Xmax) {
                        this.velocity.x++;
                    } else this.velocity.x = this.velocity.Xmax;
                    break;

                case "ArrowDown":
                    this.position.y += (this.velocity.y * this.acceleration.y);
                    if (this.velocity.y < this.velocity.Ymax) {
                        this.velocity.y++;
                    } else this.velocity.y = this.velocity.Ymax;
                    break;
                
                case "ArrowLeft":
                    this.position.x -= (this.velocity.x * this.acceleration.x);
                    if (this.velocity.x < this.velocity.Xmax) {
                        this.velocity.x++;
                    } else this.velocity.x = this.velocity.Xmax;
                    break;
            }
        })
    }

    arrowKeysUp() {
        window.addEventListener("keyup", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.velocity.y = 1;
                    break;
                case "ArrowRight":
                    this.velocity.x = 1;
                    break;
                case "ArrowDown":
                    this.velocity.y = 1;
                    break;
                case "ArrowLeft":
                    this.velocity.x = 1;
                    break;
            }
        })
    }
}//end of Player class

const playArea = new GameBoard(canvas, ctx, 500, 700, "pink");
const player = new Player(canvas, ctx, 200, 300, "blue");

function animate() {
    window.requestAnimationFrame(animate);
    const whiteOut = new GameBoard(canvas, ctx, 500, 700, "pink");
    player.draw();
    player.update();
}
console.log(player.sides.bottom);
animate();
player.arrowKeysDown();
player.arrowKeysUp();
