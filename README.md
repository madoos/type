# madoos-type

Check the type of objects

## Funtions

 * `.isArray`
 * `.isObject`
 * `.isDate`
 * `.isRegExp`
 * `.isNaN`
 * `.isUndefined`
 * `.isString`
 * `.isNumber` 
 * `.isBoolean`
 * `.isFunction`
 * `.isArrow`

 ## Getting Started

To install:

    npm i --save madoos-type

In your project:

``` javascript
const type = require('madoos-type');

type.isFunction(function(){}) // true
type.isNumber('1234') // false

```