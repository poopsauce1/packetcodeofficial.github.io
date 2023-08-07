document.getElementById("signin-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are valid
  if (username === "user" && password === "password") {
      document.getElementById("error-message").textContent = "";
      alert("Sign in successful!");
  } else {
      document.getElementById("error-message").textContent = "Invalid username or password.";
  }
});
