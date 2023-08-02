const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    const checkbox = li.querySelector('input[type="checkbox"]');
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');

    checkbox.addEventListener('change', toggleTaskComplete);
    editBtn.addEventListener('click', editTask);
    deleteBtn.addEventListener('click', deleteTask);

    return li;
}

function toggleTaskComplete(event) {
    const checkbox = event.target;
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}

function editTask(event) {
    const editBtn = event.target;
    const li = editBtn.parentElement;
    const taskText = li.querySelector('span');
    const editText = prompt('Edit the task:', taskText.textContent.trim());

    if (editText !== null && editText.trim() !== '') {
        taskText.textContent = editText.trim();
    }
}

function deleteTask(event) {
    const deleteBtn = event.target;
    const li = deleteBtn.parentElement;
    taskList.removeChild(li);
}
