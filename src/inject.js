// Inject Decorator
// Usage:
// @inject('one', 'two', 'three')
export default function inject (...args) {
  return function (target, key, descriptor) {
    if (descriptor) {
      target = descriptor.value;
    }

    target['$inject'] = args;
    return descriptor;
  }
}
