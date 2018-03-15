var tasksArray=["one","two","three"];
//Todo: Here the tasks should be loaded 


//var popupView=browser.extension.getViews({type:'popup'})[0];
function logTabs(tabs)
{
  //  console.log(tabs);
  //createNotifications();
}
browser.tabs.query({currentWindow:true},logTabs);

function createNotifications()
{
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons/checked_2x.png"),
        "title": "hello",
        "message": "jio"
      });

}

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  var unlistedItems=popupView.document.getElementById("items");
    var li=popupView.document.createElement("li");
    li.appendChild(popupView.document.createTextNode(message.newItem));
   popupView.document.getElementById("item-value").value="";
    unlistedItems.appendChild(li);
}