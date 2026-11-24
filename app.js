import { STORE_CONFIG } from "./config.js";
import { CATEGORIAS, PRODUCTOS } from "./productos.js";

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

let state = {
  categoriaActiva: "Destacados",
  busqueda: "",
  carrito: JSON.parse(localStorage.getItem("rym_cart") || "[]"),
  productoSeleccionado: null,
  varianteIndex: 0,
  galeriaActual: [],
  imagenIndex: 0
};

// Referencias DOM
const categoriesList = document.getElementById("categoriesList");
const catPrevBtn = document.getElementById("catPrevBtn");
const catNextBtn = document.getElementById("catNextBtn");
const productsGrid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");
const catalogHeading = document.getElementById("catalogHeading");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const detailPrevImgBtn = document.getElementById("detailPrevImgBtn");
const detailNextImgBtn = document.getElementById("detailNextImgBtn");
const detailImgCounter = document.getElementById("detailImgCounter");

// Carrito DOM
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartBadge = document.getElementById("cartBadge");
const drawerCount = document.getElementById("drawerCount");
const cartItemsList = document.getElementById("cartItemsList");
const drawerFooter = document.getElementById("drawerFooter");

// Envío gratis y Cross-sell DOM
const shippingBarWrap = document.getElementById("shippingBarWrap");
const shippingText = document.getElementById("shippingText");
const shippingProgressBar = document.getElementById("shippingProgressBar");
const shippingProgressFill = document.getElementById("shippingProgressFill");

const crossSellBox = document.getElementById("crossSellBox");
const crossSellImg = document.getElementById("crossSellImg");
const crossSellName = document.getElementById("crossSellName");
const crossSellPrice = document.getElementById("crossSellPrice");
const crossSellAddBtn = document.getElementById("crossSellAddBtn");

// Totales DOM
const subtotalValue = document.getElementById("subtotalValue");
const transferDiscountLabel = document.getElementById("transferDiscountLabel");
const transferValue = document.getElementById("transferValue");
const installmentsText = document.getElementById("installmentsText");
const checkoutWpBtn = document.getElementById("checkoutWpBtn");

// Modal Vista Detallada DOM
const productDialog = document.getElementById("productDialog");
const closeDetailBtn = document.getElementById("closeDetailBtn");
const detailOfferBadge = document.getElementById("detailOfferBadge");
const detailImg = document.getElementById("detailImg");
const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailOldPrice = document.getElementById("detailOldPrice");
const detailPrice = document.getElementById("detailPrice");
const detailTransferTag = document.getElementById("detailTransferTag");
const detailInstallments = document.getElementById("detailInstallments");
const detailDescription = document.getElementById("detailDescription");
const detailVariantsWrap = document.getElementById("detailVariantsWrap");
const detailVariantOptions = document.getElementById("detailVariantOptions");
const detailAddBtn = document.getElementById("detailAddBtn");
const detailShareBtn = document.getElementById("detailShareBtn");
const detailShareText = document.getElementById("detailShareText");

function saveCart() {
  localStorage.setItem("rym_cart", JSON.stringify(state.carrito));
}

function renderCategories() {
  categoriesList.replaceChildren();
  CATEGORIAS.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-pill";
    btn.textContent = cat;
    btn.setAttribute("aria-pressed", String(state.categoriaActiva === cat));
    btn.addEventListener("click", () => {
      state.categoriaActiva = cat;
      renderCategories();
      renderProducts();
    });
    categoriesList.appendChild(btn);
  });
  requestAnimationFrame(updateCategoryArrows);
}

function updateCategoryArrows() {
  const maxScroll = categoriesList.scrollWidth - categoriesList.clientWidth;
  catPrevBtn.hidden = categoriesList.scrollLeft <= 4;
  catNextBtn.hidden = maxScroll <= 4 || categoriesList.scrollLeft >= maxScroll - 4;
}

catPrevBtn.addEventListener("click", () => {
  categoriesList.scrollBy({ left: -240, behavior: "smooth" });
});

catNextBtn.addEventListener("click", () => {
  categoriesList.scrollBy({ left: 240, behavior: "smooth" });
});

categoriesList.addEventListener("scroll", updateCategoryArrows, { passive: true });
window.addEventListener("resize", updateCategoryArrows, { passive: true });

