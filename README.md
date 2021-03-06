# madoos-type

_Check the type of objects._

[![Build Status](https://travis-ci.org/madoos/type.svg?branch=master)](https://travis-ci.org/madoos/type)

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
 * `.isSymbol`

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
