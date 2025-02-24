const aboutModel=require('../models/about');
exports.postabout=async(req,res)=>{
        try{
            const {uid,title,shortTitle,userName}=req.body
            const santized=userName.replace(/\s+/g, '_').toLowerCase()
            const find=await aboutModel.findOne({uid})
            if(find){
                return res.send({count:1});
            }
            else{
                const About=new aboutModel({title,shortTitle,userName:santized})
                const result=await About.save()
                res.send({result});
            }
            
        }
        catch(err){
            console.log(err);
        }
}
exports.updateabout=async(req,res)=>{
    const {username}=req.query
    const santized=username.replace(/\s+/g, '_').toLowerCase()
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
            const {username}=req.query
            const santized=username? username.replace(/\s+/g, '_').toLowerCase():''
            console.log(username)
            const result = await aboutModel.find({userName:santized})
            
            res.send({result});
        }
        catch(err){
            console.log(err);
        }
}
