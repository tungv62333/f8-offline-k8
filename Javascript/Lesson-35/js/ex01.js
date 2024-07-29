document.addEventListener("DOMContentLoaded", function (event) {
    var editor = document.getElementById("editor-content")
    editor.addEventListener("input", updateCounts)
    editor.addEventListener("blur", updateCounts)
    editor.addEventListener("focus", updateCounts)

    function formatDoc(cmd) {
        editor.focus()
        document.execCommand(cmd, false, null)
        updateCounts()
    }

    function changeTextColor() {
        var color = document.getElementById("colorPicker").value
        editor.focus()
        document.execCommand("foreColor", false, color)
        updateCounts()
    }

    function updateCounts() {
        var text = editor.innerText.trim()
        var charCount = text.length
        var wordCount = text.split(/\s+/).filter(function (word) {
            return word.length > 0
        }).length

        document.getElementById("charCount").innerText =
            "Số kí tự: " + charCount
        document.getElementById("wordCount").innerText = "Số từ: " + wordCount
    }

    function saveAsPDF() {
        editor.style.border = "none"
        html2pdf(editor)
    }

    window.formatDoc = formatDoc
    window.changeTextColor = changeTextColor
    window.saveAsPDF = saveAsPDF
})
