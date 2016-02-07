'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injector;
// injector(this, args);
function injector(instance, args) {
  var $inject = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
  var varName = arguments.length <= 3 || arguments[3] === undefined ? '$inject' : arguments[3];

  if (!$inject.length && instance.constructor && instance.constructor[varName]) {
    $inject = instance.constructor[varName];
  }

  if ($inject && Array.isArray($inject) && $inject.length) {
    $inject.forEach(function (name, idx) {
      return instance[name] = args[idx];
    });
  }
}