function getFilteredProducts() {
  const term = state.busqueda.trim().toLowerCase();
  return PRODUCTOS.filter((prod) => {
    if (!prod.stock) return false;
    const matchSearch = !term || prod.nombre.toLowerCase().includes(term) || prod.categoria.toLowerCase().includes(term);
    if (!matchSearch) return false;
    if (term) return true; // Si busca por texto, busca en todo el catálogo
    if (state.categoriaActiva === "Destacados") return prod.destacado;
    return prod.categoria === state.categoriaActiva;
  });
}

function renderProducts() {
  const lista = getFilteredProducts();
  catalogHeading.textContent = state.busqueda.trim() ? `Resultados para "${state.busqueda}"` : state.categoriaActiva;
  resultsCount.textContent = `${lista.length} ${lista.length === 1 ? "producto" : "productos"}`;

  productsGrid.replaceChildren();
  emptyState.hidden = lista.length > 0;

  lista.forEach((prod, index) => {
    const card = document.createElement("article");
    card.className = `product-card${prod.destacado ? " is-star" : ""}`;
    card.style.setProperty("--stagger", String(Math.min(index, 10)));

    const media = document.createElement("div");
    media.className = "product-media";

    const img = document.createElement("img");
    img.src = prod.imagen;
    img.alt = prod.nombre;
    img.className = "product-img";
    img.loading = index < 4 ? "eager" : "lazy";
    media.appendChild(img);

    if (prod.precioAnterior && prod.precioAnterior > prod.precio) {
      const badge = document.createElement("span");
      badge.className = "badge-offer";
      badge.textContent = "Oferta";
      media.appendChild(badge);
    }

    const body = document.createElement("div");
    body.className = "product-body";

    const catTag = document.createElement("span");
    catTag.className = "product-cat";
    catTag.textContent = prod.categoria;

    const title = document.createElement("h3");
    title.className = "product-name";
    title.textContent = prod.nombre;

    const priceBlock = document.createElement("div");
    priceBlock.className = "price-block";

    if (prod.precioAnterior && prod.precioAnterior > prod.precio) {
      const oldPrice = document.createElement("span");
      oldPrice.className = "price-old";
      oldPrice.textContent = money.format(prod.precioAnterior);
      priceBlock.appendChild(oldPrice);
    }

    const currentPrice = document.createElement("span");
    currentPrice.className = "price-current";
    currentPrice.textContent = money.format(prod.precio);
    priceBlock.appendChild(currentPrice);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-add";
    const tieneVariantes = prod.variantes && prod.variantes.length > 0;
    btn.textContent = tieneVariantes ? "Elegir opción" : "Agregar al carrito";

    btn.addEventListener("click", () => {
      if (tieneVariantes) {
        openProductModal(prod);
      } else {
        triggerAddFeedback(btn);
        addToCart(prod, null, prod.precio);
      }
    });

    body.append(catTag, title, priceBlock, btn);
    media.addEventListener("click", () => openProductModal(prod));
    title.addEventListener("click", () => openProductModal(prod));
    card.append(media, body);
    productsGrid.appendChild(card);
  });
}

function triggerAddFeedback(button) {
  const originalText = button.textContent;
  button.classList.add("is-added");
  button.textContent = "✓ Agregado";
  setTimeout(() => {
    button.classList.remove("is-added");
    button.textContent = originalText;
  }, 850);
}

//Se añade una precarga de las imagenes para eliminar ruido visual
  function preloadGalleryImages(urls) {
    urls.forEach((url, index) => {
      if (index === 0) return;
      const img = new Image();
      img.decoding = "async";
      img.src = url;
      // Fuerza la decodificación en memoria antes de que el usuario toque la flecha
      if (img.decode) {
        img.decode().catch(() => {});
      }
    });
  }

function openProductModal(producto) {
  state.productoSeleccionado = producto;
  state.varianteIndex = 0;

  state.galeriaActual = (producto.imagenes && producto.imagenes.length > 0)
    ? producto.imagenes
    : [producto.imagen];
  state.imagenIndex = 0;
  renderDetailGallery();
  preloadGalleryImages(state.galeriaActual); // <-- llamo a la funcion de precarga
  
  
  detailCategory.textContent = producto.categoria;
  detailTitle.textContent = producto.nombre;

  const tieneOferta = producto.precioAnterior && producto.precioAnterior > producto.precio;
  detailOfferBadge.hidden = !tieneOferta;
  detailOldPrice.hidden = !tieneOferta;
  if (tieneOferta) {
    detailOldPrice.textContent = money.format(producto.precioAnterior);
  }

  if (producto.descripcion) {
    detailDescription.textContent = producto.descripcion;
    detailDescription.hidden = false;
  } else {
    detailDescription.hidden = true;
  }

  const tieneVariantes = producto.variantes && producto.variantes.length > 0;
  detailVariantsWrap.hidden = !tieneVariantes;

  if (tieneVariantes) {
    renderDetailVariants();
  }

  updateDetailPricing(producto.precio);
  const url = new URL(window.location.href);
  url.searchParams.set("producto", producto.id);
  history.replaceState(null, "", url);

  detailShareBtn.classList.remove("is-copied");
  detailShareText.textContent = "Compartir";
  productDialog.showModal();
}

