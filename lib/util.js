'use strict'

module.exports = {
  toUpercase
}

function toUpercase (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

