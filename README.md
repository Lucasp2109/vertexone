# VertexOne Technologies

Sitio corporativo construido con Next.js App Router y preparado para desplegarse en Netlify.

## Desarrollo local

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Validación de producción

```bash
npm run build
npm start
```

## Publicación en Netlify desde GitHub

1. Subir este proyecto a un repositorio de GitHub.
2. En Netlify, elegir **Add new project → Import an existing project**.
3. Seleccionar GitHub y el repositorio.
4. Usar la rama de producción `main` y dejar vacío **Base directory**.
5. Netlify detectará Next.js automáticamente. El comando de build es `npm run build` y el directorio de publicación detectado es `.next`.
6. Publicar con **Deploy site**.

Netlify incorpora automáticamente su adaptador OpenNext para Next.js; no se fija una versión de `@netlify/plugin-nextjs` en este repositorio.
