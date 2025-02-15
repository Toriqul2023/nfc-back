const ProjectModel=require('../models/project')
exports.postproject=async(req,res)=>{
    try{
      
        const {userName,title,description,link}=req.body
        const santized=userName.replace(/\s+/g, '_')
        const Project=new ProjectModel({userName:santized,title,description,link})
        const result=await Project.save()
        res.send({result})
    }
    catch(err){
        console.log(err)
    }
    
    
}
exports.updateproject=async(req,res)=>{
    try{
        const {id}=req.params
        const query={_id:id}
        const {title,description,link}=req.body
        const updateDoc = {
            $set: {
                title,description,link
            },
          };
        
          const options = { upsert: true };
    
          const result=await ProjectModel.findByIdAndUpdate(query,req.body,options)
          res.send({result});
            
    }catch(err){
        console.log(err)
    }
}

exports.getproject=async(req,res)=>{
    try{
        const {username}=req.query
        const santized=username.replace(/\s+/g, '_')
        const result=await ProjectModel.find({userName:santized})
        res.send({result});
    }
    catch(err){
        console.log(err)
    }
}
