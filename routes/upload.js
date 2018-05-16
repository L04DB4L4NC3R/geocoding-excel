const router = require("express").Router();
const multer = require("multer");
const load = require("../helpers/load");
const fs = require("fs");
const data = require("../db/model").data;

var upload = multer({dest:"./uploads"})



router.post("/upload",upload.single("file"),async (req,res,next)=>{
    fs.rename(req.file.path,"uploads/"+"example.xlsx",async function(){

      await load();
      fs.unlink(__dirname.split("routes")[0]+"uploads/example.xlsx",()=>{
        data.find({})
        .then((d)=>{
          console.log(d);
            var x={};
            x.arr = [], x.other=[];
            for(i in d){
                x.arr[i] = d[i];
            }
            res.send(x);
        }).catch(console.log);
      });



    });

});

module.exports = router;
