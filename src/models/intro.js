const mongoose=require('mongoose')
const introSchema=new mongoose.Schema({
    uid:String,
    userName:String,
    heading:String,
    metaInfo:String,
    experience:String,
    projects:String,
})
const introCode=mongoose.models.intro || mongoose.model('intro',introSchema);
module.exports=introCode;