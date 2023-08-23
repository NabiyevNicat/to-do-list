const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button class="editButton">Edit</button> 
    <button class="removeButton">Remove</button>`;
    taskList.appendChild(listItem);
    taskInput.value = "";
    attachRemoveEvent(listItem);
    attachEditEvent(listItem);
  }
}

function attachRemoveEvent(listItem) {
  const removeButton = listItem.querySelector(".removeButton");
  removeButton.addEventListener("click", () => {
    listItem.remove();
  });
}

function attachEditEvent(listItem) {
  const editButton = listItem.querySelector(".editButton");
  editButton.addEventListener("click", () => {
    const taskText = prompt("Edit task:", listItem.firstChild.textContent);
    if (taskText !== null && taskText.trim() !== "") {
      listItem.firstChild.textContent = taskText;
    }
  });
}
