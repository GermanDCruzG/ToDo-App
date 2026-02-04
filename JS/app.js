const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

let tasks = getTasks();

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML =
            '<li class="list-group-item text-center text-muted">No hay tareas aún</li>';
        return;
    }

    for (let i = 0; i < tasks.length; i++) {

        let task = tasks[i];
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        // Texto
        var span = document.createElement("span");
        span.textContent = task.title;

        if (task.completed === true) {
            span.classList.add("task-completed");
        }

        // Botones
        const completeBtn = document.createElement("button");
        completeBtn.type = "button";
        completeBtn.textContent = '✔';
        completeBtn.className = "btn btn-success btn-sm me-2";

        const editBtn = document.createElement("button");
        editBtn.type = "button"
        editBtn.textContent = "✏";
        editBtn.className = "btn btn-warning btn-sm me-2";

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button"
        deleteBtn.textContent = "✖";
        deleteBtn.className = "btn btn-danger btn-sm me-2";

        // Eventos
        completeBtn.addEventListener('click', () => toggleTask(task.id));
        editBtn.addEventListener('click', () => editTask(task.id));
        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id);
        });

        // Contenedor de botones
        const actions = document.createElement("div");
        actions.className = "d-flex gap-2";
        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.dataset.id = task.id;
        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
    }
    updateCounters();
}

function updateCounters() {
    const total = tasks.length;
    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            completed++;
        }
    }

    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
}

// Agregar

taskForm.onsubmit = function (event) {
    event.preventDefault();

    const title = taskInput.value;

    if (title === "") {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Escribe una tarea antes de agregarla"
        });
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks();

    taskInput.value = "";
};

// Completar
function toggleTask(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].completed = !tasks[i].completed;
        }
    }
    saveTasks(tasks);
    renderTasks();
}

// Editar
function editTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {

            Swal.fire({
                title: "Editar tarea",
                input: "text",
                inputValue: tasks[i].title,
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar"
            }).then((result) => {

                if (result.isConfirmed && result.value !== "") {
                    tasks[i].title = result.value;
                    saveTasks(tasks);
                    renderTasks();
                }
            });

            break;
        }
    }
}

// Eliminar
function deleteTask(id) {

    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d"
    }).then((result) => {

        if (result.isConfirmed) {

            tasks = tasks.filter(task => task.id != id);
            saveTasks(tasks);
            renderTasks();

            Swal.fire({
                icon: "success",
                title: "Tarea eliminada",
                timer: 1200,
                showConfirmButton: false
            });
        }
    });
}

// Inicio
renderTasks();


