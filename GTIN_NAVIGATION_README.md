# Preservación del Parámetro GTIN en la Navegación

## Problema Resuelto

El parámetro `gtin` que viene en la URL principal (`?gtin=123456789`) se perdía al navegar entre las diferentes páginas de la aplicación.

## Solución Implementada

### 1. Hook Personalizado: `useGtinNavigation`

Se creó un hook personalizado en `src/hooks/useGtinNavigation.ts` que proporciona:

- `buildUrlWithGtin(path: string)`: Construye URLs preservando el parámetro gtin
- `getCurrentGtin()`: Obtiene el valor actual del parámetro gtin

### 2. Componente Nav Actualizado

El componente `Nav` ahora usa el hook `useGtinNavigation` para preservar el parámetro gtin en todos los enlaces de navegación:

```tsx
const { buildUrlWithGtin } = useGtinNavigation();

// Antes
<Link to={`/${lng}/traceability`}>

// Después
<Link to={buildUrlWithGtin(`/${lng}/traceability`)}>
```

### 3. Store Mejorado

El store `useTraceabilityStore` ahora acepta el parámetro gtin como argumento:

```tsx
fetchData: async (gtin?: string) => {
  // Obtener gtin del parámetro o del localStorage como fallback
  let currentGtin = gtin;
  if (!currentGtin) {
    currentGtin = localStorage.getItem('gtin') || '17751234567890';
  }
  // ... resto de la lógica
};
```

### 4. Páginas Actualizadas

Todas las páginas que usan el store ahora pasan el parámetro gtin:

- `Home.tsx`
- `Traceability.tsx`
- `Blockchain.tsx`

## Cómo Funciona

1. **URL inicial**: `https://tuapp.com/en?gtin=123456789`
2. **Navegación**: Al hacer clic en cualquier enlace del Nav, se preserva automáticamente el parámetro
3. **URL resultante**: `https://tuapp.com/en/traceability?gtin=123456789`

## Uso del Hook

```tsx
import { useGtinNavigation } from '../hooks/useGtinNavigation';

const MyComponent = () => {
  const { buildUrlWithGtin, getCurrentGtin } = useGtinNavigation();

  // Construir URL con gtin preservado
  const url = buildUrlWithGtin('/en/otra-pagina');

  // Obtener gtin actual
  const currentGtin = getCurrentGtin();

  return <Link to={url}>Navegar</Link>;
};
```

## Beneficios

- ✅ El parámetro gtin se preserva automáticamente en toda la navegación
- ✅ Código reutilizable y mantenible
- ✅ Fallback a localStorage si no hay gtin en la URL
- ✅ Compatible con el sistema de idiomas existente
- ✅ No afecta la funcionalidad existente

## Archivos Modificados

- `src/hooks/useGtinNavigation.ts` (nuevo)
- `src/components/Nav/Nav.tsx`
- `src/store/useTraceabilityStore.ts`
- `src/pages/Home.tsx`
- `src/pages/Traceability.tsx`
- `src/pages/Blockchain.tsx`
