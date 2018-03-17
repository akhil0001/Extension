var WindowIdentity;
const tasksContent=document.querySelector("#tasks");

window.addEventListener("mouseover", ()=>{
    tasksContent.setAttribute("contenteditable",true);
});

window.addEventListener("mouseout", ()=>{
    tasksContent.setAttribute("contenteditable",false);
    browser.tabs.query({windowId: WindowIdentity,active:true}).then((tabs)=>{
        let tasksToStore={};
        tasksToStore["Veronica"]=tasksContent.textContent;
        browser.storage.local.set(tasksToStore);
        //console.log(tabs);
        //debugger;
    },onError);

});

function onError(error){
    console.error('Error: ${error}');
}

function updateContent() {
    browser.tabs.query({windowId: WindowIdentity, active: true})
      .then((tabs) => {
        return browser.storage.local.get();
      })
      .then((storedInfo) => {
        tasksContent.textContent = storedInfo["Veronica"];
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