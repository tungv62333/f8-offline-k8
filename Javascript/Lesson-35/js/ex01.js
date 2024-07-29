var countdown = 5
var countdownElement = document.getElementById("countdown")
var getLinkBtn = document.getElementById("getLinkBtn")
var lastTime = performance.now()
var paused = false

function updateCountdown(timestamp) {
    if (paused) {
        lastTime = timestamp
        requestAnimationFrame(updateCountdown)
        return
    }

    var elapsed = timestamp - lastTime

    if (elapsed >= 1000) {
        countdown--
        countdownElement.textContent = countdown
        lastTime = timestamp
    }

    if (countdown > 0) {
        requestAnimationFrame(updateCountdown)
    } else {
        getLinkBtn.disabled = false
        getLinkBtn.classList.add("enabled")
        getLinkBtn.onclick = function () {
            window.location.href = "https://fullstack.edu.vn/"
        }
    }
}

document.addEventListener("visibilitychange", function () {
    paused = document.hidden
})

window.onload = function () {
    requestAnimationFrame(updateCountdown)
}

Object.defineProperty(window, "location", {
    value: {
        href: "",
    },
    writable: false,
})
