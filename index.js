(()=>{
const btn = document.querySelector('[data-form-btn]');

const addTask = (event) => {
  event.preventDefault();
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date');

  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');

  input.value = '';
  calendar.value = "";
  const taskObj = {
    value,
    dateFormat
  };
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  const task = createTask(taskObj);
  list.appendChild(task);
};

const createTask = ({value, dateFormat}) => {
  
  const task = document.createElement('li');
        task.classList.add('card');
  //backticks
  const taskContent = document.createElement('div');
  
  const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;

  const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
  // task.innerHTML = content;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
  return task;
};

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', completeTask);
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
};

const deleteIcon = () => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', deleteTask);
  return i;
};

const deleteTask = (event) => {
  const parent = event.target.parentElement;
  parent.remove();
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
})();