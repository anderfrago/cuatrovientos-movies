# CuatrovientosMovies

# CuatrovientosMovies

Este proyecto es una aplicación de ejemplo desarrollada con **Angular 21** y diseñada siguiendo los principios de **Atomic Design**. Su propósito principal es servir como material didáctico para alumnos de **FP Superior (DAM)**, facilitando la comprensión y aplicación de estas metodologías y tecnologías en el desarrollo de interfaces de usuario robustas y escalables.

## Objetivo Educativo

El objetivo de `CuatrovientosMovies` es proporcionar una plataforma práctica donde los estudiantes puedan:

*   **Comprender Angular 21**: Explorar las características más recientes del framework, la gestión de componentes, servicios, enrutamiento y el estado de la aplicación.
*   **Aplicar Atomic Design**: Aprender a estructurar una interfaz de usuario desde sus elementos más básicos (átomos) hasta componentes complejos (organismos y plantillas), promoviendo la reutilización, la consistencia y la mantenibilidad del código.
*   **Desarrollo de Componentes**: Practicar la creación de componentes reutilizables y bien definidos, siguiendo una jerarquía clara.
*   **Gestión del Estado**: Entender cómo manejar el estado de la aplicación de manera eficiente en Angular.

## Tecnologías Clave

*   **Angular 21**: Framework de desarrollo web para construir aplicaciones de una sola página.
*   **Atomic Design**: Metodología para construir sistemas de diseño de interfaz de usuario.

## Estructura del Proyecto (Atomic Design)

El proyecto está organizado siguiendo la filosofía de Atomic Design, lo que se refleja en la estructura de carpetas y la definición de componentes:

*   **`src/app/atoms`**: Componentes UI más pequeños e indivisibles (botones, inputs, etiquetas).
*   **`src/app/molecules`**: Grupos de átomos que funcionan juntos como una unidad (formularios de búsqueda, tarjetas de película).
*   **`src/app/organisms`**: Grupos de moléculas y/o átomos que forman secciones distintas de la interfaz (cabeceras, listados de películas).
*   **`src/app/templates`**: Disposiciones de página que organizan organismos en un contexto (plantilla de listado de películas, plantilla de detalle).
*   **`src/app/pages`**: Instancias específicas de las plantillas con contenido real, representando las vistas de la aplicación.

## Cómo Empezar

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/CuatrovientosMovies.git
    cd CuatrovientosMovies
    ```
2.  **Instalar dependencias**:
    ```bash
    npm install
    ```
3.  **Ejecutar la aplicación**:
    ```bash
    ng serve
    ```
    Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Contribuciones

Este proyecto está diseñado para ser un recurso educativo. Se alienta a los estudiantes a explorar el código, experimentar con los componentes y proponer mejoras o nuevas funcionalidades siguiendo los principios de Atomic Design.
