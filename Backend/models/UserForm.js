const mongoose = require('mongoose');
const bcrypt=require('bcrypt')

const formSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: [true,"firstname is required"]
    } ,
    middleName:{
        type: String,
        required: [true," middlename is required"]
    },
    lastName:{
        type: String,
        required: [true,"lastname is required"]
    } ,
    phoneNumber:{
        type:Number,
        required:[true,"phone number is required"]

    } ,
     email:{
        type:String,
        required:[true,"email is required"]

    } ,
    permanentAddress:{
        type: String,
        required: [true,"permanent address is required"]
    } ,
    currentAddress:{
        type:String,
        required:[true,"current address is required"]
    } ,
    aadarNumber:{
        type:Number,
        required:[true,"aadar number is required"]
    } ,
    gender:{
    type:String,
    requireg:true
}
});

formSchema .pre ("save",function(next){
if(!this.currentAddress||this.currentAddress.trim().length===0){
    this.currentAddress=this.permanentAddress;
}
next();
});


module.exports=mongoose.model("User",formSchema);