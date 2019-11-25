var loadLevel = (game, n) => {
    n--
    let level = levels[n]
    let blocks = []
    for (let i = 0; i < level.length; i++) {
        let p = level[i]
        let b = new Block(game, p)
        blocks.push(b)
    }
    return blocks
}
var __main = () => {
    const images = {
        paddle: "images/paddleRed.png",
        ball: "images/ballBlue.png",
        block: "images/element_red_rectangle.png"
    }
    const game = new GuaGame(30, images, g => {
        let s = new SceneTitle(g)
        g.runWithScene(s)
    })
}

__main()
