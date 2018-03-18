var WindowIdentity,newItem;
const tasksContent=document.querySelector("#list");

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
document.querySelector('#saveTask').addEventListener('click', getTheDataFromTextArea);

function getTheDataFromTextArea()
{
  newItem=document.getElementById('sample5').value;
  document.getElementById('sample5').value="";
  AddtoStorage(newItem);

}

function AddtoStorage(newItem)
{
   
    browser.tabs.query({windowId: WindowIdentity,active:true}).then((tabs)=>{
        let tasksToStore={};
        tasksToStore["Veronix"]=newItem;
        browser.storage.local.set(tasksToStore);
        updateContent();
    },onError);
}

function onError(error){
    console.error('Error: ${error}');
}

function updateContent() {
    browser.tabs.query({windowId: WindowIdentity, active: true})
      .then((tabs) => {
        return browser.storage.local.get();
      })    
      .then((storedInfo) => {
        tasksContent.textContent = storedInfo["Veronix"];
      });
  }
  browser.tabs.onActivated.addListener(updateContent);

/*
Update content when a new page is loaded into a tab.
*/
browser.tabs.onUpdated.addListener(updateContent);
  
browser.windows.getCurrent({populate: true}).then((windowInformation)=>{
WindowIdentity=windowInformation.id;
updateContent();
//console.log(WindowIdentity);
//debugger;
});

//FOR COMMANDS EVENT LISTENER

browser.commands.onCommand.addListener(function(command){
    if(command === "_open_the_side_bar")
    console.log("toggling the veronix");
    

});