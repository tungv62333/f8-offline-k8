var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corrupti quae? Hic, ratione dignissimos recusandae accusamus dolorum a reiciendis veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corrupti quae? Hic, ratione dignissimos recusandae accusamus dolorum a reiciendis veritatis.`
var position = 0
var nextPosition = content.indexOf(" ", position)
var highlight = function () {
    if (position < content.length) {
        var left = content.slice(0, position)
        var word =
            nextPosition !== -1
                ? content.slice(position, nextPosition)
                : content.slice(nextPosition, content.length)
        var right = nextPosition !== -1 ? content.slice(nextPosition) : ""
        document.body.innerHTML =
            left + `<span class="red">${word}</span>` + right
        position = nextPosition + 1
        nextPosition = content.indexOf(" ", position)
        if (nextPosition === -1) {
            nextPosition = content.length
        }
    } else {
        position = 0
        nextPosition = content.indexOf(" ", position)
    }
}
setInterval(highlight, 500)
