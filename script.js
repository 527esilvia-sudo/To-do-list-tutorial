let tasks = [] // empty array to store tasks
let priorities = [] // empty array to store priorities

document.addEventListener('DOMContentLoaded', function () {

    let warning = document.getElementById('warning')

    document.getElementById('addTaskBtn').addEventListener('click', function () {

        let priority = document.getElementById('priority').value
        let taskInput = document.getElementById('taskInput').value

        //check if input is empty
        if (taskInput) {
            if (!priority) {
                warning.textContent = 'Please select a priority level'
                return
            }

            warning.textContent = ''

            tasks.push(taskInput)
            priorities.push(priority)

            //clear input field value
            document.getElementById('taskInput').value = ''

            //update task list display
            sortTasks()
        }
    })

    function sortTasks() {
        const highSection = document.getElementById('highSection')
        const mediumSection = document.getElementById('mediumSection')
        const lowSection = document.getElementById('lowSection')

        //clear existing tasks
        highSection.innerHTML = ''
        mediumSection.innerHTML = ''
        lowSection.innerHTML = ''

        //loop through tasks and sort by priority
        tasks.forEach((task, index) => {

          let taskHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
        <span>${task}</span>
        <button class='btn btn-success btn-sm' onclick='removeTask(${index})'>✔</button>
    </div>
            `

            if (priorities[index] === 'High') {
                highSection.innerHTML += taskHTML
            }

            else if (priorities[index] === 'Medium') {
                mediumSection.innerHTML += taskHTML
            }

            else if (priorities[index] === 'Low') {
                lowSection.innerHTML += taskHTML
            }
        })
    }

    function removeTask(index) {
        tasks.splice(index, 1)
        priorities.splice(index, 1)
        sortTasks()
    }

    document.getElementById('clearTaskBtn').addEventListener('click', function () {
        tasks = []
        priorities = []
        sortTasks()
    })

    document.getElementById('taskInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            document.getElementById('addTaskBtn').click()
        }
    })

})