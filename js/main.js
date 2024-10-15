document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('todoInput');
  const taskText = input.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      taskItem.classList.add('completed');
    } else {
      taskItem.classList.remove('completed');
    }
  });

  const taskSpan = document.createElement('span');
  taskSpan.innerText = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.style.backgroundColor = 'red';
  deleteBtn.addEventListener('click', function() {
    taskItem.remove();
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);

  document.getElementById('todoList').appendChild(taskItem);
  input.value = ''; // Clear the input field
}
