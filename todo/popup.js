function addToList()
{
    var unlistedItems=document.getElementById("items");
    var li=document.createElement("li");
    var newItem=document.getElementById("item-value").innerText;
    li.appendChild(document.createTextNode(newItem));
    unlistedItems.appendChild(li);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', addToList);
    main();
  });