
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Видалити";
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
taskList.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "BUTTON") {
        const li = e.target.closest("li");
        if (li) {
            li.remove();
        }
    }
});