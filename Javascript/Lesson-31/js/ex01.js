var products = [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 },
]

var cart = []
var itemCount = 0

var productListBody = document.querySelector("#product-list tbody")
productListBody.innerHTML = ""

products.forEach(function (product) {
    var row = document.createElement("tr")

    var idCell = document.createElement("td")
    idCell.textContent = product.id
    row.appendChild(idCell)

    var nameCell = document.createElement("td")
    nameCell.textContent = product.name
    row.appendChild(nameCell)

    var priceCell = document.createElement("td")
    priceCell.textContent = product.price
    row.appendChild(priceCell)

    var inputCell = document.createElement("td")
    var quantityInput = document.createElement("input")
    quantityInput.type = "number"
    quantityInput.min = "1"
    quantityInput.value = "1"
    quantityInput.id = `quantity-${product.id}`
    inputCell.appendChild(quantityInput)

    var addButton = document.createElement("button")
    addButton.textContent = "Thêm vào giỏ"
    addButton.onclick = function () {
        addToCart(product.id, product.name, product.price)
    }
    inputCell.appendChild(addButton)

    row.appendChild(inputCell)

    productListBody.appendChild(row)
})

function addToCart(id, name, price) {
    var quantityInput = document.getElementById(`quantity-${id}`)
    var quantity = parseInt(quantityInput.value)
    var existingItem = cart.find(function (item) {
        return item.id === id
    })

    if (existingItem) {
        existingItem.quantity += quantity
        existingItem.totalPrice = existingItem.quantity * existingItem.price
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: quantity * price,
        })
    }
    updateCartDisplay()
}

function updateCartDisplay() {
    var cartTableBody = document.querySelector("#cart tbody")
    cartTableBody.innerHTML = ""
    var totalPrice = 0

    cart.forEach(function (item, index) {
        var row = document.createElement("tr")

        var indexCell = document.createElement("td")
        indexCell.textContent = index + 1
        row.appendChild(indexCell)

        var nameCell = document.createElement("td")
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        var priceCell = document.createElement("td")
        priceCell.textContent = item.price
        row.appendChild(priceCell)

        var quantityCell = document.createElement("td")
        var quantityInput = document.createElement("input")
        quantityInput.type = "number"
        quantityInput.min = "1"
        quantityInput.value = item.quantity
        quantityInput.onchange = function () {
            updateQuantity(item.id, this.value)
        }
        quantityCell.appendChild(quantityInput)
        row.appendChild(quantityCell)

        var totalPriceCell = document.createElement("td")
        totalPriceCell.textContent = item.totalPrice
        row.appendChild(totalPriceCell)

        var inputCell = document.createElement("td")
        var devareButton = document.createElement("button")
        devareButton.textContent = "Xóa"
        devareButton.onclick = function () {
            removeFromCart(item.id)
        }
        inputCell.appendChild(devareButton)
        row.appendChild(inputCell)

        cartTableBody.appendChild(row)
        totalPrice += item.totalPrice
    })

    document.getElementById("total-price").textContent = totalPrice
}

function updateQuantity(id, quantity) {
    var item = cart.find(function (item) {
        return item.id === id
    })
    item.quantity = parseInt(quantity)
    item.totalPrice = item.quantity * item.price
    updateCartDisplay()
}

function removeFromCart(id) {
    if (confirm("Có muốn xóa không?")) {
        cart = cart.filter(function (item) {
            return item.id !== id
        })
        updateCartDisplay()
    }
}

function updateCart() {
    updateCartDisplay()
}

function clearCart() {
    if (confirm("Có muốn xóa giỏ hàng không?")) {
        cart = []
        updateCartDisplay()
    }
}
