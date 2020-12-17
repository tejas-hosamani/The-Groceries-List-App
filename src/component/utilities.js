import { setLocalStorage } from './data/localStorage.js';
import { state } from './data/appState.js';

export const _ = x => {
  return document.getElementById(x);
};

export function stringifyFullName(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

export function updateLocalStorage() {
  setLocalStorage('groceryList', state.completeList);
  setLocalStorage('currentUser', state.userName);
  setLocalStorage('usersList', state.usersList);
}
