class Player {
    constructor(canvas, ctx, posX, posY) {
        this.canvas = canvas;
        this.ctx = ctx;
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
    }
}