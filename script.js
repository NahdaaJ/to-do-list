const addBtn = document.getElementById('addTaskBtn');

addBtn.addEventListener('click', addNewTask);

function addNewTask() {
    const inputElement = document.getElementById('taskInput');
    const taskContainer = document.getElementById('task-container');
    let taskInput = inputElement.value;

    let newTask = document.createElement('div');
    newTask.setAttribute('class', 'task');

    let newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('class', 'deleteBtn');
    newDeleteBtn.textContent = "✖";
    newDeleteBtn.addEventListener('click', deleteTask);

    let taskText = document.createElement('span');
    taskText.setAttribute('class', 'taskText');
    taskText.textContent = taskInput;

    newTask.appendChild(newDeleteBtn);
    newTask.appendChild(taskText);

    newTask.addEventListener('click', completeTask);

    taskContainer.appendChild(newTask);

    inputElement.value = "";
}

function deleteTask() {
    event.stopPropagation();

    const taskDiv = this.parentElement;
    taskDiv.remove();
}

function completeTask(event) {
    event.stopPropagation();

    const taskDiv = this;
    const taskSpan = taskDiv.querySelector('.taskText');
    let task = taskSpan.textContent;

    const completedContainer = document.getElementById('completed-container');

    let completedTask = document.createElement('div');
    completedTask.setAttribute('class', 'completed');

    let newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('class', 'deleteCompleteBtn');
    newDeleteBtn.textContent = "✖";
    newDeleteBtn.addEventListener('click', deleteTask);

    let taskText = document.createElement('span');
    taskText.setAttribute('class', 'completeText');
    taskText.textContent = task;

    completedTask.appendChild(newDeleteBtn);
    completedTask.appendChild(taskText);

    completedContainer.appendChild(completedTask);
    taskDiv.remove();
}
