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
let newColor = "blue";

class init {
    constructor() {
        this.stage = new createjs.Stage("demoCanvas");
        this.build = new circles(this.stage, 300, 350);
    }
}
class circles {
    constructor(stage, x, y) {
        this.stage = stage;
        this.newColor = "red";
        const circle = new createjs.Shape();
        circle.graphics.beginFill(newColor);
        circle.graphics.drawCircle(0,0,50);
        circle.x = x;
        circle.y = y;
        stage.addChild(circle);
        stage.update();
    }

    //const stage = new createjs.Stage("demoCanvas");
    //const circle = new createjs.Shape();
    //stage.update();
    animateCirclel() {
        createjs.Tween.get(circle, {loop: true})
            .to({alpha: 0, x: 500}, 1000, createjs.Ease.getPowInOut(4))
            .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
            .to({alpha: 1, x: 100}, 500, createjs.Ease.getPowInOut(2))
            .to({alpha: 1, y: 650}, 500, createjs.Ease.getPowInOut(2))
            .to({alpha: 0, x: 300}, 800, createjs.Ease.getPowInOut(2));
        createjs.Ticker.setFPS(120);
        createjs.Ticker.addEventListener("tick", changeColor);
    }
}
