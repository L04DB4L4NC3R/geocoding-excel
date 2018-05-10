const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:String,
    passwd:String,
});


const s = new mongoose.Schema({
    Equipment:String,
    OEM: String,
    Serial:String,
    Account: String,
    MW: String,
    Mode: String
});

const model = mongoose.model("user",schema);
const data = mongoose.model("data",s);

module.exports.users = model;
module.exports.data = data;
