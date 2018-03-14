function addToList()
{
    var unlistedItems=document.getElementById("items");
    var li=document.createElement("li");
    var newItem=document.getElementById("item-value").value;
    li.appendChild(document.createTextNode(newItem));
    document.getElementById("item-value").value="";
    unlistedItems.appendChild(li);
   // createNotifications();
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', addToList);
  });