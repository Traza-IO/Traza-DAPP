/**
 * Cliente del servicio externo de Pasaporte Digital de Producto (DPP).
 *
 * Hace un GET a `/api/dpp/passport?url=<GS1 digital link>` con el header
 * `X-API-Key` y devuelve todos los datos del passport. El resultado se mapea
 * luego a la estructura `traceability_consolidate` que consume el canister.
 *
 * Las credenciales traen un default de desarrollo, pero pueden sobreescribirse
 * sin tocar el código creando `src/.env.local` con:
 *   VITE_DPP_API_URL=...
 *   VITE_DPP_API_KEY=...
 * (no usamos `.env` de la raíz porque dfx lo regenera en cada deploy).
 */

// El servicio tiene CORS habilitado (origen + header X-API-Key), así que se
// llama directo desde el navegador en dev y prod. Override con VITE_DPP_API_URL.
const API_URL: string =
  import.meta.env.VITE_DPP_API_URL ??
  'https://web-300ixhl1vesu.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/dpp/passport';

const API_KEY: string =
  import.meta.env.VITE_DPP_API_KEY ??
  'qpk_40edd81fea4be2019e58c59998072b8ceaa79d1ef8e80a44';

/** URL GS1 de ejemplo, usada como valor por defecto en el formulario de import. */
export const DEFAULT_DPP_URL =
  'https://dpp.qapary.com/01/07750549420014/10/OP28261/21/1';

// ---------------------------------------------------------------------------
// Tipos de la respuesta del endpoint
// ---------------------------------------------------------------------------

export interface DppPassport {
  unit: {
    gtin: string;
    lote: string;
    serial: string;
    sgtin: string;
    productCode: string;
    blacklisted: boolean;
  };
  header: {
    title: string;
    traceable: boolean;
    brand: {
      name: string;
      logoUrl: string;
      social: {
        facebook: string;
        instagram: string;
        whatsapp: string;
        ecommerce: string;
      };
    };
  };
  images: string[];
  description: { title: string; collection: string; body: string };
  information: {
    name: string;
    brand: string;
    gtin: string;
    productCode: string;
    category: string;
    color: string;
    year: number | string;
    season: string;
  };
  materials: {
    composition: string;
    recycled: boolean;
    recycledPercentage: number | string | null;
    recycledInput: string | null;
  };
  packaging: {
    type: string;
    weight: number | string;
    volume: number | string;
    recycling: string;
    percentageRecycled: number | string | null;
    recycled: boolean;
  };
  care: { text: string };
  suppliers: Array<{
    name: string;
    address: string;
    ruc: string;
    gps: string;
  }>;
  manufacturing: {
    location: string;
    timeline: Array<{
      stage: string;
      startAt: string;
      endAt: string;
      responsible: string;
    }>;
  };
}

// ---------------------------------------------------------------------------
// Estructura destino (espejo de `traceability_consolidate` del canister)
// ---------------------------------------------------------------------------

interface TimeLineEntry {
  process: string;
  start_time: string;
  end_time: string;
  owner: string;
}

export interface TraceabilityConsolidate {
  id_model: string;
  id_model_export: string;
  summary_materials: string;
  name_model: string;
  brand_information: {
    logo_mestiza: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    ecommerce: string;
  };
  description_header: string;
  description_model: { name: string; collection: string; summary: string };
  materials: {
    composition: string;
    recycling: string;
    percentage_recycling: string;
    recycling_income: string;
  };
  packing: {
    pack_type: string;
    weight: string;
    volume: string;
    recycling: string;
    percentage_recycling: string;
  };
  care: { care: string[]; description: string };
  id_lot: string;
  lot_number_product: string;
  trace_supplier: Array<{
    title: string;
    ruc: string;
    location: string;
    coords: string;
  }>;
  traceability_batch: { location: string; time_line: TimeLineEntry[] };
  compliance_supplier: Array<{ supplier: string; certifications: any[] }>;
  compliance_process: { process: string; certifications: any[] };
  traceability_blockchain_lot: { time_line: any[] };
  gtin_product: string;
  id_product_parent_company: string;
  id_product_system_eu: string;
  photo_product: {
    frontal: string;
    left: string;
    later: string;
    right: string;
  };
  information_product: {
    name: string;
    brand: string;
    gtin: string;
    product_code: string;
    product_code_eu: string;
    category: string;
    size: string;
    color: string;
    year: string;
    season: string;
  };
  traceability_product: {
    time_line: TimeLineEntry[];
    full_name: string;
    company_name: string;
    ruc: string;
  };
  traceability_blockchain_product: { time_line: any[] };
}

/** Imagen pendiente de subir al canister (nombre lógico + bytes). */
export interface PendingImage {
  name: string;
  bytes: Uint8Array;
}

export interface MappedPassport {
  consolidate: TraceabilityConsolidate;
  images: PendingImage[];
}

// ---------------------------------------------------------------------------
// Llamada al endpoint
// ---------------------------------------------------------------------------

export async function fetchDppPassport(dppUrl: string): Promise<DppPassport> {
  // API_URL puede ser absoluta (prod) o relativa al proxy de Vite (dev).
  const base =
    typeof window !== 'undefined' ? window.location.origin : undefined;
  const endpoint = new URL(API_URL, base);
  endpoint.searchParams.set('url', dppUrl);

  const res = await fetch(endpoint.toString(), {
    method: 'GET',
    headers: { 'X-API-Key': API_KEY },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`El endpoint DPP respondió ${res.status}. ${body}`.trim());
  }

  return (await res.json()) as DppPassport;
}

