const getTasks = () => {
    const data = localStorage.getItem("tasksList");
    let tasks;
  
    if (data) {
        tasks = JSON.parse(data);
    } else {
      localStorage.setItem("tasksList", "[]");
      tasks = [];
    }
  
    return tasks;
  };
  
  const getTask = (id) => {
    const found = tasksList.find((task) => id === task.id);
  
    return found;
  };
  
  const createTask = (task) => {
    tasksList.push(task);
  
    saveTasks();
  };
  
  const deleteTask = (id) => {
    const filtered = tasksList.filter(
      (task) => id !== task.id
    );
  
    saveTasks(filtered);
  
    tasksList = filtered;
  };
  
  const saveTasks = (list) => {
    localStorage.setItem(
      "tasksList",
      JSON.stringify(list ?? tasksList)
    );
  };
  
  let tasksList = getTasks();
  