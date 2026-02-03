# Copilot Instructions - React Bootcamp Project

## Project Overview

Este workspace contiene múltiples aplicaciones React para un bootcamp de desarrollo. El proyecto principal es **rappi-dojo-app**, un clon de Rappi construido con React 19, Vite, TailwindCSS 4 y DaisyUI.

## Architecture

### Estructura de Componentes

- **Views** ([src/views/](rappi-dojo-app/src/views/)): Páginas completas que combinan múltiples componentes
  - Ejemplo: [RestaurantesView.jsx](rappi-dojo-app/src/views/RestaurantesView.jsx) compone Header, Carousel, App (categorías), y Footer
- **Components** ([src/components/](rappi-dojo-app/src/components/)): Componentes reutilizables UI
  - [App.jsx](rappi-dojo-app/src/components/App.jsx): Muestra categorías (Farmacia, Express, Supermercado, etc.) con navegación
  - [Restaurantes.jsx](rappi-dojo-app/src/components/Restaurantes.jsx): Ejemplo de fetching con axios y useState/useEffect
  - [Carousel.jsx](rappi-dojo-app/src/components/Carousel.jsx): Recibe props banner
- **Routing**: [Rutas.jsx](rappi-dojo-app/src/Rutas.jsx) usa react-router-dom con BrowserRouter

### Data Fetching Pattern

El proyecto usa **axios** para llamadas API (no fetch). Ver [Restaurantes.jsx](rappi-dojo-app/src/components/Restaurantes.jsx#L59-L62):
```javascript
axios.get("https://dummyjson.com/products").then((response) => {
    setProductos(response.data.products);
});
```

### Estado y Props

- Datos hardcodeados en componentes (array de categorías con id, nombre, imagen)
- Props se pasan directamente: `<Carousel banner={url} />`
- Estado local con `useState`, efectos con `useEffect` y dependencias específicas

## UI Framework

### TailwindCSS + DaisyUI

- **CSS config**: [index.css](rappi-dojo-app/src/index.css) importa Tailwind 4 y DaisyUI como plugin
- **Componentes DaisyUI**: Usar classes como `btn btn-primary`, `card`, `navbar`, `avatar`, `badge`
- **Layout**: Classes de Tailwind para spacing (`mx-auto max-w-5xl p-4 space-y-4`)

### Navegación con Click

Los componentes son interactivos con `onClick` y `useNavigate`:
```javascript
const navigate = useNavigate();
<div onClick={() => navigate(`/${categoria.nombre.toLowerCase()}`)}>
```

## Development Workflow

### Build Tool: Vite (Rolldown)

**Nota crítica**: El proyecto usa `rolldown-vite@7.2.5` como override de Vite estándar (ver [package.json](rappi-dojo-app/package.json#L30-L32))

### Comandos Disponibles

```bash
npm run dev      # Desarrollo en puerto por defecto (suele ser 5173)
npm run build    # Producción
npm run lint     # ESLint check
npm run preview  # Preview de build
```

### Ejecutar el Proyecto

Desde `rappi-dojo-app/`:
```bash
npm install  # Primera vez
npm run dev  # Iniciar dev server
```

## Project-Specific Conventions

### Naming

- **Componentes**: PascalCase (App.jsx, Header.jsx)
- **Views**: Sufijo `View` (RestaurantesView.jsx)
- **Rutas**: Archivo singular [Rutas.jsx](rappi-dojo-app/src/Rutas.jsx)

### File Organization

- Componentes UI puros en `/components`
- Páginas completas en `/views`
- Entry point: [main.jsx](rappi-dojo-app/src/main.jsx) renderiza `<Rutas/>`
- `/modules` existe pero está vacío (reservado para lógica de negocio)

### Comentarios y Debugging

- Código comentado se preserva para referencia educativa (ver useEffect con diferentes dependencias en Restaurantes.jsx)
- Console.logs activos para debugging

## Dependencies

- **React 19.2.0** (latest)
- **react-router-dom 7.13.0**: BrowserRouter, Routes, Route, useNavigate
- **axios 1.13.3**: HTTP requests
- **TailwindCSS 4.1.18 + DaisyUI 5.5.14**: Styling
- **@tailwindcss/vite**: Plugin para Vite

## Common Patterns

### Crear Nuevo Componente

1. Crear archivo en `src/components/NombreComponente.jsx`
2. Usar arrow function: `const NombreComponente = () => { ... }`
3. Export default al final
4. Importar en View correspondiente

### Agregar Nueva Ruta

1. Editar [Rutas.jsx](rappi-dojo-app/src/Rutas.jsx)
2. Agregar `<Route path="/ruta" element={<ComponenteView />} />`
3. Crear el componente View en `/views`

### Estilizar con DaisyUI

Preferir componentes DaisyUI antes que Tailwind puro. Consultar: https://daisyui.com/components/
