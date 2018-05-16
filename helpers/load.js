const DM = require("../db/model").data;

async function func(arr,info){
    for(items of arr){
        var objs = info[items];
        for(obj of objs){

          var dd = await DM.findOne({Address:obj.Address});

            if(!dd){
              await DM.create(obj);
            }
            else
              console.log("Obj already exists");

        }
    }
}



module.exports = ()=>{

    var info = require("./parsexl");
    var keys = Object.keys(info);

    func(keys,info);

}
