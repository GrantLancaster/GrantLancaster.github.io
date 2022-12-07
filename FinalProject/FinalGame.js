
const canvas = document.getElementById("#canvas");
const ctx = canvas.getContext("2d");
const score = document.getElementById("Score");

class GameBoard {
    constructor(canvas, ctx, width, height, color, maxEnemies) {
        this.canvas = canvas;
        this.ctx = ctx
        this.makeEnemies = true;
        this.maxEnemies = maxEnemies
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
    constructor(canvas, ctx, posX, posY, color, lives) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.color = color; //Color of the player square
        this.lives = lives;
        this.playerScore = 0;
        this.position = { //The starting positions of the player 
            x: posX,
            y: posY
            }

        this.size = { //How big of a box that you want the player to be
            width: 64,
            height: 64
            }

        this.velocity = { //Speeds a which the player should move (pixels/frame)
            x: 0,
            Xmax: 7,
            y: 0,
            Ymax: 7
            }

        this.sides = {
            right: this.position.x + this.size.width,
            rightMiddle: (this.position.x + this.size.width) + (this.size.height / 2),

            left: this.position.x,
            leftMiddle: this.position.x + (this.size.height / 2),

            bottom: this.position.y + this.size.height,
            bottomMiddle: (this.position.y + this.size.height) + (this.size.width / 2),
            
            top: this.position.y,
            topMiddle: this.position.y + (this.size.width / 2)
            }

        this.corners = {
            topLeft: this.position.y,
            topRight: this.position.x + this.size.width,
            bottomLeft: this.position.y + this.size.height,
            bottomRight: this.position.x + this.size.width + this.size.height
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
    }//End of 'Draw' Method

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
        this.draw();
        this.move();
    }//End of 'Update' Method

    move() {
        //Conditions that act when an arrow key is pressed down.
        //These are what tell the player how to move, and the direction
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

        //this makes the player move when an arrow key is pressed down
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

        //This This makes the player stop moving when the arrow key is released
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

        //These keep the sides of the player updated as it moves
        this.sides.bottom = this.position.y + this.size.height;
        this.sides.top = this.position.y; 
        this.sides.left = this.position.x; 
        this.sides.right = this.position.x + this.size.width; 

        //These are the conditions that make the player hit the walls of the board
        if (this.sides.bottom > canvas.height) {
            this.position.y = canvas.height - this.size.height;
        }
        if (this.sides.top < 0) {
            this.position.y = 0;
        }
        if (this.sides.right > canvas.width) {
            this.position.x = canvas.width - this.size.width;
        }
        if (this.sides.left < 0) {
            this.position.x = 0;
        }

    } //End of 'Move' Method

}//end of Player class

class Enemy {
    constructor(canvas, ctx, xPos, yPos, width, height, color, health) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.color = color;
        this.health = health;
        this.dead = false;
        this.tick = 0
        this.score = health * 100;
        this.size ={
            width: width,
            height: height
        }
        this.position ={
            x: xPos,
            y: yPos
        }
        this.velocity ={
            x: 5,
            y: 5
        }
        this.sides ={
            top: this.position.y,
            right: this.position.x + this.size.width,
            bottom: this.position.y + this.size.height,
            left: this.position.x
        }
        this.corners ={
            topLeft: this.position.y,
            topRight: this.position.x + this.size.width,
            bottomLeft: this.position.y + this.size.height,
            bottomRight: this.position.x + this.size.width + this.size.height
        }
    }//end of 'constructor' method
    
    draw() {
        if (this.dead) {
            //this.removeEnemy();
        }else {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        } 
    }//end of 'draw' method

    move() {
        this.sides.bottom = this.position.y + this.size.height; //bottom left corner
        this.sides.top = this.position.y; //top left corner
        this.sides.left = this.position.x; //top left corner
        this.sides.right = this.position.x + this.size.width; //top right corner

        this.position.x -= this.velocity.x;

        if(this.position.x < Math.floor(0.1 * canvas.width)) {
            this.velocity.x = ((-1) * this.velocity.x);
            this.position.y += 10;
            this.tick += 1;
        }else if (this.position.x +this.size.width > Math.floor(0.9 * canvas.width)) {
            this.velocity.x = ((-1) * this.velocity.x);
            this.position.y += 10;
            this.tick += 1;
        }
    }//end of 'move' method

    spawnTick() {
        this.sides.bottom = this.position.y + this.size.height; //bottom left corner
        this.sides.top = this.position.y; //top left corner
        this.sides.left = this.position.x; //top left corner
        this.sides.right = this.position.x + this.size.width; //top right corner

        this.position.x -= this.velocity.x;

        if(this.position.x < Math.floor(0.1 * canvas.width)) {
            this.velocity.x = ((-1) * this.velocity.x);
            this.tick += 1;
        }else if (this.position.x +this.size.width > Math.floor(0.9 * canvas.width)) {
            this.velocity.x = ((-1) * this.velocity.x);
            this.tick += 1;
        }
    }

    detectHit() {
        if (bullets.length > 0) { //Checks the bullet list for content
            if (bullets[0].position.y < this.sides.bottom && bullets[0].position.y > this.sides.top
                && bullets[0].position.x > this.sides.left && bullets[0].position.x < this.sides.right) { //Checks if the bullet is inside of the enemy
                    console.log("Bullet hit the enemy");
                    bullets[0].bulletEndTrav();
                    bullets[0].clearBullet();

                    this.health -= 1;
                    if (this.health <= 0) {
                        this.dead = true;
                        player.playerScore += this.score;
                        score.innerHTML = "Score: " + player.playerScore;

                    }
            } 
        }
    }//end of 'detectHit' method

    hitPlayer() {
        if (player.corners.topLeft < this.corners.bottomLeft < player.corners.bottomLeft && player.corners.topLeft < this.corners.bottomLeft < player.corners.topRight
            || player.corners.topLeft < this.corners.bottomRight < player.corners.bottomLeft && player.corners.topLeft < this.corners.bottomRight < player.corners.topRight
            || player.corners.topLeft < this.corners.topLeft < player.corners.bottomLeft && player.corners.topLeft < this.corners.topLeft < player.corners.topRight
            || player.corners.topLeft < this.corners.topRight < player.corners.bottomLeft && player.corners.topLeft < this.corners.topRight < player.corners.topRight
            ) {
                console.log("enemy hit the player");
            }
    }

    update() {
        if (this.dead != true) {
        this.draw();
        this.move();
        this.detectHit();
        //this.hitPlayer();
        }
    }//end of 'update' method
}//end of 'Enemy' class

