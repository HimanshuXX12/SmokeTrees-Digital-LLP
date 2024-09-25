const mongoose= require("mongoose");


const Schema= mongoose.Schema({
    Address:String
});

const Model= mongoose.model("AddressModel",Schema);

module.exports= Model;