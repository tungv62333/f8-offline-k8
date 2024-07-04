var carouselInner = document.querySelector(".carousel-inner")
var nextBtn = document.querySelector(".carousel .next")
var prevBtn = document.querySelector(".carousel .prev")
var dotsContainer = document.querySelector(".carousel-dots")

// Tính width của carousel-inner
var itemWidth = carouselInner.clientWidth
// Tính total width
var totalWidth = carouselInner.children.length * itemWidth

// Create span dot
for (var i = 0; i < carouselInner.children.length; i++) {
    var dot = document.createElement("span")
    dot.classList.add("dot")
    if (i === 0) {
        dot.classList.add("active")
    }
    dotsContainer.appendChild(dot)
}

var dots = document.querySelectorAll(".carousel-dots .dot")

var position = 0

// Handle dot active
function updateActiveDot() {
    dots.forEach(function (dot, index) {
        dot.classList.toggle("active", index === Math.abs(position) / itemWidth)
    })
}

// Handle next img
function nextSlide() {
    position -= itemWidth
    if (Math.abs(position) >= totalWidth) {
        position = 0
    }
    carouselInner.style.transform = `translateX(${position}px)`
    updateActiveDot()
}

// Handle prev img
function prevSlide() {
    position += itemWidth
    if (position > 0) {
        position = -itemWidth * (carouselInner.children.length - 1)
    }
    carouselInner.style.transform = `translateX(${position}px)`
    updateActiveDot()
}

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)

// Handle select dot
dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        position = -itemWidth * index
        carouselInner.style.transform = `translateX(${position}px)`
        updateActiveDot()
    })
})

// Handle drag event
