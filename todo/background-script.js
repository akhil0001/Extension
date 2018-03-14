function logTabs(tabs)
{
  //  console.log(tabs);
  createNotifications();
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