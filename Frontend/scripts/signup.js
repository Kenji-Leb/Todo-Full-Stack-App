const inputUsername = document.getElementById("input-username-signup");
const inputEmail = document.getElementById("input-email-signup");
const inputPassword = document.getElementById("input-password-signup");

const btnSignup = document.getElementById("btn-signup");

btnSignup.addEventListener("click", (e) => {
    const user = {
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value,
        tasksList: [],
    }

    const newUser = addUser(user);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    window.location = "./login.html";
});