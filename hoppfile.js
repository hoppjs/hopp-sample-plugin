/**
 * @file hoppfile.js
 * @description Build information.
 * @license MIT
 */

const hopp = require('hopp')

exports.default =
  hopp([ 'lib/**/*.js' ])
    .babel()
    .dest('dist')

exports.watch =
  hopp.watch([
    'default'
  ])
