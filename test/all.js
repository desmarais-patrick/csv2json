var utils_csv_isEmpty = require("./utils_csv_isEmpty_test");
var utils_csv_parseRow = require("./utils_csv_parseRow_test");

var passed;
var p = console.log;

p("START");
p();
p("# utils.csv.isEmpty");
p();
passed = utils_csv_isEmpty.run();
p(passed ? "[ALL PASSED]" : "[FAILED]");
p();
p("# utils.csv.parseRow");
p();
passed = utils_csv_parseRow.run();
p(passed ? "[ALL PASSED]" : "[FAILED]");
p();
p("END");
p();

