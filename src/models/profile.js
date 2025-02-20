const mongoose=require('mongoose')

const profileSchema=new mongoose.Schema({
    userName:{type:String,required:false},
    nickName:String,
    designation:String,
    phone:String,
    image:String,
    address:String,
    fbLink:String,
    linkedin:String,
    insta:String,
    twitter:String,

})

const profileCode=mongoose.models.profile || mongoose.model('profile',profileSchema)
module.exports=profileCode;