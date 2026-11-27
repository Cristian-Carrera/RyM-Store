import { STORE_CONFIG } from "./config.js";
import { CATEGORIAS, PRODUCTOS } from "./productos.js";

// Parser CSV robusto (soporta comas y saltos de línea dentro de descripciones)
function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || (char === "\r" && next === "\n")) && !inQuotes) {
      if (char === "\r") i++;
      row.push(cell.trim());
      if (row.some((v) => v !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell.trim());
    if (row.some((v) => v !== "")) rows.push(row);
  }

  const [headers, ...dataRows] = rows;
  if (!headers) return [];

  return dataRows.map((r) => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h.trim()] = r[idx] ?? "";
    });
    return obj;
  });
}

function parseBool(val) {
  const v = String(val).trim().toLowerCase();
  return v === "true" || v === "si" || v === "sí" || v === "1";
}

function parsePrecio(val) {
  if (!val) return 0;
  const limpio = String(val)
    .trim()
    //Si tiene decimales al final (ej: .00 o ,00 con 1 0 2 digitos), los quita primero
    .replace(/[.,]\d{1,2}$/, "")
    //Elimina signos $, espacios y cualquier separador de miles(puntos o comas)
    .replace(/[^\d-]/g, "");
  return Number(limpio) || 0;
}

// Convierte "Sin luz: 0 | Con LED: 18000" en [{ nombre: "Sin luz", precioExtra: 0 }, ...]
function parseVariantes(raw) {
  if (!raw) return [];
  return raw
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const sepIndex = item.lastIndexOf(":");
      if (sepIndex === -1) return { nombre: item, precioExtra: 0 };
      const nombre = item.slice(0, sepIndex).trim();
      const extra = Number(item.slice(sepIndex + 1).replace(/[^\d.-]/g, "")) || 0;
      return { nombre, precioExtra: extra };
    });
}

export async function cargarDatosTienda() {
  let configFinal = { ...STORE_CONFIG };
  let categoriasFinal = [...CATEGORIAS];
  let productosFinal = [...PRODUCTOS];

  try {
    const requests = [];
    if (STORE_CONFIG.sheetConfigCsvUrl?.startsWith("http")) {
      requests.push(fetch(STORE_CONFIG.sheetConfigCsvUrl, { cache: "no-store" }).then((r) => r.text()));
    } else {
      requests.push(Promise.resolve(null));
    }

    if (STORE_CONFIG.sheetProductosCsvUrl?.startsWith("http")) {
      requests.push(fetch(STORE_CONFIG.sheetProductosCsvUrl, { cache: "no-store" }).then((r) => r.text()));
    } else {
      requests.push(Promise.resolve(null));
    }

    const [configCsv, productosCsv] = await Promise.all(requests);

    if (configCsv) {
      const rows = parseCSV(configCsv);
      const map = Object.fromEntries(rows.map((r) => [r.clave, r.valor]));

      if (map.nombreTienda) configFinal.nombreTienda = map.nombreTienda;
      if (map.telefonoWhatsapp) configFinal.telefonoWhatsapp = map.telefonoWhatsapp;
      if (map.envioGratisActivo !== undefined) configFinal.envioGratisActivo = parseBool(map.envioGratisActivo);
      if (map.montoEnvioGratis) configFinal.montoEnvioGratis = Number(map.montoEnvioGratis) || 100000;
      if (map.descuentoTransferencia) {
        const desc = Number(map.descuentoTransferencia);
        configFinal.descuentoTransferencia = desc > 1 ? desc / 100 : desc;
      }
      if (map.cantidadCuotas) configFinal.cantidadCuotas = Number(map.cantidadCuotas) || 3;
      if (map.crossSellFallbackId) configFinal.crossSellFallbackId = map.crossSellFallbackId;
      if (map.categorias) {
        categoriasFinal = map.categorias.split(",").map((c) => c.trim()).filter(Boolean);
      }
    }

    if (productosCsv) {
      const rows = parseCSV(productosCsv);
      const parsed = rows
        .filter((r) => r.id && r.nombre)
        .map((r) => {
          const galeria = r.imagenes
            ? r.imagenes.split(",").map((u) => u.trim()).filter(Boolean)
            : [];
          if (r.imagen && !galeria.includes(r.imagen)) {
            galeria.unshift(r.imagen);
          }

          return {
            id: r.id,
            nombre: r.nombre,
            categoria: r.categoria || "Destacados",
            precio: parsePrecio(r.precio),
            precioAnterior: r.precioAnterior ? parsePrecio(r.precioAnterior) : null,
            destacado: parseBool(r.destacado),
            stock: parseBool(r.stock),
            recomendadoId: r.recomendadoId || null,
            imagen: r.imagen || galeria[0] || "",
            imagenes: galeria,
            variantes: parseVariantes(r.variantes),
            descripcion: r.descripcion || ""
          };
        });

      if (parsed.length > 0) {
        productosFinal = parsed;
      }
    }
  } catch (err) {
    console.warn("No se pudo leer Google Sheets, usando catálogo local:", err);
  }

  return { config: configFinal, categorias: categoriasFinal, productos: productosFinal };
}