document.querySelectorAll('.career-banner input').forEach(radio => {
  radio.addEventListener('change', function() {
    document.body.classList.toggle('ecommerce-mode', this.id === 'ecommerce-option');
  });
});

document.getElementById('mode-toggle').addEventListener('change', function() {
  if (this.checked) {
    window.location.href = "./index.html"; // Redirige a E-commerce
  } else {
    window.location.href = "./pages/e-commerce.html"; // Redirige a Periodista
  }
});