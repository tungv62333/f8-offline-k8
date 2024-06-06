// Bài 1
document.write(`<h3>Bài 01</h3>`)
var arr = [-99, 66, 69, 0, 1, 7, 13, 47, 98, 2, 6]
var min = arr[0]
var max = arr[0]
var minIndex = 0
var maxIndex = 0
for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
        maxIndex = i
    }
    if (min > arr[i]) {
        min = arr[i]
        minIndex = i
    }
}
document.write(
    `<p>Số lớn nhất trong mảng là: ${max} ở vị trí ${maxIndex + 1}</p>`
)
document.write(
    `<p>Số nhỏ nhất trong mảng là: ${min} ở vị trí ${minIndex + 1}</p>`
)

// Bài 2
document.write(`<h3>Bài 02</h3>`)
var average = 0
var count = 0
var isPrimeNumber = function (num) {
    if (num <= 0) {
        return false
    } else {
        if (num === 2) {
            return true
        } else {
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false
                }
            }
        }
        return true
    }
}
for (var i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
        count++
        average += arr[i]
        document.write(arr[i], " ")
    }
}
if (count > 0) {
    document.write(
        `<p>Trung bình cộng các số nguyên tố trong mảng là: ${
            average / count
        }</p>`
    )
} else document.write("Không có số nguyên tố")

// Bài 3
document.write(`<h3>Bài 03</h3>`)
var arr2 = ["text", 7, 6, 99, 56, 2, 11, 7, 6, 56, 1, 2, "text", 3, 3]
var newArr2 = []

for (var i = 0; i < arr2.length; i++) {
    var check = false
    for (var j = 0; j < newArr2.length; j++) {
        if (arr2[i] === newArr2[j]) {
            check = true
            break
        }
    }
    if (!check) {
        newArr2[newArr2.length] = arr2[i]
    }
}

document.write(`<p>Mảng sau khi lọc: ${newArr2}</p>`)

// Bài 4
document.write(`<h3>Bài 04</h3>`)

var numbers = [5, 1, 9, 8, 10]
var element = 4

function sortArr(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

sortArr(numbers)

document.write(`<p>Mảng sau khi sắp xếp: ${numbers}</p>`)

numbers[numbers.length] = element

sortArr(numbers)

document.write(`<p>Mảng sau khi chèn: ${numbers}</p>`)
