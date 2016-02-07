import injector from './injector.js';

// Base Class
// Usage:
// class MyClass extends Base {}
export default class Base {

  constructor (...args) {
    injector(this, args);

    if (this.init) {
      this.init();
    }
  }
}
