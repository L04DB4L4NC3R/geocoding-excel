const router = require("express").Router();
const multer = require("multer");
const load = require("../helpers/load");
const fs = require("fs");
const data = require("../db/model").data;

var upload = multer({dest:"./uploads"})



router.post("/upload",upload.single("file"),async (req,res,next)=>{
    await fs.rename(req.file.path,"uploads/"+"example.xlsx");
    await load();
    await fs.unlink(__dirname.split("routes")[0]+"uploads/example.xlsx");

    data.find({})
    .then((d)=>{
        var arr = [];
        for(i in d){
            arr[i] = d[i].Account;
        }
        res.send(arr);
    }).catch(console.log);
});

module.exports = router;