function renderDetailGallery() {
  const total = state.galeriaActual.length;
  const prod = state.productoSeleccionado;

  detailImg.src = state.galeriaActual[state.imagenIndex];
  detailImg.alt = `${prod.nombre} - Foto ${state.imagenIndex + 1} de ${total}`;

  const hayVarias = total > 1;
  detailPrevImgBtn.hidden = !hayVarias;
  detailNextImgBtn.hidden = !hayVarias;
  detailImgCounter.hidden = !hayVarias;

  if (hayVarias) {
    detailImgCounter.textContent = `${state.imagenIndex + 1} / ${total}`;
  }
}

function changeGalleryImage(delta) {
  const total = state.galeriaActual.length;
  if (total <= 1) return;
  state.imagenIndex = (state.imagenIndex + delta + total) % total;
  renderDetailGallery();
}
//Con esto elimina el delay del click
function bindGalleryNavButton(btn, delta) {
  btn.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    changeGalleryImage(delta);
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      changeGalleryImage(delta);
    }
  });
}

bindGalleryNavButton(detailPrevImgBtn, -1);
bindGalleryNavButton(detailNextImgBtn, 1);

productDialog.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") changeGalleryImage(-1);
  if (e.key === "ArrowRight") changeGalleryImage(1);
});

function updateDetailPricing(precioActual) {
  const descuento = STORE_CONFIG.descuentoTransferencia;
  const precioTransf = Math.round(precioActual * (1 - descuento));
  const valorCuota = Math.round(precioActual / STORE_CONFIG.cantidadCuotas);

  detailPrice.textContent = money.format(precioActual);
  detailTransferTag.textContent = `${money.format(precioTransf)} por transferencia`;
  detailInstallments.textContent = `O hasta ${STORE_CONFIG.cantidadCuotas} cuotas sin interés de ${money.format(valorCuota)}`;
}

function renderDetailVariants() {
  const prod = state.productoSeleccionado;
  detailVariantOptions.replaceChildren();

  prod.variantes.forEach((variante, idx) => {
    const finalPrice = prod.precio + (variante.precioExtra || 0);
    const optionBtn = document.createElement("button");
    optionBtn.type = "button";
    optionBtn.className = "variant-option";
    optionBtn.setAttribute("role", "radio");
    optionBtn.setAttribute("aria-checked", String(state.varianteIndex === idx));

    const labelSpan = document.createElement("span");
    labelSpan.textContent = variante.nombre;

    const priceSpan = document.createElement("strong");
    priceSpan.textContent = money.format(finalPrice);

    optionBtn.append(labelSpan, priceSpan);
    optionBtn.addEventListener("click", () => {
      state.varianteIndex = idx;
      renderDetailVariants();
      updateDetailPricing(finalPrice);
    });
    detailVariantOptions.appendChild(optionBtn);
  });
}

detailAddBtn.addEventListener("click", () => {
  const prod = state.productoSeleccionado;
  if (!prod) return;

  const tieneVariantes = prod.variantes && prod.variantes.length > 0;
  if (tieneVariantes) {
    const variante = prod.variantes[state.varianteIndex];
    const precioFinal = prod.precio + (variante.precioExtra || 0);
    productDialog.close();
    addToCart(prod, variante.nombre, precioFinal);
  } else {
    productDialog.close();
    addToCart(prod, null, prod.precio);
  }
});

closeDetailBtn.addEventListener("click", () => productDialog.close()); /*cerrar la ventana del producto con la cruz*/
productDialog.addEventListener("click", (e) => {                      /*cerrar  la ventana del prodcuto tocando el fondo/backdrop*/
  if (e.target === productDialog) {
    productDialog.close();
  }
});

// liampar ?producto= de la URL cuando se cierra el modal
productDialog.addEventListener("close", () => {
  const url = new URL(window.location.href);
  if (url.searchParams.has("producto")) {
    url.searchParams.delete("producto");
    history.replaceState(null, "", url);
  }
})

