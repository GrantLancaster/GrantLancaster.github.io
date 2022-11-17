class GameBoard {
    constructor(canvas, width, height, color) {
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;

        this.canvas.fillStyle = color;
        this.canvas.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}