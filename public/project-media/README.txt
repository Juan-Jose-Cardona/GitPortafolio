Coloca aqui las imagenes o videos de los proyectos.

Rutas usadas actualmente en data/portfolioData.ts:

/project-media/rampage-rally.svg
/project-media/letra-dinamica.svg
/project-media/pagina-interactiva.svg

Puedes reemplazar estos SVG por tus propias imagenes conservando el mismo nombre.

Para usar video, cambia en data/portfolioData.ts:

type: "image"
src: "/project-media/rampage-rally.svg"

por:

type: "video"
src: "/project-media/rampage-rally.mp4"
poster: "/project-media/rampage-rally-portada.jpg"

El archivo de video debe estar dentro de esta misma carpeta.
