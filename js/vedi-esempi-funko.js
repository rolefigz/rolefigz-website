// js/vedi-esempi.js  (reemplaza todo el archivo con esto)
document.addEventListener('DOMContentLoaded', () => {

  // === Productos (usa tu lista actual) ===
  const products = [
    { img: "img/SanValentino/CanzoneNFC.png", desc: "Marchio con foto e canzone (NFC)." },
    { img: "img/SanValentino/CuoreLettere.png", desc: "Portachiavi con lettere personalizzate." },
    { img: "img/SanValentino/Funko.png", desc: "Funko personalizzato a partire di una foto." },
    { img: "img/SanValentino/LegoCuore.png", desc: "Portachiavi Lego a forma di cuore." },
    { img: "img/SanValentino/LetteraFoto.png", desc: "Portachiavi con forma di lettera e foto personalizzata." },
    { img: "img/SanValentino/LoveCuoreRotatorio.png", desc: "Stand rotante con cuore." },
    { img: "img/SanValentino/FerreroScatola.png", desc: "Scatola per dolci di minecraft." },
    { img: "img/SanValentino/LoveFoto.png", desc: "Marchio di cuore." },
    { img: "img/SanValentino/ManiCuore.png", desc: "Stand cuore con mani." },
    { img: "img/SanValentino/Mappa.png", desc: "Mappe 3D a misura con data." },
    { img: "img/SanValentino/MinecraftCuore.png", desc: "Portachiavi con forma di cuore di Minecraft." },
    { img: "img/SanValentino/OrecchiniCuori.png", desc: "Orecchini con forma di cuore." },
    { img: "img/SanValentino/Segnalibri.png", desc: "Segnalibri con forma di cuore." },
    { img: "img/SanValentino/CuoriArticolati.png", desc: "Cuori articolati." },
    { img: "img/SanValentino/PortachiaviPersonalizzati.png", desc: "Portachiavi personalizzati a misura, con nomi, date, messaggi e non solo." }
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

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("promo-popup");
    const closeBtn = document.getElementById("popup-close");

    // Mostrar popup después de 10 segundos
    setTimeout(() => {
      popup.classList.remove("popup-hidden");
    }, 10000);

    // Cerrar popup
    closeBtn.addEventListener("click", () => {
      popup.classList.add("popup-hidden");
    });

    // Cerrar clic fuera
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.add("popup-hidden");
      }
    });
  });
</script>



