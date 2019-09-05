class SceneIn extends GuaScene {
    constructor(game, n) {
        super(game)
        setTimeout(() => {
            let s = new Scene(game, n + 1)
            game.replaceScene(s)
        }, 3000)
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
        this.game.ctx.fillStyle = "white"
        this.game.ctx.fillText("恭喜过关,请做好准备进入下一关", 100, 200)
    }
}
