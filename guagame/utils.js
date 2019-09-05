//判断相撞
var rectIntersects = (react1, react2) => {
    if (
        react1.x < react2.x + react2.image.width &&
        react1.x + react1.image.width > react2.x &&
        react1.y < react2.y + react2.image.height &&
        react1.image.height + react1.y > react2.y
    ) {
        return true
    }
}
