const app = _('app');
const userNameView = _('getUserName');
const groceryListView = _('groceryList');
const listItemsView = _('listItems');
const remainingItemsView = _('remainingItems');

state = {
  userName: getLocalStorage('currentUser') || '',
  completeList: getLocalStorage('groceryList') || {},
  usersList: getLocalStorage('usersList') || [],
};

appInit();
