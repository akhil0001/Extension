const addButton = document.querySelector('.addButton');
const listitemsOfTodoTasks = document.querySelector('.todo-gridContainer__tasks__list');
const todoGridContainer =  document.querySelector('.todo-gridContainer');
const addTaskContainer = document.querySelector('.add-task-container');
// const listItemsOfDoneTasks = document.querySelector('.todo-gridContainer__doneTasks__list')
const saveTheButton = document.querySelector('#savetheTask');
const highPriority = document.querySelector('.high-priority');
const mediumPriority = document.querySelector('.medium-priority');
const lowPriority = document.querySelector('.low-priority');
const criticalPriority = document.querySelector('.critical-priority');
var visibilityFlagForTheFirstScreen = false;

var colorSelected;
var totalNumberofTasks;

highPriority.addEventListener('click',function()
{
  colorSelected = "#FFEE58";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;
});

criticalPriority.addEventListener('click',() =>{
  colorSelected = "#FF7043";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;

});

mediumPriority.addEventListener('click',()=>
{
  colorSelected = "#42A5F5";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;
  
});

lowPriority.addEventListener('click',()=>
{
  colorSelected="#66BB6A";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;

})
var tempListItem;



saveTheButton.addEventListener('click',function(){
  var titleOfTask = document.getElementById('task_title').value;
  var Description = document.getElementById('task_description').value;
 
  if(titleOfTask==='')
  titleOfTask='Task'+(totalNumberofTasks+1);
  var descriptionJSON={description:"",color:"",deadline:""};
  descriptionJSON['description']=Description;
  descriptionJSON['color']=colorSelected;

  //hidetheContainer and load the diiv with the specific animation
  storeTask(titleOfTask,descriptionJSON);
  visibilityFlagForTheFirstScreen = false;
  hideThetodoGridContainer(visibilityFlagForTheFirstScreen);

})

function hideThetodoGridContainer(visibilityFlagForTheFirstScreen) {
  if(!visibilityFlagForTheFirstScreen){
    todoGridContainer.style.visibility = 'visible';
  addTaskContainer.style.visibility='hidden';
document.getElementsByTagName('body')[0].style.background = '#f5f5f9';
  }
  else{
todoGridContainer.style.visibility = 'hidden';
addTaskContainer.style.visibility='visible';
document.getElementsByTagName('body')[0].style.background = '#3949AB';

  }
}

addButton.addEventListener('click',function(){
  // tempListItem = '<li>Hello There I am freaking awesome</li>';
  var titleOfTask = document.getElementById('task_title');
  var Description = document.getElementById('task_description');
  var colorSelected = '#42A5F5';
  titleOfTask.value = "";
  Description.value = "";
  if(!visibilityFlagForTheFirstScreen)
  visibilityFlagForTheFirstScreen=true;
  else
  visibilityFlagForTheFirstScreen=false;
  hideThetodoGridContainer(visibilityFlagForTheFirstScreen);
})

initializingTheExtensionFromLocalStorage();

function initializingTheExtensionFromLocalStorage()
{
  var gettingAllStorageItems = browser.storage.local.get(null);
gettingAllStorageItems.then((tasks)=> {
  var taskKeys = Object.keys(tasks);
  totalNumberofTasks = taskKeys.length;
  
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
var editButton = document.createElement('button');

titleItem.textContent = title;
taskBody.textContent = body.description;
doneButton.innerHTML = '<i class="material-icons md-18">delete</i>';
editButton.innerHTML = '<i class="material-icons md-18">mode_edit</i>'
priorityTask.style.background=body.color;
doneButton.style.zIndex='30'; 
doneButton.addEventListener('click',function(e){
  browser.storage.local.remove(e.target.parentNode.childNodes[1].innerText);
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  console.dir(listitemsOfTodoTasks.childNodes);
  if (listitemsOfTodoTasks.childNodes.length==1) {
    var p =document.createElement('p');
    p.textContent = 'No Tasks'
    listitemsOfTodoTasks.appendChild(p);
  }
  
//  shiftTheTaskfromTodotoDoneList(title,e,body);
})

editButton.addEventListener('click',function(){
  alert('Hi Working');
});

listItem.appendChild(priorityTask);
listItem.appendChild(titleItem);
listItem.appendChild(taskBody);
listItem.appendChild(doneButton);
listItem.style.cursor='pointer';
// listItem.appendChild(editButton);
listItem.addEventListener('click',()=>{
  
  hideThetodoGridContainer(true);
  visibilityFlagForTheFirstScreen=true;
  var titleOfTask = document.getElementById('task_title');
  var Description = document.getElementById('task_description');
  titleOfTask.value = title;
  Description.value = body.description;
})

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
