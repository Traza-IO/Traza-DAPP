/**
 * GS1 Identifier Validator Module
 *
 * Valida y normaliza identificadores GS1 (primary keys) según el estándar GS1.
 * Portado desde el proyecto gs1resolver (validators/gs1Validators.js).
 *
 * Diferencia respecto al fuente del resolver: la rama del GTIN (AI 01) ahora
 * ejecuta también la validación del dígito de control, que el resolver omite
 * por un `return` anticipado.
 *
 * Fuente de verdad: constante ALL_AI con las reglas de cada AI.
 */

// ===============================
// TIPOS
// ===============================

export interface Gs1AiRule {
  name: string;
  minLength: number;
  maxLength: number;
  numeric: boolean;
  checkDigit?: boolean;
  isDate?: boolean;
}

export type Gs1ValidationResult =
  | { valid: true; normalized: string; ai: string; value: string }
  | { valid: false; message: string };

// ===============================
// CONSTANTES - REGLAS DE AIs
// ===============================

export const ALL_AI: Record<string, Gs1AiRule> = {
  // AI PRIMARY
  '01': { name: 'GTIN', minLength: 8, maxLength: 14, numeric: true, checkDigit: true },
  '00': { name: 'SSCC', minLength: 18, maxLength: 18, numeric: true, checkDigit: true },
  '414': { name: 'GLN', minLength: 13, maxLength: 13, numeric: true },
  '8006': { name: 'ITIP', minLength: 18, maxLength: 18, numeric: true },
  '8013': { name: 'GMN', minLength: 1, maxLength: 30, numeric: false },
  '8010': { name: 'CPID', minLength: 1, maxLength: 30, numeric: false },
  '415': { name: 'Pay To GLN', minLength: 13, maxLength: 13, numeric: true },
  '417': { name: 'Party GLN', minLength: 13, maxLength: 13, numeric: true },
  '8017': { name: 'GSRNP Provider', minLength: 18, maxLength: 18, numeric: true },
  '8018': { name: 'GSRN Recipient', minLength: 18, maxLength: 18, numeric: true },
  '255': { name: 'GCN', minLength: 13, maxLength: 25, numeric: true },
  '253': { name: 'GDTI', minLength: 13, maxLength: 30, numeric: true },
  '401': { name: 'GINC', minLength: 1, maxLength: 30, numeric: false },
  '402': { name: 'GSIN', minLength: 17, maxLength: 17, numeric: true },
  '8003': { name: 'GRAI', minLength: 15, maxLength: 30, numeric: true },
  '8004': { name: 'GIAI', minLength: 1, maxLength: 30, numeric: false },

  // AI SECUNDARY (QUALIFIERS)
  '10': { name: 'BATCH/LOT', minLength: 1, maxLength: 20, numeric: false },
  '11': { name: 'PROD DATE', minLength: 6, maxLength: 6, numeric: true, isDate: true },
  '17': { name: 'USE BY or EXPIRY', minLength: 6, maxLength: 6, numeric: true, isDate: true },
  '21': { name: 'SERIAL', minLength: 1, maxLength: 20, numeric: false },
  '22': { name: 'CPV', minLength: 1, maxLength: 20, numeric: false },
  '235': { name: 'TPX', minLength: 1, maxLength: 28, numeric: false },
  '254': { name: 'GLN EXTENSION COMPONENT', minLength: 1, maxLength: 20, numeric: false },
};

/**
 * AIs que representan fechas en formato YYMMDD.
 */
const DATE_AIS = ['11', '12', '13', '15', '17'];

// ===============================
// FUNCIONES DE VALIDACIÓN OPCIONALES
// ===============================

/** Verifica si un AI está soportado (existe en ALL_AI). */
export function isValidAI(ai: string): boolean {
  return Object.prototype.hasOwnProperty.call(ALL_AI, ai);
}

/** Valida la longitud de un valor según las reglas del AI. */
export function validateValueLength(ai: string, value: string): boolean {
  const rule = ALL_AI[ai];
  if (!rule) return false;
  return value.length >= rule.minLength && value.length <= rule.maxLength;
}

