const toDoList = document.getElementById('todo__list');
const input = document.getElementById('todo__input');
const addBtn = document.getElementById('todo__add');
const localStorageKey = 'todoList';

if (localStorage.getItem(localStorageKey)) {
    const savedList = JSON.parse(localStorage.getItem(localStorageKey));
    savedList.forEach(item => {
        createTodoItem(item.text, item.checked);
    });
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value) {
        createTodoItem(input.value, false);
        saveTodoList();
        input.value = '';
    }
});

function createTodoItem(text, isChecked) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isChecked;

    checkbox.addEventListener('change', () => {
        const span = checkbox.nextElementSibling;
        if (checkbox.checked) {
            span.classList.add('todo-item--checked');
        } else {
            span.classList.remove('todo-item--checked');
        }
        saveTodoList();
    });

    li.appendChild(checkbox);

    const span = document.createElement('span');
    span.classList.add('todo-item__description');
    span.textContent = text;
    if (isChecked) {
        span.classList.add('todo-item--checked');
    }
    li.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.classList.add('todo-item__delete');
    deleteBtn.addEventListener('click', () => {
        li.remove();
        saveTodoList();
    });

    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}


function saveTodoList() {
    const todoItems = [];
    document.querySelectorAll('.todo-item').forEach(li => {
        const text = li.querySelector('.todo-item__description').textContent;
        const checked = li.querySelector('input[type="checkbox"]').checked;
        todoItems.push({ text, checked });
    });
    localStorage.setItem(localStorageKey, JSON.stringify(todoItems));
}