//logica responsiva del boton compartir
detailShareBtn.addEventListener("click", async () => {
  const prod = state.productoSeleccionado;
  if (!prod) return;

  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.set("producto", prod.id);
  const urlFinal = shareUrl.toString();

  // En celulares compatibles abre el menú nativo (WhatsApp, Instagram, etc.)
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${prod.nombre} | ${STORE_CONFIG.nombreTienda}`,
        text: `Mirá este producto en ${STORE_CONFIG.nombreTienda}: ${prod.nombre}`,
        url: urlFinal
      });
      return;
    } catch (err) {
      if (err.name === "AbortError") return; // El usuario canceló el menú
    }
  }

  // En PC (o si falla navigator.share) copia el link directo al portapapeles
  try {
    await navigator.clipboard.writeText(urlFinal);
    detailShareBtn.classList.add("is-copied");
    detailShareText.textContent = "✓ Link copiado";
    setTimeout(() => {
      detailShareBtn.classList.remove("is-copied");
      detailShareText.textContent = "Compartir";
    }, 1800);
  } catch {
    prompt("Copiá este enlace para compartir el producto:", urlFinal);
  }
});

function addToCart(producto, varianteNombre, precioUnitario) {
  const key = `${producto.id}::${varianteNombre || "base"}`;
  const existing = state.carrito.find((item) => item.key === key);

  if (existing) {
    existing.cantidad += 1;
  } else {
    state.carrito.push({
      key,
      id: producto.id,
      nombre: producto.nombre,
      variante: varianteNombre,
      precio: precioUnitario,
      imagen: producto.imagen,
      recomendadoId: producto.recomendadoId || null,
      cantidad: 1
    });
  }

  saveCart();
  renderCart();
  openCart();
}

function updateQuantity(key, delta) {
  const index = state.carrito.findIndex((item) => item.key === key);
  if (index === -1) return;

  state.carrito[index].cantidad += delta;
  if (state.carrito[index].cantidad <= 0) {
    state.carrito.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function renderCart() {
  const totalItems = state.carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const subtotal = state.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  cartBadge.textContent = String(totalItems);
  drawerCount.textContent = String(totalItems);

  cartItemsList.replaceChildren();

  if (state.carrito.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "cart-empty-msg";
    emptyMsg.textContent = "Todavía no agregaste productos a tu carrito.";
    cartItemsList.appendChild(emptyMsg);
    shippingBarWrap.hidden = true;
    crossSellBox.hidden = true;
    drawerFooter.hidden = true;
    return;
  }

  drawerFooter.hidden = false;

  // Render items
  state.carrito.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.nombre;
    img.className = "cart-item-img";

    const info = document.createElement("div");
    info.className = "cart-item-info";

    const name = document.createElement("h3");
    name.className = "cart-item-name";
    name.textContent = item.nombre;
    info.appendChild(name);

    if (item.variante) {
      const varText = document.createElement("p");
      varText.className = "cart-item-variant";
      varText.textContent = item.variante;
      info.appendChild(varText);
    }

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    const itemTotal = document.createElement("strong");
    itemTotal.textContent = money.format(item.precio * item.cantidad);

    const qtyBox = document.createElement("div");
    qtyBox.className = "qty-box";

    const minusBtn = document.createElement("button");
    minusBtn.type = "button";
    minusBtn.className = "qty-btn";
    minusBtn.textContent = "−";
    minusBtn.setAttribute("aria-label", `Quitar una unidad de ${item.nombre}`);
    minusBtn.addEventListener("click", () => updateQuantity(item.key, -1));

    const qtyVal = document.createElement("span");
    qtyVal.className = "qty-val";
    qtyVal.textContent = String(item.cantidad);

    const plusBtn = document.createElement("button");
    plusBtn.type = "button";
    plusBtn.className = "qty-btn";
    plusBtn.textContent = "+";
    plusBtn.setAttribute("aria-label", `Sumar una unidad de ${item.nombre}`);
    plusBtn.addEventListener("click", () => updateQuantity(item.key, 1));

    qtyBox.append(minusBtn, qtyVal, plusBtn);
    controls.append(itemTotal, qtyBox);
    info.appendChild(controls);
    row.append(img, info);
    cartItemsList.appendChild(row);
  });

  // 2. Barra condicional de envío gratis
  if (STORE_CONFIG.envioGratisActivo) {
    shippingBarWrap.hidden = false;
    const target = STORE_CONFIG.montoEnvioGratis;
    const pct = Math.min(100, Math.round((subtotal / target) * 100));
    shippingProgressBar.setAttribute("aria-valuenow", String(pct));
    shippingProgressFill.style.width = `${pct}%`;

    if (subtotal >= target) {
      shippingText.textContent = "🎉 ¡Genial! Tenés envío gratis en Córdoba Capital";
      shippingProgressFill.classList.add("is-complete");
    } else {
      const faltante = target - subtotal;
      shippingText.textContent = `🚚 Te faltan ${money.format(faltante)} para envío gratis`;
      shippingProgressFill.classList.remove("is-complete");
    }
  } else {
    shippingBarWrap.hidden = true;
  }

  // 3. Producto recomendado único (sin variantes obligatorias para agregar de 1 toque)
  renderCrossSell();

  // 4. Totales con transferencia y cuotas
  const descuento = STORE_CONFIG.descuentoTransferencia;
  const totalTransferencia = Math.round(subtotal * (1 - descuento));
  const valorCuota = Math.round(subtotal / STORE_CONFIG.cantidadCuotas);

  subtotalValue.textContent = money.format(subtotal);
  transferDiscountLabel.textContent = `${Math.round(descuento * 100)}%`;
  transferValue.textContent = money.format(totalTransferencia);
  installmentsText.textContent = `O hasta ${STORE_CONFIG.cantidadCuotas} cuotas sin interés de ${money.format(valorCuota)}`;
}

function renderCrossSell() {
  const idsEnCarrito = new Set(state.carrito.map((i) => i.id));
  const ultimoItem = state.carrito[state.carrito.length - 1];
  const candidatoId = ultimoItem?.recomendadoId || STORE_CONFIG.crossSellFallbackId;

  let sugerido = PRODUCTOS.find((p) => p.id === candidatoId && p.stock && !idsEnCarrito.has(p.id));
  if (!sugerido) {
    sugerido = PRODUCTOS.find((p) => p.stock && !idsEnCarrito.has(p.id) && (!p.variantes || p.variantes.length === 0));
  }

  if (!sugerido) {
    crossSellBox.hidden = true;
    return;
  }

  crossSellBox.hidden = false;
  crossSellImg.src = sugerido.imagen;
  crossSellImg.alt = sugerido.nombre;
  crossSellName.textContent = sugerido.nombre;
  crossSellPrice.textContent = money.format(sugerido.precio);
  crossSellAddBtn.onclick = () => addToCart(sugerido, null, sugerido.precio);
}

function openCart() {
  cartBackdrop.hidden = false;
  requestAnimationFrame(() => {
    cartBackdrop.classList.add("is-open");
    cartDrawer.classList.add("is-open");
  });
  cartDrawer.setAttribute("aria-hidden", "false");
  openCartBtn.setAttribute("aria-expanded", "true");
}

function closeCart() {
  cartBackdrop.classList.remove("is-open");
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  openCartBtn.setAttribute("aria-expanded", "false");
  setTimeout(() => {
    cartBackdrop.hidden = true;
  }, 280);
}

checkoutWpBtn.addEventListener("click", () => {
  if (state.carrito.length === 0) return;

  const subtotal = state.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalTransferencia = Math.round(subtotal * (1 - STORE_CONFIG.descuentoTransferencia));

  const lineasProductos = state.carrito.map((item) => {
    const varTxt = item.variante ? ` (${item.variante})` : "";
    return `• ${item.cantidad}x ${item.nombre}${varTxt} - ${money.format(item.precio * item.cantidad)}`;
  });

  const mensaje = [
    `Hola *${STORE_CONFIG.nombreTienda}*! Quiero realizar el siguiente pedido desde la web:`,
    "",
    ...lineasProductos,
    "",
    `*Subtotal lista / ${STORE_CONFIG.cantidadCuotas} cuotas:* ${money.format(subtotal)}`,
    `*Total con transferencia (${Math.round(STORE_CONFIG.descuentoTransferencia * 100)}% OFF):* ${money.format(totalTransferencia)}`,
    "",
    "¿Me confirman stock y coordinación de entrega?"
  ].join("\n");

  const url = `https://wa.me/${STORE_CONFIG.telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

// Eventos globales
openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cartDrawer.classList.contains("is-open")) {
    closeCart();
  }
});

searchInput.addEventListener("input", (e) => {
  state.busqueda = e.target.value;
  renderProducts();
});

function openProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("producto");
  if (!productId) return;

  const producto = PRODUCTOS.find((p) => p.id === productId && p.stock);
  if (producto) {
    openProductModal(producto);
  }
}

// Inicialización
renderCategories();
renderProducts();
renderCart();
openProductFromUrl();