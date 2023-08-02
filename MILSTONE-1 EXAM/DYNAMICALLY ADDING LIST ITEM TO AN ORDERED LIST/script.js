document.getElementById('addItemBtn').addEventListener('click', function () {
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.textContent = itemInput.value;
    itemList.appendChild(newItem);
    itemInput.value = '';
});
