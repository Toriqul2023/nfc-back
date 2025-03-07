const regModel=require('../models/regInfo')
exports.postLogin=async(req,res)=>{
    try{
     const {emails}=req.body
     const result=await regModel.findOne({emails})
     res.send({result})
    }
    catch(err){
        console.log(err);
    }
}