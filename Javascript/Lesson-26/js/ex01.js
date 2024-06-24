// Bài 1
document.write(`<h3>Bài 01</h3>`)
Array.prototype.push2 = function (...args) {
    var length = this.length
    for (var i = 0; i < args.length; i++) {
        this[length] = args[i]
        length++
    }
    return length
}

var arr = [1, 2, 3]

document.write(`<p>Input: ${arr}</p>`)
arr.push2(4, 5)
document.write(`<p>Output: ${arr}</p>`)

// Bài 2
document.write(`<h3>Bài 02</h3>`)
Array.prototype.filter2 = function (callback) {
    if (typeof callback !== "function") {
        console.log("Not a function")
    }
    var result = []

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }

    return result
}

var arr = [1, 2, 3, 4, 5]
arr.fil
var newArr = arr.filter2(function (item) {
    return item > 1
})
document.write(`<p>Input: ${arr}</p>`)
document.write(`<p>Output: ${newArr}</p>`)

// Bài 3
document.write(`<h3>Bài 03</h3>`)
var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
]
function getChildren(item, indent) {
    var result = ``
    if (item.children) {
        for (var i = 0; i < item.children.length; i++) {
            var child = item.children[i]
            result += `<option value="${child.id}">${indent} ${child.name}</option>`
            result += getChildren(child, indent + "--|")
        }
    }
    return result
}

function createOptions(categories) {
    var options = ``
    for (var i = 0; i < categories.length; i++) {
        var item = categories[i]
        options += `<option value="${item.id}">${item.name}</option>`
        options += getChildren(item, "--|")
    }
    return options
}
var selectHTML = "<select>" + createOptions(categories) + "</select>"
document.write(selectHTML)
