var itemsArray = [];
//This code has to be refactored a lot
function appendToList(newItem) {
    // var items = browser.storage.local.get();
    // items.then(onGot, onError);
    var unlistedItems = document.getElementById("items");
    var li = document.createElement("li");
    var newItem = document.getElementById("item-value").value;
    // browser.storage.local.set({
    //     "name": newItem
    // });
    // setting the storage seems pretty bad
    li.appendChild(document.createTextNode(newItem));
    document.getElementById("item-value").value = "";
    unlistedItems.appendChild(li);
    //createNotifications();
    // browser.runtime.sendMessage({"newItem":newItem});

   
}

function addToList()
{
    browser.storage.local.set({
        "name": newItem
    });
}
//this is where the DOM actually loads and then we search it from the local storage

document.addEventListener('DOMContentLoaded', function () {
   displayItemsfromLocalstorage();
    document.querySelector('button').addEventListener('click', addToList);
});

//this function displays the items that are present in local storage
function displayItemsfromLocalstorage() {
    var tasksinStorage = browser.storage.local.get();
    tasksinStorage.then(onGettingTasks, onError);
}
//this is how promise works
function onGettingTasks(tasks) {
    // itemsArray.push(item);
    // console.log(item);
    // var unlistedItems = document.getElementById("items");
    // unlistedItems.innerHTML = "";
    // //  var newItem=document.getElementById("item-value").value;
    // // browser.storage.local.set({"name":newItem});

    // for (i = 0; i < itemsArray.length; i++) {
    //     var li = document.createElement("li");
    //     li.appendChild(document.createTextNode(itemsArray[i].name));
    //     document.getElementById("item-value").value = "";
    //     unlistedItems.appendChild(li);

    // }

    //now we are accessing that tasks from storage

    console.log(tasks);
    if(tasks)
    {
       // for(i=0;i<tasks.length)
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

