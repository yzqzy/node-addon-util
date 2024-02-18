const { hello } = require('bindings')('hello')
const callback = require('bindings')('callback')
const math = require('bindings')('math')
const addon = require('bindings')('addon')
const object = require('bindings')('object')
const fn = require('bindings')('function')

exports.hello = hello
exports.math = math
exports.callback = callback
exports.addon = addon
exports.crateObject = object
exports.createFunction = fn
