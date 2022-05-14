// добавляет кнопку редактирования задачи и событие на кнопку с вызовом функции

let tasks = document.querySelectorAll(".tasks__task");

function createInput(text) {
    let input = document.createElement('input');
    input.value = text;
    input.classList.add('input-task');

    return input;
}

function replaceTaskWithInput(task) {
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

// кнопка редактирования заголовка задачи

let titleTasks = document.querySelectorAll(".title-note");

for (let title of titleTasks) {
    title.appendChild(createRedactTaskButton());
}

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

function addTask() {
    let ol = document.querySelector('.tasks');
    let createLi = document.createElement('li');
    let createSpan = document.createElement('span');
    ol.appendChild(createLi);
    createLi.classList.add('tasks__task');
    createLi.append(createSpan);
    createLi.append(createRedactTaskButton());
    createSpan.innerText = 'Новая задача';
    createSpan.classList.add('tasks__task-text');

}

let noteList = document.querySelectorAll('.tasks');

for (let i of noteList) {
    i.prepend(createNewTaskButton());
}

// добавляет новую заметку

function createNote() {
    let newNote = document.querySelector('.new-note');
    let divNote = document.createElement('div');
    let titleNote = document.createElement('h2');
    let olNote = document.createElement('ol');
    let liNote = document.createElement('li');
    let textNewTask = document.createElement('span');

    divNote.classList.add('note');
    titleNote.classList.add('title-note');
    olNote.classList.add('tasks');
    liNote.classList.add('tasks__task');
    textNewTask.classList.add('tasks_task-text');

    titleNote.innerText = 'Заметка';
    textNewTask.innerText = 'Новая задача';

    newNote.before(divNote);
    divNote.append(titleNote);
    divNote.append(olNote);
    olNote.append(createNewTaskButton());
    olNote.append(liNote);
    liNote.append(textNewTask);
    liNote.append(createRedactTaskButton());
}

function createNoteButton() {
    let newNoteButton = document.createElement('button');
    newNoteButton.classList.add('newNoteButton');
    newNoteButton.innerText = 'New note';
    newNoteButton.onclick = function (event) {
        let div = event.target.parentElement;
        createNote(div);
    }

    return newNoteButton;
}

let newNote = document.querySelector('.new-note');
newNote.append(createNoteButton());

// function creatNewNoteButton () {
//     let newNote = document.querySelector('.new-note');
//     newNote.onclick = function ()
//
// }

// кнопка удаления заметки

function CreateDelButton() {
    let createDelButton = document.createElement('button');
    createDelButton.className = 'button button-task-del';
    createDelButton.innerText = '🞫';
    createDelButton.onclick = function () {
        delButton();
    }

    return createDelButton
}

for (let delNote of notes) {
    delNote.appendChild(CreateDelButton());
}

function delButton () {

    let note = document.querySelector('.note')
    note.remove();

}
