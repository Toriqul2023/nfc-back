const ProjectModel=require('../models/project')
exports.postproject=async(req,res)=>{
    try{
      
        const {uid,title,description,link}=req.body
        
        const Project=new ProjectModel({uid,title,description,link})
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
        const {uid}=req.query
        
        const result=await ProjectModel.find({uid})
        res.send({result});
    }
    catch(err){
        console.log(err)
    }
}
