
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
            x: 0,
            Xmax: 7,
            y: 0,
            Ymax: 7
            }
        this.sides = {
            right: this.position.x + this.size.width,
            bottom: this.position.y + this.size.height
            }
        this.acceleration = { //This is acceleration due to gravity
            x: 2,
            y: 2
            }
        this.keys ={
             ArrowUp: { //Up Arrow not pressed by default
                pressed: false
            },
            ArrowDown: {
                pressed: false
            },
            ArrowRight: {
                pressed: false
            },
            ArrowLeft: {
                pressed: false
            }
            }
        }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }//End of Draw Method

    gravity() {
        this.position.y += this.acceleration.y;
        this.sides.bottom = this.position.y + this.size.height; //Gotta make sure you update the variable each time through the loop
        if (this.sides.bottom + this.acceleration.y < canvas.height) {
            this.acceleration.y += 1;
        } else {
            this.acceleration.y =0;
        }
    }//End of 'gravity' Method

    update() {
        //this.gravity(); //force it to have gravity
        this.move();
    }//End of 'Update' Method

    move() {
        if (this.keys.ArrowUp.pressed) {
            this.velocity.y = -(this.velocity.Ymax);
        }else if (this.keys.ArrowDown.pressed) {
            this.velocity.y = this.velocity.Ymax;
        }else if (this.keys.ArrowLeft.pressed) {
            this.velocity.x = -(this.velocity.Xmax);
        }else if (this.keys.ArrowRight.pressed) {
            this.velocity.x = this.velocity.Xmax;
        }else{
            this.velocity.x = 0;
            this.velocity.y = 0;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.keys.ArrowUp.pressed = true;
                    break;
                case "ArrowRight":
                    this.keys.ArrowRight.pressed = true;
                    break;  
                case "ArrowDown":
                    this.keys.ArrowDown.pressed = true;
                    break;
                case "ArrowLeft":
                    this.keys.ArrowLeft.pressed = true;
                    break;
            }
        })
        window.addEventListener("keyup", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.keys.ArrowUp.pressed = false;
                    break;
                case "ArrowRight":
                    this.keys.ArrowRight.pressed = false;
                    break;  
                case "ArrowDown":
                    this.keys.ArrowDown.pressed = false;
                    break;
                case "ArrowLeft":
                    this.keys.ArrowLeft.pressed = false;
                    break;
            }
        })
    } //End of 'Move' Method
    
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
