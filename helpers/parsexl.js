const parsexl = require("convert-excel-to-json");

var result = parsexl({
    sourceFile:__dirname.split("helpers")[0]+"uploads/example.xlsx",
    columnToKey:{
        A:'Equipment',
        B:'OEM',
        C:'Serial',
        D:'Account',
        E:'MW',
        F:'Mode'
  },
  header:{
      rows: 1
  }
});
module.exports = result;
//console.log(JSON.parse(result));
