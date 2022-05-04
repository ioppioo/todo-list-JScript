// кнопка редактирования задачи

let tasks = document.querySelectorAll("ol > li");

for (let task of tasks) {
    task.insertAdjacentHTML('beforeend', '<button class="button button-task-redact" >✎</button>');
        task.onclick = function () {
        }
}

// кнопка редактирования заголовка задачи

let titleTasks = document.querySelectorAll(".title-note");

for (let title of titleTasks) {
    title.insertAdjacentHTML('beforeend', '<button class="button button-title-redact" >✎</button>');
    title.onclick = function () {
    }
}

// добавлет кнопку создания новой задачи

let notes = document.querySelectorAll("ol > li:last-child");

for (let newTask of notes) {
    newTask.insertAdjacentHTML('beforeend', '<button class="button button-task-new">+</button>');
    newTask.lastChild.onclick = function () {
        }
}

// кнопка удаления заметки

let note = document.querySelectorAll(".note");

for (let taskDel of note) {
    taskDel.insertAdjacentHTML('beforeend', '<button class="button button-task-del">🞫</button>');
    taskDel.lastChild.onclick = function () {
        taskDel.remove();
    }
}

// для создания новой заметки

let newNote = document.querySelector('#get-note');
    newNote.onclick = function getNote () {
    }





