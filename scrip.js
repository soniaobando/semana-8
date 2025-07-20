function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página interactiva!");
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  let valido = true;

  // Validación básica
  ['nombre', 'correo', 'mensaje'].forEach(id => {
    const campo = document.getElementById(id);
    if (!campo.value.trim()) {
      campo.classList.add('is-invalid');
      valido = false;
    } else {
      campo.classList.remove('is-invalid');
    }
  });

  if (!valido) {
    event.preventDefault();
    event.stopPropagation();
  }
});
