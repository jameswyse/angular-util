'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inject;
// Inject Decorator
// Usage:
// @inject('one', 'two', 'three')
function inject() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (target, key, descriptor) {
    if (descriptor) {
      target = descriptor.value;
    }

    target['$inject'] = args;
    return descriptor;
  };
}