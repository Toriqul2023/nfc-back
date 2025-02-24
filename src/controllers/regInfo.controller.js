const regModel=require('../models/regInfo');
exports.postreginfo=async(req,res)=>{
        try{
            const {uid,emails,passwords}=req.body
         
            const find=await regModel.find({uid})
            if(find.length>0){ 
               return res.send({count:1})
            }
            else{
                const reginfo=new regModel({uid,emails,passwords})
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
            const {uid}=req.query
            const result = await regModel.find({uid})
            console.log(result.length)
            res.json({result});
        }
        catch(err){
            console.log(err);
        }
}
exports.idwise=async(req,res)=>{
    try{
        const {id}=req.params
        const result=await regModel.find({_id:id})
        res.send({result});
    }
    catch(err){

    }
}
