var a, b, c, s, temp
// Bài 1
console.log('Bài 1: Hoán vị 2 số')
a = 5
b = 12
console.log(`a = ${a}, b = ${b}`)
a = a - b
b = b + a
a = b - a
console.log(`Sau khi hoán vị: a = ${a}, b = ${b}`)

// Bài 2
console.log('Bài 2: Thực hiện phép toán')
s = 10 + 20 + 5**10 / 2
console.log(`s = 10 + 20 + 5^10 / 2 = ${s}`)

// Bài 3
console.log('Bài 3: Tìm số lớn nhất')
a = 2
b = 1
c = 4
a = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log(`Số lớn nhất là: ${a}`)

// Bài 4
console.log('Bài 4: Kiểm tra số cùng dấu')
a = -1
b = 5
a * b > 0 ? console.log('Hai số cùng dấu') : console.log('Hai số khác dấu')

// Bài 5
console.log('Bài 5: Sắp xếp 3 số')
a = 6
b = 2
c = 3
var first, mid, last
first = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
last = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
mid = (a + b + c) - first - last;
console.log(`Ba số sau khi sắp xếp tăng dần là : ${first},${mid},${last} `)
