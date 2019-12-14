class LocalStorageService {
  constructor() {
    if (LocalStorageService.instance) return LocalStorageService.instance;

    this.storagePrefix = 'JS-Band-';
    LocalStorageService.instance = this;

    return this;
  }

  setItem(key, value) {
    let valueResult = value;
    if (typeof value === 'object') {
      valueResult = JSON.stringify(value);
    }

    localStorage.setItem(`${this.storagePrefix}${key}`, valueResult);
  }

  getItem(key) {
    const item = localStorage.getItem(`${this.storagePrefix}${key}`);

    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }

  removeItem(key) {
    localStorage.removeItem(`${this.storagePrefix}${key}`);
  }
}

export default LocalStorageService;
