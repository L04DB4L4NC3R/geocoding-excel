const parsexl = require("convert-excel-to-json");

var result = parsexl({
    sourceFile:__dirname+"/example.xlsx",
    columnToKey:{
      A: 'Equipment: SFDC Unit ID',
      B: 'OEM',
      C: 'Serial Number',
      D: 'Account Name',
      E: 'MW',
      F: 'Application Mode'
  },
  header:{
      rows: 1
  }
});
console.log(result);
module.exports = result;
//console.log(JSON.parse(result));
