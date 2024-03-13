const inputFirstname = document.getElementById("input-firstname-signup");
const inputLastname = document.getElementById("input-lastname-signup");
const inputEmail = document.getElementById("input-email-signup");
const inputPassword = document.getElementById("input-password-signup");

const btnSignup = document.getElementById("btn-signup");

btnSignup.addEventListener("click", (e) => {
    const user = {
        firstName: inputFirstname.value,
        lastName: inputLastname.value,
        email: inputEmail.value,
        password: inputPassword.value
    }
    
    addUser(user);
    window.location = "./login.html";
});