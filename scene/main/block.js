class Block {
    constructor(game, p) {
        this.image = game.imgByName("block")
        this.x = p[0]
        this.y = p[1]
        this.alive = true
        this.lifes = p[2] || 1
    }

    kill() {
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }
}
