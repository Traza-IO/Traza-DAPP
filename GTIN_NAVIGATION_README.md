# Navegación Dinámica con GTIN en las Rutas

## Cambio Implementado

Se cambió el sistema de navegación de usar **query parameters** (`?gtin=123`) a usar **rutas dinámicas** con el GTIN como parte del path.

### Antes:

```
miurl.com.pe/en?gtin=123123123
miurl.com.pe/en/traceability?gtin=123123123
miurl.com.pe/en/sustainability?gtin=123123123
```

### Después:

```
miurl.com.pe/123123123/product
miurl.com.pe/123123123/traceability
miurl.com.pe/123123123/sustainability
miurl.com.pe/123123123/blockchain
miurl.com.pe/123123123/share
```

## Beneficios

1. **URLs más limpias y RESTful**: Las rutas son más semánticas y fáciles de entender
2. **Mejor SEO**: Los motores de búsqueda pueden indexar mejor las URLs con parámetros en el path
3. **Compartir URLs**: Es más fácil compartir enlaces específicos de productos
4. **Navegación intuitiva**: El GTIN es claramente parte de la identidad del recurso

## Implementación

### 1. Router Actualizado (`src/router/index.tsx`)

Se eliminó el prefijo de idioma de las URLs y se añadió el GTIN como parámetro dinámico:

```tsx
<Route path="/:gtin/product" element={<Layout><Home /></Layout>} />
<Route path="/:gtin/traceability" element={<Layout><Traceability /></Layout>} />
<Route path="/:gtin/sustainability" element={<Layout><Sustainability /></Layout>} />
<Route path="/:gtin/blockchain" element={<Layout><Blockchain /></Layout>} />
<Route path="/:gtin/share" element={<Layout><Share /></Layout>} />
```

### 2. Hook `useGtinNavigation` Refactorizado

Ahora usa `useParams` de React Router en lugar de `useSearchParams`:

```tsx
export const useGtinNavigation = () => {
  const { gtin } = useParams<{ gtin: string }>();

  const buildUrlWithGtin = (page: string): string => {
    const currentGtin = gtin || '17751234567890';
    return `/${currentGtin}/${page}`;
  };

  const getCurrentGtin = (): string => {
    return gtin || '17751234567890';
  };

  return { buildUrlWithGtin, getCurrentGtin, gtin };
};
```

### 3. Componentes Actualizados

Todos los componentes que necesitaban el GTIN fueron actualizados:

- **Home.tsx**: Usa `getCurrentGtin()` para obtener el GTIN de la URL
- **Sustainability.tsx**: Obtiene el GTIN del hook y lo pasa a `fetchData()`
- **Blockchain.tsx**: Usa el hook para acceder al GTIN
- **Traceability.tsx**: Actualizado para usar el nuevo sistema
- **Nav.tsx**: Construye los enlaces usando `buildUrlWithGtin(page)`

### 4. Navegación

El componente de navegación ahora construye URLs de esta forma:

```tsx
const { buildUrlWithGtin, gtin } = useGtinNavigation();

// En los enlaces:
<Link to={buildUrlWithGtin('product')}>Producto</Link>
<Link to={buildUrlWithGtin('traceability')}>Trazabilidad</Link>
<Link to={buildUrlWithGtin('sustainability')}>Sostenibilidad</Link>
```

### 5. Manejo del Idioma

El idioma se maneja ahora exclusivamente a través del selector en el Layout y se guarda en `localStorage` mediante `i18n`. Ya no forma parte de la URL, lo que simplifica aún más las rutas.

## Uso

### Para navegar a un producto específico:

```
https://tuapp.com/17751234567890/product
```

### Para acceder a una sección específica de un producto:

```
https://tuapp.com/17751234567890/sustainability
https://tuapp.com/17751234567890/blockchain
```

### Desde el código:

```tsx
import { useGtinNavigation } from '../hooks/useGtinNavigation';

const MyComponent = () => {
  const { getCurrentGtin, buildUrlWithGtin } = useGtinNavigation();

  // Obtener el GTIN actual
  const gtin = getCurrentGtin();

  // Construir una URL para navegar
  const sustainabilityUrl = buildUrlWithGtin('sustainability');

  return <Link to={sustainabilityUrl}>Ver Sostenibilidad</Link>;
};
```

## Migración

Si tienes URLs antiguas con el formato `?gtin=123`, deberás redirigirlas al nuevo formato. Puedes añadir una ruta de redirección en el router:

```tsx
// Ruta para redirigir URLs antiguas
<Route path="/:lng" element={<RedirectToNewFormat />} />
```

Donde `RedirectToNewFormat` lee el query param y redirige a la nueva URL.
