'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createComponent;
// createComponent('hello', { controller: MyCtrl, etc: 'etc' })
function createComponent(name) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var defaults = {
    bindings: {
      item: '=',
      parent: '='
    }
  };

  if (options.hasOwnProperty('controller')) {
    defaults.controllerAs = name;
  }

  return Object.assign({}, defaults, options);
}