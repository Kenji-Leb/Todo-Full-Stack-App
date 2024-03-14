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
  
    const taskCards = document.querySelectorAll(".task-card");
  
    taskCards.forEach((task) => {
        task.addEventListener("click", () => {
        const selected = task.getAttribute("task-id");
  
        localStorage.setItem("current-selected", selected);
  
        const task = gettask(parseInt(selected));
  
        const { id, type, amount, description, currency } = task;
  
        oldAmount = amount;
        oldCurrency = currency;
  
        taskNameInput.value = amount;
        descriptionInput.value = description;
        dateInput.value = type;
        currencySelect.value = JSON.stringify(currency);
  
  
        addButton.innerText = "Edit";
      });
    });
  };



addButton.addEventListener("click", async () => {

    const newTask = {
    id: Math.floor(Math.random() * 1000),
    taskName: taskNameInput.value,
    description: descriptionInput.value,
    createdDate: new Date(),
    };

    createTask(newTask);
    loadTasksInList(totalList);
});

const generateTaskCard = (task) => {
    const { id, taskName, description, createdDate, completed } = task;
  
    return `<li class="list-group-item" task-id=${id}>
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
