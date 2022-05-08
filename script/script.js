// добавляет кнопку редактирования задачи и событие на кнопку с вызовом функции

let tasks = document.querySelectorAll(".tasks__task");

function createInput(text) {
    let input = document.createElement('input');
    input.value = text;

    return input;
}

function replaceTaskWithInput (task) {
    let taskText = task.querySelector('.tasks__task-text').innerText;
    let input = createInput(taskText);
    task.innerHTML = '';
    task.appendChild(input);
}

function createRedactTaskButton() {
    let redactButton = document.createElement('button');
    redactButton.className = 'button button-task-redact';
    redactButton.innerText = '✎';
    redactButton.onclick = function (event) {
        event.stopPropagation();
        let task = event.target.parentElement;
        replaceTaskWithInput(task);
    }

    return redactButton;
}

// подтверждение выполнения задачи
for (let task of tasks) {
    task.appendChild(createRedactTaskButton());
    task.onclick = function () {
        task.classList.toggle('done'); //добавляет класс
    }
}

// кнопка удаления заметки

// function delButton () {}

let note = document.querySelectorAll(".note");

for (let taskDel of note) {
    taskDel.insertAdjacentHTML('beforeend', '<button class="button button-task-del">🞫</button>');
    taskDel.lastChild.onclick = function () {
        taskDel.remove();
    }
}

// // кнопка редактирования заголовка задачи
//
// let titleTasks = document.querySelectorAll(".title-note");
//
// for (let title of titleTasks) {
//     title.insertAdjacentHTML('beforeend', '<button class="button button-title-redact" >✎</button>');
//     title.onclick = function () {
//     }
// }

// добавлет кнопку создания новой задачи

let notes = document.querySelectorAll(".note");

function createNewTaskButton() {
    let newTaskButton = document.createElement('button');
    newTaskButton.className = 'button button-task-new';
    newTaskButton.innerText = '+';
    newTaskButton.onclick = function (event) {
        let task = event.target.parentElement;
        addTask(task);
    }

    return newTaskButton;
}

for (let newTask of notes) {
    newTask.appendChild(createNewTaskButton());

}

function addTask () {
    let newLi = document.createElement('li');

    return newLi;
}
// добавляет новую заметку

// function creatNewNoteButton () {
//     let newNote = document.querySelector('.new-note');
//     newNote.onclick = function ()
//
// }
