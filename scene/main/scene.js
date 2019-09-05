class Scene extends GuaScene {
    constructor(game, n) {
        super(game)
        this.level = n
        this.aliveLength = []

        this.paddle = new Paddle(game)
        this.ball = new Ball(game, this.paddle)
        this.blocks = loadLevel(game, this.level)
        this.pasued = true

        game.registerAction("ArrowLeft", () => {
            this.paddle.moveLeft()
        })
        game.registerAction("ArrowRight", () => {
            this.paddle.moveRight()
        })
        game.registerAction(" ", () => {
            this.ball.fire()
        })

        window.addEventListener("keydown", event => {
            let k = event.key
            if (k == "r") {
                this.pasued = !this.pasued
            }
        })
    }
    draw() {
        //背景
        this.game.ctx.fillStyle = "#453"
        this.game.ctx.fillRect(
            0,
            0,
            this.game.canvas.width,
            this.game.canvas.height
        )
        this.game.drawImage(this.paddle)
        this.game.drawImage(this.ball)

        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i]
            if (block.alive) {
                this.game.drawImage(block)
            } else {
                this.aliveLength.push(1)
            }
        }

        //分数
        this.game.ctx.fillStyle = "white"
        this.game.ctx.fillText(
            "分数：" + this.game.score,
            this.game.canvas.width - 80,
            20
        )
    }

    update() {
        if (!this.pasued) {
            return
        }
        this.ball.move()
        //判断 paddle and ball 相撞
        if (rectIntersects(this.paddle, this.ball)) {
            this.ball.fantan()
        }

        //判断 block and ball 相撞
        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i]
            if (rectIntersects(block, this.ball) && block.alive) {
                block.kill()
                this.ball.fantan()
                this.game.score += 10
            }
        }

        //判断游戏结束
        if (this.ball.y > this.paddle.y) {
            let s = new SceneEnd(this.game)
            this.game.replaceScene(s)
        }

        //判断进入 下一关
        if (this.aliveLength.length == this.blocks.length) {
            let s = null
            if (this.level < levels.length) {
                s = new SceneIn(this.game, this.level)
            } else {
                s = new SceneEnd(this.game)
            }
            this.game.replaceScene(s)
        }
    }
}
