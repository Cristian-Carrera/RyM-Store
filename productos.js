export const CATEGORIAS = [
  "Destacados",
  "Espejos",
  "Deco & Iluminación",
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
      "img/espejos/espejo_portal.webp",
      "img/espejos/espejo_portal2.webp",
      "img/espejos/espejo_portal3.webp",
      "img/espejos/espejo_portal4.webp"
    ],
    variantes: [
      { nombre: "150x60 cm", precioExtra: 0 }
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
    precio: 10000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "taza-calentadora",
    imagen: "img/espejos/espejo_redondo.webp",
    variantes: [
      { nombre: " 20 cm ", precioExtra: 0 },
      { nombre: " 30 cm ", precioExtra: 2700 },
      { nombre: " 40 cm ", precioExtra: 10400 },
      { nombre: " 50 cm ", precioExtra: 19100 },
      { nombre: " 60 cm ", precioExtra: 25100 },
      { nombre: " 70 cm ", precioExtra: 35700 },
      { nombre: " 80 cm ", precioExtra: 44600 },
      { nombre: " 90 cm ", precioExtra: 56900 },
      { nombre: " 100 cm ", precioExtra: 67500 },
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
  //{
  //  id: "esp-cuadrado",
  //  nombre: "Espejo cuadrado",
  //  categoria: "Espejos",
  //  precio: 10000,
  //  precioAnterior: null,
  //  destacado: true,
  //  stock: true,
  //  recomendadoId: "taza-calentadora",
  //  imagen: "",
  //  variantes: [
  //    { nombre: " 20 cm ", precioExtra: 0 },
  //    { nombre: " 30 cm ", precioExtra: 2700 },
  //    { nombre: " 40 cm ", precioExtra: 10400 },
  //    { nombre: " 50 cm ", precioExtra: 19100 },
  //    { nombre: " 60 cm ", precioExtra: 25100 },
  //    { nombre: " 70 cm ", precioExtra: 35700 },
  //    { nombre: " 80 cm ", precioExtra: 44600 },
  //    { nombre: " 90 cm ", precioExtra: 56900 },
  //    { nombre: " 100 cm ", precioExtra: 67500 },
  //  ]
  //},
  {
    id: "esp-cuadrado-esmerilado",
    nombre: "Espejo cuadrado esmerilado LED Touch",
    categoria: "Espejos",
    precio: 10000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "piso-vinilico-madera",
    imagen: "img/espejos/espejo_cuadrado_esmerilado.webp",
    imagenes:[
      "img/espejos/espejo_cuadrado_esmerilado.webp"
      
    ],
    variantes: [
      //{ nombre: " 40 cm ", precioExtra: 10400 },
      //{ nombre: " 50 cm ", precioExtra: 19100 },
      //{ nombre: " 60 cm ", precioExtra: 25100 },
      //{ nombre: " 70 cm ", precioExtra: 35700 },
      //{ nombre: " 80 cm ", precioExtra: 44600 },
      //{ nombre: " 90 cm ", precioExtra: 56900 },
      //{ nombre: " 100 cm ", precioExtra: 67500 },
    ]
  },
  {
    id: "esp-rectangular",
    nombre: "Espejo rectangular",
    categoria: "Espejos",
    precio: 54000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "tecno-estufa",
    imagen: "img/espejos/espejo_rectangular.webp",
    imagenes:[
      "img/espejos/espejo_rectangular.webp",
      "img/espejos/espejo_rectangular2.webp",
      "img/espejos/espejo_rectangular3.webp"
    ],
    variantes: []
  },
  {
    id: "esp-rectangular-esmerilado",
    nombre: "Espejo rectangular esmerilado",
    categoria: "Espejos",
    precio: 54000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "cascada-led",
    imagen: "img/espejos/espejo_rectangular_esmerilado.webp",
    imagenes:[
      "img/espejos/espejo_esmerilado.webp",
      "img/espejos/espejo_esmerilado2.webp",
      "img/espejos/espejo_esmerilado3.webp",
      "img/espejos/espejo_esmerilado4.webp"
    ],
    variantes: []
  },
  {
    id: "esp-rectangular-retroiluminado",
    nombre: "Espejo rectangular retroiluminado",
    categoria: "Espejos",
    precio: 54000,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "textil-cortina-tropical",
    imagen: "img/espejos/espejo_rectangular_retroiluminado.webp",
    imagenes:[
      "img/espejos/espejo_rectangular_retroiluminado.webp",
      "img/espejos/espejo_rectangular_retroiluminado2.webp",
      "img/espejos/espejo_rectangular_retroiluminado3.webp"
    ],
    variantes: [
      {nombre:"40x80 cm", precioExtra: 0},
      {nombre:"40x120 cm", precioExtra: 0},
      {nombre:"50x80 cm", precioExtra: 0},
      {nombre:"50x100 cm", precioExtra: 0},
      {nombre:"50x120 cm", precioExtra: 0},
      {nombre:"50x140 cm", precioExtra: 0},
      {nombre:"60x120 cm", precioExtra: 0},
      {nombre:"60x140 cm", precioExtra: 0},
      {nombre:"60x160 cm", precioExtra: 0},
      {nombre:"70x120 cm", precioExtra: 0},
      {nombre:"70x140 cm", precioExtra: 0},
      {nombre:"70x150 cm", precioExtra: 0},
      {nombre:"70x170 cm", precioExtra: 0},
      {nombre:"80x140 cm", precioExtra: 0},
      {nombre:"80x170 cm", precioExtra: 0},
      {nombre:"80x180 cm", precioExtra: 0},
      {nombre:"90x120 cm", precioExtra: 0},
      {nombre:"90x180 cm", precioExtra: 0}
    ],
    descripcion:
    `Se hacen por encargo
     Demora de 7 a 10 días hábiles
    
     Luz cálida, fria o 16 colores
    
     Se le puede agregar LED Touch por una suma de $15000 a cualquier modelo
    
     Borde pulido o PVC en color negro, blanco o marron`
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
    categoria: "Deco & Iluminación",
    precio: 0,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "taza-calentadora",
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
    id:"arbol-navidad",
    nombre:"Arbol de navidad",
    categoria:"Hogar",
    precio: 0,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "cascada-led",
    imagen:"img/deco/arbol_navidad.webp",
    imagenes:[
      "img/deco/arbol_navidad.webp"
    ],
    variantes:[],
    descripcion:``
  },
  {
    id:"cascada-led",
    nombre:"Cascada LED",
    categoria:"Deco & iluminación",
    precio: 0,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "juguera-usb",
    imagen:"img/deco/cascada_led.webp",
    imagenes:[
      "img/deco/cascada_led.webp"
    ],
    variantes:[],
    descripcion:``
  },
  {
    id:"piso-vinilico-madera",
    nombre:"Piso vinílico símil madera",
    categoria:"Deco & iluminación",
    precio: 0,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "esp-portal-150",
    imagen:"img/deco/piso_vinilico_simil_madera.webp",
    imagenes:[
      "img/deco/piso_vinilico_simil_madera.webp",
      "img/deco/piso_vinilico_simil_madera2.webp",
      "img/deco/piso_vinilico_simil_madera3.webp"
    ],
    variantes:[],
    descripcion:
    `PISOS VINILICOS SÍMIL MADERA
     De alto tránsito
     
     Dimensiones: 2mm de espesor
     
     Tenemos dos tonalidades distintas
     Las 8 unidades conforman un metro cuadrado

     🧼Te dejamos un tip!
     A la hora de limpiar se recomienda
     pasar el trapo o la Mopa.
     No se recomienda baldear`
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
  //{
  //  id: "textil-set-bano",
  //  nombre: "Set de Baño Cortina + Alfombra",
  //  categoria: "Textil & Blanco",
  //  precio: 18500,
  //  precioAnterior: null,
  //  destacado: false,
  //  stock: true,
  //  recomendadoId: "bazar-taza-calentadora",
  //  imagen: "https://placehold.co/500x500/3f3f46/ffffff?text=Set+de+Bano",
  //  variantes: []
  //},
  {
    id: "textil-manta-escocesa",
    nombre: "Manta Escocesa Suave 2 Plazas",
    categoria: "Textil & Blanco",
    precio: 24000,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "taza-calentadora",
    imagen: "img/textil/manta_escocesa.webp",
    variantes: []
  },
  {
    id: "taza-calentadora",
    nombre: "Set Taza Cerámica + Base Calentadora USB",
    categoria: "Bazar & Cocina",
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
    id: "set-asador",
    nombre: "Set asador de acero",
    categoria: "Bazar & Cocina",
    precio: 35500,
    precioAnterior: null,
    destacado: true,
    stock: true,
    recomendadoId: "set-cuhillos",
    imagen: "img/utensilios/set_asador.webp",
    imagenes:[
      "img/utensilios/set_asador.webp",
      "img/utensilios/set_asador2.webp"
    ],
    variantes: []
  },
  {
    id: "set-cuchillos",
    nombre: "Set de 6 cuchillos",
    categoria: "Bazar & Cocina",
    precio: 25900,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "taza-calentadora",
    imagen: "img/utensilios/set_seis_cuchillos.webp",
    imagenes:[
      "img/utensilios/set_seis_cuchillos.webp"
    ],
    variantes: []
  },
  {
    id: "escurridor",
    nombre: "Escurridor de platos",
    categoria: "Bazar & Cocina",
    precio: 0,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "set-asador",
    imagen: "img/vajillas/escurridor_platos.webp",
    imagenes:[
      "img/vajillas/escurridor_platos.webp"
    ],
    variantes: []
  },
  {
    id: "set-ollas",
    nombre: "SET de 3 ollas",
    categoria: "Bazar & Cocina",
    precio: 0,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "set-asador",
    imagen: "img/vajillas/set_ollas.webp",
    imagenes:[
      "img/vajillas/set_ollas.webp"
    ],
    variantes: []
  },
  {
    id: "vaso-fernet",
    nombre: "Vaso de FERNET",
    categoria: "Bazar & Cocina",
    precio: 0,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "set-asador",
    imagen: "img/vajillas/vaso_fernet.webp",
    imagenes:[
      "img/vajillas/vaso_fernet.webp"
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
    id: "juguetes-basta",
    nombre: "Juego de mesa BASTA",
    categoria: "Peluches & Kids",
    precio: 0,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "img/juguetes/basta_juego.webp",
    variantes: []
  },
  {
    id: "juguetes-metegol-mesa",
    nombre: "Metegol de Mesa Madera Compacto",
    categoria: "Peluches & Kids",
    precio: 36000,
    precioAnterior: 42000,
    destacado: false,
    stock: true,
    recomendadoId: "",
    imagen: "img/juguetes/mini_metegol.webp",
    variantes: []
  },
  {
    id: "juguetes-no-derribes-el-muro",
    nombre: "Juego de mesa NO DERRIBES EL MURO",
    categoria: "Peluches & Kids",
    precio: 15000,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "camara-infantil",
    imagen: "img/juguetes/no_derribes_muro.webp",
    variantes: []
  },
  {
    id: "juguetes-valija-herramientas",
    nombre: "Valija de herramientas",
    categoria: "Peluches & Kids",
    precio: 29000,
    precioAnterior: null,
    destacado: false,
    stock: true,
    recomendadoId: "juguetes-basta",
    imagen: "img/juguetes/valija_herramientas.webp",
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
    id: "tecno-aspiradora",
    nombre: "Aspiradora electrica",
    categoria: "Audio & Tecno",
    precio: 59000,
    precioAnterior: 65000,
    destacado: true,
    stock: true,
    recomendadoId: "juguera_usb",
    imagen: "img/tecno/aspiradora_orix.webp",
    imagenes:[
      "img/tecno/aspiradora_orix.webp",
      "img/tecno/aspiradora_orix2.webp"
    ],
    variantes: [],
    descripcion:
    `Aspiradora ORYX 2 en 1
     Su innovador diseño permite utilizarla de manera vertical o de mano
     Está equipada con 10 accesorios intercambiables
     Cuenta con un motor de 400w
     Su mopa desmontable con tanque de agua permite aspirar y fregar simultáneamente
     Cuenta con un depósito de polvo de 1,2 litros
     Trae un cable de 5m de largo
     Filtro lavable `
  },
  {
    id: "tecno-foco-led",
    nombre: "Camara de seguridad",
    categoria: "Audio & Tecno",
    precio: 27000,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "img/tecno/camara_foco.webp",
    imagenes:[
      "img/tecno/camara_foco.webp",
      "img/tecno/camara_foco2.webp"
    ],
    variantes: [
      {nombre:" 1 unidad ", precioExtra: 0},
      {nombre:" 2 unidades por", precioExtra: 23000}],
    descripcion:
    `Cámara foco OM
     Full HD
     Visión 360°
     Conexion al celular`
  },
  {
    id: "tecno-game-stick",
    nombre: "Consola game stick 4K",
    categoria: "Audio & Tecno",
    precio: 0,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "tech-camara-infantil",
    imagen: "img/tecno/game_stick.webp",
    variantes: [],
    descripcion:
    `INCLUYE
     2 joystick inalambricos`
  },
  {
    id: "tecno-juguera-usb",
    nombre: "Juguera USB",
    categoria: "Audio & Tecno",
    precio: 35000,
    precioAnterior: 0,
    destacado: false,
    stock: true,
    recomendadoId: "tecno-aspiradora",
    imagen: "img/tecno/juguera_usb.webp",
    variantes: [],
    descripcion:
    `Recargable por USB`
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
      "img/creadores_contenido/aro_rgb.webp",
      "img/creadores_contenido/aro_rgb2.webp"
    ],
    variantes: [
      { nombre: "26 cm ", precioExtra: 0 },
      { nombre: "36 cm ", precioExtra: 5100 },
      { nombre: "45 cm ", precioExtra: 25100 }
    ]
  },
  {
    id:"creadores-mic",
    nombre:"Microfo k9",
    categoria:"Cradores de contenido",
    precio: 19900,
    precioAnterior: 24500,
    destacado: false,
    stock: true,
    recomendadoId: "creadores-aro-rgb",
    imagen:"img/creadores_contenido/microfono_k9.webp",
    imagenes:[
      "img/creadores_contenido/microfo_k9.webp",
      "img/creadores_contenido/microfono_k9_2.webp"
    ],
    variantes:[],
    descripcion:
    `INCLUYE:
    Dos microfonos con pinza
    Conexion por USB-C`
  }
];