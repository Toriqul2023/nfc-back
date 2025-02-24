const workModel=require('../models/work')

exports.postwork=async(req,res)=>{
    const{uid,sYear,lYear,designation,company}=req.body;
   
    const Work=new workModel({uid,sYear,lYear,designation,company})
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
       const {uid}=req.query
       const result=await workModel.find({uid})
       res.send({result});
    }
    catch(err){
        console.log(err)
    }
}