// createComponent('hello', { controller: MyCtrl, etc: 'etc' })
export default function createComponent (name, options={}) {
  const defaults = {
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
