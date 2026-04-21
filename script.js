

let tasks = [] // empty array to store tasks

document.getElementById('addTaskBtn').addEventListener('click', function () {
    //get the value from input field
    let taskInput = document.getElementById('taskInput').value
    //check if input is empty
    if (taskInput) {
        //add new task to task array
        tasks.push(taskInput)
        //clear input field value
        document.getElementById('taskInput').value = ''
        //update task list display
        displayTasks()
    }
})

function displayTasks() {
    // select our tasklist in the html
    let taskList = document.getElementById('taskList')
    // clear the existing html list
    taskList.innerHTML = ''
    //loop through each task in the array and create a list item for each
    tasks.forEach((task, index) => {
        //create <li> element for each task
        let li = document.createElement('li')
        //add styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )
        //set inner html of the list item with a task and remove button
        li.innerHTML = `${task} <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Completion Goal
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">1-3 Days</a></li>
                                        <li><a class="dropdown-item" href="#">1 week</a></li>
                                        <li><a class="dropdown-item" href="#">Longer than a week</a></li>
                                    </ul>
                                </div><button class='btn btn-success btn-sm' onclick='removeTask(${index})'>✔</button>`
        //append the new task list to the html
        taskList.appendChild(li)

    })
}
document.getElementById('dropdown-item').addEventListener('click', function () {
 items.forEach(item => {
    $("dropdown-item").replaceWith("textContent.li");
 })
})

function removeTask(index) {
    tasks.splice(index, 1)
    displayTasks()
}

document.getElementById('clearTaskBtn').addEventListener('click', function () {
    tasks = []
    displayTasks()
})

