'use strict'

const type = require('../index')
const chai = require('chai')
const expect = chai.expect

// isArray
describe('Test type.isArray(value)', function () {
  it('type.isArray should to be a function', function () {
    expect(type.isArray).to.be.a('function')
  })

  it('type.isArray([]) should to be a boolean', function () {
    expect(type.isArray([])).to.be.a('boolean')
  })
  it('type.isArray({}) should to be a false', function () {
    expect(type.isArray({})).to.be.false
  })
  it('type.isArray([]) should to be a true', function () {
    expect(type.isArray([])).to.be.true
  })
})

// isObject
describe('Test type.isObject(value)', function () {
  it('type.isObject should to be a function', function () {
    expect(type.isObject).to.be.a('function')
  })

  it('type.isObject({}) should to be a boolean', function () {
    expect(type.isObject({})).to.be.a('boolean')
  })
  it('type.isObject([]) should to be a false', function () {
    expect(type.isObject([])).to.be.false
  })
  it('type.isObject({}) should to be a true', function () {
    expect(type.isObject({})).to.be.true
  })
})

// isDate
describe('Test type.isObject(value)', function () {
  it('type.isDate should to be a function', function () {
    expect(type.isDate).to.be.a('function')
  })

  it('type.isDate({}) should to be a boolean', function () {
    expect(type.isDate({})).to.be.a('boolean')
  })
  it('type.isDate([]) should to be a false', function () {
    expect(type.isDate([])).to.be.false
  })
  it('type.isDate(new Date()) should to be a true', function () {
    expect(type.isDate(new Date())).to.be.true
  })
})

// isRegExp
describe('Test type.isRegExp(value)', function () {
  it('type.isRegExp should to be a function', function () {
    expect(type.isRegExp).to.be.a('function')
  })

  it('type.isRegExp({}) should to be a boolean', function () {
    expect(type.isRegExp({})).to.be.a('boolean')
  })

  it('type.isRegExp([]) should to be a false', function () {
    expect(type.isRegExp([])).to.be.false
  })

  it('type.isRegExp(new RegExp()) should to be a true', function () {
    expect(type.isRegExp(new RegExp())).to.be.true
  })
})

// isNaN
describe('Test type.isNaN(value)', function () {
  it('type.isNaN should to be a function', function () {
    expect(type.isNaN).to.be.a('function')
  })

  it('type.isNaN({}) should to be a boolean', function () {
    expect(type.isNaN({})).to.be.a('boolean')
  })

  it('type.isNaN([]) should to be a false', function () {
    expect(type.isNaN([])).to.be.false
  })

  it('type.isNaN(NaN) should to be a true', function () {
    expect(type.isNaN(NaN)).to.be.true
  })
})

// isUndefined
describe('Test type.isUndefined(value)', function () {
  it('type.isUndefined should to be a function', function () {
    expect(type.isUndefined).to.be.a('function')
  })

  it('type.isUndefined({}) should to be a boolean', function () {
    expect(type.isUndefined({})).to.be.a('boolean')
  })

  it('type.isUndefined([]) should to be a false', function () {
    expect(type.isUndefined([])).to.be.false
  })

  it('type.isUndefined(undefined) should to be a true', function () {
    expect(type.isUndefined(undefined)).to.be.true
  })
})

// isString
describe('Test type.isString(value)', function () {
  it('type.isString should to be a function', function () {
    expect(type.isString).to.be.a('function')
  })

  it('type.isString({}) should to be a boolean', function () {
    expect(type.isString({})).to.be.a('boolean')
  })

  it('type.isString([]) should to be a false', function () {
    expect(type.isString([])).to.be.false
  })

  it('type.isString("abc") should to be a true', function () {
    expect(type.isString('abc')).to.be.true
  })
})

// isNumber
describe('Test type.isNumber(value)', function () {
  it('type.isNumber should to be a function', function () {
    expect(type.isNumber).to.be.a('function')
  })

  it('type.isNumber({}) should to be a boolean', function () {
    expect(type.isNumber({})).to.be.a('boolean')
  })

  it('type.isNumber([]) should to be a false', function () {
    expect(type.isNumber([])).to.be.false
  })

  it('type.isNumber("123") should to be a false', function () {
    expect(type.isNumber('123')).to.be.false
  })

  it('type.isNumber(123) should to be a true', function () {
    expect(type.isNumber(123)).to.be.true
  })

  it('type.isNumber(1.234) should to be a true', function () {
    expect(type.isNumber(1.234)).to.be.true
  })
})

