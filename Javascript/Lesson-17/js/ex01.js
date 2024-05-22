var a, b, c, s, temp
// Bài 1
document.write(`<br>Bài 1: Hoán vị 2 số`)
a = 5
b = 12
document.write(`<br>a = ${a}, b = ${b}`)
a = a - b
b = b + a
a = b - a
document.write(`<br>Sau khi hoán vị: a = ${a}, b = ${b}`)

// Bài 2
document.write(`<br>Bài 2: Thực hiện phép toán`)
s = 10 + 20 + 5**10 / 2
document.write(`<br>s = 10 + 20 + 5^10 / 2 = ${s}`)

// Bài 3
document.write(`<br>Bài 3: Tìm số lớn nhất`)
a = 2
b = 1
c = 4
document.write(`<br>a = ${a}, b = ${b}, c = ${c}`)
a = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
document.write(`<br>Số lớn nhất là: ${a}`)

// Bài 4
document.write(`<br>Bài 4: Kiểm tra số cùng dấu`)
a = -1
b = 5
document.write(`<br>a = ${a}, b = ${b}`)
a * b > 0 ? document.write(`<br>Hai số cùng dấu`) : document.write(`<br>Hai số khác dấu`)

// Bài 5
document.write(`<br>Bài 5: Sắp xếp 3 số`)
a = 6
b = 2
c = 3
document.write(`<br>a = ${a}, b = ${b}, c = ${c}`)
var first, mid, last
first = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
last = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
mid = (a + b + c) - first - last;
document.write(`<br>Ba số sau khi sắp xếp tăng dần là : ${first},${mid},${last} `)
