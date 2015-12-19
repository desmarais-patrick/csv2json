var util = require('util');
var CsvRowParser = require("../CsvRowParser");

var isEqual = function (out, expected) {
  if (out.length !== expected.length) {
    return false;
  }

  for (var i = 0; i < out.length; i++) {
    if (out[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

var test = function (what, input, expected) {
  var error = null;
  var output;
  var passed = false;

  try {
    output = CsvRowParser.parse(input);
    passed = isEqual(output, expected); 
  } catch (e) {
    error = e;
  } finally {
    print(what, passed, input, output, expected, error);
  }

  return passed;
};

var print = function (what, passed, input, output, expected, error) {
  if (error) console.log("Error", error);

  passed = passed ? "[PASSED]" : "[FAILED]";
  console.log(passed, what);
  console.log('\tinput   ', input);
  console.log('\toutput  ', output);
  console.log('\texpected', expected);
  console.log();
};

var run = function () {
  var allPassed = test("One value", "abc", ["abc"]) &&
    test("Two values", "abc,def", ["abc", "def"]) &&
    test("One escape value", '"5,74$"', ["5,74$"]) &&
    test("With escaped value", 'abc,def,"5,74$"', ["abc", "def", "5,74$"]) &&
    test("Many escaped values",
      '10,"VISA,Mastercard",Mont-Saint-Hilaire,"(10,000.00)$"',
      ["10", "VISA,Mastercard", "Mont-Saint-Hilaire", "(10,000.00)$"]);
  return allPassed;
};

exports.run = run;

