function addTask() {
    var taskInput = document.getElementById("task-input");
    var task = taskInput.value.trim();
    if (task !== "") {
        var todoList = document.getElementById("todo-list");
        var newTask = document.createElement("div");
        var taskId = "task-" + Date.now(); 
        newTask.className = "todo-item";
        newTask.innerHTML = `
            <input type="checkbox" id="${taskId}">
            <label for="${taskId}">${task}</label>
            <button class="remove-button" onclick="removeTask(this)">Remove</button>
        `;
        todoList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.remove();
}
