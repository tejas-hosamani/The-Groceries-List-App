import { _ } from './component/utilities.js';

import { submitUserName, resetUser } from './component/services/userService.js';
import {
  addGroceryItem,
  cancelSave,
  deleteItem,
  editItem,
  saveItem,
} from './component/services/groceryService.js';
import { appInit } from './component/services/index.js';

window.submitUserName = submitUserName;
window.addGroceryItem = addGroceryItem;

window.cancelSave = cancelSave;
window.deleteItem = deleteItem;
window.editItem = editItem;
window.saveItem = saveItem;
window.resetUser = resetUser;

appInit();
