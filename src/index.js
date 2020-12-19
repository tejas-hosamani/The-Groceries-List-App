import { _ } from './utilities.js';

import { submitUserName, resetUser } from './services/userService.js';
import {
  addGroceryItem,
  cancelSave,
  deleteItem,
  editItem,
  saveItem,
} from './services/groceryService.js';
import { appInit } from './services/index.js';
import './scss/style.scss';

window.submitUserName = submitUserName;
window.addGroceryItem = addGroceryItem;

window.cancelSave = cancelSave;
window.deleteItem = deleteItem;
window.editItem = editItem;
window.saveItem = saveItem;
window.resetUser = resetUser;

appInit();
