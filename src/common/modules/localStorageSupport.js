const localStorageSupported = (type) => {
  try {
    let storage = window[type];
    let x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
};

export default localStorageSupported;
