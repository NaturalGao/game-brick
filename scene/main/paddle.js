class Paddle {
    constructor(game) {
        this.game = game
        this.image = this.game.imgByName("paddle")
        this.x = this.game.canvas.width / 2 - this.image.width / 2
        this.y = this.game.canvas.height - this.image.height - 5
        this.speed = 10
    }
    move(x) {
        if (x < 0) {
            x = 0
        }
        if (x > this.game.canvas.width - this.image.width) {
            x = this.game.canvas.width - this.image.width
        }
        this.x = x
    }
    moveLeft = () => {
        this.move(this.x - this.speed)
    }
    moveRight() {
        this.move(this.x + this.speed)
    }
}
