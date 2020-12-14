import { _, updateLocalStorage } from '../utilities.js';
import { state } from '../data/appState.js';
import { setLocalStorage } from '../data/localStorage.js';
import { displayView, showNotification } from '../view/index.js';
import { appInit } from './index.js';

export function resetUser() {
  state.userName = '';
  displayView('userNameView');
  setLocalStorage('currentUser', '');
  appInit();
  showNotification('success', 'Logged out', _('userNameValue'));
}

export function submitUserName() {
  state.userName = _('userNameValue').value;
  if (state.userName === '') {
    showNotification('error', 'Please enter your name', _('userNameValue'));
    return;
  }

  if (!state.usersList.includes(state.userName)) {
    if (state.usersList.length > 2) {
      const removedUser = state.usersList.shift();
      delete state.completeList[removedUser];
    }
    state.usersList.push(state.userName);
    showNotification('success', `Welcome ${state.userName}!`, _('userNameValue'));
  } else {
    showNotification('success', `Welcome back ${state.userName}!`, _('userNameValue'));
  }

  updateLocalStorage();
  appInit();
  _('userNameValue').value = '';
}
