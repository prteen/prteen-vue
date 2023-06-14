const STORAGE = window.localStorage;

export default {
  clear() {
    Object.keys(STORAGE).forEach(key => {
      STORAGE.removeItem(key);
    })
  },
  set(key, value) {
    STORAGE.setItem(key, value);
  },
  get(key) {
    return STORAGE.getItem(key);
  },
  remove(key) {
    STORAGE.removeItem(key);
  }
}

