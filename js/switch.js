document.querySelectorAll('.career-banner input').forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.id === 'journalist-option') {
      document.body.classList.remove('ecommerce-mode');
      console.log("Modo Journalist activado");
    } else {
      document.body.classList.add('ecommerce-mode');
      console.log("Modo E-commerce activado");
    }
  });
});

document.querySelectorAll('.career-banner input').forEach(radio => {
  radio.addEventListener('change', function() {
    document.body.classList.toggle('ecommerce-mode', this.id === 'ecommerce-option');
  });
});