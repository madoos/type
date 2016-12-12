# madoos-type

Check the type of objects

## Funtions

 *  `.is`
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

## .is

Returns a string with the object type

* 'Array'
* 'Object'
* 'Date'
* 'RegExp'
* 'NaN',
* 'undefined'
* 'string'
* 'number'
* 'boolean'
* 'function'
* 'symbol'

## Run test

    npm run test:unit:show

## Run cover test

    npm run test:cover:show

## Getting Started

To install:

    npm i --save madoos-type

In your project:

``` javascript
const type = require('madoos-type')

type.is({}) // => 'Object'
type.isFunction(function(){}) // =>  true
type.isNumber('1234') // => false

```
