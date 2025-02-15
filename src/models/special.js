const mongoose=require('mongoose')
const specialSchema=new mongoose.Schema({
    name:String,
    email:String,
    shortTitle:String,
})
const special=mongoose.model('special',specialSchema)
module.exports=special;  