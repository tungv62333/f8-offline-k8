// Bài 1
document.write(`<h3>Bài 01</h3>`)
var arrA = [1, 4, 3, 2]
var arrB = [5, 2, 6, 7, 1]

var result = arrA.filter(function (item) {
    return arrB.includes(item)
})
document.write(`<p>Kết quả: ${result}</p>`)

// Bài 2
document.write(`<h3>Bài 02</h3>`)
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]]
var flatArr = function (arr) {
    var newArr = []
    arr.map(function (item) {
        if (Array.isArray(item)) {
            newArr = newArr.concat(flatArr(item))
        } else newArr.push(item)
    })
    return newArr
}

arr = flatArr(arr)

document.write(`<p>Kết quả: ${arr}</p>`)

// Bài 3
document.write(`<h3>Bài 03</h3>`)
arr = [
    ["a", 1, true],
    ["b", 2, false],
    [3, [4, 5]],
]
var arr = flatArr(arr)
var splitItem = function (arr) {
    var stringsArr = []
    var numbersArr = []
    var booleansArr = []
    arr.map(function (item) {
        if (typeof item === "string") {
            stringsArr.push(item)
        } else if (typeof item === "number") {
            numbersArr.push(item)
        } else if (typeof item === "boolean") {
            booleansArr.push(item)
        }
    })
    return [stringsArr, numbersArr, booleansArr]
}
arr = splitItem(arr)
document.write(`<p>Kết quả:</p>`)
arr.map(function (item) {
    document.write(`<span>[${item}] </span>`)
})

// Bài 4
document.write(`<h3>Bài 04</h3>`)

var titles = ["Tiêu đề bài viết 1", "Tiêu đề bài viết 2", "Tiêu đề bài viết 3"]

var contents = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
]

var imgPath = [
    "https://picsum.photos/150",
    "https://picsum.photos/150",
    "https://picsum.photos/150",
]

document.write('<div class="wrapper">')

titles.map(function (title, index) {
    document.write('<div class="post">')
    if (index % 2 === 0) {
        document.write(`
            <img src="${imgPath[index]}" alt="img">
            <div class="post-content">
                <h2 class="post-title">${title}</h2>
                <p>${contents[index]}</p>
            </div>
        `)
    } else {
        document.write(`
            <div class="post-content">
                <h2 class="post-title">${title}</h2>
                <p>${contents[index]}</p>
            </div>
            <img src="${imgPath[index]}" alt="img">
        `)
    }
    document.write("</div>")
})

document.write("</div>")
