document.getElementById("start-button").addEventListener("click", function () {
    if ("webkitSpeechRecognition" in window) {
        let recognition = new webkitSpeechRecognition()
        recognition.lang = "vi-VN"
        recognition.continuous = false
        recognition.interimResults = false

        recognition.onstart = function () {
            let status = document.getElementById("status")
            let successMessage = document.querySelector(".success-message")
            status.textContent = "Hãy nói nội dung bạn muốn"
            status.classList.remove("success", "error")
            successMessage.classList.remove("active")
        }

        recognition.onresult = function (event) {
            let transcript = event.results[0][0].transcript.toLowerCase()
            let status = document.getElementById("status")
            status.textContent = `Bạn đã nói: "${transcript}"`
            let successMessage = document.querySelector(".success-message")
            let executed = false

            if (transcript.includes("google")) {
                window.open("https://www.google.com", "_blank")
                executed = true
            } else if (transcript.includes("facebook")) {
                window.open("https://www.facebook.com", "_blank")
                executed = true
            } else if (transcript.includes("youtube")) {
                window.open("https://www.youtube.com", "_blank")
                executed = true
            } else if (transcript.includes("google drive")) {
                window.open("https://drive.google.com", "_blank")
                executed = true
            } else if (
                transcript.includes("google maps") ||
                transcript.includes("bản đồ")
            ) {
                window.open("https://maps.google.com", "_blank")
                executed = true
            } else if (transcript.includes("chỉ đường")) {
                let destination = transcript.split("chỉ đường")[1].trim()
                window.open(
                    `https://maps.google.com?q=${encodeURIComponent(
                        destination
                    )}`,
                    "_blank"
                )
                executed = true
            } else if (
                transcript.includes("bài hát") ||
                transcript.includes("nghe")
            ) {
                let song =
                    transcript.split("bài hát")[1]?.trim() ||
                    transcript.split("nghe")[1]?.trim()
                if (song) {
                    window.open(
                        `https://zingmp3.vn/tim-kiem/tat-ca?q=${encodeURIComponent(
                            song
                        )}`,
                        "_blank"
                    )
                    executed = true
                }
            } else if (
                transcript.includes("video") ||
                transcript.includes("xem")
            ) {
                let video =
                    transcript.split("video")[1]?.trim() ||
                    transcript.split("xem")[1]?.trim()
                if (video) {
                    window.open(
                        `https://www.youtube.com/results?search_query=${encodeURIComponent(
                            video
                        )}`,
                        "_blank"
                    )
                    executed = true
                }
            }

            if (executed) {
                status.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn"
                status.classList.add("success")
                successMessage.classList.add("active")
            } else {
                status.textContent = "Không thực hiện được yêu cầu"
                status.classList.add("error")
                successMessage.classList.remove("active")
            }
        }

        recognition.onerror = function (event) {
            let status = document.getElementById("status")
            status.textContent = `Lỗi: ${event.error}`
            status.classList.add("error")
        }

        recognition.start()
    } else {
        alert("Trình duyệt của bạn không hỗ trợ chức năng này.")
    }
})
