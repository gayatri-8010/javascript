function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTask = <li class="task-item">${taskText}</li>;
    taskList.innerHTML += newTask;
    taskInput.value = "";
  }
}