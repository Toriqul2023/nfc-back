const mongoose=require('mongoose')

const workSchema=new mongoose.Schema({
    sYear:String,
    lYear:String,
    designation:String,
    company:String,

    userName:String,
})

const work=mongoose.model('work',workSchema);
module.exports=work;