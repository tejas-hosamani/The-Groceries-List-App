function _(x) {
  return document.getElementById(x);
}

function stringifyFullName(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

function showNotification(type, message, targetElement) {
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

// Local storage
const appendableKey = 'grocery-app'; // To keep keys unique
function getLocalStorage(key) {
  if (!key) {
    console.error(`${key} doesn't exists.`);
    return null;
  }

  try {
    const valueStr = localStorage.getItem(`${key}-${appendableKey}`);
    if (valueStr) {
      return JSON.parse(valueStr);
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

function setLocalStorage(key, obj) {
  if (!key) {
    console.error(`${key} doesn't exists.`);
    return null;
  }

  try {
    localStorage.setItem(`${key}-${appendableKey}`, JSON.stringify(obj));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function deleteLocalStorage(key) {
  if (!key) {
    console.error(`${key} doesn't exists.`);
    return null;
  }
  try {
    localStorage.removeItem(`${key}-${appendableKey}`);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function updateLocalStorage() {
  setLocalStorage('groceryList', state.completeList);
  setLocalStorage('currentUser', state.userName);
  setLocalStorage('usersList', state.usersList);
}

function displayView(view) {
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

function appInit() {
  if (state.userName === '') {
    displayView('userNameView');
  } else {
    displayView('groceryListView');
    renderListItems();
  }
}
