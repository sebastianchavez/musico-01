/* ==========================
   Componentes: Navbar y Footer
   ========================== */

const NAV_ITEMS = [
  { href: 'index.html', label: 'Inicio' },
  { href: 'pages/sobre-nosotros.html', label: 'Sobre nosotros' },
  { href: 'pages/servicios.html', label: 'Servicios' },
  { href: 'pages/galeria.html', label: 'Galería' },
  { href: 'pages/precios.html', label: 'Precios' },
  { href: 'pages/contacto.html', label: 'Contacto' }
];

function isInPagesFolder() {
  return window.location.pathname.includes('/pages/');
}

function buildNavbar(activePage = '') {
  const inPages = isInPagesFolder();
  const basePath = inPages ? '../' : '';
  
  return `
    <nav class="navbar-fixed fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="${basePath}index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-300 flex items-center justify-center font-bold text-black text-xl">
            <span class="font-display">HR</span>
          </div>
          <div>
            <div class="font-display font-bold text-lg leading-tight">Los Hermanos</div>
            <div class="text-xs text-yellow-500 tracking-widest">DEL RITMO</div>
          </div>
        </a>
        
        <div class="nav-menu hidden md:flex items-center gap-8">
          ${NAV_ITEMS.map(item => `
            <a href="${basePath}${item.href}" class="nav-link text-white font-medium">
              ${item.label}
            </a>
          `).join('')}
        </div>
        
        <div class="flex items-center gap-4">
          <a href="${basePath}pages/contacto.html" class="hidden md:inline-block btn-primary text-sm px-5 py-2">
            Reservar
          </a>
          <div class="hamburger md:hidden">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function buildFooter() {
  const inPages = isInPagesFolder();
  const basePath = inPages ? '../' : '';
  
  return `
    <footer class="bg-black border-t border-yellow-700/20 pt-16 pb-8 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-12">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-300 flex items-center justify-center font-bold text-black text-2xl">
                <span class="font-display">HR</span>
              </div>
              <div>
                <div class="font-display font-bold text-xl">Los Hermanos del Ritmo</div>
                <div class="text-xs text-yellow-500 tracking-widest">MÚSICA EN VIVO</div>
              </div>
            </div>
            <p class="text-gray-400 max-w-md mb-6">
              Más de 15 años llevando la mejor música en vivo a escenarios, bodas y eventos corporativos de toda España.
            </p>
            <div class="flex gap-3">
              ${[
                { name: 'Instagram', url: BANDA_DATA.redes.instagram, icon: 'IG' },
                { name: 'Facebook', url: BANDA_DATA.redes.facebook, icon: 'FB' },
                { name: 'YouTube', url: BANDA_DATA.redes.youtube, icon: 'YT' },
                { name: 'Spotify', url: BANDA_DATA.redes.spotify, icon: 'SP' },
                { name: 'TikTok', url: BANDA_DATA.redes.tiktok, icon: 'TK' }
              ].map(r => `
                <a href="${r.url}" target="_blank" rel="noopener" 
                   class="w-10 h-10 rounded-full bg-yellow-900/20 hover:bg-yellow-600 border border-yellow-700/30 flex items-center justify-center text-xs font-bold text-yellow-500 hover:text-black transition">
                  ${r.icon}
                </a>
              `).join('')}
            </div>
          </div>
          
          <div>
            <h4 class="font-display font-bold text-lg mb-4 text-yellow-500">Navegación</h4>
            <ul class="space-y-2">
              ${NAV_ITEMS.map(item => `
                <li>
                  <a href="${basePath}${item.href}" class="text-gray-400 hover:text-yellow-500 transition">
                    ${item.label}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div>
            <h4 class="font-display font-bold text-lg mb-4 text-yellow-500">Legal</h4>
            <ul class="space-y-2">
              <li><a href="${basePath}pages/privacidad.html" class="text-gray-400 hover:text-yellow-500 transition">Política de privacidad</a></li>
              <li><a href="${basePath}pages/terminos.html" class="text-gray-400 hover:text-yellow-500 transition">Términos y condiciones</a></li>
            </ul>
            <h4 class="font-display font-bold text-lg mt-6 mb-4 text-yellow-500">Contacto</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>${BANDA_DATA.email}</li>
              <li>${BANDA_DATA.telefono}</li>
              <li>${BANDA_DATA.direccion}</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© <span id="current-year"></span> Los Hermanos del Ritmo. Todos los derechos reservados.</p>
          <p>Diseñado con 🎵 y mucho ritmo</p>
        </div>
      </div>
    </footer>
  `;
}

// Inyectar componentes al cargar
document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');
  
  if (navContainer) navContainer.innerHTML = buildNavbar();
  if (footerContainer) footerContainer.innerHTML = buildFooter();
});