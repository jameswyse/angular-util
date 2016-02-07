[![npm](http://img.shields.io/npm/v/angular-util.svg?style=flat-square)](http://npmjs.org/package/angular-util) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://jameswyse.mit-license.org) [![npm](http://img.shields.io/david/jameswyse/angular-util.svg?style=flat-square)](http://npmjs.org/package/angular-util) [![npm](http://img.shields.io/david/dev/jameswyse/angular-util.svg?style=flat-square)](http://npmjs.org/package/angular-util)
angular-util - Angular Utilities
================================================

Some common utilities and helpers for angular.js projects.


## Install

### NPM
[![NPM](https://nodei.co/npm/angular-util.png)](https://nodei.co/npm/angular-util/)
```bash
$ npm install --save angular-util
```

### JSPM
```bash
$ jspm install npm:angular-util
```

## Example Usage

```javascript
import { Base, inject } from 'angular-util';

@inject('log', '$timeout')
class MyController extends Base {
  init () {
    this.$timeout(this.sayHello, 5000);
  }

  sayHello () {
    this.$log('Hello!');
  }
}
```

## API

### `Base` (Class)
A base class which automatically injects dependencies and then invokes an `init` method (if defined).

#### Usage
```javascript
import { Base } from 'angular-util';

class MyService extends Base {
  static $inject = ['$log']

  init () {
    this.$log('Hello');
  }
}
```

### `inject` (decorator)
A decorator to define your dependencies. Just sugar for defining a static `$inject` property.
Each argument should be the name of the injectable as a String.

#### Usage
```javascript
import { Base, inject } from 'angular-util';

@inject('$log', '$scope')
class MyController extends Base {
  init () {
    this.$log('Hello');
  }
}
```

### `injector` (function)
For manual dependency injection in custom classes. Should be called from your constructor.

#### Arguments
- `instance` - Generally `this`
- `args` - An array of injectables (as passed to the constructor)
- `$inject` - An array of dependencies to inject as strings. Omit to use `instance.constructor.$inject`
- `varName` - Alters the property name to look for injectable names (defaults to '$inject')

#### Usage
```javascript
import { injector } from 'angular-util';

class MyController {
  static $inject = ['$scope', '$log']

  constructor (...args) {
    injector(this, args);
    this.$log('Hello');
  }
}
```

## License
The MIT License (MIT)

*Copyright (c) 2016 James Wyse <james@jameswyse.net>*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
