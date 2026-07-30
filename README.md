# All Needs Discount Mechanic

Landing page optimizada para conversión del taller mecánico **All Needs Discount - Mechanic**, ubicado en 169 GA-125, Ray City, GA 31645.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro](https://astro.build) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Iconos | [Lucide](https://lucide.dev) (nativos Astro) |
| SEO | Schema.org `AutoRepair`, Open Graph, Twitter Cards |
| Sitemap | `@astrojs/sitemap` |
| Tipografía | DM Sans + Barlow Condensed (Google Fonts) |
| Interactividad | HTML nativo (details/summary, anchor scroll) — sin JS de cliente |

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.astro         # Navegación principal + barra superior
│   ├── Hero.astro           # Portada con CTA
│   ├── ServiceCard.astro    # Tarjeta de servicio individual
│   ├── BookingForm.astro    # Formulario de solicitud de cita/cotización
│   ├── LocationMap.astro    # Mapa + horarios + áreas de servicio
│   ├── FAQ.astro            # Acordeón de preguntas frecuentes
│   ├── Footer.astro         # Pie de página
│   └── MobileCallBar.astro  # CTA fijo de llamada en móviles
├── data/
│   └── siteData.ts          # Datos centralizados del negocio
├── layouts/
│   └── BaseLayout.astro     # Layout HTML + SEO + Schema JSON-LD
├── pages/
│   └── index.astro          # Página principal (one-page)
└── styles/
    └── global.css           # Tema Tailwind + utilidades globales
```

## Personalización

Edita `src/data/siteData.ts` para cambiar:

- Teléfono, email y dirección
- Horarios y áreas de servicio
- Listado de servicios
- Testimonios y FAQ
- Endpoint del formulario (`formEndpoint`) — compatible con Formspree, Web3Forms o API propia

La URL base se configura en `astro.config.mjs`.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
```

El sitio estático se genera en `dist/`. Sitemap y robots.txt se incluyen automáticamente.

## Lighthouse

Sin imágenes de gran peso, sliders JS ni dependencias de cliente. Diseñado para alcanzar 100/100 en rendimiento, accesibilidad y SEO.
