const introModel=require('../models/intro');
exports.postintro=async(req,res)=>{
        try{
            const {uid,
                heading, metaInfo, experience, projects,}=req.body
         
            const find=await introModel.findOne({uid})
            if(find){
                return res.send({count:1});
            }
            else{
                const intro=new introModel({uid,
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
    const {uid}=req.query
    
    const { heading,
        metaInfo,
        experience,
        projects}=req.body
    const filter={uid}
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
            const {uid}=req.query
         
           
            const result = await introModel.find({uid})
            
            res.send({result});
        }
        catch(err){
            console.log(err);
        }
}
