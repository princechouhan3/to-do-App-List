// script.js
document.getElementById('add-button').addEventListener('click', addTodo);

function addTodo() {
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(deleteBtn);
  document.getElementById('todo-list').appendChild(li);

  input.value = '';
}
