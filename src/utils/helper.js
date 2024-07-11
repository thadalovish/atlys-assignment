const storeInLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return JSON.parse(localStorage.getItem(key));
};

const getFromLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const removeFromLocal = (key) => {
  return localStorage.removeItem(key);
};

const clearLocal = () => {
  return localStorage.clear();
};

export { storeInLocal, getFromLocal, removeFromLocal, clearLocal };
