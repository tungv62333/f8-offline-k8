// Bài 1
document.write(`<h3>Bài 1: N số fibonaci</h3>`)
var fibonaci = function (n, a = 0, b = 1) {
    if (n < 0) {
        console.log("Lỗi")
    } else if (n == 0) {
        return
    } else {
        document.write(`${a} `)
        fibonaci(n - 1, b, a + b)
    }
}
var n = 10
fibonaci(10)

// Bài 2
document.write(`<h3>Bài 3: Viết hàm chuyển số thành chữ</h3>`)
var num = 12345
document.write(`<p>Số trước khi đảo ngược: ${num}</p>`)

function reverseNumber(num) {
    var temp = num.toString()
    var newNum = ""
    for (let i = temp.length - 1; i >= 0; i--) {
        newNum += temp[i]
    }
    return parseInt(newNum)
}
document.write(`<p>Số sau khi đảo ngược: ${reverseNumber(num)}</p>`)

// Bài 3
document.write(`<h3>Bài 3: Viết hàm chuyển số thành chữ</h3>`)
num = 4208
document.write(`<p>Số: ${num}</p>`)
function unitToWords(num) {
    if (num < 0 || num > 9999) {
        return "Số không hợp lệ"
    }

    if (num === 0) {
        return "không"
    }

    function unitToWord(unit) {
        switch (unit) {
            case 0:
                return "không"
            case 1:
                return "một"
            case 2:
                return "hai"
            case 3:
                return "ba"
            case 4:
                return "bốn"
            case 5:
                return "năm"
            case 6:
                return "sáu"
            case 7:
                return "bảy"
            case 8:
                return "tám"
            case 9:
                return "chín"
            default:
                return ""
        }
    }

    var result = ""

    var thousands = Math.floor(num / 1000)
    var hundreds = Math.floor((num % 1000) / 100)
    var tens = Math.floor((num % 100) / 10)
    var unit = num % 10

    if (thousands > 0) {
        result += unitToWord(thousands) + " ngàn "
    }

    if (hundreds > 0 || thousands > 0) {
        result += unitToWord(hundreds) + " trăm "
    }

    if (tens > 0) {
        result += unitToWord(tens) + " " + unitToWord(unit)
    } else if (unit > 0) {
        if (hundreds > 0 || thousands > 0) {
            result += "lẻ "
        }
        result += unitToWord(unit)
    }
    return result
}

document.write(`<p>Chữ: ${unitToWords(num)}</p>`)
