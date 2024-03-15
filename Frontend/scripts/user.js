const addToLocalStorage = (key, newData) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const lastId =
      existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
    newData.id = lastId + 1;
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
    console.log("Auto-incremented ID:", newData.id);
  };


const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const addUser = (user) => 
  addToLocalStorage("users", user);

const getUsers = () => getFromLocalStorage("users");