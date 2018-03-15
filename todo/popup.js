var itemsArray = [];
//This code has to be refactored a lot
function addToList() {
    var items = browser.storage.local.get();
    items.then(onGot, onError);
    var unlistedItems = document.getElementById("items");
    var li = document.createElement("li");
    var newItem = document.getElementById("item-value").value;
    browser.storage.local.set({
        "name": newItem
    });
    // setting the storage seems pretty bad
    li.appendChild(document.createTextNode(newItem));
    document.getElementById("item-value").value = "";
    unlistedItems.appendChild(li);
    //createNotifications();
    // browser.runtime.sendMessage({"newItem":newItem})
}
document.addEventListener('DOMContentLoaded', function () {
    createList();
    document.querySelector('button').addEventListener('click', addToList);
});

function onGot(item) {
    itemsArray.push(item);
    console.log(item);
    var unlistedItems = document.getElementById("items");
    unlistedItems.innerHTML = "";
    //  var newItem=document.getElementById("item-value").value;
    // browser.storage.local.set({"name":newItem});

    for (i = 0; i < itemsArray.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(itemsArray[i].name));
        document.getElementById("item-value").value = "";
        unlistedItems.appendChild(li);

    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function createList() {
    var items = browser.storage.local.get();
    items.then(onGot, onError);
}