class Bullet {
    constructor(canvas, ctx, width, height, color) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.color = color;
        this.size = {
            width: width,
            height: height
        }
        this.position ={
            x: player.position.x + (0.5 * player.size.width) - (Math.floor(0.5 * this.size.width)),
            y: player.position.y - (Math.floor(1.2 * this.size.height))
        }
        this.velocity ={
            x: 0,
            y: 15,
            confirm: true
        }
        this.damage = 5;
        this.bulletCount = 1;
    }//end of 'constructor' method

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height); 
        this.bulletTravel();   
    }// end of 'draw' method

    update() {
        this.tick = 0
        if (this.tick == 0) {
            this.draw();
            this.tick + 1; 
        }
        if (this.position.y < 0) {
            this.clearBullet();
        }
    }//end of 'update' method

    bulletTravel() {
        if (this.velocity.confirm) {
            this.position.y -= this.velocity.y;
        }
    }//end of 'bulletTravel' method

    bulletEndTrav() {
        this.velocity.confirm = false;
        if (this.velocity.confirm != true) {
            this.velocity.y = 0;
        }
    }//End of 'bulletEndTrav' method

    clearBullet() {
        this.ctx.clearRect(this.position.x, this.position.y, this.size.width, this.size.height);
        bullets.splice(0,1);
    }//End of 'clearBullet' method
}


//----------Non-class code/Game Initialization-----------//
const playArea = new GameBoard(canvas, ctx, (64 * 8), (64 * 12), "pink", 10);
const player = new Player(canvas, ctx, 200, 600, "blue", 3);
const alien = new Enemy(canvas, ctx, 200, 100, 64, 64, "green", 5);
const fps = 120;

const bullets = [];

const enemies = [];
enemies.push(alien);

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case " ":
            console.log("animate function bullet flag");
            bullets.push(new Bullet(canvas, ctx, 7, 16, "red"));
            console.log(bullets);
    }
})

function animate() {
    const whiteOut = new GameBoard(canvas, ctx, canvas.width, canvas.height, "pink");
    
    player.update();
    
    enemies.forEach((alien) => {alien.update()}); //updates all the enemies on screen
    if (enemies[enemies.length-1].tick >= 2 && playArea.makeEnemies) { //Spawns Enemies into the playarea
        enemies.push(new Enemy(canvas, ctx, Math.floor((canvas.width * Math.random())), Math.floor((canvas.height * 0.15) * Math.random()), 64, 64, "orange", Math.floor(15 * Math.random())))
        enemies[enemies.length-1].tick = 0;
    }
    if (enemies.length >= playArea.maxEnemies) { //if true, stops enemy spawning in play area
        playArea.makeEnemies = false;
    }

    bullets.forEach((bullet) => {bullet.update()});

    setTimeout(() => {
        window.requestAnimationFrame(animate);
    }, 1000 / fps);
}

animate();
