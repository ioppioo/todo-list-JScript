// создаем кнопку редактирования

function createEditButton() {
    let editButton = document.createElement('button');
    editButton.className = 'button edit-button';
    editButton.innerText = '✎';

    return editButton;
}

// для работы с заголовком

function createEditTitleButton() {
    let button = createEditButton();
    button.addEventListener('click', createTitleText);

    return button;
}

function createTitleText(event) {
    event.stopPropagation();
    let note = event.target.parentElement;
    replaceTitleWithInput(note);
}

// добавляем кнопку редактирования заголовка заметки

let titleTasks = document.querySelectorAll('.title-note');
for (let title of titleTasks) {
    title.appendChild(createEditTitleButton());
}

// заменяем текущий заголовок заметки полем ввода

function replaceTitleWithInput(title) {
    let titleText = title.querySelector('.title-note-text');
    let styles = window.getComputedStyle(titleText);
    let rows = (titleText.getBoundingClientRect().height / parseInt(styles.lineHeight));
    let input = createTitleInput(titleText.innerText, rows);
    title.innerHTML = '';
    title.appendChild(input);
    input.focus();
}

// создаем новый текст заголовка

function createTitleInput(text, rows) {
    let input = createInput(text, rows);
    input.onblur = replaceInputWithTitle;

    return input;
}

function replaceInputWithTitle(event) {
    let input = event.target;
    replaceTitleWithInputText(input);
}

function createEditNewTitleText(text) {
    let titleText = document.createElement('span');
    titleText.classList.add('title-note-text');
    titleText.innerText = text;

    return titleText;
}

function replaceTitleWithInputText(input) {
    let newText = input.value;
    let title = input.parentElement;
    if (newText.trim() === '') {
        window.setTimeout(input.focus(), 100);
    } else {
        title.innerHTML = '';
        title.appendChild(createEditNewTitleText(newText));
        title.appendChild(createEditTitleButton());
    }
}

// для работы с задачами

function createEditTaskButton() {
    let button = createEditButton();
    button.addEventListener('click', createTaskText);

    return button;
}

function createTaskText(event) {
    event.stopPropagation();
    let task = event.target.parentElement;
    replaceTaskWithInput(task);
}

// добавляем кнопку редактирования к задаче

let tasks = document.querySelectorAll('.tasks__task');
for (let task of tasks) {
    task.appendChild(createEditTaskButton());
}

//заменяем текущую задачу полем ввода

function replaceTaskWithInput(task) {
    let taskText = task.querySelector('.tasks__task-text');
    let styles = window.getComputedStyle(taskText);
    let rows = (taskText.getBoundingClientRect().height / parseInt(styles.lineHeight));
    let input = createTaskInput(taskText.innerText, rows);
    task.innerHTML = '';
    task.appendChild(input);
    input.focus();
}

function createTaskInput(text, rows) {
    let input = createInput(text, rows);
    input.onblur = replaceInputWithTask;

    return input;
}

function replaceInputWithTask(event) {
    let input = event.target;
    replaceTaskWithInputText(input);
}

// создаем новый текст задачи

function createEditNewTaskText(text) {
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
        task.appendChild(createEditNewTaskText(newText));
        task.appendChild(createEditTaskButton());
    }
}

//создаем поле ввода

function createInput(text, rows) {
    let input = document.createElement('textarea');
    input.value = text;
    input.rows = rows;
    input.classList.add('input');

    return input;
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
    let input = createTaskInput('', 1);
    createLi.classList.add('tasks__task');
    createLi.appendChild(input);
    task.appendChild(createLi);

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
    button.appendChild(createDelButton());
}

// добавляет новую заметку

function createNewNote() {
    let newNote = document.querySelector('.new-note');
    let divNote = document.createElement('div');
    let color = replaceNoteColor();

    divNote.classList.add('note');
    divNote.classList.toggle(color);

    newNote.before(divNote);
    divNote.append(createNewTaskButton());
    divNote.append(createDelButton());

// добавляем заголовок новой заметки
    let titleNote = document.createElement('div');
    titleNote.classList.add('title-note');
    let titleInput = createTitleInput('', 1);
    titleNote.appendChild(titleInput);
    divNote.appendChild(titleNote);

    titleInput.focus();

// список задач
    let olNote = document.createElement('ol');
    olNote.classList.add('tasks');
    divNote.append(olNote);
}

// добавление новой заметки

function createNoteButton() {
    let newNoteButton = document.querySelector('.new-note');
    newNoteButton.onclick = function (event) {
        let note = event.target.parentElement;
        createNewNote(note);
    }

    return newNoteButton;
}

createNoteButton();

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

function createDelButton() {
    let createDelButton = document.createElement('button');
    createDelButton.className = 'button button-task-del';
    createDelButton.innerText = '🞫';
    createDelButton.onclick = function () {
        createDelButton.parentElement.remove();
    }

    return createDelButton;
}
