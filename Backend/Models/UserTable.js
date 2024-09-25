const mongoose= require("mongoose");


const Schema= mongoose.Schema({
    UserName:String
});

const Model= mongoose.model("UserModel",Schema);

module.exports= Model;