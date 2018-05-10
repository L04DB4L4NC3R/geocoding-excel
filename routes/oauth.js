const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const secret = require('../secret');

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));


router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    if(req.user){
        req.session.name = req.user.name;
        res.render("main",{name:req.session.name});
    }
    else
        res.send("error");
});

router.get("/logout",(req,res)=>{
    req.session.name = "";
    res.redirect('/');
});


module.exports = router;
