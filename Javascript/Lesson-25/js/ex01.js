// Bài 1
document.write(`<h3>Bài 01</h3>`)
function sum(...numbers) {
    for (var num of numbers) {
        if (typeof num !== "number") {
            return "Dữ liệu truyền vào không hợp lệ"
        }
    }

    var total = numbers.reduce(function (prev, curr) {
        return prev + curr
    }, 0)

    return total
}

document.write(`<p>Input:</p>`)
document.write(`<p>1, 2, 3, 4</p>`)
document.write(`<p>10, 20, "30"</p>`)
document.write(`<p>Output:</p>`)
document.write(`<p>${sum(1, 2, 3, 4)}</p>`)
document.write(`<p>${sum(10, 20, "30")}</p>`)

// Bài 2
document.write(`<h3>Bài 02</h3>`)
Number.prototype.getCurrency = function (unit) {
    var newNumber = this.toLocaleString("en-US")
    return `${newNumber} ${unit}`
}
String.prototype.getCurrency = function (unit) {
    var newNumber = Number(this)
    if (isNaN(newNumber)) {
        return "Dữ liệu truyền vào không hợp lệ"
    }
    return newNumber.getCurrency(unit)
}
var price = 12000
document.write(`<p>Input: ${price}</p>`)
document.write(`<p>Output: ${price.getCurrency("đ")}</p>`)
price = "12000000"
document.write(`<p>Input: ${price}</p>`)
document.write(`<p>Output: ${price.getCurrency("đ")}</p>`)
price = "120a00000"
document.write(`<p>Input: ${price}</p>`)
document.write(`<p>Output: ${price.getCurrency("đ")}</p>`)

// Bài 3
document.write(`<h3>Bài 03</h3>`)
var categories = [
    { id: 1, name: "Chuyên mục 1", parent: 0 },
    { id: 2, name: "Chuyên mục 2", parent: 0 },
    { id: 3, name: "Chuyên mục 3", parent: 0 },
    { id: 4, name: "Chuyên mục 2.1", parent: 2 },
    { id: 5, name: "Chuyên mục 2.2", parent: 2 },
    { id: 6, name: "Chuyên mục 2.3", parent: 2 },
    { id: 7, name: "Chuyên mục 3.1", parent: 3 },
    { id: 8, name: "Chuyên mục 3.2", parent: 3 },
    { id: 9, name: "Chuyên mục 3.3", parent: 3 },
    { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
    { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
]

function getParent(arr) {
    var newArr = []
    if (Array.isArray(arr)) {
        arr.forEach(function (item) {
            if (
                typeof item === "object" &&
                item !== undefined &&
                item !== null &&
                !Array.isArray(item)
            ) {
                if (item.parent === 0) {
                    newArr.push(item)
                }
            }
        })
    }
    return newArr
}

function getChildren(parentItem, arr) {
    if (Array.isArray(arr)) {
        parentItem.children = []
        arr.forEach(function (item) {
            if (
                typeof item === "object" &&
                item !== undefined &&
                item !== null &&
                !Array.isArray(item)
            ) {
                if (item.parent === parentItem.id) {
                    parentItem.children.push(item)
                    getChildren(item, arr)
                }
            }
        })
        if (parentItem.children.length === 0) {
            delete parentItem.children
        }
    }
}

function nested(arr) {
    var newArr = getParent(arr)
    newArr.forEach(function (item) {
        getChildren(item, arr)
    })
    return newArr
}

var newCategories = nested(categories)
document.write(`<p>Output: console.log</p>`)
console.log(JSON.stringify(newCategories, null, 4))

// Bài 4
document.write(`<h3>Bài 04</h3>`)
var numbers = [1, 2, 3, 4, 5]

Array.prototype.reduce2 = function (callback, initialValue) {
    var index = 0
    if (arguments.length < 2) {
        index = 1
        initialValue = this[0]
    }
    for (index; index < this.length; index++) {
        initialValue = callback(initialValue, this[index], index, this)
    }
    return initialValue
}

var result = numbers.reduce2(function (total, number) {
    return total + number
}, 10)

console.log("Bài 4:")
document.write(`<p>Output: console.log</p>`)
console.log(result)
