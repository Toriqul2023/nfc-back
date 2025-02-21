const regModel=require('../models/regInfo');
exports.postreginfo=async(req,res)=>{
        try{
            const {userName,emails,passwords}=req.body
            const santized=userName.replace(/\s+/g, '_').toLowerCase()
            const find=await regModel.find({userName:santized})
            if(find.length>0){
               return res.send({count:1})
            }
            else{
                const reginfo=new regModel({userName:santized,emails,passwords})
                const result=await reginfo.save()
                res.send({result});
            }
            
        }
        catch(err){
            console.log(err);
        }
}
exports.getreginfo=async(req,res)=>{
        try{
            const {username}=req.query
            const result = await regModel.find({userName:username})
            console.log(result.length)
            res.json({result});
        }
        catch(err){
            console.log(err);
        }
}
