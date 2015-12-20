var assert = require('assert');
var file = require('./file');

var USAGE =
"Error extracting arguments. Expected:\n" +
"\t" + "<program> <script> <arg1> <arg2>\n\n" +
"\t" + "<program> = node | npm\n";
"\t" + "<script>  = file.js | start\n";
"\t" + "<arg1>    = input  filename, e.g. example.csv\n";
"\t" + "<arg2>    = output filename, e.g. out.json\n";

var extract = function (args, callback) {
  assert(
    typeof args === 'object',
    "argument 'args' should be an object/array."
  );

  if (args.length !== 4) {
    return USAGE;
  }

  var inputFile = file.resolvePath(args[2]);
  var outputFile = file.resolvePath(args[3]);
  return [inputFile, outputFile];
};

exports.extract = extract;

