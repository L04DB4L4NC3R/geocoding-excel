const DM = require("../db/model").data;

DM.findOne({})
.then((d)=>{
    //console.log(d);
    if(!d){
        var info = require("./parsexl");
        console.log(info.Sheet1.length);
    }
}).catch(console.log);
