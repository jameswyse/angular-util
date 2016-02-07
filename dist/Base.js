'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

var _injector = require('./injector.js');

var _injector2 = _interopRequireDefault(_injector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Base Class
// Usage:
// class MyClass extends Base {}

var Base = exports.Base = function Base() {
  _classCallCheck(this, Base);

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (0, _injector2.default)(this, args);

  if (this.init) {
    this.init();
  }
};