const DM = require("../db/model").data;

async function func(arr,info){
    for(items of arr){
        var objs = info[items];
        for(obj of objs){
            var newobj = await DM.create(obj);
        }
    }
}



module.exports = ()=>{

    var info = require("./parsexl");
    var keys = Object.keys(info);

    func(keys,info);

}
