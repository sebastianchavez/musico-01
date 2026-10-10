/* ==========================
   Formulario de contacto
   ========================== */

function initContactoForm() {
  const form = document.getElementById('contacto-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Limpiar errores previos
    form.querySelectorAll('.form-input').forEach(input => input.classList.remove('error'));
    
    const nombre = form.querySelector('[name="nombre"]');
    const email = form.querySelector('[name="email"]');
    const telefono = form.querySelector('[name="telefono"]');
    const mensaje = form.querySelector('[name="mensaje"]');
    const tipoEvento = form.querySelector('[name="tipo_evento"]');
    
    let isValid = true;
    
    if (!nombre.value.trim() || nombre.value.trim().length < 3) {
      nombre.classList.add('error');
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add('error');
      isValid = false;
    }
    
    if (telefono.value.trim() && !/^[+\d\s()-]{7,}$/.test(telefono.value.trim())) {
      telefono.classList.add('error');
      isValid = false;
    }
    
    if (mensaje.value.trim().length < 10) {
      mensaje.classList.add('error');
      isValid = false;
    }
    
    if (!isValid) {
      showToast('Por favor, revisa los campos marcados');
      return;
    }
    
    // Simular envío
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast('¡Mensaje enviado! Te contactaremos pronto 🎵');
    }, 1500);
  });
  
  // Quitar error al escribir
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('error'));
  });
}

document.addEventListener('DOMContentLoaded', initContactoForm);