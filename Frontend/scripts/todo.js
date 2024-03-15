const totalList = document.getElementById("total-list");
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")
const todoInput = document.getElementById("todo-input")
const taskNameInput = document.getElementById("task-name-input");
const descriptionInput = document.getElementById("description-input");
const dateInput = document.getElementById("created-date-input");



const loadTasksInList = (container) => {
    container.innerHTML = "";
  
    tasksList.forEach((task) => {
      container.innerHTML += generateTaskCard(task);
    });
};

addButton.addEventListener("click", async () => {

    const newTask = {
    id: Math.floor(Math.random() * 1000),
    taskName: taskNameInput.value,
    description: descriptionInput.value,
    createdDate: new Date().toISOString().split('T')[0],
    };

    createTask(newTask);
    loadTasksInList(totalList);

    taskNameInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
});


deleteButton.addEventListener("click", () => {
    tasksList.splice(0, tasksList.length);
    loadTasksInList(totalList);
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


loadTasksInList(totalList);
