// Get filename from command-line argument.
var infile = process.argv[2];

var path = require('path');
var infile_abspath = path.resolve(__dirname, infile);

// Read contents
var fs = require('fs');

fs.readFile(infile_abspath, 'utf8', readFileCallback);

function readFileCallback(err, data) {
  if (err) {
    console.log("Reading file '" + infile_abspath + "' failed, err:", err);
    process.exit(1);
    return;
  }

  parseCsvLines(data);
}

// Parse contents
var headersParsed = false;
var template = [];
var rest = "";
var collection = [];

function parseCsvLines(raw) {
  raw += rest;

  raw = raw.replace(/(?:\r\n|\r)/g, "\n");
  var lines = raw.split("\n");
  if (!headersParsed) {
    parseCsvHeader(lines.shift());
    headersParsed = true;
  }

  while(lines.length > 1) {
    var l = lines.shift();
    if (l.length === 0) continue;
    collection.push(parseCsvRow(l));
  }

  writeOutputFile();
}

var csvutils = require('./csvutils');

function parseCsvHeader(line) {
  var headerNames = csvutils.parseRow(line);
  headerNames.forEach(function (name) {
    template.push({name: name, val: null});
  });
}

function parseCsvRow(line) {
  var values = csvutils.parseRow(line);
  var obj = {};
  values.forEach(function (val, index) {
    var propertyName = template[index].name;
    obj[propertyName] = val;
  });
  return obj;
}

// Write output file.
var arg2 = process.argv[3]; 
var output_file = path.resolve(__dirname, arg2);

function writeOutputFile() {
  var str = JSON.stringify(collection, null, 2); 
  fs.writeFile(output_file, str, function (err) {
    if (err) {
      console.log("Error while writing output JSON file '" + output_file + 
      "'", err);
      return;
    }
    console.log("Written", output_file);
  });
}

