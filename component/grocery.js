function addGroceryItem() {
  const groceryItemValue = _('groceryItemValue').value;
  if (groceryItemValue === '') {
    showNotification('error', 'Please add an item name', _('groceryItemValue'));
    return;
  }

  if (groceryItemValue.length > 20) {
    showNotification('error', 'Item name is too long', _('groceryItemValue'));
    return;
  }

  if (Array.isArray(state.completeList[state.userName])) {
    if (state.completeList[state.userName].includes(groceryItemValue)) {
      showNotification('error', `This item already exists in the list`, _('groceryItemValue'));
      return;
    }
    if (state.completeList[state.userName].length > 4) {
      showNotification('error', 'Sorry, only 5 times are allowed', _('groceryItemValue'));
      return;
    }
    state.completeList[state.userName].push(groceryItemValue);
  } else {
    state.completeList[state.userName] = [groceryItemValue];
  }
  showNotification('success', `Added '${groceryItemValue}' to the list!`, _('groceryItemValue'));
  setLocalStorage('groceryList', state.completeList);
  _('groceryItemValue').value = '';
  renderListItems();
}

function renderListItems() {
  let buildList = 'There are no items in your list';
  if (
    state.completeList.hasOwnProperty(state.userName) &&
    state.completeList[state.userName].length
  ) {
    buildList = '<ol>';
    state.completeList[state.userName].map(item => {
      buildList += `
        <li id="${item}">
          <span class="listItem">${item}</span>
          <a class="button" onClick="editItem('${item}')">Edit</a>
          <a class="button" onClick="deleteItem('${item}')">Delete</a>
        </li>
      `;
    });
    buildList += '</ol>';
  }

  listItemsView.innerHTML = buildList;
  renderRemainingItemsView();
}

function editItem(item) {
  renderListItems();
  const listItem = _(item);
  listItem.innerHTML = `
  <input id="${item}-input" value="${item}" type="text" />
  <a class="button" onClick="saveItem('${item}')">Save</a>
  <a class="button" onClick="cancelSave()">Cancel</a>
  `;
}

function cancelSave() {
  renderListItems();
}

function saveItem(item) {
  const updatedItemValue = _(item + '-input').value;

  console.log(item, updatedItemValue);
  if (item === updatedItemValue) {
    showNotification('error', 'Nothing changed to save.', _(item + '-input'));
    return;
  }

  const duplicateCount = state.completeList[state.userName].filter(
    item => updatedItemValue === item
  );
  console.log(duplicateCount, 'duplicateCount');
  if (duplicateCount.length) {
    showNotification('error', 'This item already exists in the list', _(item + '-input'));
    return;
  }
  const temp = state.completeList[state.userName].map(oldItem =>
    oldItem === item ? updatedItemValue : oldItem
  );
  state.completeList[state.userName] = temp;
  updateLocalStorage();
  renderListItems();
  showNotification('success', `Updated item`, _('groceryItemValue'));
}

function deleteItem(item) {
  if (confirm('Are you sure?')) {
    const temp = state.completeList[state.userName].filter(oldItem => oldItem !== item);
    state.completeList[state.userName] = temp;
    updateLocalStorage();
    renderListItems();
    showNotification('success', `'${item}' deleted`, _('groceryItemValue'));
  }
}

function renderRemainingItemsView() {
  remainingItemsView.innerText = Array.isArray(state.completeList[state.userName])
    ? 5 - state.completeList[state.userName].length
    : 5;
}
