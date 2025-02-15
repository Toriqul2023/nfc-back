const workModel=require('../models/work')

exports.postwork=async(req,res)=>{
    const{sYear,lYear,designation,company,userName}=req.body;
    const santized=userName.replace(/\s+/g, '_').toLowerCase()
    const Work=new workModel({sYear,lYear,designation,company,userName:santized})
    const result=await Work.save();

    res.send(result);
}
exports.updatework=async(req,res)=>{
    const {id}=req.params
    const query={_id:id}
    const {sYear,lYear,designation,company}=req.body
    const updateDoc = {
        $set: {
            sYear,lYear,designation,company
        },
      };
    
      const options = { upsert: true };

      const result=await workModel.findByIdAndUpdate(query,req.body,options)
      res.send({result});
}
exports.getwork=async(req,res)=>{
    try{
       const {username}=req.query
       const result=await workModel.find({userName:username})
       res.send({result});
    }
    catch(err){
        console.log(err)
    }
}