var lists = document.querySelectorAll(".list")

var draggedItem = null
var draggedItems = []
var clientX = 0
var currentIndex = 0
var dropPosition = null

// create index
function updateModules() {
    var listItems = document.querySelectorAll(".list-item")
    var moduleCount = 1

    listItems.forEach(function (item) {
        if (item.classList.contains("active")) {
            item.textContent = `Module ${moduleCount}: ${item.textContent}`
            moduleCount++
        }
    })
}

function updateLessons() {
    var listItems = document.querySelectorAll(".list-item")
    var lessonCount = 1
    var moduleIndex = 0

    listItems.forEach(function (item) {
        if (item.classList.contains("active")) {
            moduleIndex++
            lessonCount = 1
        } else {
            item.textContent = `Bài ${lessonCount}: ${item.textContent}`
            lessonCount++
        }
    })
}

function updateListItems() {
    updateModules()
    updateLessons()
}

updateListItems()

// handle drag
function hasChildren(parent) {
    if (parent.querySelector(".list-item") !== null) {
        parent.classList.add("active")
    } else {
        parent.classList.remove("active")
    }
}

function getNextEl(parent) {
    var nextElements = []
    while (
        parent.nextElementSibling &&
        parent.nextElementSibling.classList.contains("list-item") &&
        !parent.nextElementSibling.classList.contains("active")
    ) {
        parent = parent.nextElementSibling
        nextElements.push(parent)
    }
    return nextElements
}

document.addEventListener("dragstart", function (e) {
    if (
        e.target.classList.contains("active") &&
        e.target.classList.contains("list-item")
    ) {
        draggedItem = e.target
        draggedItems = [draggedItem, ...getNextEl(draggedItem)]
        draggedItems.forEach(function (item) {
            return item.classList.add("ghost")
        })
    } else if (e.target.classList.contains("list-item")) {
        draggedItem = e.target
        draggedItems = [draggedItem]
        e.target.classList.add("ghost")
    }
    clientX = e.clientX
    currentIndex = Math.floor(clientX / 500)
})

document.addEventListener("dragend", function (e) {
    if (e.target.classList.contains("list-item")) {
        draggedItems.forEach(function (item) {
            return item.classList.remove("ghost")
        })
        draggedItem = null
        draggedItems = []
    }
})

lists.forEach(function (list) {
    hasChildren(list)

    list.addEventListener("dragover", function (e) {
        e.preventDefault()
        dropPosition = e.target.closest(".list-item")
    })

    list.addEventListener("dragenter", function (e) {
        e.preventDefault()
        if (e.target.closest(".list")) {
            e.target.closest(".list").classList.add("dragenter")
        }
    })

    list.addEventListener("dragleave", function (e) {
        if (e.target.closest(".list")) {
            e.target.closest(".list").classList.remove("dragenter")
        }
    })

    list.addEventListener("drop", function (e) {
        e.preventDefault()
        if (draggedItem) {
            var targetList = e.target.closest(".list")
            if (targetList) {
                targetList.classList.remove("dragenter")
                clientX = e.clientX
                var listIndex = Math.floor(clientX / 500)

                if (listIndex < lists.length) {
                    if (dropPosition) {
                        draggedItems.forEach(function (item) {
                            console.log(item)
                            return targetList.insertBefore(item, dropPosition)
                        })
                    } else {
                        draggedItems.forEach(function (item) {
                            return lists[listIndex].appendChild(item)
                        })
                    }
                }
                lists.forEach(function (list) {
                    hasChildren(list)
                })
            }
            dropPosition = null
        }
    })
})
