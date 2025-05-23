document.querySelectorAll('.career-banner input').forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.id === 'journalist-option') {
      // Redirige a la página de Journalist
      window.location.href = "./index.html";
    } else {
      // Redirige a la página de E-commerce
      window.location.href = "./pages/e-commerce.html";
    }
  });
});
