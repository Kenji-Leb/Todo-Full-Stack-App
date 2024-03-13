const inputUsername = document.getElementById("input-username-signup");
const inputEmail = document.getElementById("input-email-signup");
const inputPassword = document.getElementById("input-password-signup");

const btnSignup = document.getElementById("btn-signup");

btnSignup.addEventListener("click", (e) => {
    const user = {
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value
    }
    
    addUser(user);
    window.location = "./login.html";
});