// ---------------------------------------------------------------------------
// Utilidades de mapeo
// ---------------------------------------------------------------------------

const str = (v: unknown): string => (v === null || v === undefined ? '' : String(v));

/** Convierte un data-URI (base64 o url-encoded) a bytes. */
export function dataUriToBytes(dataUri: string): Uint8Array {
  const comma = dataUri.indexOf(',');
  if (comma === -1) return new Uint8Array();
  const meta = dataUri.slice(0, comma);
  const data = dataUri.slice(comma + 1);

  if (meta.includes('base64')) {
    const bin = atob(data);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
  return new TextEncoder().encode(decodeURIComponent(data));
}

/**
 * Separa el texto de cuidados en una lista de items (líneas que empiezan con
 * `*` o `-`) y una descripción (el resto del texto).
 */
function parseCare(text: string): { care: string[]; description: string } {
  const lines = (text || '').split('\n');
  const care: string[] = [];
  const description: string[] = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('*') || line.startsWith('-') || line.startsWith('•')) {
      care.push(line.replace(/^[*\-•]\s*/, '').trim());
    } else {
      description.push(line);
    }
  }
  return { care, description: description.join(' ') };
}

/**
 * Mapea la respuesta del endpoint a `traceability_consolidate` y recolecta las
 * imágenes (fotos + logo de marca) que deben subirse al canister por nombre.
 *
 * Las secciones que el endpoint no provee (compliance y blockchain) se dejan
 * vacías para completarlas manualmente en el formulario antes de guardar.
 */
export function mapPassportToConsolidate(p: DppPassport): MappedPassport {
  const gtin = str(p.unit?.gtin || p.information?.gtin);
  const images: PendingImage[] = [];

  // --- fotos del producto ---
  const photoSlots: Array<keyof TraceabilityConsolidate['photo_product']> = [
    'frontal',
    'left',
    'later',
    'right',
  ];
  const photoNames: Record<string, string> = {};
  (p.images || []).forEach((dataUri, idx) => {
    if (!dataUri?.startsWith('data:')) return;
    const name = `${gtin}-img-${idx}`;
    images.push({ name, bytes: dataUriToBytes(dataUri) });
    if (idx < photoSlots.length) photoNames[photoSlots[idx]] = name;
  });
  // si hay menos de 4 fotos, los slots restantes reutilizan la primera
  const firstPhoto = photoNames['frontal'] || '';

  // --- logo de marca ---
  let logoName = '';
  const logoUrl = p.header?.brand?.logoUrl;
  if (logoUrl?.startsWith('data:')) {
    logoName = `${gtin}-logo`;
    images.push({ name: logoName, bytes: dataUriToBytes(logoUrl) });
  }

  const care = parseCare(p.care?.text || '');

  const consolidate: TraceabilityConsolidate = {
    id_model: '',
    id_model_export: '',
    summary_materials: '',
    name_model: str(p.header?.title || p.information?.name),
    brand_information: {
      logo_mestiza: logoName,
      facebook: str(p.header?.brand?.social?.facebook),
      instagram: str(p.header?.brand?.social?.instagram),
      whatsapp: str(p.header?.brand?.social?.whatsapp),
      ecommerce: str(p.header?.brand?.social?.ecommerce),
    },
    description_header: '',
    description_model: {
      name: str(p.description?.title),
      collection: str(p.description?.collection),
      summary: str(p.description?.body),
    },
    materials: {
      composition: str(p.materials?.composition),
      recycling: p.materials?.recycled ? 'Sí' : '',
      percentage_recycling: str(p.materials?.recycledPercentage),
      recycling_income: str(p.materials?.recycledInput),
    },
    packing: {
      pack_type: str(p.packaging?.type),
      weight: str(p.packaging?.weight),
      volume: str(p.packaging?.volume),
      recycling: p.packaging?.recycled ? 'Sí' : '',
      percentage_recycling: str(p.packaging?.percentageRecycled),
    },
    care,
    id_lot: str(p.unit?.lote),
    lot_number_product: str(p.unit?.lote),
    trace_supplier: (p.suppliers || []).map((s) => ({
      title: str(s.name),
      ruc: str(s.ruc),
      location: str(s.address),
      coords: str(s.gps),
    })),
    traceability_batch: {
      location: str(p.manufacturing?.location),
      time_line: (p.manufacturing?.timeline || []).map((t) => ({
        process: str(t.stage),
        start_time: str(t.startAt),
        end_time: str(t.endAt),
        owner: str(t.responsible),
      })),
    },
    compliance_supplier: [],
    compliance_process: { process: '', certifications: [] },
    traceability_blockchain_lot: { time_line: [] },
    gtin_product: gtin,
    id_product_parent_company: '',
    id_product_system_eu: '',
    photo_product: {
      frontal: photoNames['frontal'] || firstPhoto,
      left: photoNames['left'] || firstPhoto,
      later: photoNames['later'] || firstPhoto,
      right: photoNames['right'] || firstPhoto,
    },
    information_product: {
      name: str(p.information?.name),
      brand: str(p.information?.brand),
      gtin: str(p.information?.gtin || gtin),
      product_code: str(p.information?.productCode || p.unit?.productCode),
      product_code_eu: '',
      category: str(p.information?.category),
      size: '',
      color: str(p.information?.color),
      year: str(p.information?.year),
      season: str(p.information?.season),
    },
    traceability_product: {
      time_line: [],
      full_name: '',
      company_name: '',
      ruc: '',
    },
    traceability_blockchain_product: { time_line: [] },
  };

  return { consolidate, images };
}
