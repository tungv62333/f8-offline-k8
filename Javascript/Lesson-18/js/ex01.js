var taxiBill, km, kwh, kwhBill, i, ex3Result, n, number
// Bài 1
document.write(`<h3>Bài 1: Tính tiền taxi</h3>`)
km = 69
document.write(`Số km: ${km}`)
if (km > 0) {
    if (km <= 1) {
        taxiBill = 15
    } else if (km <= 5) {
        taxiBill = 15 + 13.5 * km
    } else if (km > 5) {
        taxiBill = 15 + 13.5 * 4 + 11 * (km - 5)
    }
    if (km > 120) {
        taxiBill = taxiBill * 1000 * 0.9
    } else {
        taxiBill = taxiBill * 1000
    }
    document.write(`<br>Tổng bill: ${taxiBill}đ`)
} else {
    document.write(`<br>Số km không hợp lệ!`)
}
// Bài 2
document.write(`<h3>Bài 2: Tính tiền điện</h3>`)
kwh = 126
var kwhTier1 = 1.678,
    kwhTier2 = 1.734,
    kwhTier3 = 2.014,
    kwhTier4 = 2.536,
    kwhTier5 = 2.834,
    kwhTier6 = 2.927
document.write(`Số điện tiêu thụ hàng tháng: ${kwh}`)
if (kwh > 0) {
    if (kwh <= 50) {
        kwhBill = kwh * kwhTier1
    } else if (kwh <= 100) {
        kwhBill = 50 * kwhTier1 + (kwh - 50) * kwhTier2
    } else if (kwh <= 200) {
        kwhBill = 50 * kwhTier1 + 50 * kwhTier2 + (kwh - 100) * kwhTier3
        // 83,900 + 86,7 + 52,364
    } else if (kwh <= 300) {
        kwhBill =
            50 * kwhTier1 +
            50 * kwhTier2 +
            100 * kwhTier3 +
            (kwh - 200) * kwhTier4
    } else if (kwh <= 400) {
        kwhBill =
            50 * kwhTier1 +
            50 * kwhTier2 +
            100 * kwhTier3 +
            100 * kwhTier4 +
            (kwh - 300) * kwhTier5
    } else
        kwhBill =
            50 * kwhTier1 +
            50 * kwhTier2 +
            100 * kwhTier3 +
            100 * kwhTier4 +
            100 * kwhTier5 +
            (kwh - 400) * kwhTier6

    document.write(`<br>Số tiền phải đóng: ${kwhBill}đ`)
} else {
    document.write(`<br>Số kwh không hợp lệ!`)
}

// Bài 3
ex3Result = 0
n = 5
document.write(`<h3>Bài 3: Tính giá trị biểu thức</h3>`)
if (n <= 0) {
    document.write(`<br>n không hợp lệ!`)
} else {
    for (i = 1; i <= n; i++) {
        ex3Result += i * (i + 1)
    }
    document.write(`Kết quả: ${ex3Result}`)
}

// Bài 4
document.write(`<h3>Bài 4: Viết hàm kiểm tra số nguyên tố</h3>`)
function isPrimeNumber(number) {
    var check = true
    if (number <= 1) {
        check = false
    } else {
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                check = false
                break
            }
        }
    }
    if (check === true) {
        document.write(`${number} là số nguyên tố<br>`)
    } else document.write(`${number} không là số nguyên tố<br>`)
}
number = 7
isPrimeNumber(number)
number = 6
isPrimeNumber(number)

// Bài 5
document.write(`<h3>Bài 5: Vẽ tam giác số</h3>`)
n = 5
var count = 0
if (n < 1) {
    document.write(`n không hợp lệ!`)
} else {
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            document.write(`${++count} `)
        }
        document.write(`<br>`)
    }
}

// Bài 6
document.write(`<h3>Bài 6: Vẽ bàn cờ vua</h3>`)
document.write(`<div class="wrapper">`)
count = 8
for (i = 1; i <= 8; i++) {
    count++
    for (j = i + 1; j <= count; j++) {
        if (j % 2 === 0) {
            document.write(`<div class="white-box"></div>`)
        } else document.write(`<div class="black-box"></div>`)
    }
}
document.write(`</div>`)

// Bài 7
document.write(`<h3>Bài 7: Vẽ bảng cửu chương</h3>`)
document.write(`<div class="ex07-wrapper">`)
for (i = 1; i <= 9; i++) {
    document.write(`<div><b>Bảng cửu chương ${i}</b>`)
    for (j = 1; j <= 9; j++) {
        document.write(`<span>${i} &times ${j} = ${i * j}</span>`)
    }
    document.write(`</div>`)
}
document.write(`</div>`)
