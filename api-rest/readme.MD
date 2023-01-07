Backend para una web scraper

Pasos para la creación del backend.
1. Inicialización del repositorio con npm init
2. Instalación de las dependencias requeridas para el proyecto (express, mongoose, nodemon, connect-multiparty, body-parser)
3. Agregamos al objeto package.json el script para correr el proyecto (start: 'nodemon index.js')
4. Creamos el archivo app.js para configurar express
5. Creamos el servidor en el index.js
6. Creo una ruta en la app.js para verificar que tengo corriendo express correctamente
7. Crear modelos o entidades del backend(scraper) y lo exporto para utilizarlo en la creacion de objetos
8. Creo los metodos y creo las rutas en una carpeta, exporto las rutas
9. importo la router en app.js para crear las rutas por cada metodo creado 
10. crear metodo para cargar imagen
11. instancio multipart middleware para subir las imagenes y guardarlas antes en una carpeta