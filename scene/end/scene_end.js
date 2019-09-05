class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction("p", () => {
            let s = new SceneTitle(game)
            game.replaceScene(s)
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
        this.game.ctx.fillStyle = "white"
        this.game.ctx.fillText("游戏结束 按 p 重新开始", 100, 200)
    }
}
