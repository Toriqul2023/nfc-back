const mongoose=require('mongoose');


const aboutSchema=new mongoose.Schema({
    uid:String,
    title:String,
    shortTitle:String,
    
})
const aboutCode=mongoose.models.about || mongoose.model('about',aboutSchema);
module.exports=aboutCode;