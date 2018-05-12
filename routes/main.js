const router = require("express").Router();
const users = require("../db/model").users;
const jwt = require("jsonwebtoken");
const hash = require("../helpers/hash").hash;
const compare = require("../helpers/hash").compare;
const secret = require("../secret");
const data = require("../db/model").data;

router.get("/",(req,res)=>{
    res.render("index")
    //res.json({message:"welcome"});
});



router.post("/", async (req,res)=>{

    var user = await users.findOne({name:req.body.name});

    //signup
    if(req.body.confirm){

            if(user){
                res.json({message:"user already exists"});
            }

            else{
                hash(req.body.passwd)
                .then((h)=>{

                    var obj = new users({
                        name:req.body.name,
                        passwd:h,
                    });

                    obj.save()
                    .then((o)=>{
                        req.session.name = o.name;

                        data.find({})
                        .then((d)=>{
                            var arr = [];
                            for(i in d){
                                arr[i] = d[i].Account;
                            }
                            res.render("main",{name:req.session.name,info:arr});
                        }).catch(console.log);
                    })
                    .catch(console.log);

                }).catch(console.log);


            }

        }

        //login
        else{
                compare(req.body.passwd,user.passwd)
                .then((bool)=>{
                    if(user && bool )
                        {
                            req.session.name = user.name;
                            data.find({})
                            .then((d)=>{
                                var arr = [];
                                for(i in d){
                                    arr[i] = d[i].Account;
                                }
                                res.render("main",{name:req.session.name,info:arr});
                            }).catch(console.log);
                        }
                    else
                        res.json({message:"name or password entered is wrong, please try again"});
                }).catch(console.log);

        }
    });




module.exports = router;