/** Valida que el valor contenga solo caracteres permitidos. */
export function validateCharacters(ai: string, value: string): boolean {
  const rule = ALL_AI[ai];
  if (!rule) return false;
  if (rule.numeric) {
    return /^\d+$/.test(value);
  }
  // Alfanumérico GS1: ASCII imprimible (excepto control)
  return /^[\x21-\x7E]+$/.test(value);
}

/** Valida una fecha GS1 en formato YYMMDD. */
export function validateGs1Date(value: string): boolean {
  if (value.length !== 6) return false;
  const month = parseInt(value.substring(2, 4), 10);
  const day = parseInt(value.substring(4, 6), 10);
  return month >= 1 && month <= 12 && day >= 1 && day <= 31;
}

/** Indica si un AI es de tipo fecha. */
export function isDateAI(ai: string): boolean {
  const rule = ALL_AI[ai];
  return !!rule && rule.isDate === true;
}

/** Valida el dígito de control de un GTIN o SSCC. */
export function validateCheckDigit(value: string): boolean {
  const digits = value.split('').map(Number);
  const checkDigit = digits.pop();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += digits[digits.length - 1 - i] * (i % 2 === 0 ? 3 : 1);
  }
  const calculated = (10 - (sum % 10)) % 10;
  return checkDigit === calculated;
}

// ===============================
// FUNCIÓN PRINCIPAL
// ===============================

/**
 * Valida y normaliza un identificador GS1 en formato "AI/valor".
 *
 * @example
 * const result = validateGs1Id('01/09506000134352');
 * if (result.valid) console.log(result.normalized); // "01/09506000134352"
 */
export function validateGs1Id(gs1Id: string): Gs1ValidationResult {
  // 1. Validación básica de entrada
  if (!gs1Id) {
    return { valid: false, message: 'GS1 ID no proporcionado o formato incorrecto' };
  }

  // 2. Verificar formato "AI/valor"
  const parts = gs1Id.split('/');
  if (parts.length !== 2) {
    return { valid: false, message: 'Formato GS1 ID incorrecto. Debe ser: AI/valor' };
  }

  const [ai, value] = parts;

  // 3. Verificar que el AI esté soportado
  const rules = ALL_AI[ai];
  if (!rules) {
    return { valid: false, message: `AI "${ai}" no soportado por este resolver` };
  }

  // 4. Validar longitud
  if (!validateValueLength(ai, value)) {
    return {
      valid: false,
      message: `Longitud incorrecta para AI ${ai}. Esperado: entre ${rules.minLength} y ${rules.maxLength}, recibido: ${value.length}`,
    };
  }

  // 5. Validar caracteres permitidos (solo dígitos o alfanumérico)
  if (!validateCharacters(ai, value)) {
    return {
      valid: false,
      message: `El valor del AI "${ai}" contiene caracteres no permitidos. ${
        rules.numeric ? 'Solo dígitos' : 'Caracteres ASCII visibles'
      } esperados.`,
    };
  }

  if (ai === '01') {
    const normalizedValue = normalizeGTIN(value);

    // Validar dígito de control del GTIN (corrige el return anticipado del resolver).
    if (rules.checkDigit && !validateCheckDigit(normalizedValue)) {
      return { valid: false, message: `Dígito de control inválido para AI "${ai}"` };
    }

    return {
      valid: true,
      normalized: `${ai}/${normalizedValue}`,
      ai,
      value: normalizedValue,
    };
  }

  // 6. Validar fecha si aplica
  if (DATE_AIS.includes(ai) && !validateGs1Date(value)) {
    return {
      valid: false,
      message: `Fecha GS1 inválida para AI "${ai}". Formato esperado: YYMMDD (mes 01-12, día 01-31)`,
    };
  }

  // 7. Validar dígito de control si el AI lo requiere
  if (rules.checkDigit && !validateCheckDigit(value)) {
    return { valid: false, message: `Dígito de control inválido para AI "${ai}"` };
  }

  // 8. Todo correcto
  return {
    valid: true,
    normalized: `${ai}/${value}`,
    ai,
    value,
  };
}

// ===============================
// FUNCION AUXILIAR
// ===============================

function normalizeGTIN(value: string): string {
  if (value.length === 14) return value;
  if (value.length === 13) return '0' + value;
  if (value.length === 12) return '00' + value;
  if (value.length === 8) return '000000' + value;
  return value; // por si acaso
}
