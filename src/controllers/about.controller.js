const aboutModel=require('../models/about');
exports.postabout=async(req,res)=>{
        try{
            const {uid,title,shortTitle}=req.body
           
            const find=await aboutModel.findOne({uid})
            if(find){
                return res.send({count:1});
            }
            else{
                const About=new aboutModel({title,shortTitle})
                const result=await About.save()
                res.send({result});
            }
            
        }
        catch(err){
            console.log(err);
        }
}
exports.updateabout=async(req,res)=>{
    const {uid}=req.query
    
    const {title,shortTitle}=req.body
    const filter={userName:santized}
    const options = { upsert: true };
    const updateDoc = {
        $set: {
          title,shortTitle
        },
      };
      const result=await aboutModel.updateOne(filter,updateDoc,options)
      res.send({result});

}
exports.getabout=async(req,res)=>{
        try{
            const {uid}=req.query
           
            
            const result = await aboutModel.find({uid})
            
            res.send({result});
        }
        catch(err){
            console.log(err);
        }
}
