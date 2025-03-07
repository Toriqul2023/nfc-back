const RegModel=require('../models/regInfo')
exports.postLogin=async(req,res)=>{
    try{
     const {emails}=req.body
     const result=await RegModel.findOne({emails})
     res.send("ama")
     console.log("amamm")
    }
    catch(err){
        console.log(err);
    }
}