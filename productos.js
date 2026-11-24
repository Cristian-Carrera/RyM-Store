export const CATEGORIAS = [
  "Destacados",
  "Espejos",
  "Deco e Iluminación",
  "Textil & Blanco",
  "Bazar y Cocina",
  "Peluches & Kids",
  "Audio & Tecno",
  "Creadores de contenido",
  "Veladores & Humificadores",
  "Escolar"
];

export const PRODUCTOS = [
  
  {
    id: "esp-portal-150",
    nombre: "Espejo Portal Cuerpo Entero 150x60",
    categoria: "Espejos",
    precio: 74600,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "deco-zapatero-viral",
    imagen: "https://placehold.co/500x500/18181b/ffffff?text=Espejo+Portal",
    variantes: [
      { nombre: "Sin luz (150x60 cm)", precioExtra: 0 }
    ]
  },
  {
    id: "esp-portal-160",
    nombre: "Espejo Portal Cuerpo Entero 160x60",
    categoria: "Espejos",
    precio: 85000,
    precioAnterior: 98000,
    destacado: true,
    stock: true,
    recomendadoId: "deco-zapatero-viral",
    imagen: "img/espejos/espejo_portal_retroiluminado.webp",
    imagenes:[
      "img/espejos/espejo_portal_esmerilado.webp",
      "img/espejos/espejo_portal_esmerilado2.webp",
      "img/espejos/espejo_portal_retroiluminado2.webp",
      "img/espejos/espejo_portal_retroiluminado3.webp",
      "img/espejos/espejo_portal.webp",
      "img/espejos/espejo_portal5.webp"
    ],
    variantes: [
      { nombre: "Sin luz (160x60 cm)", precioExtra: 0 },
      { nombre: "Sistema con 3 luces LED (Fría/Cálida/Neutra)", precioExtra: 18000 }
    ]
  },
  {
    id: "esp-portal-170",
    nombre: "Espejo Portal Cuerpo Entero 170x70",
    categoria: "Espejos",
    precio: 92400,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "deco-zapatero-viral",
    imagen: "https://placehold.co/500x500/18181b/ffffff?text=Espejo+Portal",
    variantes: [
      { nombre: "Sin luz (170x70 cm)", precioExtra: 0 }
    ]
  },
  {
    id: "esp-organico-led",
    nombre: "Espejo Orgánico Irregular",
    categoria: "Espejos",
    precio: 62000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "bazar-taza-calentadora",
    imagen: "https://placehold.co/500x500/18181b/ffffff?text=Espejo+Organico",
    variantes: [
      { nombre: "Mediano 80x50 cm (Sin luz)", precioExtra: 0 },
      { nombre: "Mediano 80x50 cm (Con LED cálido)", precioExtra: 12000 },
      { nombre: "Grande 120x60 cm (Con LED 3 tonos)", precioExtra: 26000 }
    ]
  },
  {
    id: "esp-esmerilado-redondo",
    nombre: "Espejo Redondo Esmerilado LED Touch",
    categoria: "Espejos",
    precio: 54000,
    precioAnterior: 61000,
    destacado: true,
    stock: true,
    recomendadoId: "textil-set-bano",
    imagen: "https://placehold.co/500x500/18181b/ffffff?text=Espejo+Redondo+LED",
    variantes: [
      { nombre: "60 cm diámetro - 3 luces", precioExtra: 0 },
      { nombre: "80 cm diámetro - 3 luces", precioExtra: 15000 }
    ]
  },
  {
    id: "deco-zapatero-viral",
    nombre: "Zapatero Organizador Viral",
    categoria: "Deco e Iluminación",
    precio: 15000,
    precioAnterior: 19500,
    destacado: true,
    stock: true,
    recomendadoId: "textil-cortina-blackout",
    imagen: "https://placehold.co/500x500/27272a/ffffff?text=Zapatero+Viral",
    variantes: []
  },
  {
    id: "deco-capelina-hilo",
    nombre: "Lámpara Capelina Hilo Polipropileno",
    categoria: "Deco e Iluminación",
    precio: 34000,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "bazar-taza-calentadora",
    imagen: "https://placehold.co/500x500/27272a/ffffff?text=Capelina+Tejida",
    variantes: [
      { nombre: "50 cm - Natural / Blanco", precioExtra: 0 },
      { nombre: "60 cm - Natural / Negro", precioExtra: 6000 },
      { nombre: "70 cm - Natural / Gris", precioExtra: 12000 }
    ]
  },
  {
    id: "textil-cortina-blackout",
    nombre: "Cortinas Blackout 100% (Paño 1.30m)",
    categoria: "Textil & Blanco",
    precio: 28000,
    precioAnterior: 33000,
    destacado: true,
    stock: true,
    recomendadoId: "textil-manta-escocesa",
    imagen: "https://placehold.co/500x500/3f3f46/ffffff?text=Cortina+Blackout",
    variantes: []
  },
  {
    id: "textil-set-bano",
    nombre: "Set de Baño Cortina + Alfombra",
    categoria: "Textil & Blanco",
    precio: 18500,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "bazar-taza-calentadora",
    imagen: "https://placehold.co/500x500/3f3f46/ffffff?text=Set+de+Bano",
    variantes: []
  },
  {
    id: "textil-manta-escocesa",
    nombre: "Manta Escocesa Suave 2 Plazas",
    categoria: "Textil & Blanco",
    precio: 24000,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "bazar-taza-calentadora",
    imagen: "https://placehold.co/500x500/3f3f46/ffffff?text=Manta+Escocesa",
    variantes: []
  },
  {
    id: "bazar-taza-calentadora",
    nombre: "Set Taza Cerámica + Base Calentadora USB",
    categoria: "Bazar y Cocina",
    precio: 16500,
    precioAnterior: 20000,
    destacado: true,
    stock: true,
    recomendadoId: "deco-zapatero-viral",
    imagen: "https://placehold.co/500x500/52525b/ffffff?text=Taza+Calentadora",
    variantes: []
  },
  {
    id: "tech-camara-infantil",
    nombre: "Cámara Digital Infantil Recargable",
    categoria: "Tech y Juguetes",
    precio: 22000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "juguetes-metegol-mesa",
    imagen: "https://placehold.co/500x500/71717a/ffffff?text=Camara+Infantil",
    variantes: []
  },
  {
    id: "juguetes-metegol-mesa",
    nombre: "Metegol de Mesa Madera Compacto",
    categoria: "Tech y Juguetes",
    precio: 36000,
    precioAnterior: 42000,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "https://placehold.co/500x500/71717a/ffffff?text=Metegol+Mesa",
    variantes: []
  },
  {
    id: "tecnologia",
    nombre: "Estufa electrica",
    categoria: "Audio & Tecno",
    precio: 35000,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "https://placehold.co/500x500/71717a/ffffff?text=Estufa+electrica",
    variantes: []
  }
];