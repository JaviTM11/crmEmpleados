# CRM Empleados

Este proyecto es una aplicación web desarrollada con Angular que permite gestionar empleados en una empresa. Incluye funcionalidades como autenticación, listado de empleados, creación, actualización y eliminación de empleados.

## Características

- **Autenticación**: Inicio de sesión con validación de credenciales.
- **Gestión de empleados**: Crear, listar, actualizar y eliminar empleados.
- **Interfaz moderna**: Uso de Bootstrap para un diseño responsivo y atractivo.
- **Protección de rutas**: Implementación de guardas para proteger rutas específicas.
- **Interceptors**: Añade automáticamente el token de autenticación a las solicitudes HTTP.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Angular CLI](https://angular.io/cli) (versión 19.2.4 o superior)

## Instalación

  1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/crm-empleados.git
   cd crm-empleados
   
  2. Instala las dependencias:
   npm install

Uso
Servidor de desarrollo
Para iniciar el servidor de desarrollo, ejecuta:
  npm start

Luego, abre tu navegador y navega a http://localhost:4200/.

Construcción
Para construir el proyecto para producción, ejecuta:
  npm run build

Los archivos generados estarán en el directorio dist/crm-empleados.

Pruebas
Para ejecutar las pruebas unitarias con Karma, usa:
  npm test

Estructura del proyecto
src/
├── app/
│   ├── components/       # Componentes reutilizables
│   ├── guards/           # Guardas de rutas
│   ├── interfaces/       # Interfaces de datos
│   ├── pages/            # Páginas principales
│   ├── services/         # Servicios para la lógica de negocio
│   └── app.routes.ts     # Configuración de rutas
├── assets/               # Recursos estáticos
├── styles.css            # Estilos globales
└── main.ts               # Punto de entrada de la aplicación

Tecnologías utilizadas
Angular: Framework principal para el desarrollo de la aplicación.
Bootstrap: Framework CSS para diseño responsivo.
SweetAlert2: Librería para mostrar alertas personalizadas.
RxJS: Manejo de programación reactiva.
Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').
Sube tus cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.

##Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de jtainio.2b@gmail.com





