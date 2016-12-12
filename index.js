'use strict'

const type = require('./lib/core')
const util = require('./lib/util')
const extendType = makeFunctions()
extendType.is = type
extendType.isArrow = makeIsArrow(extendType)


module.exports = extendType

function makeFunctions () {
  const typesNames = ['Array', 'Object', 'Date', 'RegExp', 'NaN', 'undefined', 'string', 'number', 'boolean', 'function', 'symbol']
  return typesNames.reduce(makeTypeFunction, {})
}

function makeTypeFunction (container, typeName) {
  const fnName = `is${util.toUpercase(typeName)}`
  container[fnName] = util.makeComparator.bind(null, type, typeName)
  return container
}

function makeIsArrow (container) {
  return function (value) {
    return container.isFunction(value) && container.isUndefined(value.prototype)
  }
}
