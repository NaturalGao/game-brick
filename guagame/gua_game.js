class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback

        this.scene = null
        this.actions = {}
        this.keydowns = {}

        this.score = 0

        this.canvas = document.querySelector("#id-canvas")
        this.ctx = this.canvas.getContext("2d")

        window.addEventListener("keydown", event => {
            this.keydowns[event.key] = true
        })

        window.addEventListener("keyup", event => {
            this.keydowns[event.key] = false
        })

        this.init()
    }
    drawImage(obj) {
        this.ctx.drawImage(obj.image, obj.x, obj.y)
    }
    imgByName(name) {
        let img = this.images[name]
        return img
    }
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runWithScene(scene) {
        this.scene = scene
        setTimeout(() => {
            this.run()
        }, 1000 / window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    update() {
        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }

    __start() {
        this.runCallback(this)
    }

    run() {
        let actions = Object.keys(this.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            if (this.keydowns[key]) {
                this.actions[key]()
            }
        }
        this.update()
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.draw()
        setTimeout(() => {
            this.run()
        }, 1000 / window.fps)
    }
    // 初始化
    init() {
        let loads = []
        //预先载入所有图片
        let names = Object.keys(this.images)

        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = this.images[name]
            let img = new Image()
            img.src = path
            img.onload = () => {
                this.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    this.__start()
                }
            }
        }
    }
}
