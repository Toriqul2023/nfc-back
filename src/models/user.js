const mongoose=require('mongoose');
const userschema = new mongoose.Schema(
    { name: String,
      metaTitle:String,
      email:String, 
      linkedin:String,

    });

    const userCode=mongoose.models.user ||  mongoose.model('user',userschema);
    module.exports=userCode;