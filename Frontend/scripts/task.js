const getTasks = () => {
    const data = localStorage.getItem("tasksList");
    let tasks;
  
    tasks = JSON.parse(data);
  
    return tasks;
};
  

const createTask = (task, userId) => {
    const users = getUsers();
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const updatedUser = {
            ...users[userIndex],
            tasksList: [...users[userIndex].tasksList, task]
        };
        users[userIndex] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
    }
};

  
const saveTasks = (list, userId) => {
  const users = getUsers();
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
      const updatedUser = {
          ...users[userIndex],
          tasksList: list
      };
      users[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
  }
};


let tasksList = getTasks();
  