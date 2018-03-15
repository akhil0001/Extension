function addToList()
{
    var unlistedItems=document.getElementById("items");
    // var li=document.createElement("li");
     var newItem=document.getElementById("item-value").value;
    // li.appendChild(document.createTextNode(newItem));
    // unlistedItems.appendChild(li);
    unlistedItems.innerHTML+="<li>"+newItem+"</li>";
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', addToList);
    //main();
  });