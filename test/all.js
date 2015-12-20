var csvutils = require("./csvutils_test");

var passed;

console.log("csvutils START");
console.log();
passed = csvutils.run();
console.log();
console.log("csvutils END  ", passed ? "[ALL PASSED]" : "[FAILED]");

