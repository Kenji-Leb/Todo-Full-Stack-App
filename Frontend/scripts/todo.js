const totalList = document.getElementById("total-list");
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")
const todoInput = document.getElementById("todo-input")
const taskNameInput = document.getElementById("task-name-input");
const descriptionInput = document.getElementById("description-input");
const dateInput = document.getElementById("created-date-input");
const user = JSON.parse(localStorage.getItem("currentUser"));
const userId = user.id;


const loadTasksInList = (container, userId) => {
    const users = getUsers();
    const user = users.find(user => user.id === userId);
    if (user) {
        container.innerHTML = "";
        user.tasksList.forEach((task) => {
            container.innerHTML += generateTaskCard(task);
        });
    }
};


addButton.addEventListener("click", async () => {
    const newTask = {
        id: Math.floor(Math.random() * 1000),
        taskName: taskNameInput.value,
        description: descriptionInput.value,
        createdDate: new Date().toISOString().split('T')[0],
    };

    createTask(newTask, userId);
    loadTasksInList(totalList, userId);

    taskNameInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
});


deleteButton.addEventListener("click", () => {
    const user = getUsers().find(user => user.id === userId);
    if (user) {
        user.tasksList = [];
        saveTasks(user.tasksList, userId);
        loadTasksInList(totalList, userId);
    }
});




const generateTaskCard = (task) => {
    const { id, taskName, description, createdDate, completed } = task;
  
    return `<li class="list-group-item task-card" task-id=${id}>
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="mb-1">${taskName}</h5>
                        <p class="mb-1">${description}</p>
                        <small>Created: ${createdDate}</small>
                    </div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Completed
                            </label>
                        </div>
                    </div>
                </div>
            </li>`
  };


loadTasksInList(totalList, userId);
