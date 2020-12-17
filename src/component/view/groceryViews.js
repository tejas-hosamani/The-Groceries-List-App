import { _ } from '../utilities.js';
import { state } from '../data/appState.js';

export function renderListItems() {
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
  const listItemsView = _('listItems');
  listItemsView.innerHTML = buildList;
  renderRemainingItemsView();
}
export function renderRemainingItemsView() {
  const remainingItemsView = _('remainingItems');
  remainingItemsView.innerText = Array.isArray(state.completeList[state.userName])
    ? 5 - state.completeList[state.userName].length
    : 5;
}
