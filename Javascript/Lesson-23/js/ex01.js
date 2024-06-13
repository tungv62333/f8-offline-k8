// Bài 1
var isPrimeNumber = function (num) {
    if (num <= 1) {
        return false
    }
    if (num === 2 || num === 3) {
        return true
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

var isPalindrome = function (num) {
    var str = num.toString()
    var reverseStr = str.split("").reverse().join("")
    return str === reverseStr
}

var primePalindrome = function (n) {
    var num = n
    while (true) {
        if (isPrimeNumber(num) && isPalindrome(num)) {
            return num
        }
        num++
    }
}
var n = 13
document.write(`<p>Input: ${n}</p>`)
document.write(`<p>Output: ${primePalindrome(n)}</p>`)

// Bài 2
document.write(`<h3>Bài 02</h3>`)
var flatArr = function (arr) {
    var newArr = []
    arr.map(function (item) {
        if (Array.isArray(item)) {
            newArr = newArr.concat(flatArr(item))
        } else newArr.push(item)
    })
    return newArr
}

var findMedian = function (arr1, arr2) {
    var arr = flatArr(arr1.concat(arr2))
    if (Array.isArray(arr)) {
        var arrLength = arr.length
        arr.sort(function (a, b) {
            return a - b
        })
        if (arrLength % 2 === 0) {
            return (
                (arr[Math.floor(arrLength / 2) - 1] +
                    arr[Math.floor(arrLength / 2)]) /
                2
            )
        } else {
            return arr[Math.floor(arrLength / 2)]
        }
    }
}

var nums1 = [1, 3]
var nums2 = [2]
var output = findMedian(nums1, nums2)
document.write(`<p>Input: ${nums1} | ${nums2}</p>`)
document.write(`<p>Output: ${output}</p>`)

nums1 = [1, 2]
nums2 = [3, 4]
output = findMedian(nums1, nums2)
document.write(`<p>Input: ${nums1} | ${nums2}</p>`)
document.write(`<p>Output: ${output}</p>`)

nums1 = [1, 2]
nums2 = [3, 7]
output = findMedian(nums1, nums2)
document.write(`<p>Input: ${nums1} | ${nums2}</p>`)
document.write(`<p>Output: ${output}</p>`)

// Bài 3
document.write(`<h3>Bài 03</h3>`)
var findInteger = function (arr) {
    var newArr = []

    if (Array.isArray(arr)) {
        newArr = arr
        newArr.sort(function (a, b) {
            return a - b
        })
        var result = newArr.reduce(function (acc, num) {
            if (num === acc) {
                return acc + 1
            }
            return acc
        }, 1)

        return result
    }
}

var input = [1, 2, 0]
var output = findInteger(input)
document.write(`<p>Input: ${input}</p>`)
document.write(`<p>Output: ${output}</p>`)

input = [3, 4, -1, 1]
var output = findInteger(input)
document.write(`<p>Input: ${input}</p>`)
document.write(`<p>Output: ${output}</p>`)

input = [7, 8, 9, 11, 12]
var output = findInteger(input)
document.write(`<p>Input: ${input}</p>`)
document.write(`<p>Output: ${output}</p>`)
