const addButton = document.querySelector('.addButton');
const listitemsOfTodoTasks = document.querySelector('.todo-gridContainer__tasks__list');
const todoGridContainer =  document.querySelector('.todo-gridContainer');
const addTaskContainer = document.querySelector('.add-task-container');
// const listItemsOfDoneTasks = document.querySelector('.todo-gridContainer__doneTasks__list')
const saveTheButton = document.querySelector('#savetheTask');

var tempListItem;



saveTheButton.addEventListener('click',function(){
  todoGridContainer.style.visibility = 'visible';
  addTaskContainer.style.visibility='hidden';
})

addButton.addEventListener('click',function(){
  tempListItem = '<li>Hello There I am freaking awesome</li>';
  var title = 'Lol';
  var body = 'Hello there! This is akhil! I am a wannabe superhero. ok '
  // storeTask(title,body)
  todoGridContainer.style.visibility = 'hidden';
  addTaskContainer.style.visibility='visible';
})

initializingTheExtensionFromLocalStorage();

function initializingTheExtensionFromLocalStorage()
{
  var gettingAllStorageItems = browser.storage.local.get(null);
gettingAllStorageItems.then((tasks)=> {
  var taskKeys = Object.keys(tasks);
  
  
    for (const taskKey of taskKeys) {
      var currentTask = tasks[taskKey];
      displayTheTask(taskKey,currentTask);
    }
})

}

function storeTask(title,body)
{
  var taskToBeStored = browser.storage.local.set({[title]:body});
  taskToBeStored.then(() => {
    displayTheTask(title,body);
  })
}


function displayTheTask(title,body) {
var listItem = document.createElement('li');
var titleItem = document.createElement('h3');
var doneButton = document.createElement('button');
var taskBody = document.createElement('p');
var priorityTask = document.createElement('div')

titleItem.textContent = title;
taskBody.textContent = body;
doneButton.innerHTML = '<i class="material-icons md-18">delete</i>';

doneButton.addEventListener('click',function(e){
  console.dir(e);
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  console.dir(listitemsOfTodoTasks.childNodes);
  if (listitemsOfTodoTasks.childNodes.length==1) {
    var p =document.createElement('p');
    p.textContent = 'No Tasks'
    listitemsOfTodoTasks.appendChild(p);
  }
//  shiftTheTaskfromTodotoDoneList(title,e,body);
})

listItem.appendChild(priorityTask);
listItem.appendChild(titleItem);
listItem.appendChild(taskBody);
listItem.appendChild(doneButton);



listitemsOfTodoTasks.appendChild(listItem);
}


// function shiftTheTaskfromTodotoDoneList(title,e,body){
// var tobeTransferedelement=(e.target.parentNode)
// listItemsOfDoneTasks.appendChild(tobeTransferedelement);
// e.target.parentNode.removeChild(e.target);
// browser.storage.local.remove('todo')
// var doneTasksThatareStored = browser.storage.local.get();
// var doneTasksinStorage={'done':{}};
// doneTasksThatareStored.then((tasks)=>{
//   if(tasks)
//   doneTasksinStorage = tasks;
// })  
// doneTasksinStorage['done'][title]=body;
// var taskToBeStored = browser.storage.local.set(doneTasksinStorage);
//   taskToBeStored.then(() => {
//     //displayTheTask(title,body);
//   })
// }

//Todo: Window update has to be done so that all are in sync and also that there is code in annotate page