# CRUD de Libros - MongoDB

Este proyecto es una actividad de la cursada en la que hice un CRUD de libros usando TypeScript y MongoDB.

La aplicación funciona desde la terminal y permite crear, ver, modificar y eliminar libros.

## Tecnologías utilizadas

- TypeScript
- Node.js
- MongoDB
- MongoDB Driver
- Git y GitHub

## Datos de los libros

Cada libro tiene los siguientes datos:

- Título
- Autor
- Precio
- Stock

## Cómo usar el proyecto

Primero instalar las dependencias:

`npm install`

Para compilar el proyecto:

`npm run build`

La conexión a MongoDB se configura en el archivo `.env`:

`URI_DB=mongodb://127.0.0.1:27017`

## Comandos

### Crear un libro

`node dist/index.js create "El Principito" "Antoine de Saint-Exupéry" 15000 10`

### Ver los libros

`node dist/index.js read`

### Actualizar un libro

`node dist/index.js update ID "El Principito" "Antoine de Saint-Exupéry" 18000 15`

En `ID` se coloca el `_id` del libro que se quiere modificar.

### Eliminar un libro

`node dist/index.js delete ID`

En `ID` se coloca el `_id` del libro que se quiere eliminar.

## Base de datos

La aplicación utiliza una base de datos llamada `biblioteca` y una colección llamada `libros`.

## Importante

El archivo `.env` contiene la configuración de la conexión a MongoDB y no debe subirse al repositorio.

Se incluye un archivo `.env.example` como ejemplo:

`URI_DB=`