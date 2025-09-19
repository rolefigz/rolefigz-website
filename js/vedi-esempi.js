// Lista de productos
const products = [
  {
    img: "img/products/azienda1.jpg",
    desc: "Lightbox personalizzato per ristoranti e negozi."
  },
  {
    img: "img/products/azienda2.jpg",
    desc: "Calamite personalizzate per promozioni aziendali."
  },
  {
    img: "img/products/azienda3.jpg",
    desc: "Statuette uniche per branding aziendale."
  },
  {
    img: "img/products/azienda4.jpg",
    desc: "Espositore su misura per eventi e fiere."
  },
  {
    img: "img/products/azienda5.jpg",
    desc: "Portachiavi personalizzati per la tua azienda."
  },
  {
    img: "img/products/azienda6.jpg",
    desc: "Design esclusivo per oggetti promozionali."
  },
  {
    img: "img/products/azienda6.jpg",
    desc: "Design esclusivo per oggetti promozionali."
  },
  {
    img: "img/products/azienda6.jpg",
    desc: "Design esclusivo per oggetti promozionali."
  }
];

// Elemento contenedor
const productGrid = document.getElementById("product-grid");

// Mostrar todos los productos al cargar
function displayAllProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.img}" alt="Prodotto">
      <p class="product-description">${product.desc}</p>
      <button class="order-btn">Ordina Ora</button>
    `;

    productGrid.appendChild(card);
  });
}

// Ejecutar al inicio
displayAllProducts();
