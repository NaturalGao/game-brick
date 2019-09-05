class Ball {
    constructor(game, paddle) {
        this.game = game
        this.paddle = paddle
        this.image = game.imgByName("ball")
        this.x =
            this.paddle.x + this.paddle.image.width / 2 - this.image.width / 2
        this.y = this.paddle.y - this.image.height
        this.speedX = 10
        this.speedY = 10
        this.fired = false
    }
    move() {
        if (this.fired) {
            if (
                this.x < 0 ||
                this.x > this.game.canvas.width - this.image.width
            ) {
                this.speedX = -this.speedX
            }
            if (this.y < 0 || this.y > this.game.canvas.height) {
                this.speedY = -this.speedY
            }

            this.x += this.speedX
            this.y += this.speedY
        } else {
            this.x =
                this.paddle.x +
                this.paddle.image.width / 2 -
                this.image.width / 2
            this.y = this.paddle.y - this.image.height
        }
    }

    fire() {
        this.fired = true
    }

    fantan() {
        this.speedY *= -1
    }
}
