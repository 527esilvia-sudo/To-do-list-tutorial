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
            displayTasks()
            sortTasks()
        }
    })

    function sortTasks() {

        const highSection = document.getElementById("highSection");
        const mediumSection = document.getElementById("mediumSection");
        const lowSection = document.getElementById("lowSection");

        highSection.innerHTML = "";
        mediumSection.innerHTML = "";
        lowSection.innerHTML = "";

        tasks.forEach((task, index) => {

            if (priorities[index] === "High") {
                highSection.innerHTML += `<p>${task}</p>`;
            }

            else if (priorities[index] === "Medium") {
                mediumSection.innerHTML += `<p>${task}</p>`;
            }

            else if (priorities[index] === "Low") {
                lowSection.innerHTML += `<p>${task}</p>`;
            }

        });
    }

    function displayTasks() {
        // select our tasklist in the html
        let taskList = document.getElementById('taskList')
        // clear the existing html list
        taskList.innerHTML = ''

        //loop through each task in the array and create a list item for each
        tasks.forEach((task, index) => {

            let li = document.createElement('li')

            li.classList.add(
                'list-group-item',
                'd-flex',
                'justify-content-between',
                'align-items-center'
            )

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

            taskList.appendChild(li)

            li.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', function () {
                    li.querySelector('.dropdown').innerHTML = this.textContent
                })
            })

        })
    }

    function removeTask(index) {
        tasks.splice(index, 1)
        priorities.splice(index, 1)
        displayTasks()
        sortTasks()
    }

    document.getElementById('clearTaskBtn').addEventListener('click', function () {
        tasks = []
        priorities = []
        displayTasks()
        sortTasks()
    })

    document.getElementById('taskInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            document.getElementById('addTaskBtn').click()
        }
    })

})