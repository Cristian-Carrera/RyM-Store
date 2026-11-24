export const CATEGORIAS = [
  "Destacados",
  "Espejos",
  "Deco e Iluminación",
  "Textil & Blanco",
  "Hogar",
  "Bazar & Cocina",
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
    imagen: "img/espejos/espejo_portal.webp",
    imagenes:[
      "img/espejos/espejo_portal2.webp",
      "img/espejos/espejo_portal3.webp",
      "img/espejos/espejo_portal4.webp"
    ],
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
      "img/espejos/espejo_portal_retroiluminado.webp",
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
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "deco-zapatero-viral",
    imagen: "img/espejos/espejo_portal3.webp",
    variantes: [
      { nombre: "Sin luz (170x70 cm)", precioExtra: 0 }
    ]
  },
  {
    id: "esp-nube",
    nombre: "Espejo nube",
    categoria: "Espejos",
    precio: 0,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "deco-capelina",
    imagen: "img/espejos/espejo_nube2.webp",
    imagenes:[
      "img/espejos/espejo_nube2.webp",
      "img/espejos/espejo_nube.webp",
      "img/espejos/espejo_nube3.webp",
      "img/espejos/espejo_nube4.webp",
      "img/espejos/espejo_nube5.webp"
    ],
    variantes: []
  },
  {
    id: "esp-redondo",
    nombre: "Espejo redondo",
    categoria: "Espejos",
    precio: 12000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "bazar-taza-calentadora",
    imagen: "img/espejos/espejo_redondo.webp",
    variantes: [
      { nombre: " 30 cm ", precioExtra: 0 },
      { nombre: " 40 cm ", precioExtra: 7000 },
      { nombre: " 50 cm ", precioExtra: 15000 },
      { nombre: " 60 cm ", precioExtra: 20000 },
      { nombre: " 70 cm ", precioExtra: 24000 }
    ]
  },
  {
    id: "esp-redondo-esmerilado",
    nombre: "Espejo redondo esmerilado LED Touch",
    categoria: "Espejos",
    precio: 54000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "textil-set-bano",
    imagen: "img/espejos/espejo_redondo_esmerilado.webp",
    variantes: []
  },
  {
    id: "esp-redondo-retroiluminado",
    nombre: "Espejo redondo retroiluminado",
    categoria: "Espejos",
    precio: 54000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "tecno-estufa",
    imagen: "img/espejos/espejo_redondo_retroiluminado.webp",
    variantes: []
  },
  {
    id: "hogar-zapatero",
    nombre: "Zapatero Organizador",
    categoria: "Hogar",
    precio: 15000,
    precioAnterior: 19500,
    destacado: true,
    stock: true,
    recomendadoId: "textil-cortina-blackout",
    imagen: "img/hogar/zapatero.webp",
    variantes: []
  },
  {
    id: "deco-capelina",
    nombre: "Capelina Hilo Polipropileno",
    categoria: "Deco e Iluminación",
    precio: 0,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "bazar-taza-calentadora",
    imagen: "img/deco/capelina_beige.webp",
    imagenes:[
      "img/deco/capelina_beige.webp",
      "img/deco/capelina_negra.webp"
    ],
    variantes: [
      { nombre: "50 cm ", precioExtra: 0 },
      { nombre: "60 cm ", precioExtra: 0 },
      { nombre: "70 cm ", precioExtra: 0 }
    ],
    descripcion:"Colores disponibles: Blanco, negro, marrón y gris"
  },
  {
    id: "textil-cortina-tropical",
    nombre: "Cortinas tropical 2 metros",
    categoria: "Textil & Blanco",
    precio: 28000,
    precioAnterior: 33000,
    destacado: true,
    stock: true,
    recomendadoId: "textil-manta-escocesa",
    imagen: "img/textil/cortina_tropical.webp",
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
    id: "vajilla-taza-calentadora",
    nombre: "Set Taza Cerámica + Base Calentadora USB",
    categoria: "Bazar y Cocina",
    precio: 16500,
    precioAnterior: 20000,
    destacado: true,
    stock: true,
    recomendadoId: "deco-zapatero-viral",
    imagen: "img/vajillas/taza_calentadora.webp",
    imagenes:[
      "img/vajillas/taza_calentadora2.webp"
    ],
    variantes: []
  },
  {
    id: "camara-infantil",
    nombre: "Cámara Digital Infantil Recargable",
    categoria: "Peluches & Kids",
    precio: 35000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "juguetes-metegol-mesa",
    imagen: "img/juguetes/camara_infantil.webp",
    imagenes: [
      "img/juguetes/camara_infantil.webp",
      "img/juguetes/camara_infantil2.webp",
      "img/juguetes/camara_infantil3.webp",
    ],
    variantes: [],
    descripcion:
    `¡Diversión y creatividad sin pantallas!
      Caracteristicas:
      Fotos y videos HD
      Impresión térmica instantánea
      Fotos para colorear
      Batería recargable
      Enfoque HD
      Súper fácil de usar
      liviana y portátil
      
      INCLUYE:
      Cámara infantil
      Cable USB
      Correa
      6 fibrones de colores
      
      ¡Un regalo ideal para estimular la creatividad y guardar momentos divertidos!`
    
  },
  {
    id: "juguetes-metegol-mesa",
    nombre: "Metegol de Mesa Madera Compacto",
    categoria: "Peluches & Kids",
    precio: 36000,
    precioAnterior: 42000,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "https://placehold.co/500x500/71717a/ffffff?text=Metegol+Mesa",
    variantes: []
  },
  {
    id: "tecno-estufa",
    nombre: "Estufa electrica",
    categoria: "Audio & Tecno",
    precio: 35000,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "img/tecno/estufa_electrica.webp",
    variantes: []
  },
  {
    id: "creadores-aro-rgb",
    nombre: "Aro de luz RGB 26 cm + trípode",
    categoria: "Creadores de contenido",
    precio: 29900,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "img/creadores_contenido/aro_rgb.webp",
    imagenes:[
      "img/creadores_contenido/aro_rgb2.webp"
    ],
    variantes: [
      { nombre: "26 cm ", precioExtra: 0 },
      { nombre: "36 cm ", precioExtra: 5100 },
      { nombre: "45 cm ", precioExtra: 25100 }
    ]
  }
];