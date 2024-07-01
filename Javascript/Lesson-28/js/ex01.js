var addTaskButton = document.getElementById("addTaskButton")
var taskInput = document.getElementById("taskInput")
var taskList = document.getElementById("taskList")

addTaskButton.addEventListener("click", function () {
    var task = createTaskElement(taskInput.value)
    taskList.appendChild(task)
    taskInput.value = ""
})

function createTaskElement(taskContent) {
    var task = document.createElement("div")
    task.classList.add("task")
    task.innerHTML = `
        <span>${taskContent}</span>
        <div class="button-container">
            <button class="edit-button">&#9998;</button>
            <button class="delete-button">&#128465;</button>
        </div>
    `

    var editButton = task.querySelector(".edit-button")
    var deleteButton = task.querySelector(".delete-button")
    var span = task.querySelector("span")

    editButton.addEventListener("click", function () {
        editTask(task, span)
    })

    deleteButton.addEventListener("click", function () {
        task.remove()
    })

    return task
}

function editTask(task, span) {
    var input = document.createElement("input")
    input.type = "text"
    input.value = span.textContent
    task.replaceChild(input, span)

    var buttonContainer = task.querySelector(".button-container")
    var editButton = buttonContainer.querySelector(".edit-button")
    var deleteButton = buttonContainer.querySelector(".delete-button")

    editButton.style.display = "none"
    deleteButton.style.display = "none"

    var saveButton = document.createElement("button")
    saveButton.textContent = "Save"
    saveButton.classList.add("save-button")
    buttonContainer.appendChild(saveButton)

    saveButton.addEventListener("click", function () {
        span.textContent = input.value.trim() || "Unnamed Task"
        task.replaceChild(span, input)
        saveButton.remove()
        editButton.style.display = "inline"
        deleteButton.style.display = "inline"
    })

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            span.textContent = input.value.trim() || "Unnamed Task"
            task.replaceChild(span, input)
            saveButton.remove()
            editButton.style.display = "inline"
            deleteButton.style.display = "inline"
        }
    })
}
