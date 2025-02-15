const regModel=require('../models/regInfo');
exports.postreginfo=async(req,res)=>{
        try{
            const {userName,emails,passwords}=req.body
            const santized=userName.replace(/\s+/g, '_').toLowerCase()
            const reginfo=new regModel({userName:santized,emails,passwords})
            const result=await reginfo.save()
            res.send({result});
        }
        catch(err){
            console.log(err);
        }
}
exports.getreginfo=async(req,res)=>{
        try{
            const {userName}=req.query
            const result = await regModel.find({})
            
            res.json({result});
        }
        catch(err){
            console.log(err);
        }
}
