// injector(this, args);
export default function injector (instance, args, $inject = [], varName = '$inject') {
  if (!$inject.length && instance.constructor && instance.constructor[varName]) {
    $inject = instance.constructor[varName];
  }

  if ($inject && Array.isArray($inject) && $inject.length) {
    $inject.forEach( (name, idx) => instance[name] = args[idx]);
  }
}
