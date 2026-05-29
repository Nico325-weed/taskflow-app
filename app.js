// TaskFlow - Lógica principal de la aplicación

console.log("TaskFlow iniciado correctamente.");

// Manejo del formulario de login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    console.log("Intento de login con:", email);
    alert("Bienvenido a TaskFlow, " + email);
  });
}
