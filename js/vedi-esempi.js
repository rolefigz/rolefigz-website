// js/vedi-esempi.js  (reemplaza todo el archivo con esto)
document.addEventListener('DOMContentLoaded', () => {

  // === Productos (usa tu lista actual) ===
  const products = [
    { img: "img/Prodotti/SottoBicchiere/SottoBicchiereLuna.jpg", desc: "Sottobicchieri personalizzati con tecnologia NFC per ristoranti e bar (Menu Integrato)." },
    { img: "img/Prodotti/Calamite/ImanesPersonalizados.jpg", desc: "Calamite personalizzate per promozioni aziendali. (Possono essere dotate di NFC)." },
    { img: "img/Prodotti/Proiettore/ProiettoreMefyFoto7.jpg", desc: "Proiettori personalizzati per eventi, presentazioni o negozi." },
    { img: "img/Prodotti/BadgeMagnetico/BadgeMagneticoRolefigz.jpg", desc: "Badge magnetici personalizzati." },
    { img: "img/Prodotti/Portachiavi/PortaChiaviMefy.jpg", desc: "Portachiavi personalizzati per la tua azienda." },
    { img: "img/Prodotti/Mappe/MappaPiazzaDeiCavalli.jpg", desc: "Mappe 3D a misura." },
    { img: "img/PCB.jpg", desc: "Produzione di componenti e ricambi personalizzati realizzati su misura." },
    { img: "img/NonTroviQuelloCheCerchi.jpg", desc: "Non trovi quello che cerchi? Contattaci e troveremo la soluzione." }
  ];

  // === Referencias DOM ===
  const productGrid = document.getElementById('product-grid');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('#imageModal .close');

  if (!productGrid) {
    console.error('Elemento #product-grid no encontrado en la página.');
    return;
  }
  if (!modal || !modalImg || !closeBtn) {
    console.error('Elementos del modal no encontrados. Asegúrate de tener el HTML del modal en la página.');
    return;
  }

  // === Renderizar productos (todos de una) ===
  function displayAllProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.img}" alt="${escapeHtml(product.desc)}">
        <p class="product-description">${escapeHtml(product.desc)}</p>
        <button class="order-btn" data-img="${product.img}">Vedi di più</button>
      `;
      productGrid.appendChild(card);
    });
  }

  // Función simple para evitar inyección en el alt/text
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  displayAllProducts();

  // === Delegación: abrir modal al hacer click en cualquier imagen dentro de productGrid ===
  productGrid.addEventListener('click', (e) => {
    const clickedImg = e.target.closest('.product-card img');
    if (clickedImg) {
      openModalWithImage(clickedImg.src, clickedImg.alt || '');
      return;
    }

    // Si quieres que el botón "Ordina Ora" abra el modal también:
    const orderBtn = e.target.closest('.order-btn');
    if (orderBtn) {
      const imgSrc = orderBtn.dataset.img;
      if (imgSrc) openModalWithImage(imgSrc, '');
    }
  });

  function openModalWithImage(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt;
    modal.style.display = 'flex';
    // prevenir scroll del fondo
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  // === Cerrar con X ===
  closeBtn.addEventListener('click', closeModal);

  // === Cerrar al hacer click fuera de la imagen (en el overlay) ===
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // === Cerrar con ESC ===
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
  });

});
