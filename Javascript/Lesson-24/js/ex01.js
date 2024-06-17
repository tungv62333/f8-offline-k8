var showObjectArr = function (objArr) {
    for (var obj of objArr) {
        showObject(obj)
    }
}
var showObject = function (obj) {
    document.write(`<div>`)
    for (var key in obj) {
        var value = obj[key]
        document.write(`<span>${key}: ${value} | </span>`)
    }
    document.write(`</div>`)
}
// Bài 1
document.write(`<h3>Bài 01</h3>`)
var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
}
var getError = function (field) {
    if (typeof field === "string") {
        var fieldArr = []
        fieldArr = field.split(".")
        if (fieldArr.length > 1) {
            return errors[fieldArr[0]][fieldArr[1]]
        }
        return errors[field]["required"]
    }
}

document.write(`<p>Output:</p>`)
document.write(`<p>${getError("name")}</p>`)
document.write(`<p>${getError("name.min")}</p>`)
document.write(`<p>${getError("email")}</p>`)
document.write(`<p>${getError("email.unique")}</p>`)
document.write(`<p>${getError("password")}</p>`)
document.write(`<p>${getError("password.same")}</p>`)

// Bài 2
document.write(`<h3>Bài 02</h3>`)
var newCustomers = []

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
]

var createCustomers = function (customers) {
    var result = []

    for (var customer of customers) {
        var nameArr = customer.name.split(" ")
        var shortName = nameArr[0] + " " + nameArr[nameArr.length - 1]

        var newCustomer = {
            name: customer.name,
            age: customer.age,
            address: customer.address,
            shortName: shortName,
        }

        result.push(newCustomer)
    }

    result.sort(function (a, b) {
        return a.age - b.age
    })

    return result
}

newCustomers = createCustomers(customers)

document.write(`<p>Output:</p>`)

showObjectArr(newCustomers)

// Bài 3
document.write(`<h3>Bài 03</h3>`)
var data = []

var createUser = function (name, password, email) {
    return {
        name: name,
        password: password,
        email: email,
        role: "user",
    }
}

var register = function (name, password, email) {
    if (!name || !password || !email) {
        document.write(`Thông tin không đầy đủ.`)
        return
    }
    var user = createUser(name, password, email)
    data.push(user)

    return data
}

var login = function (email, password) {
    for (var user of data) {
        if (user.email === email && user.password === password) {
            return user
        }
    }
    document.write(`Thông tin đăng nhập không hợp lệ.`)

    return null
}

var data1 = register("Nguyen Van A", "123456", "nguyenvana@email.com")
var data2 = register("Nguyen Van B", "1234567", "nguyenvanb@email.com")
showObjectArr(data)

var dataLogin = login("nguyenvanb@email.com", "1234567")
document.write(`Thông tin đăng nhập:`)
showObject(dataLogin)