// isBoolean
describe('Test type.isBoolean(value)', function () {
  it('type.isBoolean should to be a function', function () {
    expect(type.isBoolean).to.be.a('function')
  })

  it('type.isBoolean({}) should to be a boolean', function () {
    expect(type.isBoolean({})).to.be.a('boolean')
  })

  it('type.isBoolean([]) should to be a false', function () {
    expect(type.isBoolean([])).to.be.false
  })

  it('type.isBoolean("true") should to be a false', function () {
    expect(type.isBoolean('true')).to.be.false
  })

  it('type.isBoolean("false") should to be a false', function () {
    expect(type.isBoolean('false')).to.be.false
  })

  it('type.isBoolean(true) should to be a true', function () {
    expect(type.isBoolean(true)).to.be.true
  })

  it('type.isBoolean(false) should to be a true', function () {
    expect(type.isBoolean(false)).to.be.true
  })
})

// isFunction
describe('Test type.isFunction(value)', function () {
  it('type.isFunction should to be a function', function () {
    expect(type.isFunction).to.be.a('function')
  })

  it('type.isFunction({}) should to be a boolean', function () {
    expect(type.isFunction({})).to.be.a('boolean')
  })

  it('type.isFunction([]) should to be a false', function () {
    expect(type.isFunction([])).to.be.false
  })

  it('type.isFunction(function(){}) should to be a true', function () {
    expect(type.isFunction(function () {})).to.be.true
  })

  it('type.isFunction(() => {}) should to be a true', function () {
    expect(type.isFunction(() => {})).to.be.true
  })
})

// isSymbol
describe('Test type.isSymbol(value)', function () {
  it('type.isSymbol should to be a function', function () {
    expect(type.isSymbol).to.be.a('function')
  })

  it('type.isSymbol({}) should to be a boolean', function () {
    expect(type.isSymbol({})).to.be.a('boolean')
  })

  it('type.isSymbol([]) should to be a false', function () {
    expect(type.isSymbol([])).to.be.false
  })

  it('type.isSymbol(Symbol("abcd")) should to be a true', function () {
    const simbol = Symbol('abcd')
    expect(type.isSymbol(simbol)).to.be.true
  })
})

// isArrow
describe('Test type.isArrow(value)', function () {
  it('type.isArrow should to be a function', function () {
    expect(type.isArrow).to.be.a('function')
  })

  it('type.isArrow({}) should to be a boolean', function () {
    expect(type.isArrow({})).to.be.a('boolean')
  })

  it('type.isArrow({}) should to be a false', function () {
    expect(type.isArrow({})).to.be.false
  })

  it('type.isArrow(function(){}) should to be a false', function () {
    expect(type.isArrow(function () {})).to.be.false
  })

  it('type.isArrow(() => {}) should to be a true', function () {
    expect(type.isArrow(() => {})).to.be.true
  })
})

// is
describe('Test type.is(value)', function () {
  it('type.is should to be a function', function () {
    expect(type.is).to.be.a('function')
  })

  it('type.is({}) should to be a "Object"', function () {
    expect(type.is({})).to.be.a('string')
    expect(type.is({})).to.equal('Object')
  })

  it('type.is([]) should to be a "Array"', function () {
    expect(type.is([])).to.be.a('string')
    expect(type.is([])).to.equal('Array')
  })

  it('type.is(new Date()) should to be a "Array"', function () {
    expect(type.is(new Date())).to.be.a('string')
    expect(type.is(new Date())).to.equal('Date')
  })

  it('type.is(new Date()) should to be a "Date"', function () {
    expect(type.is(new Date())).to.be.a('string')
    expect(type.is(new Date())).to.equal('Date')
  })

  it('type.is( new RegExp()) should to be a "RegExp"', function () {
    expect(type.is(new RegExp())).to.be.a('string')
    expect(type.is(new RegExp())).to.equal('RegExp')
  })

  it('type.is(NaN) should to be a "NaN"', function () {
    expect(type.is(NaN)).to.be.a('string')
    expect(type.is(NaN)).to.equal('NaN')
  })

  it('type.is(undefined) should to be a "undefined"', function () {
    expect(type.is(undefined)).to.be.a('string')
    expect(type.is(undefined)).to.equal('undefined')
  })

  it('type.is("abc") should to be a "string"', function () {
    expect(type.is('abc')).to.be.a('string')
    expect(type.is('abc')).to.equal('string')
  })

  it('type.is(123) should to be a "number"', function () {
    expect(type.is(123)).to.be.a('string')
    expect(type.is(123)).to.equal('number')
  })

  it('type.is(true) should to be a "boolean"', function () {
    expect(type.is(true)).to.be.a('string')
    expect(type.is(true)).to.equal('boolean')
  })

  it('type.is(function(){}) should to be a "function"', function () {
    expect(type.is(function () {})).to.be.a('string')
    expect(type.is(function () {})).to.equal('function')
  })

  it('type.is(() => {}) should to be a "function"', function () {
    expect(type.is(() => {})).to.be.a('string')
    expect(type.is(() => {})).to.equal('function')
  })

  it('type.is(Symbol("a") should to be a "simbol"', function () {
    const simbol = Symbol('abc')
    expect(type.is(simbol)).to.be.a('string')
    expect(type.is(simbol)).to.equal('symbol')
  })
})
