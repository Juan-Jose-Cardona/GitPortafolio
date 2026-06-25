# Portafolio CV interactivo

Este proyecto es una pagina tipo portafolio y CV creada con React y Next.js. La idea visual esta basada en una escena espacial de fondo azul oscuro. Cada seccion del CV se representa como un sistema solar.

## Funcionamiento

Cada sistema tiene un sol en el centro. El sol contiene el nombre de la seccion, por ejemplo Contacto, Perfil, Habilidades, Proyectos o Experiencia.

Alrededor del sol aparecen varios planetas ubicados sobre anillos orbitales. Cada planeta abre una tarjeta con informacion especifica.

Ejemplo de la seccion Contacto:

- Sol central: Contacto
- Planeta 1: Numero de contacto
- Planeta 2: Direccion de correo 1 y 2
- Planeta 3: Enlace a LinkedIn
- Planeta 4: Descargar CV en PDF

## Archivos principales

- app/page.tsx: pagina principal del portafolio
- app/globals.css: estilos visuales, fondo, sistemas, planetas y paneles
- components/SpaceScene.tsx: escena espacial con sistemas solares
- components/InfoPanel.tsx: panel de informacion al seleccionar un planeta o sistema
- components/Navbar.tsx: menu superior de navegacion
- data/portfolioData.ts: informacion editable del CV
- public/cv.pdf: archivo PDF que se descarga desde la seccion Contacto

## Como cambiar la informacion

La informacion del portafolio esta en:

```txt
data/portfolioData.ts
```

Desde ese archivo puedes cambiar:

- Nombre de las secciones
- Textos de descripcion
- Habilidades
- Proyectos
- Telefono
- Correos
- Enlace de LinkedIn
- Enlace de descarga del CV

Para usar tu hoja de vida real, reemplaza el archivo:

```txt
public/cv.pdf
```

por tu PDF final, manteniendo el mismo nombre.

## Como ejecutar el proyecto

Instala las dependencias:

```bash
npm install
```

Ejecuta el servidor local:

```bash
npm run dev
```

Abre el navegador en:

```txt
http://localhost:3000
```

## Publicacion en GitHub

Este proyecto no necesita backend, API, base de datos, carpeta node_modules ni carpeta .next para subirse al repositorio.

Para generar la version estatica:

```bash
npm run build
```

La configuracion de Next.js esta preparada para exportacion estatica mediante GitHub Pages.
