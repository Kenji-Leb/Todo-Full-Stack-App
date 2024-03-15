const inputUsername = document.getElementById("input-username-signup");
const inputEmail = document.getElementById("input-email-signup");
const inputPassword = document.getElementById("input-password-signup");

const btnSignup = document.getElementById("btn-signup");

btnSignup.addEventListener("click", (e) => {
    const user = {
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value,
    };

    fetch('localhost/todo_backend/signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        localStorage.setItem("currentUser", JSON.stringify(data));
        window.location = "./login.html";
    })
    .catch(error => console.error('Error:', error));
});