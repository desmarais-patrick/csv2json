var parse = function (input) {
  var result = [];

  var rows = splitIntoRows(input);
  if (rows.length === 0) {
    throw new Error("No rows found in input.");
  }

  var headers = parseRow(rows.shift());
  var row, values, obj;
  while(rows.length > 0) {
    row = rows.shift();

    if (isEmpty(row)) continue;

    values = parseRow(row);
    obj = makeObj(headers, values);
    result.push(obj);
  }

  return result;
};

function splitIntoRows(input) {
  return input.split(/(?:\r\n|\r|\n)/);
}

function isEmpty(row) {
  return row.length === 0;
}

function makeObj(headers, values) {
  var obj = {};
  for (var i = 0; i < headers.length && i < values.length; i++) {
    obj[headers[i]] = values[i];
  }
  return obj;
}

function parseRow(row) {
  if (row.indexOf('"') === -1) {
    return row.split(',');
  }

  var running = "";
  var result = [];
  var escapeMode = false;
  for (var i = 0; i < row.length; i++) {
    var current = row.charAt(i);
    if (current === '"') {
      escapeMode = !escapeMode;
      continue;
    }
    if (current === ',' && !escapeMode) {
      result.push(running);
      running = "";
      continue;
    }
    running += current;
  }
  result.push(running);

  return result;
};

exports.parse = parse;
exports.$isEmpty = isEmpty;
exports.$makeObj = makeObj;
exports.$parseRow = parseRow;

