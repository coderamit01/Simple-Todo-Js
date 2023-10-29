/*
* title: To-Do list
* Author: Amit*
*/

let newTask = document.querySelector('#task');
let form = document.querySelector('#form');
let toDo = document.querySelector('#incomplte');
let completeTask = document.querySelector('#competed');

let createTask = function(task){
  let singleTask = document.createElement('div');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');
  singleTask.className = "single-task";
  checkBox.type = 'checkbox';
  checkBox.className = 'form-check-input';
  label.innerText = task;
  label.className = 'form-check-label ms-2';

  singleTask.appendChild(checkBox);
  singleTask.appendChild(label);
  
  return singleTask;
}

let addTask = function(event){
  event.preventDefault();
  let singleTask = createTask(newTask.value);
  toDo.appendChild(singleTask);
  newTask.value = "";
  //bind item
  bindIncompleteItem(singleTask, completeTaskItems);
}

let completeTaskItems = function(){
  let listItem = this.parentNode;
  let deleteBtn = document.createElement('button');
  listItem.className = 'complete-single d-flex justify-content-between align-items-center';
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'delete';
  listItem.appendChild(deleteBtn);
  let checkBox = listItem.querySelector("input[type='checkbox']");
  checkBox.remove();
  completeTask.appendChild(listItem);
  bindCompleteItem(listItem, deleteTask);
}

let deleteTask = function(){
  let listItem = this.parentNode;
  let completeSingle = listItem.parentNode;
  completeSingle.removeChild(listItem);
}

let bindIncompleteItem = function(taskItem, clickCheckBox){
  let checkBox = taskItem.querySelector("input[type='checkbox']");
  checkBox.onchange = clickCheckBox;
}

let bindCompleteItem = function(taskItem, deleteButtonClick){
  let button = taskItem.querySelector(".delete");
  button.onclick = deleteButtonClick;
}

form.addEventListener('submit', addTask);