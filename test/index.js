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
      expect(type.isArray({})).to.be.false;

  })
  it('type.isArray([]) should to be a true', function () {
      expect(type.isArray([])).to.be.true;
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
      expect(type.isObject([])).to.be.false;

  })
  it('type.isObject({}) should to be a true', function () {
      expect(type.isObject({})).to.be.true;
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
      expect(type.isDate([])).to.be.false;

  })
  it('type.isDate(new Date()) should to be a true', function () {
      expect(type.isDate(new Date())).to.be.true;
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
      expect(type.isRegExp([])).to.be.false;

  })
  it('type.isRegExp(new RegExp()) should to be a true', function () {
      expect(type.isRegExp(new RegExp())).to.be.true;
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
      expect(type.isNaN([])).to.be.false;

  })
  it('type.isNaN(NaN) should to be a true', function () {
      expect(type.isNaN(NaN)).to.be.true;
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
      expect(type.isUndefined([])).to.be.false;

  })
  it('type.isUndefined(undefined) should to be a true', function () {
      expect(type.isUndefined(undefined)).to.be.true;
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
      expect(type.isString([])).to.be.false;

  })
  it('type.isString("abc") should to be a true', function () {
      expect(type.isString('abc')).to.be.true;
  })
})
