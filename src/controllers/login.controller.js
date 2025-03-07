const regModel=require('../models/regInfo')
exports.getLogin=async(req,res)=>{
    try{
     const {emails}=req.query
     const result=await regModel.findOne({emails})
     res.send({result})
    }
    catch(err){
        console.log(err);
    }
}