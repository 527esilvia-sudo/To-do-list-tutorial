let tasks = [] // store tasks
let priorities = [] // store priorities
let completedTasks = [] // store completed state

let lowTaskCounter = 0
let mediumTaskCounter = 0
let highTaskCounter = 0

document.addEventListener('DOMContentLoaded', function () {

    let warning = document.getElementById('warning')

    document.getElementById('addTaskBtn').addEventListener('click', function () {

        let priority = document.getElementById('priority').value
        let taskInput = document.getElementById('taskInput').value

        if (taskInput) {

            if (!priority) {
                warning.textContent = 'Please select a priority level'
                return
            }

            warning.textContent = ''

            tasks.push(taskInput)
            priorities.push(priority)
            completedTasks.push(false)

            document.getElementById('taskInput').value = ''

            sortTasks()
        }
    })

    document.getElementById('clearTaskBtn').addEventListener('click', function () {
        tasks = []
        priorities = []
        completedTasks = []
        sortTasks()
    })

    document.getElementById('taskInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            document.getElementById('addTaskBtn').click()
        }
    })
})

function removeTask(index) {
    tasks.splice(index, 1)
    priorities.splice(index, 1)
    completedTasks.splice(index, 1)
    sortTasks()
}

/* toggle completed state */
function completeTask(button) {
    const index = button.getAttribute('data-index')
    completedTasks[index] = !completedTasks[index]
    sortTasks()
}

function sortTasks() {

    const highSection = document.getElementById('highSection')
    const mediumSection = document.getElementById('mediumSection')
    const lowSection = document.getElementById('lowSection')

    highTaskCounter = 0
    mediumTaskCounter = 0
    lowTaskCounter = 0

    highSection.innerHTML = ''
    mediumSection.innerHTML = ''
    lowSection.innerHTML = ''

    tasks.forEach((task, index) => {

        let completedClass = completedTasks[index] ? 'completed' : ''
        let completedBox = completedTasks[index] ? 'completed-box' : ''

        if (priorities[index] === 'High') {
            highTaskCounter++

            highSection.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded ${completedBox}">
                    <span class="task-text ${completedClass}">${task}</span>
                    <button class='btn btn-success btn-sm' data-index='${index}' onclick='completeTask(this)'>✔</button>
                </div>
            `
        }

        else if (priorities[index] === 'Medium') {
            mediumTaskCounter++

            mediumSection.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded ${completedBox}">
                    <span class="task-text ${completedClass}">${task}</span>
                    <button class='btn btn-success btn-sm' data-index='${index}' onclick='completeTask(this)'>✔</button>
                </div>
            `
        }

        else if (priorities[index] === 'Low') {
            lowTaskCounter++

            lowSection.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded ${completedBox}">
                    <span class="task-text ${completedClass}">${task}</span>
                    <button class='btn btn-success btn-sm' data-index='${index}' onclick='completeTask(this)'>✔</button>
                </div>
            `
        }
    })

    document.getElementById("highTask").innerHTML =
        "Tasks Left: " + highTaskCounter

    document.getElementById("mediumTask").innerHTML =
        "Tasks Left: " + mediumTaskCounter

    document.getElementById("lowTask").innerHTML =
        "Tasks Left: " + lowTaskCounter
}