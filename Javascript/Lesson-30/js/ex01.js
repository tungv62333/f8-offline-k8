var audio = document.querySelector(".audio")
var playBtn = document.querySelector(".play-action i")
var progressBar = document.querySelector(".progress-bar")
var progress = document.querySelector(".progress")
var progressDot = document.querySelector(".progress span")
var timer = document.querySelector(".timer")
var currentTimeDisplay = document.querySelectorAll(".play-timer span")[0]
var durationDisplay = document.querySelectorAll(".play-timer span")[2]
var totalTimeDisplay = document.querySelectorAll(".play-timer .total-time")

var isPlaying = false

playBtn.addEventListener("click", function () {
    if (isPlaying) {
        audio.pause()
    } else {
        audio.play()
    }
})

audio.addEventListener("play", function () {
    isPlaying = true
    playBtn.classList.replace("fa-play", "fa-pause")
})

audio.addEventListener("pause", function () {
    isPlaying = false
    playBtn.classList.replace("fa-pause", "fa-play")
})

audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime
    var duration = audio.duration
    var progressPercent = (currentTime / duration) * 100
    progress.style.width = progressPercent + "%"
    progressDot.style.left = progressPercent + "%"

    var currentMinutes = Math.floor(currentTime / 60)
    var currentSeconds = Math.floor(currentTime % 60)
    currentTimeDisplay.textContent =
        currentMinutes.toString().padStart(2, "0") +
        ":" +
        currentSeconds.toString().padStart(2, "0")
})
function secondsToHMS(seconds) {
    let hours = Math.floor(seconds / 3600)
    seconds %= 3600
    let minutes = Math.floor(seconds / 60)
    let secs = Math.floor(seconds % 60)

    return [hours, minutes, secs]
        .map((v) => (v < 10 ? "0" + v : v))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}
audio.addEventListener("loadedmetadata", function () {
    var duration = audio.duration
    var durationMinutes = Math.floor(duration / 60)
    var durationSeconds = Math.floor(duration % 60)
    durationDisplay.textContent =
        durationMinutes.toString().padStart(2, "0") +
        ":" +
        durationSeconds.toString().padStart(2, "0")
    totalTimeDisplay.forEach(function (e) {
        e.innerHTML = secondsToHMS(audio.duration)
    })
})
progressBar.addEventListener("mousemove", function (e) {
    var progressBarWidth = progressBar.clientWidth
    var offsetX = e.offsetX
    var hoverTime = (offsetX / progressBarWidth) * audio.duration

    var hoverMinutes = Math.floor(hoverTime / 60)
    var hoverSeconds = Math.floor(hoverTime % 60)
    timer.textContent =
        hoverMinutes.toString().padStart(2, "0") +
        ":" +
        hoverSeconds.toString().padStart(2, "0")
    timer.style.display = "block"
    timer.style.left = offsetX + "px"
})

progressBar.addEventListener("mouseleave", function () {
    timer.style.display = "none"
})

progressBar.addEventListener("click", function (e) {
    var progressBarWidth = progressBar.clientWidth
    var offsetX = e.offsetX
    var clickTime = (offsetX / progressBarWidth) * audio.duration
    audio.currentTime = clickTime
})

audio.addEventListener("ended", function () {
    audio.currentTime = 0
    audio.pause()
    playBtn.classList.replace("fa-pause", "fa-play")
})
