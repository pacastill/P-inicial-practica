# Primera Tarea: Práctica Profesional

Este proyecto viene siendo para construir una Single Page Application (SPA) desarrollada como parte de la práctica industrial.
La aplicación consume la API pública de Rick y Morty para listar personajes, ubicaciones y episodios utilizando Framework7 Core en su tercera versión. 

# Herramientas utilizadas

* Framework7 Core (v3): Se utilizó la versión sin empaquetadores para manejo de la interfaz, navegación y lógica.
* Dom7: Utilizadad de manipulación del DOM integrada en Framework7
* Rick y Morty API: API REST pública utilizada para obtener los datos JSON
* HTML5 / CSS / JavaScript: EStrutura y lógica base. (No se han toccado los estilos CSS aún)

# Instalación y ejecución de la aplicación

* 1. Instalar herramientas globales utlizadas ```npm install --global gulp```.
* 2. Se deben instalar las dependencias ejecutando el comando ``` npm install```  para descargar los paquetes. 
* 3. Para poder compilar la versión core del framework se utiliza el siguiente comando: ``` npm run core:dev" ``` este comando lo que hace es ejecutar "gulp build-core && gulp ks-core && gulp server-core", por lo que en caso que sólo se lleguen a compilar los archivos y no se ejecute el servidor, lo cual se debe a problemas de compatibilidad con Node.js  y el framework ocupado. 
  * Ejecutar ``` npx gulp server-core ``` para ejecutar la parte del comando que falla. 


