//function to add an item to the buckt list
function addItem(){
    const input = document.getElementById("add_item");
    const itemText = input.value.trim();
    if (itemText === "") return;

    const list = document.getElementById("bucket_list");
    const ItemList = document.createElement("li");
    ItemList.innerHTML = `${itemText} <button onclick="removeItem(this)">Delete</button>`;
    list.appendChild(ItemList);

    input.value = ""; //clear the input field

}

//function to remove items
function removeItem(button){
    button.parentElement.remove();
}







