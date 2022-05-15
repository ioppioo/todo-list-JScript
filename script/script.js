// создаем кнопку редактирования

function createRedactTaskButton() {
    let redactButton = document.createElement('button');
    redactButton.className = 'button button-task-redact';
    redactButton.innerText = '✎';
    redactButton.addEventListener('click', createTaskText);
    redactButton.addEventListener('click', createTitleText);

    return redactButton;
}

function createTaskText(event) {
    event.stopPropagation();
    let task = event.target.parentElement;
    replaceTaskWithInput(task);
}

function createTitleText(event) {
    event.stopPropagation();
    let note = event.target.parentElement;
    replaceTitleWithInput(note);
}

// добавляем кнопку редактирования к задаче

let tasks = document.querySelectorAll('.tasks__task');
for (let task of tasks) {
    task.appendChild(createRedactTaskButton());
}

// добавляем конпку редактирования заголовка заметки

let titleTasks = document.querySelectorAll(".title-note");

for (let title of titleTasks) {
    title.appendChild(createRedactTaskButton());
}

// заменяем текущий заголовок заметки полем ввода

function replaceTitleWithInput(title) {
    let titleText = title.querySelector('.title-note-text').innerText;
    let input = createInput(titleText); // создать новый
    title.innerHTML = '';
    title.appendChild(input);
    input.focus();
}

// создаем новый текст заголовка

function createRedactNewTitle(text) {
    let titleText = document.createElement('span');
    titleText.classList.add('title-note-text');
    titleText.innerText = text;

    return titleText;
}

//заменяем текущую задачу полем ввода

function replaceTaskWithInput(task) {
    let taskText = task.querySelector('.tasks__task-text').innerText;
    let input = createInput(taskText);
    task.innerHTML = '';
    task.appendChild(input);
    input.focus();
}

//создаем поле ввода

function createInput(text) {
    let input = document.createElement('input');
    input.value = text;
    input.onblur = replaceTaskWithInputHandler;
    input.classList.add('input');
    input.classList.add('input-task');

    return input;
}


function replaceTaskWithInputHandler(event) {
    let input = event.target;
    replaceTaskWithInputText(input);
}

// создаем новый текст

function createRedactNewText(text) {
    let taskText = document.createElement('span');
    taskText.classList.add('tasks__task-text');
    taskText.innerText = text;
    taskText.onclick = taskDone;

    return taskText;
}

// заменяем поле ввода на новый текст, если текста нет, то удаляем. Добавляем конпку редактирования.
function replaceTaskWithInputText(input) {
    let newText = input.value;
    let task = input.parentElement;
    if (newText.trim() === '') {
        task.remove();
    } else {
        task.innerHTML = '';
        task.appendChild(createRedactNewText(newText));
        task.appendChild(createRedactTaskButton());
    }
}

// подтверждаем выполнения задачи

function taskDone(event) {
    let task = event.target.parentElement;
    task.classList.toggle('done')
}

let tasksText = document.querySelectorAll(".tasks__task-text");

for (let task of tasksText) {
    task.onclick = taskDone;
}

// создаем разметку новой задачи c полем ввода

function createNewTask(task) {
    let createLi = document.createElement('li');
    let input = createInput('');
    createLi.classList.add('tasks__task');
    createLi.appendChild(input);
    task.appendChild(createLi);
    // createLi.appendChild(createRedactTaskButton());
    input.focus();
}

// создаем кнопку новой задачи

function createNewTaskButton() {
    let newTaskButton = document.createElement('button');
    newTaskButton.className = 'button button-task-new';
    newTaskButton.innerText = '+';
    newTaskButton.onclick = addTask;

    return newTaskButton;
}

function addTask(event) {
    let task = event.target.parentElement.querySelector('.tasks');
    createNewTask(task);
}

// добавляем кнопку создания новой задачи

let notes = document.querySelectorAll(".note");

for (let button of notes) {
    button.appendChild(createNewTaskButton());
    button.appendChild(CreateDelButton());
}

// добавляет новую заметку

function createNote(note) {

    let newNote = document.querySelector('.new-note');
    let divNote = document.createElement('div');
    let color = replaceNoteColor();

    // текст заметки
    let titleNote = document.createElement('h2');
    let titleNoteText = document.createElement('span');
    titleNote.classList.add('title-note');
    titleNoteText.classList.add('title-note-text');
    divNote.appendChild(titleNote);
    titleNote.appendChild(titleNoteText);
    titleNoteText.appendChild(createInput('Новая заметка'));
    titleNote.append(createRedactTaskButton());

    let olNote = document.createElement('ol');
    olNote.classList.add('tasks');

    // создание новой задачи в новой заметке
    let liNote = document.createElement('li');
    liNote.classList.add('tasks__task');
    liNote.appendChild(createInput(''));
    note.appendChild(liNote);
    olNote.append(liNote);
    liNote.append(createRedactTaskButton());

    divNote.classList.add('note');
    divNote.classList.toggle(color);

    newNote.before(divNote);
    divNote.append(olNote);
    divNote.append(createNewTaskButton());
    divNote.append(CreateDelButton());
}

// кнопка для создания новой заметки

function createNoteButton() {
    let newNoteButton = document.querySelector('.new-note');
    newNoteButton.onclick = function (event) {
        let note = event.target.parentElement;
        createNote(note);
    }

    return newNoteButton;
}

// добавляем новую заметку

let newNote = document.querySelector('.new-note');
newNote.appendChild(createNoteButton());

// цвет новой заметки

function replaceNoteColor() {
    let colors = [
        'note--indianred',
        'note--lavender',
        'note--antiquewhite',
        'note--teal',
    ];

    let randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
}

// кнопка удаления заметки

function CreateDelButton() {
    let createDelButton = document.createElement('button');
    createDelButton.className = 'button button-task-del';
    createDelButton.innerText = '🞫';
    createDelButton.onclick = function () {
        createDelButton.parentElement.remove();
    }

    return createDelButton;
}
