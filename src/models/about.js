const mongoose=require('mongoose');


const aboutSchema=new mongoose.Schema({
    title:String,
    shortTitle:String,
    userName:String,
})
const aboutCode=mongoose.models.about || mongoose.model('about',aboutSchema);
module.exports=aboutCode;