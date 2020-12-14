import { displayView } from '../view/index.js';
import { renderListItems } from '../view/groceryViews.js';
import { state } from '../data/appState.js';

export function appInit() {
  if (state.userName === '') {
    displayView('userNameView');
  } else {
    displayView('groceryListView');
    renderListItems();
  }
}
