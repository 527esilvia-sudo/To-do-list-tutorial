let tasks = [] // empty array to store tasks
let priorities = [] // empty array to store priorities
let lowTaskCounter = 0 // counter for low priority tasks
let mediumTaskCounter = 0 // counter for medium priority tasks
let highTaskCounter = 0 // counter for high priority tasks
let completed = false // flag to track if a task is completed

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

function removeTask(index) {
    tasks.splice(index, 1)
    priorities.splice(index, 1)
    sortTasks()
}
function sortTasks() {
    const highSection = document.getElementById('highSection')
    const mediumSection = document.getElementById('mediumSection')
    const lowSection = document.getElementById('lowSection')
    highTaskCounter = 0
    mediumTaskCounter = 0
    lowTaskCounter = 0


    //clear existing tasks
    highSection.innerHTML = ''
    mediumSection.innerHTML = ''
    lowSection.innerHTML = ''

    //loop through tasks and sort by priority
    tasks.forEach((task, index) => {


        if (priorities[index] === 'High') {
            highTaskCounter++
            highSection.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
                    <span>${task}</span>
                    <button class='btn btn-success btn-sm' onclick='removeTask(${index})'>✔</button>
                </div>
                        `
        }

        else if (priorities[index] === 'Medium') {
            mediumTaskCounter++
            mediumSection.innerHTML += `
                    <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
                        <span>${task}</span>
                        <button class='btn btn-success btn-sm' onclick='completeTask(${index})'>✔</button>
                    </div>
                            `
        }

        else if (priorities[index] === 'Low') {
            lowTaskCounter++
            lowSection.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
                    <span>${task}</span>
                    <button class='btn btn-success btn-sm' onclick='completeTask(${index})'>✔</button>
                </div>
                        `
        }
    })
    function completeTask(index){

    }
    document.getElementById("highTask").innerHTML =
        "Tasks Left: " + highTaskCounter

    document.getElementById("mediumTask").innerHTML =
        "Tasks Left: " + mediumTaskCounter

    document.getElementById("lowTask").innerHTML =
        "Tasks Left: " + lowTaskCounter
}