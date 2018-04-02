var WindowIdentity,newItem;
// const tasksContent=document.querySelector("#list");

// window.addEventListener("mouseover", ()=>{
//     tasksContent.setAttribute("contenteditable",true);
// });

// window.addEventListener("mouseout", ()=>{
//     tasksContent.setAttribute("contenteditable",false);
//     browser.tabs.query({windowId: WindowIdentity,active:true}).then((tabs)=>{
//         let tasksToStore={};
//         tasksToStore["Veronix"]=tasksContent.textContent;
//         browser.storage.local.set(tasksToStore);
//         //console.log(tabs);
//         //debugger;
//     },onError);

// });

var FABElement=document.getElementById("addNewTask");
document.querySelector('#addNewTask').addEventListener('click', AddNewTask);

function AddNewTask()
{
    console.log("In the addnewtask")
//   newItem=document.getElementById('sample5').value;
//   document.getElementById('sample5').value="";
 // AddtoStorage(newItem);
 var newListItem='<li class="mdl-list__item"><span class="mdl-list__item-secondary-action"><label for="list-checkbox-5" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"><input type="checkbox" id="list-checkbox-5" class="mdl-checkbox__input"/></label></span><span class="mdl-list__item-primary-content">Iron Man</span></li>'
var todoTasks=document.getElementById("todoTasks");
todoTasks.innerHTML+=newListItem;

}

// function AddtoStorage(newItem)
// {
   
//     browser.tabs.query({windowId: WindowIdentity,active:true}).then((tabs)=>{
//         let tasksToStore={};
//         tasksToStore["Veronix"]=newItem;
//         browser.storage.local.set(tasksToStore);
//         updateContent();
//     },onError);
// }

// function onError(error){
//     console.error('Error: ${error}');
// }

// function updateContent() {
//     browser.tabs.query({windowId: WindowIdentity, active: true})
//       .then((tabs) => {
//         return browser.storage.local.get();
//       })    
//       .then((storedInfo) => {
//         tasksContent.textContent = storedInfo["Veronix"];
//       });
//   }
//   browser.tabs.onActivated.addListener(updateContent);

// /*
// Update content when a new page is loaded into a tab.
// */
// browser.tabs.onUpdated.addListener(updateContent);
  
// browser.windows.getCurrent({populate: true}).then((windowInformation)=>{
// WindowIdentity=windowInformation.id;
// updateContent();
// //console.log(WindowIdentity);
// //debugger;
// });

//FOR COMMANDS EVENT LISTENER

browser.commands.onCommand.addListener(function(command){
    if(command === "_open_the_side_bar")
    console.log("toggling the veronix");
    

});