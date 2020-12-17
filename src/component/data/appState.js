import { getLocalStorage } from './localStorage.js';

export const state = {
  userName: getLocalStorage('currentUser') || '',
  completeList: getLocalStorage('groceryList') || {},
  usersList: getLocalStorage('usersList') || [],
};
