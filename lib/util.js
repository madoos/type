'use strict'

module.exports = {
  toUpercase,
  makeComparator
}

function toUpercase (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function makeComparator (fn, result, value) {
  return fn(value) === result
}
