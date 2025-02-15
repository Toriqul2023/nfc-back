const introModel=require('../models/intro');
exports.postintro=async(req,res)=>{
        try{
            const {userName,
                heading, metaInfo, experience, projects,}=req.body
            const santized=userName.replace(/\s+/g, '_').toLowerCase()
            const find=await introModel.findOne({userName:santized})
            if(find.length>0){
                return res.send({count:1});
            }
            else{
                const intro=new introModel({userName:santized,
                    heading, metaInfo, experience, projects,})
                const result=await intro.save()
                res.send({result});
            }
            
        }
        catch(err){
            console.log(err);
        }
}
exports.updateintro=async(req,res)=>{
    const {username}=req.query
    const santized=username.replace(/\s+/g, '_').toLowerCase()
    const { heading,
        metaInfo,
        experience,
        projects}=req.body
    const filter={userName:santized}
    const options = { upsert: true };
    const updateDoc = {
        $set: {
            heading,
            metaInfo,
            experience,
            projects,
        },
      };
      const result=await introModel.updateOne(filter,updateDoc,options)
      res.send({result});

}
exports.getintro=async(req,res)=>{
        try{
            const {username}=req.query
            const santized=username.replace(/\s+/g, '_').toLowerCase()
            console.log(username)
            const result = await introModel.find({userName:santized})
            
            res.send({result});
        }
        catch(err){
            console.log(err);
        }
}
