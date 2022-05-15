// создаем кнопку редактирования

function createRedactTaskButton() {
    let redactButton = document.createElement('button');
    redactButton.className = 'button button-task-redact';
    redactButton.innerText = '✎';
    redactButton.addEventListener('click', taskText);
    redactButton.addEventListener('click', titleText);

    return redactButton;
}

function taskText(event) {
    event.stopPropagation();
    let task = event.target.parentElement;
    replaceTaskWithInput(task);
}

function titleText(event) {
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
    input.classList.add('input-task');
    return input;
}

// что делает?

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

function newTask(task) {
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
    newTask(task);
}

// добавляем кнопку создания новой задачи

let notes = document.querySelectorAll(".note");

for (let newTask of notes) {
    newTask.appendChild(createNewTaskButton());
}

// добавляет новую заметку

function createNote(note) {
    let newNote = document.querySelector('.new-note');
    let divNote = document.createElement('div');
    let titleNote = document.createElement('h2');
    let olNote = document.createElement('ol');
    let liNote = document.createElement('li');
    // let inputTitle = createInputTitleNote('');
    let inputTask = createInput('');
    let color = noteColor();
    liNote.classList.add('tasks__task');
    liNote.appendChild(inputTask);
    note.appendChild(liNote);


    // let textNewTask = document.createElement('span');

    divNote.classList.add('note');
    divNote.classList.toggle(color);
    // olNote.classList.add('tasks');
    // liNote.classList.add('tasks__task');
    // textNewTask.classList.add('tasks_task-text');

    titleNote.innerText = 'Заметка';
    // textNewTask.innerText = 'Новая задача';

    newNote.before(divNote);
    divNote.append(titleNote);
    divNote.append(olNote);
    olNote.append(createNewTaskButton());
    olNote.append(liNote);
    // liNote.append(textNewTask);
    liNote.append(createRedactTaskButton());
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

function noteColor() {
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
        delButton();
        noteColor();
    }

    return createDelButton;
}

let noteList = document.querySelectorAll(".note");

for (let note of noteList) {
    note.appendChild(CreateDelButton());
}

function delButton() {
    for (let note of noteList) {
        note.remove();
    }
}
