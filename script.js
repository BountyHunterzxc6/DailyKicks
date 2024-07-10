const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const login = document.getElementById("login");

if (sessionStorage.getItem("isLogin") == "true") {
    login.innerText = "Log Out";
    login.addEventListener("click", function() {
        sessionStorage.setItem("isLogin", "false");
        window.location.href = "index.html";
        alert("Logout Successful!");
    });
} else {
    login.innerText = "Log In";
    login.addEventListener("click", function() {
        window.location.href = "registration.html";
    });
}


registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

function validateLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;


    if (email == sessionStorage.getItem("email") && password == sessionStorage.getItem("password")) {
        sessionStorage.setItem("isLogin", "true");
        window.location.href = "index.html";
        alert ("Login Complete.");
        // Redirect to another page or perform other actions here
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function addCart() {
    if (sessionStorage.getItem("isLogin") == "true") {
        window.location.href = "cart.html";
    } else {
        window.location.href = "registration.html";
    }
}

function validateRegistration() {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    sessionStorage.setItem("isLogin", "true");
    window.location.href = "registration.html";
    alert ("Registration Complete.");

    // if (name === "Lourd Alcantara" && email === "lourdalcantara@gmail.com" && password === "1234567890") {
        
    //     // Redirect to another page or perform other actions here
    // } else {
    //     alert("Invalid registration details. Please try again.");
    // }
}

function checkoutForm(event) {
    event.preventDefault();
    window.location.href = "index.html";
    alert ("Checkout Success!");
    return false;
}