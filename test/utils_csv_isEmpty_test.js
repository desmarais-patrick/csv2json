var csv = require("../utils/csv.js");

function empty() {
  return csv.$isEmpty("") === true;
}

function notEmpty() {
  return csv.$isEmpty("some values,$4.10") === false;
}

function run() {
  var passed = empty() && notEmpty();
  return passed;
}

exports.run = run;
