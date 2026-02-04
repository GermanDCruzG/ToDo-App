ToDo App – CRUD de Tareas

Aplicación web sencilla para la gestión de tareas (ToDo), desarrollada con HTML, CSS, JavaScript y Bootstrap, que permite crear, visualizar, editar, completar y eliminar tareas, almacenándolas de forma persistente en el navegador mediante LocalStorage.
Este proyecto forma parte de un portafolio de aprendizaje enfocado en los fundamentos del desarrollo frontend y la manipulación del DOM.

Funcionalidades

Crear nuevas tareas
Editar tareas existentes
Marcar tareas como completadas
Eliminar tareas con confirmación
Persistencia de datos usando LocalStorage
Interfaz responsiva con Bootstrap

Tecnologías utilizadas

HTML5 – estructura del proyecto
CSS3 – estilos personalizados
JavaScript (Vanilla JS) – lógica de la aplicación
Bootstrap 5 – diseño y componentes UI
SweetAlert2 – alertas modernas (opcional si lo incluiste)

Estructura del proyecto
todo-app/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js          # Lógica principal del CRUD
│   └── taskService.js # Manejo de LocalStorage
│
└── README.md

Descripción del funcionamiento
Crear tarea
El usuario escribe una tarea en el campo de texto y presiona Agregar.
La tarea se guarda en un arreglo y se almacena en LocalStorage.
Completar tarea
Al presionar el botón ✔, el estado de la tarea cambia a completada y el texto se muestra tachado.
Editar tarea
El botón ✏ permite modificar el texto de una tarea mediante un prompt.
Eliminar tarea
Antes de eliminar una tarea, se muestra una alerta de confirmación para evitar eliminaciones accidentales.
Persistencia de datos
Las tareas se almacenan en el navegador utilizando LocalStorage, lo que permite que los datos se mantengan incluso después de cerrar o recargar la página.

localStorage.setItem("tasks", JSON.stringify(tasks));

Posibles mejoras futuras
Filtro de tareas (todas / completadas / pendientes)
Fecha de creación de tareas
Búsqueda de tareas
Edición con modal en lugar de prompt
Uso de una API externa

Autor
Desarrollado por Germán D. Cruz G.
Proyecto con fines educativos y de práctica frontend.

Licencia
Este proyecto es de uso libre para fines educativos.
