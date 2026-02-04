const STORAGE_KEY = "tasks";

function getTasks() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}