var CsvRowParserTest = require("./CsvRowParserTest");

var passed;

console.log("CsvRowParserTest START");
console.log();
passed = CsvRowParserTest.run();
console.log();
console.log("CsvRowParserTest END  ", passed ? "[ALL PASSED]" : "[FAILED]");

