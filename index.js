var arg = require('./utils/arg.js');
var csv = require('./utils/csv.js');
var file = require('./utils/file.js');

var args = arg.extract(process.argv);

var inputFilePath = args[0];
var contents = file.read(args[0]);
var collection = csv.parse(contents);
var outputFilePath = args[1];
contents = JSON.stringify(collection, null, 2);
file.write(outputFilePath, contents);

process.exit(0);
