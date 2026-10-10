/* ==========================
   Galería + Lightbox
   ========================== */

function renderGaleria(items, containerId = 'galeria-container') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = items.map((item, idx) => `
    <div class="gallery-item reveal reveal-delay-${(idx % 4) + 1}" data-index="${idx}">
      <img src="${item.url}" alt="${item.alt}" class="w-full h-64 object-cover" loading="lazy">
    </div>
  `).join('');
  
  initRevealAnimations();
  initLightbox(items);
}

function initLightbox(items) {
  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <span class="lightbox-close">&times;</span>
      <img src="" alt="">
    `;
    document.body.appendChild(lightbox);
  }
  
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-index'));
      lightboxImg.src = items[idx].url;
      lightboxImg.alt = items[idx].alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}