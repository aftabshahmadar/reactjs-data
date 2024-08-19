//get all the reference 

const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
const addButton = document.getElementById('add-button')

//function to add a task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            todoList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = ''; // Clear the input field after adding the task
    }
}

// Attach the addTask function to the button's click event
addButton.onclick = addTask;

// Optionally, you can allow adding tasks by pressing the Enter key
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});