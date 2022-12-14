/*
Notes:
So this works the same as Python.
the 'constructor' is the same as the '__init__()' method
'this' acts the same as 'self'
You build things using these classes. The init() class creates the stage.
It then calls 'this.build' as a new variables which instantiates a new version 
of the circles class.

The circles class then inherits the 'stage' variable from the 'init' class
and builds a circle into it

NEXT STEPS:
Add methods that change the color of the circle
 - Use an html button and eventlisteners to do this
 - Once it works with buttons, make it work with keydown and/or keyup
 - Create a method that starts the animation, and maybe another that can stop the animation.
*/

class init {
    constructor() {
        this.stage = new createjs.Stage("demoCanvas");
        this.build = new circles(this.stage, 300, 350);
    }
}
class circles {
    constructor(stage, xPosition, yPosition) {
        this.stage = stage;
        this.newColor = "blue";
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        const circle = new createjs.Shape();
        circle.graphics.beginFill(this.newColor);
        circle.graphics.drawCircle(0,0,50);
        circle.x = this.xPosition;
        circle.y = this.yPosition;
        stage.addChild(circle);
        stage.update();
        this.justATest(circle, this.stage, this.xPosition, this.yPosition);
        //this.animateCircle(circle, stage);
    }
/*
What I'm working on now:
I need to get a keypress to either initiate a method that makes it move,
or have a class that controls how the circle moves. 
*/

    animateCircle(shape, stage) {
        createjs.Tween.get(shape, {loop: true})
            .to({alpha: 1, x: 500}, 1000, createjs.Ease.getPowInOut(4))
            .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
            .to({alpha: 1, x: 100}, 500, createjs.Ease.getPowInOut(2))
            .to({alpha: 1, y: 650}, 500, createjs.Ease.getPowInOut(2))
            .to({alpha: 1, x: 300}, 800, createjs.Ease.getPowInOut(2));
        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener("tick", stage);
        createjs.Ticker.addEventListener("tick", this.keyTest);

    }

    moveCircle(shape, stage, xPosition, yPosition) {
        this.shape = shape;
        this.stage = stage;
        this.xPos = xPosition;
        this.yPos = yPosition;
        createjs.Tween.get(shape)
            .to({x: xPosition+100}, 1000, createjs.Ease.getPowInOut(1));
        stage.update();
        console.log("key pressed");
    }

    justATest(shape, stage, xPosition, yPosition) {
        this.shape = shape;
        this.stage = stage;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener("tick", this.keyTest);
    }//Closes justATest Method

    keyTest() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "w":
                    console.log("you pressed W");
                    break
                case "a":
                    console.log("you pressed A");
                    break
                case "s":
                    console.log("you pressed S");
                    break
                case "d":
                    console.log("you pressed D");
                    break
                case "ArrowUp":
                    console.log("you pressed the Up Arrow");
                    break
                case "ArrowRight":
                    console.log("you pressed the Right Arrow");
                    break
                case "ArrowDown":
                    console.log("you pressed the Down Arrow");
                    break
                case "ArrowLeft":
                    console.log("you pressed the Left Arrow");
                    break
            }
        })
    }//Closes keyTest method
}//Closes the Circles class
