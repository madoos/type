'use strict'
const util = require('./lib/util')
const typeCore = require('./lib/core')
const results = ['Array', 'Object', 'Date', 'RegExp', 'NaN', 'undefined', 'string', 'number', 'boolean', 'function', 'symbol']
const type = _extends(createIsFunctions(typeCore), results)
type.isArrow = createIsArrow(type)
type.is = typeCore

module.exports = type

function _extends (reducer, fnNames) {
  return fnNames.reduce(reducer, {})
}

function _comparator (fn, result) {
  return function (...args) {
    return fn.apply(this, args) === result
  }
}

function createIsFunctions (typeCore) {
  return function (type, result) {
    const fnName = `is${util.toUpercase(result)}`
    type[fnName] = _comparator(typeCore, result)
    return type
  }
}

function createIsArrow (type) {
  return function (value) {
    return type.isFunction(value) && type.isUndefined(value.prototype)
  }
}

