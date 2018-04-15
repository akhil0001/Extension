const addButton = document.querySelector('.addButton');
const listitemsOfTodoTasks = document.querySelector('.todo-gridContainer__tasks__list');
const todoGridContainer = document.querySelector('.todo-gridContainer');
const addTaskContainer = document.querySelector('.add-task-container');
// const listItemsOfDoneTasks = document.querySelector('.todo-gridContainer__doneTasks__list')
const saveTheButton = document.querySelector('#savetheTask');
const highPriority = document.querySelector('.high-priority');
const mediumPriority = document.querySelector('.medium-priority');
const lowPriority = document.querySelector('.low-priority');
const criticalPriority = document.querySelector('.critical-priority');
var visibilityFlagForTheFirstScreen = false;

var colorSelected;
var totalNumberofTasks=0;
var prevTitleOfTask="";

highPriority.addEventListener('click', function () {
  colorSelected = "#FFEE58";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;
});

criticalPriority.addEventListener('click', () => {
  colorSelected = "#FF7043";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;

});

mediumPriority.addEventListener('click', () => {
  colorSelected = "#42A5F5";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;

});

lowPriority.addEventListener('click', () => {
  colorSelected = "#66BB6A";
  document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;

})
var tempListItem;



saveTheButton.addEventListener('click', function () {
  var titleOfTask = document.getElementById('task_title').value;
  var Description = document.getElementById('task_description').value;

  if (titleOfTask === '')
    titleOfTask = 'Task #' + (++totalNumberofTasks);
  var descriptionJSON = {
    description: "",
    color: "",
    deadline: ""
  };
  descriptionJSON['description'] = Description;
  descriptionJSON['color'] = colorSelected;
  colorSelected = '#fff';
  //hidetheContainer and load the diiv with the specific animation
  visibilityFlagForTheFirstScreen = false;
  hideThetodoGridContainer(visibilityFlagForTheFirstScreen);
  var gettingSpecificStorageItem = browser.storage.local.get(titleOfTask);
  gettingSpecificStorageItem.then((tasks) => {
    var taskKeys = Object.keys(tasks);
    if(taskKeys.length>0)
    {
      var removedItem = browser.storage.local.remove(prevTitleOfTask)
      removedItem.then(()=>{console.log('successfully removed')});
      
      var taskToBeStored = browser.storage.local.set({
        [titleOfTask]: descriptionJSON
      });
      taskToBeStored.then(() => {
        initializingTheExtensionFromLocalStorage();
      });
    }
    else{
  storeTask(titleOfTask, descriptionJSON);
    }
  
})

})

function hideThetodoGridContainer(visibilityFlagForTheFirstScreen) {
  if (!visibilityFlagForTheFirstScreen) {
    todoGridContainer.style.visibility = 'visible';
    addTaskContainer.style.visibility = 'hidden';
    document.getElementsByTagName('body')[0].style.background = '#f5f5f9';
  } else {
    todoGridContainer.style.visibility = 'hidden';
    addTaskContainer.style.visibility = 'visible';
    document.getElementsByTagName('body')[0].style.background = '#3949AB';
    document.getElementsByClassName('add-task-container__box')[0].style.background = colorSelected;

  }
}

addButton.addEventListener('click', function () {
  // tempListItem = '<li>Hello There I am freaking awesome</li>';
  var titleOfTask = document.getElementById('task_title');
  var Description = document.getElementById('task_description');
  var colorSelected = '#42A5F5';
  titleOfTask.value = "";
  Description.value = "";
  addButton.innerHTML='<i class="material-icons">clear</i>';
  if (!visibilityFlagForTheFirstScreen){
    addButton.innerHTML='<i class="material-icons">clear</i>';
    visibilityFlagForTheFirstScreen = true;
  }
  else{
    addButton.innerHTML='<i class="material-icons">add</i>';
    visibilityFlagForTheFirstScreen = false;
  }
  hideThetodoGridContainer(visibilityFlagForTheFirstScreen);
})

initializingTheExtensionFromLocalStorage();

function initializingTheExtensionFromLocalStorage() {
  var gettingAllStorageItems = browser.storage.local.get(null);
  var myNode = document.getElementsByClassName("todo-gridContainer__tasks__list")[0];
var fc = myNode.firstChild;

while( fc ) {
    myNode.removeChild( fc );
    fc = myNode.firstChild;
}
  gettingAllStorageItems.then((tasks) => {
    var taskKeys = Object.keys(tasks);
    totalNumberofTasks = taskKeys.length;

    for (const taskKey of taskKeys) {
      var currentTask = tasks[taskKey];
      displayTheTask(taskKey, currentTask);
    }
  })

}

function storeTask(title, body) {
  var taskToBeStored = browser.storage.local.set({
    [title]: body
  });
  taskToBeStored.then(() => {
    displayTheTask(title, body);
  })
}


function displayTheTask(title,body) {
  
var listItem = document.createElement('li');
var titleItem = document.createElement('h3');
var taskBody = document.createElement('p');
var priorityTask = document.createElement('div')

var menuButton = document.createElement('button');
var headingPlusDiv = document.createElement('div');
const editPlusDeleteDiv = document.createElement('div');
const doneButton = document.createElement('button');
var editButton = document.createElement('button');

editPlusDeleteDiv.setAttribute('class','editPlusDeleteDiv');
doneButton.setAttribute('id','done');
editButton.setAttribute('id','edit');
editButton.innerHTML = '<i class="material-icons md-18">mode_edit</i>';
doneButton.innerHTML= '<i class="material-icons md-18">done</i>'
editPlusDeleteDiv.appendChild(doneButton);
editPlusDeleteDiv.appendChild(editButton);
editPlusDeleteDiv.style.visibility='hidden';
titleItem.textContent = title;
taskBody.textContent = body.description;
menuButton.innerHTML = '<i class="material-icons md-18">menu</i>';

priorityTask.style.background=body.color;
menuButton.style.zIndex='30'; 
menuButton.addEventListener('click',function(e){
 if(editPlusDeleteDiv.style.visibility == 'hidden'){
  editPlusDeleteDiv.style.background = body.color;
  editPlusDeleteDiv.style.visibility = 'visible';
 }
 else{
  editPlusDeleteDiv.style.visibility = 'hidden';
 }
  
//  shiftTheTaskfromTodotoDoneList(title,e,body);
})

editButton.addEventListener('click',function(){
 var titleOfTask = document.getElementById('task_title');
  var Description = document.getElementById('task_description');
  //var colorSelected = '#42A5F5';
  titleOfTask.value = title;
  prevTitleOfTask = title;
  Description.value = body.description;
  //Description.value = "";
  colorSelected = body.color;
  if (!visibilityFlagForTheFirstScreen)
    visibilityFlagForTheFirstScreen = true;
  else
    visibilityFlagForTheFirstScreen = false;
  hideThetodoGridContainer(visibilityFlagForTheFirstScreen);
})

doneButton.addEventListener('click',function(){
  var removedItem = browser.storage.local.remove(title)
  removedItem.then(()=>{initializingTheExtensionFromLocalStorage();});
})

listItem.appendChild(priorityTask);
listItem.appendChild(menuButton);
listItem.appendChild(titleItem);
listItem.appendChild(taskBody);
listItem.appendChild(editPlusDeleteDiv);
//listItem.style.cursor='pointer';


listitemsOfTodoTasks.appendChild(listItem);
}

