const DM = require("../db/model").data;

async function func(arr,info){
    for(items of arr){
        var objs = info[items];
        for(obj of objs){
            var newobj = await DM.create(obj);
            console.log(newobj);
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
    else {
        console.log("Database is already populated");
    }
}).catch(console.log);
