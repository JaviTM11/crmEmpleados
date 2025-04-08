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
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   Luego, abre tu navegador y navega a `http://localhost:4200/`.

4. Construye el proyecto para producción:

   ```bash
   npm run build
   ```

   Los archivos generados estarán en el directorio `dist/crm-empleados`.

5. Ejecuta las pruebas unitarias con Karma:

   ```bash
   npm test
   ```

## Estructura del proyecto

```plaintext
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
```

## Tecnologías utilizadas

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **Bootstrap**: Framework CSS para diseño responsivo.
- **SweetAlert2**: Librería para mostrar alertas personalizadas.
- **RxJS**: Manejo de programación reactiva.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio:

   ```bash
   git fork
   ```

2. Crea una rama para tu funcionalidad:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git commit -m 'Añadir nueva funcionalidad'
   ```

4. Sube tus cambios:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de jtainio.2b@gmail.com
