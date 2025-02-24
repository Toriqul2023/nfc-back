const mongoose=require('mongoose')

const workSchema=new mongoose.Schema({
    uid:String,
    sYear:String,
    lYear:String,
    designation:String,
    company:String,

   
})

const work=mongoose.model('work',workSchema);
module.exports=work;