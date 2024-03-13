function checkCredentials(email, password) {
    const users = getUsers();

    console.log(users);
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email && user.password === password) {
            return { id: user.id, isAdmin: user.isAdmin };
        }
    }

    return null;
}

const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-login");

const users = getUsers()

btnLogin.addEventListener("click", (e) => {
    const user = checkCredentials(inputEmail.value, inputPassword.value);
    if (user) {
        localStorage.setItem('signedIn', 'true');
        if(user.isAdmin){
            window.location.href = "./dashboard/main-page.html"
        }else{
            window.location.href = "./index.html";
        }
    } else {
        alert("Invalid username or password.");
    }
});