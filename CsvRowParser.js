var parse = function (line) {
  if (line.indexOf('"') === -1) {
    return line.split(',');
  }

  var running = "";
  var result = [];
  var escapeMode = false;
  for (var i = 0; i < line.length; i++) {
    var current = line.charAt(i);
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

