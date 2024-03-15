function checkCredentials(inputUsername, password) {
    const users = getUsers();

    console.log(users);
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.username === inputUsername && user.password === password) {
            return { id: user.id, isAdmin: user.isAdmin };
        }
    }

    return null;
}

const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-login");

const users = getUsers()

btnLogin.addEventListener("click", (e) => {
    
    const user = checkCredentials(inputUsername.value, inputPassword.value);
    if (user) {
        localStorage.setItem('signedIn', 'true');
        window.location.href = "../pages/todo.html"
    } else {
        alert("Invalid username or password.");
    }
});