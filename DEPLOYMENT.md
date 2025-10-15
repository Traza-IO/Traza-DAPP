# Guía de Deployment para Rutas Dinámicas

## Internet Computer (ICP)

La aplicación ahora usa rutas dinámicas con React Router. Para que funcionen correctamente en producción en ICP, sigue estos pasos:

### 1. Configurar el Canister Frontend

Crea un archivo `.ic-assets.json5` en la raíz del proyecto (donde está `dfx.json`):

```json5
[
  {
    match: '**/*',
    cache: {
      max_age: 20,
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'same-origin',
    },
  },
  {
    match: 'index.html',
    cache: {
      max_age: 0,
    },
    headers: null,
    allow_raw_access: true,
  },
  {
    match: '**/*',
    headers: {
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; style-src 'self' 'unsafe-inline' https:;",
    },
  },
]
```

### 2. Build y Deploy

```bash
# Build el proyecto
npm run build

# Deploy a ICP
dfx deploy
```

### 3. Verificar el Funcionamiento

Después del deploy, verifica que las rutas funcionen:

```bash
# Ejemplos de URLs que deberían funcionar:
https://tu-canister-id.ic0.app/17751234567890/product
https://tu-canister-id.ic0.app/17751234567890/sustainability
https://tu-canister-id.ic0.app/17751234567890/blockchain
```

## Otros Servidores (Netlify, Vercel, etc.)

### Netlify

Crea un archivo `_redirects` en la carpeta `public` o `src`:

```
/*    /index.html   200
```

### Vercel

Crea un archivo `vercel.json` en la raíz:

```json
{
  "rewrites": [
    {
      "source": "/:gtin/:page",
      "destination": "/index.html"
    }
  ]
}
```

### Apache

Añade al `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx

Añade a la configuración:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Desarrollo Local

Para desarrollo local, Vite ya maneja las rutas dinámicas automáticamente:

```bash
npm run dev
```

Luego accede a:

```
http://localhost:5173/17751234567890/product
http://localhost:5173/17751234567890/sustainability
```

## Notas Importantes

1. **Fallback a index.html**: Todas las rutas deben hacer fallback a `index.html` para que React Router pueda manejarlas
2. **GTIN por defecto**: Si un usuario accede a la raíz `/`, será redirigido automáticamente a `/17751234567890/product`
3. **Sin idioma en URL**: El idioma se maneja ahora exclusivamente mediante el selector en la UI y se guarda en localStorage
4. **Cache**: El `index.html` debe tener cache mínimo o nulo para asegurar que los usuarios siempre obtengan la última versión
