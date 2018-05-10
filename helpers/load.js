const DM = require("../db/model").data;

async function func(arr,info){
    for(items of arr){
        var objs = info[items];
        for(obj of objs){
            console.log(obj);
        }
    }
}



DM.findOne({})
.then((d)=>{
    if(!d){
        var info = require("./parsexl");
        var keys = Object.keys(info);

        func(keys,info);

    }
}).catch(console.log);
