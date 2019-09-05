class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction("k", () => {
            let s = new Scene(game, 1)
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
        this.game.ctx.fillText("按K 开始游戏", 100, 200)
    }
}
