const regModel=require('../models/regInfo')
exports.postlogin=async(req,res)=>{
    try{
       const {emails}=req.body
       const result=await regModel.find({emails})
       res.send({result})
    }
    catch(err){

    }
}