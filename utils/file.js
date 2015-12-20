var assert = require('assert');
var fs = require('fs');
var path = require('path');

exports.read = function (file) {
  assert(typeof file === 'string', "argument 'file' is not a string");
  
  return fs.readFileSync(file, 'utf8');
};

exports.resolvePath = function (arg) {
  assert(typeof arg === 'string', "argument 'arg' is not a string");

  return path.resolve(__dirname, "..", arg);
};

exports.write = function (file, contents) {
  assert(typeof contents === 'string', "argument 'contents' is not a string");
  assert(typeof file === 'string', "argument 'file' is not a string");

  fs.writeFileSync(file, contents);
};

