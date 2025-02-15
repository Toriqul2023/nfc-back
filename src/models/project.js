const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema({
    userName:String,
    title:String,
    description:String,
    link:String,
})

const projectCode=mongoose.models.project || mongoose.model('project',projectSchema)
module.exports=projectCode