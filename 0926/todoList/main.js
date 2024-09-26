const menus = document.querySelectorAll('.menu');
const input = document.getElementById('input-todo');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const todoArray = JSON.parse(localStorage.getItem('todo')) ?? [];
const todoArchive = JSON.parse(localStorage.getItem('archive')) ?? [];
let currentMenu = 'all';

class Todo {
  constructor(task) {
    this.task = task;
    this.isDone = false;
    this.id = '_' + Math.random().toString(36).substring(2, 9);
  }
}

menus.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    currentMenu = e.target.textContent;
    renderTodo();
    renderMenu();
  });
});

function renderMenu() {
  menus.forEach((menu) => {
    currentMenu === menu.textContent
      ? menu.classList.add('current')
      : menu.classList.remove('current');
  });
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (!input.value.replaceAll(' ', '')) {
    alert('할 일을 입력해주세요.');
    input.value = '';
  }

  todoArray.push(new Todo(input.value));

  localStorage.setItem('todo', JSON.stringify(todoArray));

  input.value = '';
  renderTodo();
});

function getTodoList() {
  const todoTodo = todoArray.filter((todo) => todo.isDone === false);
  const todoDone = todoArray.filter((todo) => todo.isDone === true);

  return [
    { menu: 'all', todoToRender: todoArray },
    { menu: 'to do', todoToRender: todoTodo },
    { menu: 'done', todoToRender: todoDone },
    { menu: 'archive', todoToRender: todoArchive },
  ];
}

function renderTodo() {
  const todoByMenu = getTodoList();

  todoList.innerHTML = '';
  todoByMenu
    .find((menu) => menu.menu === currentMenu)
    .todoToRender.forEach((todo) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const button = document.createElement('button');

      li.classList.add('todo');
      li.classList.add('flex');

      span.classList.add('todo-text');
      todo.isDone ? span.classList.add('done') : span.classList.remove('done');
      span.textContent = todo.task;
      span.onclick = () => {
        if (currentMenu === 'archive') {
          const index = todoArchive.findIndex((task) => task.id === todo.id);
          todoArray.push(todoArchive[index]);
          todoArchive.splice(index, 1);
        } else {
          getTaskDone(todo.id);
        }
        renderTodo();
      };

      if (currentMenu !== 'archive') {
        button.classList.add('archive-button');
        button.textContent = '🗑️';
        button.onclick = () => moveTaskToArchive(todo.id);
      } else {
        button.classList.add('delete-button');
        button.textContent = '❌';
        button.onclick = () => deleteTodo(todo.id);
      }

      li.append(span, button);
      todoList.appendChild(li);
    });
}

function getTaskDone(id) {
  const index = todoArray.findIndex((task) => task.id === id);
  todoArray[index].isDone = !todoArray[index].isDone;
  localStorage.setItem('todo', JSON.stringify(todoArray));

  renderTodo();
}

function moveTaskToArchive(id) {
  const todo = todoArray.find((task) => task.id === id);
  todoArchive.push(todo);
  localStorage.setItem('archive', JSON.stringify(todoArchive));

  const index = todoArray.findIndex((task) => task.id === id);
  todoArray.splice(index, 1);
  localStorage.setItem('todo', JSON.stringify(todoArray));

  renderTodo();
}

function deleteTodo(id) {
  const index = todoArchive.findIndex((task) => task.id === id);
  todoArchive.splice(index, 1);
  localStorage.setItem('archive', JSON.stringify(todoArchive));

  renderTodo();
}

renderTodo();
renderMenu();
