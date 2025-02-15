const mongoose=require('mongoose');

const regInfoSchema=new mongoose.Schema({
        userName:String,
        emails:String,
        passwords:String,
})
const regInfoCode=mongoose.models.regInfo || mongoose.model('regInfo',regInfoSchema)
module.exports=regInfoCode