# Prueba técnica

Proceso selección QA DEV

## Parte 1 - Exploratory testing

Un ejemplo de reporte de error en `exploratory-testing/Reporte-bug.md`

## Parte 2 - Automated testing

### Automatización de una web

El reporte de la prueba contenida en `automated-tests/cypress/e2e/wiki.cy.js` puede ser obtenido al ejecutar desde consola

``npm cy:run``

o la prueba se puede visualizar desde la UI de cypress

``npm run cy:open``

### Tratamiento de datos de API
El projecto [Swagger Pet Store Sample](https://github.com/swagger-api/swagger-petstore) tiene una imagen alojada en el sitio [dockerHub](https://hub.docker.com/), para levantar el servicio en local es necesario hacer un pull a la imagen y exponerla en el puerto _8080_ desde la imagen y acceder a la petstore. 

Ejemplo:

``docker pull swaggerapi/petstore3:unstable``

``docker run  --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable``

### Ejecutar la suite de pruebas

El framewore elegido para hacer las pruebas es api fue [Jest](https://jestjs.io/). Para hacer las peticiones a API desde Jest se empleo [SuperTest](https://www.npmjs.com/package/supertest). Se utlizó  [Joi](https://joi.dev/) para hacer una validación de la respuesta de la API a nivel esquema. Version de _Node_ requerida  `lts/hydrogen -> v18.18.2`


Una vez en la carpeta `automated-tests`, se deberan instalar todas las dependencias necesarias con el comando

``npm install``

El código correspondiente a la prueba de API se encuentra en `automated-tests/tests/pets.spec.js`. El reporte de las pruebas de API se obtendrá al ejecutar el comando

``npm run test:api``

El reporte de la prueba unitaria que verifica el método que cuenta las duplicidades en los nombres de las mascotas se obtendrá al ejecutar el comando

``npm run test:buddies``
