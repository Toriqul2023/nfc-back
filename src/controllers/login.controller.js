const regModel=require('../models/regInfo')
exports.getLogin=async(req,res)=>{
    try{
     const {email}=req.query
     const find=await regModel.find({email})
     res.send({result})
    }
    catch(err){
        clg(err);
    }
}