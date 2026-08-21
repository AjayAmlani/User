const DEMO_USER = "admin";
const DEMO_PASSWORD = "password123";

redirectIfLoggedIn();

const form = document.getElementById("login-form");
const errorEl = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === DEMO_USER && password === DEMO_PASSWORD) {
    errorEl.hidden = true;
    setSession(username);
    window.location.href = "dashboard.html";
    return;
  }

  errorEl.textContent = "Invalid username or password.";
  errorEl.hidden = false;
});
