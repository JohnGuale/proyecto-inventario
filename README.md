
### Proyecto de Inventario - Prueba Técnica ###

# Descripción Técnica del Proyecto
El proyecto ha sido desarrollado utilizando Spring Boot para el backend, en conjunto con una base de datos Oracle PL/SQL, y gestionado desde el entorno de desarrollo Eclipse IDE. La aplicación está compilada con Java 17, y utiliza Maven como herramienta de construcción, además de JPA para la integración con la base de datos. La conexión con Oracle se realiza mediante la librería ojdbc8.jar.

Para el frontend, se ha implementado una interfaz en React, utilizando Node.js y npm como gestor de paquetes, todo desarrollado desde Visual Studio Code. Actualmente, el sistema no incluye un módulo de dashboard requisito opcional.

## Funcionalidades Implementadas
- Registro de Productos
- Consulta de Productos
- Registro de Locales (requisito opcional)
- Consulta de Locales (requisito opcional)
- Asignación o registro de inventario de Productos para venta en un local
- Actualización de Stocks y Ventas del Producto en el local
- Consulta de inventario por Local
- El proyecto no incluye Dashboard (requisito opcional)

## Requisitos

### Backend (Spring Boot)
- Java 17+
- Maven
- Base de datos Oracle

### Frontend (React)
- Node.js 18+
- npm

## Configuración y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/proyecto-inventario.git
cd proyecto-inventario
```

### 2. Configurar la base de datos
- Crear una base de datos en oracle llamada `inventario_db`
- Ejecutar el script SQL ubicado en `backend/src/main/resources/schema.sql`

### 3. Backend - Spring Boot
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
El backend se ejecutará en `http://localhost:8080`

### Backend (Spring Boot)
- **Ruta del proyecto**: `/proyecto-inventario/backend`
- **Importar en Eclipse**:
  1. Abrir Eclipse.
  2. Seleccionar `File > Import > Existing Maven Projects`.
  3. Navegar a la carpeta `/backend` y seleccionar el proyecto.
  4. Verificar que el JDK esté configurado en versión 17.

### 4. Frontend - React
```bash
cd frontend
npm install
npm start
```
El frontend se ejecutará en `http://localhost:3000`


### Frontend (React)
- **Ruta del proyecto**: `/proyecto-inventario/frontend`
- **Abrir en Visual Studio Code**:
  1. Abrir VS Code.
  2. Seleccionar `File > Open Folder`.
  3. Navegar a la carpeta `/frontend` y abrirla.
  4. Ejecutar `npm install` y luego `npm start` para iniciar el servidor.
---

## Estructura del Proyecto
```
proyecto-inventario/
├── backend/
│   ├── src/
│   └── pom.xml
├── frontend/
│   ├── src/
│   └── package.json
└── README.md
```

