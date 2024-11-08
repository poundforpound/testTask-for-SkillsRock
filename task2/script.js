// Task 1
function isPalindrome(str) {
  const value = str.toLowerCase();
  for (let i = 0; i < value.length / 2; i++) {
    if (value[i] != value[value.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
// console.log(isPalindrome('А роза упала на лапу Азора'));
// console.log(isPalindrome('Привет'));
// Task 2
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz();

//Task 3
function chunkArray(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');
  const filterButtons = document.querySelectorAll('.filter-btn');

  addTaskButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener('click', filterTasks);
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.addEventListener('click', toggleTaskCompletion);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }

  function toggleTaskCompletion(e) {
    e.target.classList.toggle('completed');
  }

  function filterTasks(e) {
    const filter = e.target.dataset.filter;
    const tasks = taskList.getElementsByTagName('li');

    for (const task of tasks) {
      switch (filter) {
        case 'completed':
          task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
          break;
        case 'incomplete':
          task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
          break;
        default:
          task.style.display = 'flex';
      }
    }
  }
});
