import { _ } from '../utilities.js';

export function displayView(view) {
  const userNameView = _('getUserName');
  const groceryListView = _('groceryList');
  switch (view) {
    case 'userNameView':
      userNameView.style.display = 'block';
      groceryListView.style.display = 'none';
      break;

    case 'groceryListView':
      userNameView.style.display = 'none';
      groceryListView.style.display = 'block';
      break;

    default:
      userNameView.style.display = 'block';
      groceryListView.style.display = 'none';
      break;
  }
}

export function showNotification(type, message, targetElement) {
  const notification = _('notification');
  notification.classList.add(type);
  notification.innerText = message;
  if (type === 'error') targetElement.style.border = '2px solid red';
  setTimeout(() => {
    notification.classList.remove(type);
    notification.innerText = '';
    if (type === 'error') targetElement.style.border = '';
  }, 3500);
}
